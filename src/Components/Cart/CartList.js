import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartProduct from "./CartProduct";
import { Text } from "@fluentui/react";
import CheckOut from "./Buttons/CheckOut";

const CartList = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.quantity;
      price += item.quantity * parseInt(item.price);
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  return (
    <div>
      {cart.map((item) => (
        <CartProduct key={item.id} item={item} />
      ))}
      <div className="shopping-cart-total-cost-container">
        {totalPrice ? (
          <>
            <Text className="shopping-cart-total-cost-container__total-cost">
              Total Cost: {totalPrice}$
            </Text>
            <CheckOut />
          </>
        ) : (
          <Text className="shopping-cart-total-cost-container__total-cost">
            Cart is Empty
          </Text>
        )}
      </div>
    </div>
  );
};
CartList.propTypes = {
  cart: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(CartList);
