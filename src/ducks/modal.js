// ACTIONS TYPE

const SHOW_MODAL = 'foods/modals/SHOW_MODAL'
const HIDE_MODAL = 'foods/modals/HIDE_MODAL'
const TOOGLE_MODAL = 'foods/modals/TOOGLE_MODAL'

// REDUCER
const initalState = {
  visible: false
}

export default function modalReducer (state = initalState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, visible: true }
    case HIDE_MODAL:
      return { ...state, visible: false }
    case TOOGLE_MODAL:
      return { ...state, visible: !state.visible }
    default:
      return state
  }
}

// CREATORS
export const showModal = () => ({ type: SHOW_MODAL })
export const hideModal = () => ({ type: HIDE_MODAL })
export const toogleModal = () => ({ type: TOOGLE_MODAL })
