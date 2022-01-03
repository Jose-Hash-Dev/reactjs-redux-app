import React, { useState } from "react";
import { Position, SpinButton } from "@fluentui/react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { adjustQuantity, removeFromCart } from "../../Redux/Shopping/Actions";
import {
  CardDetails,
  Image,
  PriceSpinner,
  TitleButton,
  Price,
  Title,
  CardContainer,
  SpinnerStyle,
  DeleteButton,
  Subtotal,
} from "./Styles/CartStyle";

const CartProduct = ({ item }) => {
  const [input, setInput] = useState(item.quantity);
  const onChangeAmount = React.useCallback((e, newValue, previousValue) => {
    previousValue = item.quantity;
    setInput(newValue);
    dispatch(adjustQuantity(item.id, newValue, previousValue));
  });
  const dispatch = useDispatch();
  const removeProduct = () => {
    dispatch(removeFromCart(item.id, item.quantity));
  };
  return (
    <CardContainer>
      <Image src={item.image} alt={item.alt} />
      <CardDetails>
        <TitleButton>
          <Title>{item.title}</Title>
          <DeleteButton
            sx={{ fontSize: 22 }}
            color="primary"
            onClick={removeProduct}
          />
        </TitleButton>
        <PriceSpinner>
          <Price>{item.price}$</Price>
          <Subtotal>Subtotal: {item.price * item.quantity}$</Subtotal>
          <SpinnerStyle>
            <SpinButton
              labelPosition={Position.top}
              defaultValue={input}
              min={1}
              step={1}
              incrementButtonAriaLabel="Increase value by 1"
              decrementButtonAriaLabel="Decrease value by 1"
              className="shopping-cart-price-spinner-container__spinner"
              onChange={onChangeAmount}
            />
          </SpinnerStyle>
        </PriceSpinner>
      </CardDetails>
    </CardContainer>
  );
};
CartProduct.propTypes = {
  item: PropTypes.object,
  adjustQuantity: PropTypes.number,
  removeFromCart: PropTypes.func,
};

export default CartProduct;
