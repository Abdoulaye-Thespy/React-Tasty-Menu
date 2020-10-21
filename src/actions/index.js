import axios from 'axios'
import { GET_MENUS, GET_MENU, CHANGE_FILTER } from '../constants/actionTypes'

// const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'

export const getMenus = () => async (dispatch) => {
  try {
    const allMenu = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    )
    console.log(allMenu)
    const menuData = await Promise.all(
      allMenu.data.results.map(async (menu) => {
        // const menuRecord = await axios.get(menu.meals)
        // return menuRecord.data
      })
    )
    dispatch({
      type: GET_MENUS,
      payload: menuData,
    })
  } catch (err) {
    dispatch({
      err,
    })
  }
}

export const getMenu = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php/${id}`
    )
    dispatch({
      type: GET_MENU,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      err,
    })
  }
}

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
})
