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

  return menus === null? <h1>Loading...</h1> : (
    <div>
      <main>
        <section className='menu-section'>
          <div className='title'>
            <h2>Our Menu</h2>
            <div className='underline'></div>
            {menus.map((menu) => (
              <Menu menu={menu} key={menu.idCategory} />
            ))}
          </div>
        </section>
      </main>
    </div>
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
