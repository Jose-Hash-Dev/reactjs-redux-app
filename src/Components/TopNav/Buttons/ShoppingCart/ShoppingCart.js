import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../../Routes/Routes.js";
import { ShoppingCartStyle } from "./Styles/ShoppingCartStyle";
import Badge from "@mui/material/Badge";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { IconButton, Tooltip } from "@fluentui/react";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.shop.cart);
  const totalPrice = useSelector((state) => state.shop.sum);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartStyle
          onClick={handleClick}
          color="primary"
          sx={{ fontSize: 25 }}
        />
      </Badge>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 5,
              height: 10,
              color: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {cart.map((item) => (
          <div key={item.id}>
            {/*<Link*/}
            {/*  to={`/product/${product.id}`}*/}
            {/*  style={{ textDecoration: "none" }}*/}
            {/*>*/}
            <MenuItem sx={{ fontSize: 10 }}>
              <Avatar sx={{ fontSize: 10 }} src={item.image} /> {item.title} x{" "}
              {item.quantity}
            </MenuItem>
            {/*</Link>*/}
          </div>
        ))}
        <Divider />
        {totalPrice > 0 ? (
          <div>
            <Typography
              sx={{
                marginLeft: 1,
                fontSize: 10,
                marginBottom: 1,
                marginTop: 1,
              }}
            >
              Cart Total: {totalPrice}$
            </Typography>
            <Divider />
            <Link to={routes.cart} style={{ textDecoration: "none" }}>
              <Button sx={{ fontSize: 11 }}>Go to Cart</Button>
            </Link>
          </div>
        ) : (
          <Typography
            sx={{
              marginLeft: 1,
              fontSize: 12.5,
              marginBottom: 1,
              marginTop: 1,
              marginRight: 2.5,
            }}
          >
            Cart is Empty
          </Typography>
        )}
      </Menu>
    </>
  );
};

export default ShoppingCart;
