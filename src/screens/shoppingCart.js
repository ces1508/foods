import React, { Component } from 'react'
import {
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native'
import ShoppingCartItem from '../components/shoppingCartItem'

class ShoppingCart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shoppingCart: [
        {
          id: 1,
          name: 'Perros Calientes',
          price: 25000,
          description: 'perro con mazorca, queso, salchicha alemana, pan de ajo',
          image: 'https://www.cremadelechealqueria.com/sites/alqueria-dev/files/styles/650_x_350/public/perro_caliente_con_suero_costeno.png?itok=rEto-sJI',
          adds: [
            'papas',
            'huevo',
            'tocinenta',
            'pepinillos',
            'pan de orejano'
          ]
        },
        {
          id: 2,
          name: 'Hamburgesas',
          price: 25000,
          description: 'perro con mazorca, queso, salchicha alemana, pan de ajo',
          image: 'https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg',
          adds: [
            'papas',
            'huevo',
            'tocinenta',
            'pepinillos',
            'pan de orejano'
          ]
        },
        {
          id: 3,
          name: 'Sandwiches',
          price: 25000,
          description: 'perro con mazorca, queso, salchicha alemana, pan de ajo',
          image: 'https://az826390.vo.msecnd.net/cdn/media/home/inspiring_recipes/recipes/new_-_t/trio-de-sandwich-pour-pique-nique-1160x650-bs46628-pub-67290-01.ashx?la=en&mw=1160&w=1160&hash=607899CDDDFA4F80A78F67CF60DAACA1D547ED22',
          adds: [
            'papas',
            'huevo',
            'tocinenta',
            'pepinillos',
            'pan de orejano'
          ]
        },
        {
          id: 4,
          name: 'Jugos Naturales',
          price: 25000,
          description: 'perro con mazorca, queso, salchicha alemana, pan de ajo',
          image: 'https://saludycardiologia.com/wp-content/uploads/2018/12/algunos-jugos-naturales-para-el-corazon.jpg',
          adds: [
            'papas',
            'huevo',
            'tocinenta',
            'pepinillos',
            'pan de orejano'
          ]
        },
        {
          id: 5,
          name: 'Gaseosas',
          price: 25000,
          description: 'perro con mazorca, queso, salchicha alemana, pan de ajo',
          image: 'https://www.las2orillas.co/wp-content/uploads/2018/11/cola.jpg',
          adds: [
            'papas',
            'huevo',
            'tocinenta',
            'pepinillos',
            'pan de orejano'
          ]
        },
        {
          id: 6,
          name: 'Bebidas Alcoholicas',
          price: 25000,
          description: 'perro con mazorca, queso, salchicha alemana, pan de ajo',
          image: 'https://www.muyinteresante.com.mx/wp-content/uploads/2018/05/httpstved-prod.adobecqms.netcontentdamtbgmexicomuyinteresantemxsalud-y-bienestarmente-y-cerebro171124bebidas-alcoholicas.imgo_.jpg',
          adds: [
            'papas',
            'huevo',
            'tocinenta',
            'pepinillos',
            'pan de orejano'
          ]
        }
      ]
    }
  }
  render () {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.shoppingCart}
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

export default ShoppingCart
