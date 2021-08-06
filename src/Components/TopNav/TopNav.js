import React from 'react'
import ShoppingCart from './Buttons/ShoppingCart/ShoppingCart'
import DropDown from './Buttons/DropDown/DropDown'
import { Link } from 'react-router-dom'
import './TopNav.scss'
import logo from '../../assets/Images/logo.jpg'

function TopNav () {
  return (
      <div className="navigation">
        <Link to={'/products'}>
          <img className="navigation__logo" src={logo} alt="Logo"/>
        </Link>
          <ShoppingCart />
          <DropDown />
      </div>
  )
}
export default TopNav
