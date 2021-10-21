import React from "react";
import {
  DocumentCardType,
  ImageFit,
  Text,
  DocumentCard,
  DocumentCardDetails,
  DocumentCardImage,
} from "@fluentui/react";

import PropTypes from "prop-types";
import "./Checkout.scss";

const CheckoutProduct = ({ item }) => {
  return (
    <>
      <DocumentCard
        className="checkout__product-body"
        key={item.id}
        aria-label={item.alt}
        type={DocumentCardType.compact}
      >
        <DocumentCardImage
          height={80}
          width={80}
          imageFit={ImageFit.centerCover}
          imageSrc={item.image}
          alt={item.alt}
        />
        <DocumentCardDetails className="checkout-details">
          <Text className="checkout-details__title">{item.title}</Text>
          <Text className="checkout-details__price">{item.price}$</Text>
        </DocumentCardDetails>
      </DocumentCard>
    </>
  );
};

CheckoutProduct.propTypes = {
  item: PropTypes.object,
};

export default CheckoutProduct;
