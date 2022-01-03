import React from "react";
import ShoppingCart from "./Buttons/ShoppingCart/ShoppingCart";
import DropDown from "./Buttons/DropDown/DropDown";
import { Link } from "react-router-dom";
import "./Sass Styles/TopNav.scss";
import logo from "../../assets/Images/logo.png";
import NavigateBack from "./Buttons/NavigateBack/NavigateBack.js";
import { routes } from "../../Routes/Routes";
import PropTypes from "prop-types";
import {
  NavigationContainer,
  LogoBackContainer,
  HamburgerCartContainer,
  Logo,
  // Logo,
} from "./Styles/TopNavStyle";

const TopNav = ({ isBackUsed }) => {
  return (
    <NavigationContainer>
      <LogoBackContainer>
        {isBackUsed ? <NavigateBack /> : ""}
        <Link to={routes.home}>
          <Logo src={logo} />
        </Link>
      </LogoBackContainer>
      <HamburgerCartContainer>
        <ShoppingCart />
        <DropDown />
      </HamburgerCartContainer>
    </NavigationContainer>
  );
};

TopNav.propTypes = {
  isBackUsed: PropTypes.bool,
};

export default TopNav;
