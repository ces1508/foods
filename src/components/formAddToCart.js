import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native'
import Theme from '../Theme'
import Quantity from 'react-native-numeric-input'
import { connect } from 'react-redux'
import { hideModal } from '../ducks/modal'
import { addProductToCart } from '../ducks/shoppingCart'
import ProductOptions from './productOptions'
import ProductBreads from './productBreads'

const mapStateToProps = state => ({
  currentProduct: state.products.productToAdd
})

const mapDispatchToProps = {
  hideModal,
  addProductToCart
}

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addFeatures: false,
      quantity: 1,
      optionsSelected: [],
      options: [
        { name: 'agregar carne', price: 3000, id: '1' },
        { name: 'cambio de pan por platano', price: 2000, id: '2' },
        { name: 'adiccion de queso', price: 3000, id: '3' }
      ],
      bread: this.props.currentProduct.breads.length > 0 ? this.props.currentProduct.breads[0] : ''
    }
    this._handeChange = this._handeChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
    this._renderOptions = this._renderOptions.bind(this)
    this._onChangeOptions = this._onChangeOptions.bind(this)
    this.renderBreads = this.renderBreads.bind(this)
  }
  _handeChange (val) {
    this.setState({
      quantity: parseInt(val)
    })
  }
  _onChangeOptions (value) {
    this.setState({ optionsSelected: value })
  }
  _handleSubmit () {
    let { quantity, optionsSelected, bread } = this.state
    let { addProductToCart, hideModal, currentProduct } = this.props
    let product = { ...currentProduct, quantity, bread, optionsSelected }
    addProductToCart(product)
    hideModal()
  }
  _renderOptions () {
    let { addFeatures, options } = this.state
    return <ProductOptions
      onCancel={() => this.setState({ addFeatures: false })}
      show={addFeatures}
      options={options}
      onAgree={this._onChangeOptions} />
  }
  renderBreads () {
    if (this.props.currentProduct.breads.length > 0) {
      return (
        <View>
          <Text style={styles.title}>Selecciona el pan que gustes: </Text>
          <ProductBreads
            onPress={bread => this.setState({ bread })}
            bread={this.state.bread}
            breads={this.props.currentProduct.breads}
          />
        </View>
      )
    }
  }
  render () {
    let { quantity } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ¿Cuantos deseas?
        </Text>
        <View style={styles.quantity}>
          <Quantity step={1} value={quantity} onChange={this._handeChange} />
        </View>
        {this.renderBreads()}
        <Text style={styles.title} onPress={() => this.setState({ addFeatures: true })}>La quiero con :</Text>
        <View style={styles.containerAdds}>
          {this.state.optionsSelected.map(op => <Text key={op.id}>{op.name}</Text>)}
        </View>
        <Text style={styles.title}>La quiero sin </Text>
        <View style={styles.containerAdds}>
          {this.state.optionsSelected.map(op => <Text key={op.id}>{op.name}</Text>)}
        </View>
        {this._renderOptions()}
        <TouchableOpacity onPress={this._handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(() => mapStateToProps, mapDispatchToProps)(Form)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    width: '90%',
    textAlign: 'center'
  },
  title: {
    fontSize: 25,
    color: Theme.colors.title,
    marginBottom: 15,
    textAlign: 'center'
  },
  containerAdds: {
    paddingLeft: 15
  },
  quantity: {
    alignSelf: 'center',
    textAlign: 'center'
  },
  button: {
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: Theme.colors.maingBgColor
  },
  buttonText: {
    color: Theme.colors.secondary
  }
})
