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
import { connect } from "react-redux";
import { Icon } from "@fluentui/react";
import { adjustQuantity, removeFromCart } from "../../Redux/Shopping/Actions";
import PropTypes from "prop-types";

const CartProduct = ({ item, adjustQuantity, removeFromCart }) => {
  const [input, setInput] = useState(item.quantity);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQuantity(item.id, e.target.value);
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
              onClick={() => removeFromCart(item.id)}
            />
          </div>
          <div className="shopping-cart-price-spinner-container">
            <Text className="shopping-cart-price-spinner-container__price">
              {item.price}
            </Text>
            <SpinButton
              labelPosition={Position.top}
              defaultValue={input}
              min={input}
              step={1}
              incrementButtonAriaLabel="Increase value by 1"
              decrementButtonAriaLabel="Decrease value by 1"
              className="shopping-cart-price-spinner-container__spinner"
              onChange={onChangeHandler}
              onClick={onChangeHandler}
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

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartProduct);
