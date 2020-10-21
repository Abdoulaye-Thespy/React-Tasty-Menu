import menuApi from '../api'

const mealsApi = '1'
export const getMenus = () => async (dispatch) => {
  const response = await menuApi.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  )
  dispatch({ type: 'GET_MENUS', Menus: response.data })

  // const sources = response.data.articles.map((stock) => stock.source.name)

  // const unique = [...new Set(sources)]
  // dispatch({ type: 'SET_FILTERS', filters: unique })
}
export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
})
