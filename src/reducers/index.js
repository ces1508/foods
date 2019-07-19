import { combineReducers } from 'redux'
import modal from '../ducks/modal'
import shoppingCart from '../ducks/shoppingCart'
import categories from '../ducks/categories'
import products from '../ducks/products'
import favorites from '../ducks/favorites'

export default combineReducers({
  modal,
  shoppingCart,
  categories,
  products,
  favorites
})
