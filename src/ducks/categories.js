import db from '../mocks/db'

const initialState = {
  categories: db.categories
}

export default function categoriesReducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
