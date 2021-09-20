import React, { useState } from "react";
import {
  Text,
  ImageFit,
  SpinButton,
  Position,
  Rating,
  Image,
  PrimaryButton,
  DialogType,
} from "@fluentui/react";
import "./ProductDetail.scss";
import {
  DocumentCard,
  DocumentCardTitle,
} from "@fluentui/react/lib/DocumentCard";
import { addToCart } from "../../Redux/Shopping/Actions";
import { useDispatch, useSelector } from "react-redux";
import PopUp from "../PopUp/PopUp";
import { useBoolean } from "@fluentui/react-hooks";
import { routes } from "../../Routes/Routes";

const dialogContentProps = {
  type: DialogType.close,
  title: "Product was successfully added to your order!",
  closeButtonAriaLabel: "Close",
  subText: "Do you want to go order products or continue shopping?",
};

const ProductDetail = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const [input, setInput] = useState(0);
  const current = useSelector((state) => state.shop.currentItem);
  const dispatch = useDispatch();
  const addToBasket = () => {
    dispatch(addToCart(current.id, input));
    toggleHideDialog();
  };

  const onChangeAmount = React.useCallback((e, newValue) => {
    setInput(newValue);
  });

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
          step={1}
          defaultValue={input}
          incrementButtonAriaLabel="Increase value by 1"
          decrementButtonAriaLabel="Decrease value by 1"
          className="product-detail__spinner"
          onChange={onChangeAmount}
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
        onClick={() => addToBasket()}
        disabled={input < 1}
        allowDisabledFocus
      >
        Add To Cart
      </PrimaryButton>
      <PopUp
        toggleHideDialog={toggleHideDialog}
        primaryLink={routes.cart}
        secondaryLink={routes.home}
        primaryText="Go To Cart"
        secondaryText="Continue to Shop"
        hideDialog={hideDialog}
        dialogContentProps={dialogContentProps}
        isSecondaryUsed={true}
      />
    </DocumentCard>
  );
};

export default ProductDetail;
