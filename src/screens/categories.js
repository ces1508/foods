import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet
} from 'react-native'
import Category from '../components/category'

export default class CategoriesScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: [
        {
          id: 1,
          name: 'Perros Calientes',
          image: 'https://www.cremadelechealqueria.com/sites/alqueria-dev/files/styles/650_x_350/public/perro_caliente_con_suero_costeno.png?itok=rEto-sJI'
        },
        {
          id: 2,
          name: 'Hamburgesas',
          image: 'https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg'
        },
        {
          id: 3,
          name: 'Sandwiches',
          image: 'https://az826390.vo.msecnd.net/cdn/media/home/inspiring_recipes/recipes/new_-_t/trio-de-sandwich-pour-pique-nique-1160x650-bs46628-pub-67290-01.ashx?la=en&mw=1160&w=1160&hash=607899CDDDFA4F80A78F67CF60DAACA1D547ED22'
        },
        {
          id: 4,
          name: 'Jugos Naturales',
          image: 'https://saludycardiologia.com/wp-content/uploads/2018/12/algunos-jugos-naturales-para-el-corazon.jpg'
        },
        {
          id: 5,
          name: 'Gaseosas',
          image: 'https://www.las2orillas.co/wp-content/uploads/2018/11/cola.jpg'
        },
        {
          id: 6,
          name: 'Bebidas Alcoholicas',
          image: 'https://www.muyinteresante.com.mx/wp-content/uploads/2018/05/httpstved-prod.adobecqms.netcontentdamtbgmexicomuyinteresantemxsalud-y-bienestarmente-y-cerebro171124bebidas-alcoholicas.imgo_.jpg'
        }
      ]
    }
  }
  render () {
    return (
      <FlatList
        style={styles.list}
        keyExtractor={item => item.id.toString()}
        data={this.state.categories}
        renderItem={({ item }) => <Category category={item} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10
  }
})