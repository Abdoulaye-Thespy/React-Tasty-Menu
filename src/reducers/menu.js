const menuReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MENUS':
      return action.menus
    default:
      return state
  }
}

export default menuReducer
