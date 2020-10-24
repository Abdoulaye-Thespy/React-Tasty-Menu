import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/index.css';

const Menu = ({ menu }) => {
  const {
    idMeal, strMeal, strMealThumb, strCategory,
  } = menu;
  return (
    <>
      <article className="cocktail">
        <div className="img-container">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="cocktail-footer">
          <h2>{strMeal}</h2>
          <h3>{strCategory}</h3>
          {/* <h4>{strArea}</h4> */}
          {/* <p>{strCategoryDescription}</p> */}
          <Link
            to={{ pathname: `/menu/${idMeal}`, state: menu }}
            key={idMeal}
            className="btn btn-info btn-details"
          >
            details
          </Link>
        </div>
      </article>
    </>
  );
};

Menu.propTypes = {
  menu: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Menu;
