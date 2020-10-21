import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getMenus, changeFilter} from '/actions/index';
import Menu from './components/menu';
import Filter from './components/filter';

const MenuList = ({ getMenus, menus, changeFilter }) => {
 useEffect(() => {
  getMenus();
 }, []);


 const handleFilterChange = (e) => {
   const { value } = e.target
   changeFilter(value)
 }

const filteredMenus = () => (filter === 'ALL' ? menus : menus.filter(menu => {
    const arr = menu.types;

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].type.name === filter) return true;
    }
    return false;
  }));

  return menus === null ? (
    <h1>Loading....</h1>
  ) : (
   <main>
    <section className="menu-section">
     <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div>
<Filter handleChange={handleFilterChange} />
      {filteredMenus().map((menu) => (
        <Menu key={menu.id} menu={menu} />
      ))}
     </div>
    </section>
   </main>
    
  )

};

MenuList.propTypes = {
  menus: PropTypes.array.isRequired,
  getMenus: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  menus: state.menu.menus,
  filter: state.filter,
});

export default connect(mapStateToProps, { getMenus, changeFilter })(
  MenuList
)
