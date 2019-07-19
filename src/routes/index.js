import React from 'react'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import CategoriesScreen from '../screens/categories'
import ProductsScreen from '../screens/products'
import CartIcon from '../components/cart'
import ShoppingCartScreen from '../screens/shoppingCart'
import Form from '../screens/form'
import Theme from '../Theme'
import FavoriteScreen from '../screens/favorites'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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

const TabStack = createBottomTabNavigator({
  home: {
    screen: stack,
    navigationOptions: {
      tabBarLabel: 'Productos'
    }
  },
  favorites: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarLabel: 'Mis Favoritos'
    }
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      let { routeName } = navigation.state
      let iconName = 'hamburger'
      if (routeName !== 'home') {
        iconName = 'star'
      }
      return <Icon name={iconName} color={tintColor} size={20} />
    }
  }),
  tabBarOptions: {
    activeTintColor: Theme.colors.secondary,
    inactiveTintColor: Theme.colors.white,
    labelStyle: {
      fontSize: 15
    },
    style: { backgroundColor: Theme.colors.maingBgColor }
  }
})

const appStack = createStackNavigator({
  tab: {
    screen: TabStack,
    navigationOptions: {
      header: () => null
    }
  },
  shoppingCart: {
    screen: ShoppingCartScreen,
    navigationOptions: {
      ...defualtHeaderStyles,
      title: 'Carrito de compras'
    }
  }
}, {
  cardStyle: {
    backgroundColor: Theme.colors.maingBgColor
  }
})

export default createAppContainer(appStack)
