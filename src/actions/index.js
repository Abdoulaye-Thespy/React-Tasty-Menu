import axios from axios;
import React, {useState, useEffect} from 'react'

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'

export const getMenus = () => dispatch => axios.get(apiUrl)
  .then(response => response.data)
  .then(data => {
    dispatch({
      type: 'GET_MENUS',
      payload: data,
    });
  })
  .catch(error => {
    throw (error);
  });

  export const getMenu = id => dispatch => axios.get(`${apiUrl}/${id}`)
  .then(response => response.data)
  .then(data => {
    dispatch({
      type: 'GET_MENU',
      payload: data,
    });
  })
  .catch(error => {
    throw (error);
  });

  export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});