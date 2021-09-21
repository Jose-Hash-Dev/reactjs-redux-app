import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import { Text } from "@fluentui/react";
import "./Checkout.scss";
import Form from "./Form/Form";
import { totalPrice } from "../../Redux/Shopping/Reducer";

const CheckoutList = () => {
  const cart = useSelector((state) => state.shop.cart);
  return (
    <div className="checkout">
      {cart.map((item) => (
        <CheckoutProduct key={item.id} item={item} />
      ))}
      <Text className="checkout-total-cost-container__total-cost">
        Total Cost: {totalPrice()}$
      </Text>
      <hr />
      <Form />
    </div>
  );
};
export default CheckoutList;
