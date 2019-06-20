import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

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
          image: 'https://www.cremadelechealqueria.com/sites/alqueria-dev/files/styles/650_x_350/public/perro_caliente_con_suero_costeno.png?itok=rEto-sJI'
        },
        {
          id: 2,
          name: 'Hamburgesas',
          price: 25000,
          description: 'perro con mazorca, queso, salchicha alemana, pan de ajo',
          image: 'https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg'
        },
        {
          id: 3,
          name: 'Sandwiches',
          price: 25000,
          description: 'perro con mazorca, queso, salchicha alemana, pan de ajo',
          image: 'https://az826390.vo.msecnd.net/cdn/media/home/inspiring_recipes/recipes/new_-_t/trio-de-sandwich-pour-pique-nique-1160x650-bs46628-pub-67290-01.ashx?la=en&mw=1160&w=1160&hash=607899CDDDFA4F80A78F67CF60DAACA1D547ED22'
        },
        {
          id: 4,
          name: 'Jugos Naturales',
          price: 25000,
          description: 'perro con mazorca, queso, salchicha alemana, pan de ajo',
          image: 'https://saludycardiologia.com/wp-content/uploads/2018/12/algunos-jugos-naturales-para-el-corazon.jpg'
        },
        {
          id: 5,
          name: 'Gaseosas',
          price: 25000,
          description: 'perro con mazorca, queso, salchicha alemana, pan de ajo',
          image: 'https://www.las2orillas.co/wp-content/uploads/2018/11/cola.jpg'
        },
        {
          id: 6,
          name: 'Bebidas Alcoholicas',
          price: 25000,
          description: 'perro con mazorca, queso, salchicha alemana, pan de ajo',
          image: 'https://www.muyinteresante.com.mx/wp-content/uploads/2018/05/httpstved-prod.adobecqms.netcontentdamtbgmexicomuyinteresantemxsalud-y-bienestarmente-y-cerebro171124bebidas-alcoholicas.imgo_.jpg'
        }
      ]
    }
  }
  render () {
    return (
      <View>
        <Text>hola mundo</Text>
      </View>
    )
  }
}

export default ShoppingCart
