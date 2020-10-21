import { GET_MENUS, GET_MENU } from '../constants/actionTypes'
const initialState = {
  menus: [],
  menu: {},
  loading: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MENUS:
      return {
        ...state,
        menus: action.payload,
        loading: false,
      }
    case GET_MENU:
      return {
        ...state,
        menu: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
