import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { Text } from "@fluentui/react";
import CheckOutButton from "./Buttons/CheckOutButton";
import { Link } from "react-router-dom";

const CartList = () => {
  const cart = useSelector((state) => state.shop.cart);

  const total = () => {
    let sum = 0;
    cart.map((item) => (sum += parseFloat(item.price) * item.quantity));
    return sum;
  };
  return (
    <div>
      {cart.map((item) => (
        <CartProduct key={item.id} item={item} />
      ))}
      <div className="shopping-cart-total-cost-container">
        {total() > 0 ? (
          <>
            <Text className="shopping-cart-total-cost-container__total-cost">
              Total Cost: {total()}$
            </Text>
            <Link to={`/checkout`}>
              <CheckOutButton />
            </Link>
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

export default CartList;
