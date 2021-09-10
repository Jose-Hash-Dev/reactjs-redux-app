import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import {
  Dialog,
  DialogFooter,
  DialogType,
  PrimaryButton,
  Text,
} from "@fluentui/react";
import "./Checkout.scss";
import { useBoolean } from "@fluentui/react-hooks";
import { Link } from "react-router-dom";

const dialogContentProps = {
  type: DialogType.normal,
  title: "Thank you for your order!",
};

const CheckoutList = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const modalProps = React.useMemo(() => ({
    isBlocking: true,
  }));
  const cart = useSelector((state) => state.shop.cart);

  return (
    <div>
      {cart.map((item) => (
        <CheckoutProduct key={item.id} item={item} />
      ))}
      <Text className="checkout-total-cost-container__total-cost">
        Total Price: 73$
      </Text>
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modalProps}
        className=""
      >
        <DialogFooter>
          <Link to={`/products`}>
            <PrimaryButton text="Home Page" />
          </Link>
        </DialogFooter>
      </Dialog>
      <PrimaryButton className="order-button" onClick={toggleHideDialog}>
        Order
      </PrimaryButton>
    </div>
  );
};
export default CheckoutList;
