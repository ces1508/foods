import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/categories'
import ProductsScreen from '../screens/products'
import CartIcon from '../components/cart'

const stack = createStackNavigator({
  home: {
    screen: CategoriesScreen,
    navigationOptions: {
      title: 'Categorias',
      headerRight: <CartIcon />
    }
  },
  products: {
    screen: ProductsScreen,
    navigationOptions: ({ navigation }) => {
      let categoryName = navigation.getParam('category').name
      return {
        title: categoryName,
        headerRight: <CartIcon />
      }
    }
  }
},
{
  initialRouteName: 'home'
})

export default createAppContainer(stack)
