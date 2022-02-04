import React, { useState } from "react";
import { DialogType, TextField } from "@fluentui/react";
import { regexEmail, regexName } from "./Regex";
import "./Sass Styles/Form.scss";
import {
  clearCart,
  saveOrder,
  saveOrderDetails,
} from "../../../Redux/Shopping/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useBoolean } from "@fluentui/react-hooks";
import { routes } from "../../../Routes/Routes";
import PopUp from "../../PopUp/PopUp";
import { SubmitButton, FormStyle } from "./Styles/FormStyle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const dialogContentProps = {
  type: DialogType.close,
  title: "Thank you for your order!",
  closeButtonAriaLabel: "Close",
};

const Form = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [nameSurname, setNameSurname] = useState("");

  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [delivery, setDelivery] = useState("");
  const sum = useSelector((state) => state.shop.sum);
  const countries = useSelector((state) => state.shop.countries);
  const deliveries = useSelector((state) => state.shop.deliveryMethod);
  const deliveryCost = useSelector((state) => state.shop.sum);
  const dispatch = useDispatch();
  const removeCart = () => {
    dispatch(clearCart());
  };
  const saveMyOrder = () => {
    dispatch(saveOrder({ nameSurname }, { email }));
  };
  const saveOrderInfo = () => {
    dispatch(
      saveOrderDetails(
        { nameSurname },
        { email },
        { address },
        { country },
        { delivery },
        { deliveryCost },
        { sum }
      )
    );
  };
  const submitOrder = () => {
    saveMyOrder();
    saveOrderInfo();
    removeCart();
    toggleHideDialog();
  };
  const onEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const onConfirmEmailInput = (e) => {
    setConfirmEmail(e.target.value);
  };
  const onNameSurnameInput = (e) => {
    setNameSurname(e.target.value);
  };
  const onAddressInput = (e) => {
    setAddress(e.target.value);
  };
  const onCountryInput = (e) => {
    setCountry(e.target.value);
  };
  const onDeliveryInput = (e) => {
    setDelivery(e.target.value);
  };
  const isEmail = (value) => {
    return value.length === 0 || value.match(regexEmail) ? "" : "Invalid Email";
  };
  const isEmailMatch = () => {
    return email === confirmEmail ? "" : "Not Match";
  };
  const isNameSurname = (value) => {
    return value.length === 0 || value.match(regexName)
      ? ""
      : "Only letters, Name and Surname Separately";
  };
  const isAddressFilled = (value) => {
    return value.length === 0 ? "Address must be filled" : "";
  };
  return (
    <>
      <FormStyle>
        <TextField
          className="form__field"
          placeholder="Email"
          onChange={onEmailInput}
          onGetErrorMessage={isEmail}
          type="email"
          value={email}
          required
          deferredValidationTime={1000}
        />
        <TextField
          className="form__field"
          placeholder="Confirm Email"
          onChange={onConfirmEmailInput}
          onGetErrorMessage={isEmailMatch}
          type="email"
          value={confirmEmail}
          required
          deferredValidationTime={1000}
        />
        <TextField
          className="form__field"
          placeholder="Name/Surname"
          onChange={onNameSurnameInput}
          onGetErrorMessage={isNameSurname}
          type="text"
          value={nameSurname}
          required
          deferredValidationTime={1000}
        />
        <TextField
          className="form__field"
          placeholder="Address"
          onChange={onAddressInput}
          onGetErrorMessage={isAddressFilled}
          type="text"
          value={address}
          required
          deferredValidationTime={1000}
        />
        <FormControl style={{ marginBottom: 10 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country.name}
            label="Country"
            onChange={onCountryInput}
          >
            {countries.map((country) => (
              <MenuItem key={country.id} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Delivery</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={delivery}
            label="Country"
            onChange={onDeliveryInput}
          >
            {deliveries.map((method) => (
              <MenuItem key={method.id} value={method.name}>
                {method.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormStyle>
      <PopUp
        primaryLink={routes.home}
        primaryText="Home Page"
        secondaryLink={routes.order}
        secondaryText="Orders PAge"
        hideDialog={hideDialog}
        dialogContentProps={dialogContentProps}
        isSecondaryUsed={true}
      />
      <div>
        <SubmitButton
          variant="outlined"
          disabled={
            !email.match(regexEmail) ||
            email !== confirmEmail ||
            !nameSurname.match(regexName) ||
            sum === 0 ||
            address.length === 0
          }
          onClick={submitOrder}
        >
          Order
        </SubmitButton>
      </div>
    </>
  );
};
export default Form;
