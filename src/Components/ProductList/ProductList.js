import React from "react";
import "./ProductList.scss";
import Product from "./Product";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.shop.products);
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
