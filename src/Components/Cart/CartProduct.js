import React, { useState } from "react";
import {
  DocumentCardType,
  ImageFit,
  Position,
  SpinButton,
  Text,
} from "@fluentui/react";
import "./Cart.scss";
import {
  DocumentCard,
  DocumentCardDetails,
  DocumentCardImage,
  DocumentCardTitle,
} from "@fluentui/react";
import { useDispatch } from "react-redux";
import { Icon } from "@fluentui/react";
import PropTypes from "prop-types";
import { adjustQuantity, removeFromCart } from "../../Redux/Shopping/Actions";

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
    console.log(item.quantity);
  };
  return (
    <>
      <DocumentCard
        className="shopping-cart"
        key={item.id}
        aria-label={item.alt}
        type={DocumentCardType.compact}
      >
        <DocumentCardImage
          height={100}
          width={100}
          imageFit={ImageFit.centerCover}
          imageSrc={item.image}
          alt={item.alt}
        />
        <DocumentCardDetails>
          <div className="shopping-cart-title-button-container">
            <DocumentCardTitle
              className="shopping-cart-title-button-container__title"
              title={item.title}
              shouldTruncate
            />
            <Icon
              className="shopping-cart-title-button-container__close-button"
              iconName="ChromeClose"
              onClick={removeProduct}
            />
          </div>
          <div className="shopping-cart-price-spinner-container">
            <Text className="shopping-cart-price-spinner-container__price">
              {item.price}
            </Text>
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
          </div>
        </DocumentCardDetails>
      </DocumentCard>
    </>
  );
};
CartProduct.propTypes = {
  item: PropTypes.any,
  adjustQuantity: PropTypes.any,
  removeFromCart: PropTypes.any,
};

export default CartProduct;
