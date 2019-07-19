const MAKE_FAVORITE = '/favorites/add'
const REMOVE_FAVORITE = '/favorites/remove'
const LOAD_MANY_FAVORITES = '/favorites/add/many'

const initialState = {
  favorites: []
}

export default function favoritesReducer (state = initialState, action) {
  switch (action.type) {
    case MAKE_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.product]
      }
    case REMOVE_FAVORITE:
      state.favorites.splice(action.index, 1)
      return {
        ...state,
        favorites: [...state.favorites]
      }
    case LOAD_MANY_FAVORITES:
      console.log('data', action.array)
      return {
        ...state,
        favorites: [...action.array]
      }
    default:
      return state
  }
}

export const addToFavorites = product => ({ type: MAKE_FAVORITE, product })
export const removeFromFavorites = index => ({ type: REMOVE_FAVORITE, index })
export const loadMany = array => ({ type: LOAD_MANY_FAVORITES, array })
