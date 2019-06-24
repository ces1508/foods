import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Quantity from 'react-native-numeric-input'
import ShoppingCartHeader from '../components/shoppingCartHeader'
import ShoppingCartPlusList from './ShoppingCartPlusList'

const Item = props => (
  <View style={styles.container}>
    <ShoppingCartHeader
      image={props.product.image}
      name={props.product.name} />
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionTitle}>
        Acompañamientos
      </Text>
      <ShoppingCartPlusList list={props.product.adds} />
    </View>
    <View style={styles.containerButtons}>
      <Quantity step={1} totalWidth={200} totalHeight={50} />
    </View>
  </View>
)

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

export default Item
