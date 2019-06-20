import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import AddButton from '../components/addButton'
import ProductCard from '../components/productCard'
import numeral from 'numeral'
import Theme from '../Theme'
import { connect } from 'react-redux'
import { showModal } from '../ducks/modal'
const mapStateToProps = state => ({
  modal: { ...state.modal }
})
const mapDispatchToProps = {
  showModal
}

const ProductItem = props => {
  let { image, name, description, price } = props.product
  return (
    <ProductCard
      image={image}
      name={name}
      ShowIcon
    >
      <Text style={styles.productText}>
        { description }
      </Text>
      <View style={styles.actions}>
        <Text style={[styles.productText, styles.price]}>
          ${ numeral(price).format('0,0') }
        </Text>
        <AddButton onPress={props.showModal} />
      </View>
    </ProductCard>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)

const styles = StyleSheet.create({
  productText: {
    fontSize: 15
  },
  price: {
    color: Theme.colors.title,
    fontWeight: 'bold'
  },
  actions: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
