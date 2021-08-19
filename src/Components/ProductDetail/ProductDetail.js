import React, { useState } from "react";
import {
  Text,
  ImageFit,
  SpinButton,
  Position,
  Rating,
  Image,
  PrimaryButton,
} from "@fluentui/react";
import "./ProductDetail.scss";
import {
  DocumentCard,
  DocumentCardTitle,
} from "@fluentui/react/lib/DocumentCard";
import { addToCart } from "../../Redux/Shopping/Actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProductDetail = ({ addToCart, current }) => {
  const [input, setInput] = useState(1);

  const onAddHandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
    // addToCart(current.id, e.target.value);
    console.log(e.target.value);
  };
  return (
    <DocumentCard className="product-detail">
      <DocumentCardTitle
        className="product-detail__title"
        title={current.title}
        shouldTruncate
      />
      <Image
        className="product-detail__image"
        imageFit={ImageFit.cover}
        src={current.image}
        alt={current.alt}
      />
      <Text className="product-detail__description">{current.description}</Text>
      <div className="product-detail-price-amount-container">
        <SpinButton
          label="Amount:"
          labelPosition={Position.top}
          min={0}
          max={20}
          step={1}
          defaultValue={input}
          incrementButtonAriaLabel="Increase value by 1"
          decrementButtonAriaLabel="Decrease value by 1"
          className="product-detail__spinner"
          onChange={onAddHandler}
        />
        <div>
          <Text className="product-detail-price-amount-container__price">
            {current.price}
          </Text>
          <Rating
            defaultRating={0}
            allowZeroStars
            size={1}
            max={5}
            ariaLabel="Small stars with 0 stars allowed"
            ariaLabelFormat="{0} of {1} stars"
          />
        </div>
      </div>
      <PrimaryButton
        className="add-cart-button"
        onClick={() => addToCart(current.id, input)}
      >
        Add To Cart
      </PrimaryButton>
    </DocumentCard>
  );
};

ProductDetail.propTypes = {
  addToCart: PropTypes.any,
  current: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, value) => dispatch(addToCart(id, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
