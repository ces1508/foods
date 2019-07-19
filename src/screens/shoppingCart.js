import React, { PureComponent } from 'react'
import {
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native'
import ShoppingCartItem from '../components/shoppingCartItem'
import ShoppingCartPrice from '../components/shoppingCartPrice'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ products: state.shoppingCart.products })

class ShoppingCart extends PureComponent {
  render () {
    let products = [...this.props.products].map(item => item[1])
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={<ShoppingCartPrice />}
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <ShoppingCartItem product={item} />}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('form')} style={{ height: 50, backgroundColor: 'yellow', width: '100%', zIndex: 10 }}>
          <Text style={{ color: 'black', fontSize: 22, textAlign: 'center', textAlignVertical: 'center', height: '100%', fontWeight: 'bold' }}>
            ORDENAR
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(mapStateToProps)(ShoppingCart)
