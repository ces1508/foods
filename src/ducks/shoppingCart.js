const ADD_TO_SHOPPINCART = 'ADD_TO_SHOPPINCART'
const SET_SHOPPINGCART = 'SET_SHOPPINGCART'

const initialState = {
  products: new Map()
}

export default function shoppingCartReduce (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_SHOPPINCART:
      let alreadyInCart = state.products
      let { product, addType } = action
      if (product.quantity === 0) {
        alreadyInCart.delete(product.id)
      } else {
        if (alreadyInCart.get(product.id) && addType === 'all') {
          alreadyInCart.set(product.id, { ...product, quantity: alreadyInCart.get(product.id).quantity += product.quantity })
        } else {
          alreadyInCart.set(product.id, product)
        }
      }
      return {
        ...state,
        products: new Map(alreadyInCart)
      }
    case SET_SHOPPINGCART: {
      return {
        ...state,
        products: new Map(action.products)
      }
    }
    default:
      return state
  }
}

export const addProductToCart = (product, addType = 'all') => ({ type: ADD_TO_SHOPPINCART, product, addType })
export const setShoppingCart = products => ({ type: SET_SHOPPINGCART, products })
