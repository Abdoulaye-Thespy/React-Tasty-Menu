const menuReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return action.menus
    default:
      return state
  }
}

export default menuReducer
