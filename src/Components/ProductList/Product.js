import React, { useState } from "react";
import WishListIcon from "./Icons/Favourite/WishListIcon";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import {
  Details,
  Price,
  ProductCardContainer,
  Title,
  IconsContainer,
} from "./Styles/ProductListStyle";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { loadCurrentItem, addToCart } from "../../Redux/Shopping/Actions";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  CardMedia,
} from "@mui/material";

const Product = ({ product }) => {
  const current = useSelector((state) => state.shop.currentItem);
  const cart = useSelector((state) => state.shop.cart);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const currentItem = () => {
    dispatch(loadCurrentItem(product));
  };

  const addToBasket = () => {
    dispatch(addToCart(current.id, 1));
    handleClickClose();
  };
  return (
    <ProductCardContainer
      onClick={() => currentItem()}
      className="product-list"
    >
      {product.title.length > 20 ? (
        <Title style={{ textDecoration: "none" }}>
          {product.title.substring(0, 20)}...
        </Title>
      ) : (
        <Title style={{ textDecoration: "none" }}>{product.title}</Title>
      )}
      <Link to={`/product/${product.id}`}>
        <CardMedia
          component="img"
          height="250"
          image={product.image}
          alt={product.alt}
        />
      </Link>
      <Details>
        <IconsContainer>
          {cart.find((item) => item.id === product.id) ? (
            <CheckCircleRoundedIcon fontSize="small" color="success" />
          ) : (
            ""
          )}
          <WishListIcon />
        </IconsContainer>
        <Price>{product.price}$</Price>
      </Details>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Do you confirm the product?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can change amount in basket
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={addToBasket}>Confirm</Button>
          <Button onClick={handleClickClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Button sx={{ fontSize: 12.5 }} onClick={() => handleClickOpen()}>
        ADD
      </Button>
    </ProductCardContainer>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
