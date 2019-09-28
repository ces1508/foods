import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform
} from 'react-native'
import Theme from '../Theme'
import Quantity from 'react-native-numeric-input'
import { connect } from 'react-redux'
import { hideModal } from '../ducks/modal'
import { addProductToCart } from '../ducks/shoppingCart'

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
      quantity: 1
    }
    this._handeChange = this._handeChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  _handeChange (val) {
    this.setState({
      quantity: parseInt(val)
    })
  }
  _handleSubmit () {
    let { quantity } = this.state
    let { addProductToCart, hideModal, currentProduct } = this.props
    let product = { ...currentProduct, quantity }
    addProductToCart(product)
    hideModal()
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
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'UNIVERSAL SANS PERSONAL USE' : 'UNIVERSAL-SANS-PERSONAL-USE'
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
    fontFamily: Platform.OS === 'ios' ? 'UNIVERSAL SANS PERSONAL USE' : 'UNIVERSAL-SANS-PERSONAL-USE',
    color: Theme.colors.secondary
  }
})
