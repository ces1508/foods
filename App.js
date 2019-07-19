/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import Navigation from './src/routes'
import { Provider } from 'react-redux'
import store from './src/store'
import Theme from './src/Theme'
import { setShoppingCart } from './src/ducks/shoppingCart'
import { loadMany as setManyFavorites } from './src/ducks/favorites'
import { AsyncStorage, AppState } from 'react-native'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount () {
    AppState.addEventListener('change', this.handleChange)
    let shoppingCart = await AsyncStorage.getItem('@shoppingCart')
    let favorites = await AsyncStorage.getItem('@favorites')
    if (favorites) {
      store.dispatch(setManyFavorites(JSON.parse(favorites)))
    }
    if (shoppingCart) {
      shoppingCart = JSON.parse(shoppingCart)
      let shoppingCartMap = new Map()
      shoppingCart.forEach(item => shoppingCartMap.set(item.id, item))
      store.dispatch(setShoppingCart(shoppingCartMap))
    }
  }

  async handleChange (e) {
    if (e !== 'active') {
      let { shoppingCart, favorites } = store.getState()
      await AsyncStorage.setItem('@shoppingCart', JSON.stringify([...shoppingCart.products].map(pairs => pairs[1])))
      await AsyncStorage.setItem('@favorites', JSON.stringify(favorites.favorites))
    }
  }
  componentWillUnmount () {
    AppState.removeEventListener('change', this.handleChange)
  }
  render () {
    return (
      <Provider store={store} style={{ backgroundColor: Theme.colors.maingBgColor }}>
        <Navigation />
      </Provider>
    )
  }
}
