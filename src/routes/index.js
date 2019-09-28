import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import CategoriesScreen from '../screens/categories'
import ProductsScreen from '../screens/products'
import CartIcon from '../components/cart'
import ShoppingCartScreen from '../screens/shoppingCart'
import Form from '../screens/form'
import Theme from '../Theme'
import FavoriteScreen from '../screens/favorites'
import Product from '../screens/product'
import LocationsScreen from '../screens/locations'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const defualtHeaderStyles = {
  headerTintColor: Theme.colors.secondary,
  headerTitleStyle: {
    fontWeight: 'normal',
    fontFamily: Platform.OS === 'ios' ? 'UNIVERSAL SANS PERSONAL USE' : 'UNIVERSAL-SANS-PERSONAL-USE',
  },
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
  },
  locations: {
    screen: LocationsScreen,
    navigationOptions: {
      tabBarLabel: 'Sedes'
    }
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      let { routeName } = navigation.state
      let iconName = ''
      switch (routeName) {
        case 'home':
          iconName = 'hamburger'
          break
        case 'favorites': 
          iconName = 'star'
          break
        case 'locations':
          iconName = 'map-marker'
          break
        default:
          iconName = 'crosshairs-gps'
      }
      return <Icon name={iconName} color={tintColor} size={20} />
    }
  }),
  tabBarOptions: {
    activeTintColor: Theme.colors.secondary,
    inactiveTintColor: Theme.colors.white,
    labelStyle: {
      fontFamily: Platform.OS === 'ios' ? 'UNIVERSAL SANS PERSONAL USE' : 'UNIVERSAL-SANS-PERSONAL-USE',
      fontWeight: 'normal',
      fontSize: 13
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
  },
  product: {
    screen: Product,
    navigationOptions: {
      header: null
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
}, {
  cardStyle: {
    backgroundColor: Theme.colors.maingBgColor
  }
})

export default createAppContainer(appStack)
