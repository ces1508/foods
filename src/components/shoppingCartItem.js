import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Quantity from 'react-native-numeric-input'
import ShoppingCartHeader from '../components/shoppingCartHeader'
import ShoppingCarItemOptions from './ShoppingCarItemOptions'
import { addProductToCart } from '../ducks/shoppingCart'
import { connect } from 'react-redux'
import Theme from '../Theme'

const mapDispatchToProps = { addProductToCart }

const Item = props => (
  <View style={styles.container}>
    <ShoppingCartHeader
      image={props.product.image}
      name={props.product.name} />
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionTitle}>
        Descripción:
      </Text>
      {props.product.bread
        ? <Text style={styles.bread}> Pan: {props.product.bread.name} </Text>
        : null
      }
      <ShoppingCarItemOptions list={props.product.additionals} />
      <ShoppingCarItemOptions icon='minus-circle-outline' list={props.product.removes} />
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
    backgroundColor: Theme.colors.white,
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
  },
  bread: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 8
  }
})

export default connect(() => ({}), mapDispatchToProps)(Item)
