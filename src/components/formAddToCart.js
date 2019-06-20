import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Theme from '../Theme'
import Quantity from 'react-native-numeric-input'
import { connect } from 'react-redux'
import { hideModal } from '../ducks/modal'
import { addProductToCart } from '../ducks/shoppingCart'

const mapDispatchToProps = {
  hideModal,
  addProductToCart
}

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
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
    let { addProductToCart, hideModal } = this.props
    addProductToCart(quantity)
    hideModal()
  }
  render () {
    let { quantity } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
        ¿Cuantos deseas?
        </Text>
        <Quantity step={1} value={quantity} onChange={this._handeChange} />
        <TouchableOpacity onPress={this._handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(() => ({}), mapDispatchToProps)(Form)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    color: Theme.colors.title,
    marginBottom: 15
  },
  button: {
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    marginTop: 15,
    backgroundColor: Theme.colors.maingBgColor
  },
  buttonText: {
    color: Theme.colors.secondary
  }
})
