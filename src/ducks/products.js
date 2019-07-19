import db from '../mocks/db'

const SHOW_ALL_PRODUCTS = 'SHOW_ALL_PRODUCTS'
const SHOW_PRODUCTS_CATEGORY = 'SHOW_PRODUCTS_CATEGORY'
const SET_PRODUCT_TO_ADD = 'SET_PRODUCT_TO_ADD'

const initialState = {
  products: [],
  productToAdd: null
}

export default function productsReducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_ALL_PRODUCTS:
      return { ...state, products: [...action.product] }
    case SHOW_PRODUCTS_CATEGORY:
      return { ...state, products: action.products }
    case SET_PRODUCT_TO_ADD:
      return {
        ...state, productToAdd: { ...action.product }
      }
    default:
      return state
  }
}

export const showAll = () => {
  return { type: SHOW_ALL_PRODUCTS, products: db.products }
}
export const getByCategory = categoryId => {
  let products = db.products.filter(product => product.categoryId === categoryId)
  return { type: SHOW_PRODUCTS_CATEGORY, products }
}
export const setProductToAdd = product => ({ type: SET_PRODUCT_TO_ADD, product })
