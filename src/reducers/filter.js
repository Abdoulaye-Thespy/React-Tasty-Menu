import { CHANGE_FILTER } from '../constants/actionTypes'
const changeFilter = (state = 'b', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter
    default:
      return state
  }
}

export default changeFilter
