import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMenus } from '../actions/index'
import Menu from '../components/menu';

const MenuList = ({ getMenus, menus }) => {
  useEffect(() => {
    getMenus()
  }, [])
  console.log(menus)

  return menus === null ? (
    <h1>Loading...</h1>
  ) : (
    <section className='section'>
      <h2 className='section-title'>Our Menu</h2>
      <div className='underline'></div>
      <div className='meals-center'>
        {menus.map((menu) => (
          <Menu menu={menu} key={menu.idCategory} />
        ))}
      </div>
    </section>
  )
}

MenuList.propTypes = {
  menus: PropTypes.array.isRequired,
  getMenus: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  menus: state.menu.menus,
})

export default connect(mapStateToProps, { getMenus })(MenuList)
