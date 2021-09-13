import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { Text } from "@fluentui/react";
import Checkout from "./Buttons/CheckOut";
import { Link } from "react-router-dom";

const CartList = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const cart = useSelector((state) => state.shop.cart);

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
            <Link to={`/checkout`}>
              <Checkout />
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
