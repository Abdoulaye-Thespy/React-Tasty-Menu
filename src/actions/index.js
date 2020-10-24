import axios from 'axios';
import letters, { DefaultLetter } from './allLetters';
import {
  GET_MENUS, GET_MENU, CHANGE_FILTER, LOADING, SEARCH_BY_LETTER,
} from '../constants/actionTypes';

export const getDefaultMenus = () => dispatch => {
  const lettersResult = [];

  DefaultLetter.forEach(letter => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then(res => {
        Array.prototype.push.apply(lettersResult, res.data.meals);
      })
      .then(() => {
        dispatch({
          type: GET_MENUS,
          payload: lettersResult,
        });
      });
  });
};

// const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'
export const getMenus = () => dispatch => {
  const lettersResult = [];

  letters.forEach(letter => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then(res => {
        Array.prototype.push.apply(lettersResult, res.data.meals);
      })
      .then(() => {
        dispatch({
          type: GET_MENUS,
          payload: lettersResult,
        });
      });
  });
};

export const searchMenu = letter => async dispatch => {
  const data = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
  );
  dispatch({
    type: SEARCH_BY_LETTER,
    payload: data,
  });
};

export const getMenu = id => async dispatch => {
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  dispatch({
    type: GET_MENU,
    payload: res.data.meals[0],
  });
};

export const setLoading = () => ({
  type: LOADING,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});
