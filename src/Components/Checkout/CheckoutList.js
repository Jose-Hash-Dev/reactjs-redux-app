import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import { Text } from "@fluentui/react";
import "./Checkout.scss";
import Form from "./Form/Form";

const CheckoutList = () => {
  const cart = useSelector((state) => state.shop.cart);
  const total = () => {
    let sum = 0;
    cart.map((item) => (sum += parseFloat(item.price) * item.quantity));
    return sum;
  };
  return (
    <div className="checkout">
      {cart.map((item) => (
        <CheckoutProduct key={item.id} item={item} />
      ))}
      <Text className="checkout-total-cost-container__total-cost">
        Total Cost: {total()}$
      </Text>
      <hr />
      <Form />
    </div>
  );
};
export default CheckoutList;
