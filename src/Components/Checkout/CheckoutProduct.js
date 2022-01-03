import React from "react";
import PropTypes from "prop-types";
import {
  CardContainer,
  CardDetails,
  Title,
  Price,
  Image,
  TitlePriceContainer,
} from "./Styles/CheckoutStyle";

const CheckoutProduct = ({ item }) => {
  return (
    <>
      <CardContainer>
        <Image src={item.image} alt={item.alt} />
        <CardDetails>
          <TitlePriceContainer>
            <Title>{item.title}</Title>
            <Price>{item.price}$</Price>
          </TitlePriceContainer>
        </CardDetails>
      </CardContainer>
    </>
  );
};

CheckoutProduct.propTypes = {
  item: PropTypes.object,
};

export default CheckoutProduct;
