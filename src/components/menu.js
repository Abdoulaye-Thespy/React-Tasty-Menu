import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/index.css'

const Menu = ({menu}) => {
 const {id, name, img, desc} = menu;
 return (
  <div>
  <img src={img} alt="image"/>
 <div>{name}</div>
 <div>{desc}</div>
 </div>
 )
 }

 export default Menu;