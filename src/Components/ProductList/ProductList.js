import React from "react";
import "./Sass Styles/ProductList.scss";
import Product from "./Product";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const ProductList = () => {
  const products = useSelector((state) => state.shop.products);

  return (
    <Grid maxWidth={420} container>
      {products.map((product) => (
        <Grid item md={6} xs={6} key={product.id}>
          <Product key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
