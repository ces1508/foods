import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import numeral from 'numeral'
import Theme from '../Theme'

const mapStateToProps = state => ({ products: state.shoppingCart.products })

const ShoppingCartPrice = props => {
  let price = [...props.products].map(item => item[1]).reduce((prev, current) => {
    let additionalsPrice = 0
    if (current.additionals) {
      additionalsPrice = current.additionals.reduce((prevAdd, currentAdd) => (prevAdd + currentAdd.price), 0)
    }
    return prev + (current.price * current.quantity) + (additionalsPrice * current.quantity)
  }, 0)
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.text}>Total:</Text>
        <Text style={styles.text}>${numeral(price).format('0,0')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    padding: 20
  },
  rectangle: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    borderColor: Theme.colors.secondary
  },
  text: {
    color: Theme.colors.white,
    fontSize: 25,
    fontWeight: 'bold'
  }
})

export default connect(mapStateToProps)(ShoppingCartPrice)
