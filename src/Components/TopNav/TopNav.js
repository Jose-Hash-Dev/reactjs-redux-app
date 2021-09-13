import React, { useEffect, useState } from "react";
import ShoppingCart from "./Buttons/ShoppingCart/ShoppingCart";
import DropDown from "./Buttons/DropDown/DropDown";
import { Link } from "react-router-dom";
import "./TopNav.scss";
import logo from "../../assets/Images/logo.png";
import { useSelector } from "react-redux";
import { Text } from "@fluentui/react";
import NavigateBack from "./Buttons/NavigateBack/NavigateBack";

const TopNav = () => {
  const [cartCount, setCartCount] = useState(0);
  const cart = useSelector((state) => state.shop.cart);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <div className="navigation">
      <div className="navigation-logo-back-container">
        <NavigateBack />
        <Link to={"/products"}>
          <img
            className="navigation-logo-back-container__logo"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="navigation-button-container">
        <ShoppingCart />
        <Text className="navigation__badge">{cartCount}</Text>
        <DropDown />
      </div>
    </div>
  );
};
export default TopNav;
