import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ProductOptions extends Component {
  constructor (props) {
    super(props)
    this._addToProduct = this._addToProduct.bind(this)
    this._renderItem = this._renderItem.bind(this)
    this.add = this.add.bind(this)
    this.state = { selected: new Map() }
  }
  _addToProduct (item) {
    this.setState(state => {
      const selected = new Map(state.selected)
      if (selected.get(item.id)) {
        selected.delete(item.id)
      } else {
        selected.set(item.id, item)
      }
      return { selected }
    })
  }
  add () {
    let { selected } = this.state
    if (selected.size > 0) {
      this.props.onAgree([...selected].map(pairs => pairs[1]))
    }
    this.props.onCancel()
  }
  _renderItem ({ item }) {
    return (
      <TouchableOpacity
        onPress={() => this._addToProduct(item)}
        style={styles.addition}>
        {this.state.selected.get(item.id) ? <Icons name='check' size={30} color='green' /> : null}
        <View style={{ marginRight: 10 }}>
          <Text style={[{ textAlign: 'center' }, styles.text]}>{item.name}</Text>
          <Text style={styles.text}>valor: ${item.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render () {
    return (
      <Modal isVisible={this.props.show}>
        <Icons name='close' size={30} style={{ alignSelf: 'flex-end', color: '#fff' }} />
        <View style={{ marginVertical: 10, backgroundColor: '#fff', padding: 15, borderRadius: 5, margin: 15 }}>
          <FlatList
            style={{ flexGrow: 0, paddingVertical: 10 }}
            data={this.props.options}
            extraData={this.state}
            keyExtractor={item => item.id.toString()}
            renderItem={this._renderItem}
          />
          <View style={styles.containerActions}>
            <Text onPress={this.props.onCancel} style={styles.button}>Cancelar</Text>
            <Text onPress={() => this.add()} style={styles.button}>Agregar</Text>
          </View>
        </View>
      </Modal>
    )
  }
}

ProductOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  containerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#fff',
    fontFamily: 'UNIVERSAL-SANS-PERSONAL-USE'
  },  
  addition: {
    flexDirection: 'row',
    padding: 10,
    marginRight: 5,
    flex: 1,
    alignItems: 'center'
  },
  additionInformation: {

  },
  button: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: 'UNIVERSAL-SANS-PERSONAL-USE'
  }
})
