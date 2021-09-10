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
} from "@fluentui/react/lib/DocumentCard";
import { useDispatch } from "react-redux";
import { Icon } from "@fluentui/react/lib/Icon";
import { adjustQuantity, removeFromCart } from "../../Redux/Shopping/Actions";
import PropTypes from "prop-types";

const CartProduct = ({ item }) => {
  const [input, setInput] = useState(item.quantity);
  const dispatch = useDispatch();
  const changeQuantity = () => {
    dispatch(adjustQuantity(item.id, input));
  };
  const removeItem = () => {
    dispatch(removeFromCart(item.id));
  };
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    changeQuantity(item.id, e.target.value);
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
              onClick={removeItem}
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
              max={100}
              step={1}
              incrementButtonAriaLabel="Increase value by 1"
              decrementButtonAriaLabel="Decrease value by 1"
              className="shopping-cart-price-spinner-container__spinner"
              onChange={onChangeHandler}
            />
          </div>
        </DocumentCardDetails>
      </DocumentCard>
    </>
  );
};
CartProduct.propTypes = {
  item: PropTypes.any,
};

export default CartProduct;
