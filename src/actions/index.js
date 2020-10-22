import axios from 'axios';
import letters from './allLetters';
import { GET_MENUS, GET_MENU, CHANGE_FILTER, LOADING, SEARCH_BY_LETTER } from '../constants/actionTypes'

// const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'
export const getMenus = () => (dispatch) => {
  const lettersResult = [];

  letters.map((letter) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => {
        lettersResult.push(...res.data.meals);
      })
      .then(() => {
        dispatch({
          type: GET_MENUS,
          payload: lettersResult,
        })
      })
  })
}

export const searchMenu = (letter) => async (dispatch) => {
  const data = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  )
  dispatch({
    type: SEARCH_BY_LETTER,
    payload: data,
  })
}

export const getMenu = (id) => (dispatch) => {
  axios
  .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then(response => dispatch({
    type: GET_MENU,
    payload: response.data.meals[0],
  }));
};

export  const setLoading = () => ({
  type: LOADING,
})

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
})
