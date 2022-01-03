import React from "react";
import PropTypes from "prop-types";
import {
  AmountText,
  CardContainer,
  // DefaultText,
  // DefaultText,
  // CardDetails,
  // Title,
  // Price,
  Image,
  // TitlePriceContainer,
} from "./Styles/OrderStyle";
import {
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

const OrderProduct = ({ item }) => {
  return (
    <>
      <CardContainer>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Image src={item.image} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.author} />
            <AmountText>x {item.quantity}</AmountText>
          </ListItem>
        </List>
      </CardContainer>
    </>
  );
};

OrderProduct.propTypes = {
  item: PropTypes.object,
};

export default OrderProduct;
