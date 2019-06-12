import { createStackNavigator, createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/categories'
import ProductsScreen from '../screens/products'

const stack = createStackNavigator({
  home: {
    screen: CategoriesScreen,
    navigationOptions: {
      title: 'Categorias'
    }
  },
  products: {
    screen: ProductsScreen,
    navigationOptions: ({ navigation }) => {
      let categoryName = navigation.getParam('category').name
      return {
        title: categoryName
      }
    }
  }
},
{
  initialRouteName: 'home'
})

export default createAppContainer(stack)
