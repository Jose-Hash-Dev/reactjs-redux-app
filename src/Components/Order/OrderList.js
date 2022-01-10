import React from "react";
import { useSelector } from "react-redux";
import { DetailsContainer, TotalCostContainer } from "./Styles/OrderStyle";
import { DefaultText, IconDefaultText, Price } from "./Styles/OrderStyle";
import {
  Chip,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DividerStyle } from "../ProductDetail/Styles/ProductDetailStyle";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const OrderList = () => {
  const country = useSelector((state) => state.shop.countries);
  const order = useSelector((state) => state.shop.order);
  const userName = useSelector((state) => state.shop.orderUserName);
  const userEmail = useSelector((state) => state.shop.orderUserEmail);
  const userCountry = useSelector((state) => state.shop.orderUserCountry);
  const userAddress = useSelector((state) => state.shop.orderUserAddress);
  const userDelivery = useSelector((state) => state.shop.orderUSerDelivery);
  const productCost = useSelector((state) => state.shop.ProductsCost);
  return (
    <>
      {order.length > 0 ? (
        <>
          <Divider sx={{ marginBottom: 1, marginTop: 1 }}>
            <Chip label="Product Details" />
          </Divider>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 420 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.title}
                    </TableCell>
                    <TableCell align="right">{item.price}$</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">
                      {item.price * item.quantity}$
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TotalCostContainer>
            <Price>Products Cost: {productCost.sum}$</Price>
            {country.map((countryCost) => (
              <div key={countryCost.id}>
                {userCountry.country === countryCost.name ? (
                  <div>
                    <Price>Delivery Cost: {countryCost.cost}$</Price>
                    <Price>
                      Overall Cost: {countryCost.cost + productCost.sum}$
                    </Price>
                  </div>
                ) : undefined}
              </div>
            ))}
          </TotalCostContainer>
          <Divider sx={{ marginBottom: 1, marginTop: 1 }}>
            <Chip label="Customer Details" />
          </Divider>
          <DetailsContainer>
            <DividerStyle>
              <IconDefaultText>
                <HomeIcon sx={{ marginRight: 1 }} color="primary" />
                <DefaultText>{userAddress.address}</DefaultText>
              </IconDefaultText>
              <Divider />
              <IconDefaultText>
                <PersonIcon sx={{ marginRight: 1 }} color="primary" />
                <DefaultText>{userName.nameSurname}</DefaultText>
              </IconDefaultText>
              <Divider />
              <IconDefaultText>
                <EmailIcon sx={{ marginRight: 1 }} color="primary" />
                <DefaultText>{userEmail.email}</DefaultText>
              </IconDefaultText>
              <Divider />
              <IconDefaultText>
                <PublicIcon sx={{ marginRight: 1 }} color="primary" />
                <DefaultText>{userCountry.country}</DefaultText>
              </IconDefaultText>
              <Divider />
              <IconDefaultText>
                <LocalShippingIcon sx={{ marginRight: 1 }} color="primary" />
                <DefaultText>{userDelivery.delivery}</DefaultText>
              </IconDefaultText>
            </DividerStyle>
          </DetailsContainer>
        </>
      ) : (
        <DefaultText>You have no orders</DefaultText>
      )}
    </>
  );
};
export default OrderList;
