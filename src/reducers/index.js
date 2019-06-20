import { combineReducers } from 'redux'
import modal from '../ducks/modal'
import shoppingCart from '../ducks/shoppingCart'

export default combineReducers({
  modal,
  shoppingCart
})
