import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Quantity from 'react-native-numeric-input'
import ShoppingCartHeader from '../components/shoppingCartHeader'
import ShoppingCartPlusList from './ShoppingCartPlusList'
import { addProductToCart } from '../ducks/shoppingCart'
import { connect } from 'react-redux'

const mapDispatchToProps = { addProductToCart }

const Item = props => (
  <View style={styles.container}>
    <ShoppingCartHeader
      image={props.product.image}
      name={props.product.name} />
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionTitle}>
        { !props.adds ? '' : 'Acompañamientos' }
      </Text>
      <ShoppingCartPlusList list={props.product.additionals} />
    </View>
    <View style={styles.containerButtons}>
      <Quantity
        onChange={value => props.addProductToCart({ ...props.product, quantity: value }, 'single')}
        step={1}
        totalWidth={200}
        totalHeight={50}
        initValue={props.product.quantity}
        minValue={0} />
    </View>
  </View>
)

Item.defaultProps = {
  adds: []
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingBottom: 15,
    marginBottom: 20,
    borderRadius: 10,
    marginHorizontal: 10
  },
  descriptionContainer: {
    paddingVertical: 10
  },
  descriptionTitle: {
    textAlign: 'center'
  },
  containerButtons: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(() => ({}), mapDispatchToProps)(Item)
