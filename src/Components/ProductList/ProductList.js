import React from "react";
import "./ProductList.scss";
import Product from "./Product";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProductList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};
ProductList.propTypes = {
  products: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(ProductList);
