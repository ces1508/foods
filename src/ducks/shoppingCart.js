const ADD_TO_SHOPPINCART = 'ADD_TO_SHOPPINCART'

const initialState = {
  products: 0
}

export default function shoppingCartReduce (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_SHOPPINCART:
      return { ...state, products: state.products + action.quantity }
    default:
      return state
  }
}

export const addProductToCart = (quantity = 1) => ({ type: ADD_TO_SHOPPINCART, quantity })
