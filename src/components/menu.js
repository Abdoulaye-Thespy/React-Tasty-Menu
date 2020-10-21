import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/index.css'

const Menu = ({menu}) => {
 const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = menu
 return (
  <>
  <main>
   <section>
    <div>
     <img src={strCategoryThumb} alt="image"/>
 <h4>{strCategory}</h4>
 <p>{strCategoryDescription}</p>
    </div>
   </section>
  </main>
  </>
 )
 }

 export default Menu;