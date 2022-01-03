import React, { useState } from "react";
import { DialogType } from "@fluentui/react";
import { addToCart } from "../../Redux/Shopping/Actions";
import { useDispatch, useSelector } from "react-redux";
import PopUp from "../PopUp/PopUp";
import { useBoolean } from "@fluentui/react-hooks";
import { routes } from "../../Routes/Routes";
import {
  Description,
  PriceAmountContainer,
  PriceRatingContainer,
  ProductDetailContainer,
  Spinner,
  Title,
  Price,
  DividerStyle,
} from "./Styles/ProductDetailStyle";
import {
  ButtonGroup,
  CardMedia,
  Rating,
  Button,
  Divider,
  Chip,
} from "@mui/material";

const dialogContentProps = {
  type: DialogType.close,
  title: "Product was successfully added to your cart!",
  closeButtonAriaLabel: "Close",
  subText: "Do you want to continue shopping or go to cart page?",
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
  // const onChangeAmount = React.useCallback((e, newValue) => {
  //   setInput(newValue);
  // });
  const Increment = () => {
    setInput(input + 1);
  };
  const Decrement = () => {
    if (input > 0) {
      setInput(input - 1);
    }
  };
  const getTitleLimit = () => {
    if (current.title.length > 50) {
      return `${current.title.substring(0, 50)}...`;
    }
    return current.title;
  };

  return (
    <ProductDetailContainer>
      <Title title={getTitleLimit()}>{current.title}</Title>
      <CardMedia
        component="img"
        height="550"
        image={current.image}
        alt={current.alt}
      />
      <DividerStyle>
        <Divider>
          <Chip label={current.author} />
        </Divider>
      </DividerStyle>
      <Description>{current.description}</Description>
      <DividerStyle>
        <Divider />
      </DividerStyle>
      <PriceAmountContainer>
        <Spinner>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            size="small"
          >
            <Button onClick={Increment}>+</Button>
            <Button>{input}</Button>
            <Button onClick={Decrement}>-</Button>
          </ButtonGroup>
        </Spinner>
        <PriceRatingContainer>
          <Price>{current.price}$</Price>
          <Rating name="simple-controlled" />
        </PriceRatingContainer>
      </PriceAmountContainer>
      <Button
        variant="outlined"
        onClick={() => addToBasket()}
        disabled={input < 1}
        allowDisabledFocus
      >
        Add To Cart
      </Button>
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
    </ProductDetailContainer>
  );
};

export default ProductDetail;
