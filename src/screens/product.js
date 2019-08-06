/*
  Todo
   1 split screen in small components
   2 create component to handle total price
   3 change to pure component
   4 change style of notification
   5 create a component to haandle buttons
*/

import React, { Component } from 'react'
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native'
import numeral from 'numeral'
import Numeric from 'react-native-numeric-input'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Theme from '../Theme'
import { addProductToCart } from '../ducks/shoppingCart'
import { connect } from 'react-redux'
import { showMessage } from 'react-native-flash-message'
import { Header } from 'react-navigation'
import uuid from 'uuid/v1'

const mapDispathToProps = { addProductToCart }

class Product extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: new Map(),
      quantity: 1,
      product: {},
      sections: [],
      bread: ''
    }
    this.renderHeaderList = this.renderHeaderList.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.calculatePrice = this.calculatePrice.bind(this)
    this.handleBread = this.handleBread.bind(this)
    this.addToShoppingCart = this.addToShoppingCart.bind(this)
    this.scroll = new Animated.Value(0)
  }
  componentWillMount () {
    let product = this.props.navigation.getParam('product')
    let sections = []
    if (product.breads.length > 0) {
      sections.push({ title: 'Selecciona un pan', data: product.breads })
      this.setState({ bread: product.breads[0] })
    }
    if (product.additionals.length > 0) sections.push({ title: 'Agrega lo que tu quieras', data: product.additionals })
    if (product.without.length > 0) sections.push({ title: 'La quiero sin', data: product.without })
    this.setState({
      product,
      sections
    })
  }
  handleSelect (item) {
    let { selected } = this.state
    if (selected.has(item.id)) {
      selected.delete(item.id)
    } else {
      selected.set(item.id, item)
    }
    this.setState({ selected })
  }
  handleBread (bread) {
    this.setState({ bread })
  }
  renderItem ({ item }) {
    let { selected, bread } = this.state
    let isChecked = selected.has(item.id) || bread === item
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => item.type !== 'bread' ? this.handleSelect(item) : this.handleBread(item)}
        style={styles.item}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={[
            styles.iconCheckContainer,
            isChecked ? styles.itemChecked : null]}>
            {isChecked ? <Icon name='check' size={15} color='#fff' /> : null}
          </View>
          <Text style={styles.itemTitle}>{item.name}</Text>
        </View>
        <Text>{numeral(item.price).format('$0,0')}</Text>
      </TouchableOpacity>
    )
  }
  renderSectionHeader ({ section }) {
    return (
      <Text style={styles.sectionTitle}>{section.title}</Text>
    )
  }
  renderHeaderList () {
    let { product } = this.state
    if (Object.keys(product).length > 0) {
      return (
        <View>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
      )
    }
    return null
  }
  calculatePrice () {
    let product = this.props.navigation.getParam('product')
    let { selected } = this.state
    let price = [...selected.values()].reduce((prev, current) => {
      return prev + current.price
    }, 0)
    if (this.state.bread) {
      return price + product.price + this.state.bread.price
    }
    return price + product.price
  }

  addToShoppingCart () {
    let { product, selected, bread, quantity } = this.state
    let listOfSelected = [...selected.values()]
    this.props.addProductToCart({
      id: uuid(),
      name: product.name,
      description: product.description,
      image: product.image,
      bread,
      quantity,
      price: product.price,
      removes: listOfSelected.filter(item => item.type === 'remove'),
      additionals: listOfSelected.filter(item => item.type === 'add')
    })
    let message = {
      type: 'default',
      backgroundColor: Theme.colors.maingBgColor,
      color: Theme.colors.white,
      hideStatusBar: true,
      message: `Se ha agregado ${product.name} x ${quantity} al carro de compras`
    }
    showMessage(message)
  }
  header () {
    let { navigation } = this.props
    let product = navigation.getParam('product')
    const animation = this.scroll.interpolate({
      inputRange: [0, 150],
      outputRange: ['transparent', '#000'],
      extrapolate: 'clamp'
    })
    return (
      <Animated.View style={[styles.bar, { backgroundColor: animation }]}>
        <Icon style={styles.barIcon} name='arrow-left' size={30} onPress={() => navigation.goBack()} />
        <Text style={styles.barTitle}>{product.name}</Text>
      </Animated.View>
    )
  }
  render () {
    let { sections } = this.state
    return (
      <View style={styles.container}>
        {this.header()}
        <SectionList
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: { y: this.scroll }
              }
            }]
          )}
          ListHeaderComponent={this.renderHeaderList}
          keyExtractor={item => item.id}
          sections={sections}
          renderItem={this.renderItem}
          style={styles.list}
          renderSectionHeader={this.renderSectionHeader}
        />
        <View style={styles.actionContainer}>
          <Numeric
            value={this.state.quantity}
            minValue={1}
            onChange={value => this.setState({ quantity: value })} />
          <Text>{numeral(this.calculatePrice() * this.state.quantity).format('$0,0')}</Text>
          <Text onPress={this.addToShoppingCart} style={styles.buttonAdd}>Agregar al carro</Text>
        </View>
      </View>
    )
  }
}

export default connect(() => ({}), mapDispathToProps)(Product)

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: Header.HEIGHT,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0
  },
  barIcon: {
    paddingHorizontal: 8,
    marginRight: 8,
    color: '#fff'
  },
  barTitle: {
    fontSize: 18,
    flex: 1,
    color: '#fff'
  },
  container: {
    flex: 1
  },
  image: {
    height: 200,
    width: '100%'
  },
  name: {
    fontSize: 18,
    color: '#fff'
  },
  sectionTitle: {
    padding: 10,
    flex: 1,
    backgroundColor: '#d4d4d4',
    color: '#000'
  },
  list: {
    flex: 1
  },
  item: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: Theme.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
    alignItems: 'center',
    borderTopColor: '#d8d8d8',
    borderTopWidth: 1
  },
  iconCheckContainer: {
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: '#d8d8d8',
    borderWidth: 1,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemChecked: {
    borderColor: '#01DF3A',
    backgroundColor: '#01DF3A'
  },
  itemTitle: {
    marginHorizontal: 8,
    flex: 1
  },
  actionContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Theme.colors.maingBgColor,
    borderWidth: 1
  },
  buttonAdd: {
    padding: 12,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Theme.colors.secondary,
    color: Theme.colors.maingBgColor,
    fontWeight: 'bold',
    backgroundColor: Theme.colors.secondary
  }
})
