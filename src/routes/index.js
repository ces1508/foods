import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/categories'
import ProductsScreen from '../screens/products'
import CartIcon from '../components/cart'
import ShoppingCartScreen from '../screens/shoppingCart'
import Theme from '../Theme'

const defualtHeaderStyles = {
  headerTintColor: Theme.colors.secondary,
  headerStyle: {
    backgroundColor: Theme.colors.maingBgColor
  }
  // headerTitleStyle: {
  //   color: Theme.colors.secondary
  // }
}

const stack = createStackNavigator({
  home: {
    screen: CategoriesScreen,
    navigationOptions: {
      ...defualtHeaderStyles,
      title: 'Categorias',
      headerRight: <CartIcon />
    }
  },
  products: {
    screen: ProductsScreen,
    navigationOptions: ({ navigation }) => {
      let categoryName = navigation.getParam('category').name
      return {
        ...defualtHeaderStyles,
        title: categoryName,
        headerRight: <CartIcon />
      }
    }
  },
  shoppingCart: {
    screen: ShoppingCartScreen,
    navigationOptions: {
      ...defualtHeaderStyles,
      title: 'Carrito de compras'
    }
  }
},
{
  initialRouteName: 'home',
  cardStyle: {
    backgroundColor: Theme.colors.maingBgColor
  }
})

export default createAppContainer(stack)
