import menu from '../reducers/menu'

describe('menu reducer', () => {
  it('should return the initial state to empty array', () => {
    expect(menu(undefined, {})).toEqual({"loading": false, "menu": [], "menus": []})
  })
})
