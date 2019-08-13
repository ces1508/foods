import React, { PureComponent } from 'react'
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import ShoppingCartItem from '../components/shoppingCartItem'
import ShoppingCartPrice from '../components/shoppingCartPrice'
import { connect } from 'react-redux'
import Theme from '../Theme'

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
        <TouchableOpacity onPress={() => this.props.navigation.navigate('form')} style={styles.button}>
          <Text style={styles.buttonText}>
            ORDENAR
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(mapStateToProps)(ShoppingCart)

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: Theme.colors.secondary,
    width: '100%',
    zIndex: 10
  },
  buttonText: {
    color: Theme.colors.text.secundary,
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    fontWeight: 'bold',
    fontFamily: 'UNIVERSAL-SANS-PERSONAL-USE',
  }
})
