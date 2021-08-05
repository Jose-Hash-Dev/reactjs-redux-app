import React from 'react'
import ShoppingCart from './Buttons/ShoppingCart/ShoppingCart'
import DropDown from './Buttons/DropDown/DropDown'
import './TopNav.scss'
import logo from '../../assets/Images/logo.jpg'

function TopNav () {
  return (
      <div className="navigation">
          <img className="navigation__logo" src={logo} alt="Logo"/>
          <ShoppingCart />
          <DropDown />
      </div>
  )
}
export default TopNav
