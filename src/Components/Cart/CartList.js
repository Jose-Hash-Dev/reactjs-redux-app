import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { Separator, Text } from "@fluentui/react";
import CheckOutButton from "./Buttons/CheckOutButton";
import { Link } from "react-router-dom";
import { routes } from "../../Routes/Routes";

const CartList = () => {
  const cart = useSelector((state) => state.shop.cart);
  const totalPrice = useSelector((state) => state.shop.sum);
  return (
    <div className="shopping-cart">
      {cart.map((item) => (
        <CartProduct key={item.id} item={item} />
      ))}
      <div className="shopping-cart-total-cost-container">
        {totalPrice ? (
          <>
            <Separator />
            <Text className="shopping-cart-total-cost-container__total-cost">
              Total Cost: {totalPrice}$
            </Text>
            <Separator />
            <Link to={routes.checkout}>
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
