import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import CheckOutButton from "./Buttons/CheckOutButton";
import { Link } from "react-router-dom";
import { routes } from "../../Routes/Routes";
import { DefaultText, DividerStyle } from "./Styles/CartListStyle";
import { Divider } from "@mui/material";

const CartList = () => {
  const cart = useSelector((state) => state.shop.cart);
  const totalPrice = useSelector((state) => state.shop.sum);
  return (
    <div>
      {cart.map((item) => (
        <CartProduct key={item.id} item={item} />
      ))}
      <div>
        {totalPrice ? (
          <>
            <DefaultText>Total Cost: {totalPrice}$</DefaultText>
            <DividerStyle>
              <Divider variant="middle" />
            </DividerStyle>
            <Link to={routes.checkout} style={{ textDecoration: "none" }}>
              <CheckOutButton />
            </Link>
          </>
        ) : (
          <DefaultText>Cart is Empty</DefaultText>
        )}
      </div>
    </div>
  );
};

export default CartList;
