import { createStackNavigator, createAppContainer } from "react-navigation"
import CategoriesScreen from '../screens/categories'

const stack = createStackNavigator({
  home: {
    screen: CategoriesScreen,
    navigationOptions: {
      title: 'Categorias'
    }
  }
},
{
  initialRouteName: 'home'
})

export default createAppContainer(stack)
