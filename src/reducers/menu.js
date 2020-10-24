import {
  GET_MENUS, GET_MENU, SEARCH_BY_LETTER, LOADING,
} from '../constants/actionTypes';

const initialState = {
  menus: [],
  menu: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MENUS:
      return {
        ...state,
        menus: action.payload,
        loading: false,
      };
    case GET_MENU:
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case SEARCH_BY_LETTER:
      return {
        ...state,
        menus: action.payload.data.meals,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
