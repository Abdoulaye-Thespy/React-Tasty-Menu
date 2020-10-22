import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMenu, setLoading } from '../actions/index';
// import Spinner from '../components/Spinner'

function Menu({ getMenu, menu, match }) {
  useEffect(() => {
   const {id} = match.params;
    getMenu(id)
  }, [])

  return Object.entries(menu).length === 0 ? (
    // <div>
    //   <Spinner />{' '}
    // </div>
    <h1>Loading...</h1>
  ) : (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 card card-body'>
          <img src={menu.strMealThumb} alt='' />
        </div>
        
        <div className='col-md-6 '>
          <h1 className='mb-4 text-center'>{menu.strMeal}</h1>
          <h2>Ingredients</h2>
          <ul className='ingredients'>
            <li className='item'>
              {menu.strIngredient1} : {menu.strMeasure1}
            </li>
            <li className='item'>
              {menu.strIngredient2} : {menu.strMeasure2}
            </li>
            <li className='item'>
              {menu.strIngredient3} : {menu.strMeasure3}
            </li>
            <li className='item'>
              {menu.strIngredient4} : {menu.strMeasure4}
            </li>
            <li className='item'>
              {menu.strIngredient5} : {menu.strMeasure5}
            </li>
            <li className='item'>
              {menu.strIngredient6} : {menu.strMeasure6}
            </li>
            <li className='item'>
              {menu.strIngredient7} : {menu.strMeasure7}
            </li>
            <li className='item'>
              {menu.strIngredient8} : {menu.strMeasure8}
            </li>
            <li className='item'>
              {menu.strIngredient9} : {menu.strMeasure9}
            </li>
          </ul>
          <h2 className='instructions'>Instructions</h2>
          <p className='instruction text-justify'>{menu.strInstructions}</p>
        </div>
      </div>
      <Link to='/' className='text-center'>
        <button type='button'>Back to Menu</button>
      </Link>
    </div>
  )
}

Menu.propTypes = {
  menu: PropTypes.instanceOf(Object).isRequired,
  getMenu: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  menu: state.menus.menu,
})

// export const mapDispatchToProps = (dispatch) => ({
//   getTheMenu: (id) => dispatch(getMenu(id)),
//   setLoading: dispatch(setLoading()),
// })

export default connect(mapStateToProps,{getMenu})(Menu)
