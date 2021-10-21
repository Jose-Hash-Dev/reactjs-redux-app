import React from "react";
import {
  ImageFit,
  Text,
  DocumentCard,
  DocumentCardDetails,
  DocumentCardImage,
  DocumentCardTitle,
  Separator,
} from "@fluentui/react";
import "./ProductList.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { loadCurrentItem } from "../../Redux/Shopping/Actions";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const currentItem = () => {
    dispatch(loadCurrentItem(product));
  };
  const getTitleLimit = () => {
    if (product.title.length > 50) {
      return `${product.title.substring(0, 50)}...`;
    }
    return product.title;
  };
  return (
    <DocumentCard onClick={() => currentItem()} className="product-list">
      <Link to={`/product/${product.id}`}>
        <DocumentCardImage
          height={500}
          imagefit={ImageFit.cover}
          imageSrc={product.image}
          alt={product.alt}
          className="product-list-details__image"
        />
      </Link>
      <Separator />
      <DocumentCardDetails className="product-list-details">
        <DocumentCardTitle
          className="product-list-details__title"
          title={getTitleLimit()}
          shouldTruncate
        />
        <Text className="product-list-details__price">{product.price}$</Text>
      </DocumentCardDetails>
    </DocumentCard>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
