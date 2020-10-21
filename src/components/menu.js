import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/index.css'

const Menu = ({menu}) => {
 const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = menu
 return (
   <>
     <article className='cocktail'>
       <div className='img-container'>
         <img src={strCategoryThumb} alt='image' />
       </div>
       <div className='cocktail-footer'>
         <h3>{strCategory}</h3>
         {/* <p>{strCategoryDescription}</p> */}
         <Link to={`/menu/${idCategory}`} className='btn btn-primary btn-details'>
           details
         </Link>
       </div>
     </article>
   </>
 )
 }

 export default Menu;