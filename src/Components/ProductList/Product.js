import React from "react";
import { ImageFit, Text } from "@fluentui/react";
import "./ProductList.scss";
import {
  DocumentCard,
  DocumentCardDetails,
  DocumentCardImage,
  DocumentCardTitle,
} from "@fluentui/react/lib/DocumentCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { loadCurrentItem } from "../../Redux/Shopping/Actions";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const currentItem = () => {
    dispatch(loadCurrentItem(product));
  };
  return (
    <DocumentCard onClick={() => currentItem()} className="product-list">
      <Link to={`/product/${product.id}`}>
        <DocumentCardImage
          height={500}
          imagefit={ImageFit.cover}
          imageSrc={product.image}
          alt={product.alt}
        />
      </Link>
      <DocumentCardDetails className="product-list-details">
        <DocumentCardTitle
          className="product-list-details__title"
          title={product.title}
          shouldTruncate
        />
        <Text className="product-list-details__price">{product.price}</Text>
      </DocumentCardDetails>
    </DocumentCard>
  );
};

Product.propTypes = {
  product: PropTypes.any,
};

export default Product;
