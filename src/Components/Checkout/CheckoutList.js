import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import {
  // Dialog,
  // DialogFooter,
  DialogType,
  // PrimaryButton,
  Text,
} from "@fluentui/react";
import "./Checkout.scss";
import { useBoolean } from "@fluentui/react-hooks";
// import { Link } from "react-router-dom";
import Form from "./Form/Form";
import PopUp from "../PopUp/PopUp";
import { routes } from "../../Routes/Routes";
import { Divider } from "@mui/material";

const dialogContentProps = {
  type: DialogType.close,
  title: "Thank you for your order!",
};

const CheckoutList = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const cart = useSelector((state) => state.shop.cart);
  const total = () => {
    let sum = 0;
    cart.map((item) => (sum += parseFloat(item.price) * item.quantity));
    return sum;
  };
  return (
    <div>
      {cart.map((item) => (
        <CheckoutProduct key={item.id} item={item} />
      ))}
      <Text className="checkout-total-cost-container__total-cost">
        Total Cost: {total()}$
      </Text>
      <PopUp
        toggleHideDialog={toggleHideDialog}
        primaryLink={routes.order}
        secondaryLink={routes.home}
        primaryText="Go To Order"
        secondaryText="Go To Home"
        hideDialog={hideDialog}
        dialogContentProps={dialogContentProps}
        isSecondaryUsed={true}
      />
      <Divider />
      <Form />
    </div>
  );
};
export default CheckoutList;
