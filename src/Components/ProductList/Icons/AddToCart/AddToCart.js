import React from "react";
import { AddToCartStyle } from "./AddToCartStyle";
import PropTypes from "prop-types";

const AddToCartIcon = ({ handeClick }) => {
  return (
    <AddToCartStyle fontSize="small" color="primary" onClick={handeClick} />
  );
};
export default AddToCartIcon;

AddToCartIcon.propTypes = {
  handeClick: PropTypes.func,
};
