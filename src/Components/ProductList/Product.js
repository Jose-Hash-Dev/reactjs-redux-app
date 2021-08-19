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
import { connect } from "react-redux";

const Product = ({ product, loadCurrentItem }) => {
  return (
    <DocumentCard
      onClick={() => loadCurrentItem(product)}
      className="product-list"
    >
      <Link to={`/products/${product.id}`}>
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
  loadCurrentItem: PropTypes.any,
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
