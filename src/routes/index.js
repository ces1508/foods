import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/categories'
import ProductsScreen from '../screens/products'
import CartIcon from '../components/cart'
import ShoppingCartScreen from '../screens/shoppingCart'
import Form from '../screens/form'
import Theme from '../Theme'

const defualtHeaderStyles = {
  headerTintColor: Theme.colors.secondary,
  headerStyle: {
    backgroundColor: Theme.colors.maingBgColor
  }
}

const stack = createStackNavigator({
  home: {
    screen: CategoriesScreen,
    navigationOptions: ({ navigation }) => ({
      ...defualtHeaderStyles,
      title: 'Categorias',
      headerRight: <CartIcon navigation={navigation} />
    })
  },
  products: {
    screen: ProductsScreen,
    navigationOptions: ({ navigation }) => {
      let categoryName = navigation.getParam('category').name
      return {
        ...defualtHeaderStyles,
        title: categoryName,
        headerRight: <CartIcon navigation={navigation} />
      }
    }
  },
  shoppingCart: {
    screen: ShoppingCartScreen,
    navigationOptions: {
      ...defualtHeaderStyles,
      title: 'Carrito de compras'
    }
  },
  form: {
    screen: Form,
    navigationOptions: {
      ...defualtHeaderStyles,
      title: 'Información de envío',
      cardStyle: {
        backgroundColor: Theme.colors.white
      }
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
