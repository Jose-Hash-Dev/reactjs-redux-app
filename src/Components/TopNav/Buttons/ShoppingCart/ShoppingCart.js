import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./ShoppingCart.scss";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <div className="cart-button">
      <Link to={`/cart`}>
        <Icon iconName="ShoppingCart" />
      </Link>
    </div>
  );
};

export default ShoppingCart;
