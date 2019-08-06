import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  View
} from 'react-native'

import ProductITem from '../components/productItem'
import Modal from '../components/modal'
import { connect } from 'react-redux'
import { showModal } from '../ducks/modal'
import AddProductToCart from '../components/formAddToCart'
import { getByCategory } from '../ducks/products'

const mapStateToProps = state => ({ modal: state.modal, products: state.products })
const mapDispatchToProps = {
  showModal,
  getByCategory
}

class ProductsScreen extends Component {
  componentWillMount () {
    let category = this.props.navigation.getParam('category')
    this.props.getByCategory(category.id)
  }
  render () {
    let category = this.props.navigation.getParam('category')
    return (
      <View>
        <Modal>
          <AddProductToCart />
        </Modal>
        <FlatList
          style={styles.list}
          keyExtractor={item => item.id.toString()}
          data={this.props.products.products}
          renderItem={({ item }) => <ProductITem
            product={{
              ...item,
              breads: category.breads || [],
              additionals: category.additionals || [],
              without: category.without || []
            }}
            navigation={this.props.navigation} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    marginVertical: 10
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen)
