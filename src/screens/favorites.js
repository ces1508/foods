import React, { PureComponent } from 'react'
import { FlatList, View, Text, Dimensions } from 'react-native'
import Product from '../components/productItem'
import { connect } from 'react-redux'
import Theme from '../Theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const mapStateToProps = state => ({ favorites: state.favorites.favorites })
const { height } = Dimensions.get('window')

class FavoritesScreen extends PureComponent {
  render () {
    console.log('the props are ', this.props)
    return (
      <FlatList
        style={{ flex: 1, backgroundColor: Theme.colors.maingBgColor, paddingTop: 10 }}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => <View style={{ flex: 1, height: height - 50, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name='emoticon-sad-outline' size={100} color='#fff' />
          <Text style={{ color: '#fff', fontSize: 20 }}>Aún no tienes ningun favorito</Text>
        </View>}
        data={this.props.favorites}
        renderItem={({ item }) => <Product product={item} navigation={this.props.navigation} />}
      />
    )
  }
}

export default connect(mapStateToProps)(FavoritesScreen)
