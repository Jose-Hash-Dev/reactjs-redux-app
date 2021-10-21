import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import { Separator, Text } from "@fluentui/react";
import "./Checkout.scss";
import Form from "./Form/Form.js";

const CheckoutList = () => {
  const cart = useSelector((state) => state.shop.cart);
  const totalPrice = useSelector((state) => state.shop.sum);
  return (
    <div className="checkout">
      {cart.map((item) => (
        <CheckoutProduct key={item.id} item={item} />
      ))}
      <Separator />
      <Text className="checkout-total-cost-container__total-cost">
        Total Cost: {totalPrice}$
      </Text>
      <Separator />
      <Form />
    </div>
  );
};
export default CheckoutList;
