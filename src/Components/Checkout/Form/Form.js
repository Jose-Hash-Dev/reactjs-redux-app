import React, { useState } from "react";
import { DialogType, PrimaryButton, TextField } from "@fluentui/react";
import { regexEmail, regexName } from "./Regex";
import "./Form.scss";
import { clearCart, saveOrder } from "../../../Redux/Shopping/Actions";
import { useDispatch } from "react-redux";
import { useBoolean } from "@fluentui/react-hooks";
import { routes } from "../../../Routes/Routes";
import PopUp from "../../PopUp/PopUp";

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

  const dispatch = useDispatch();
  const removeCart = () => {
    dispatch(clearCart());
  };
  const saveMyOrder = () => {
    dispatch(saveOrder({ nameSurname }, { email }));
  };
  const submitOrder = () => {
    saveMyOrder();
    removeCart();
    toggleHideDialog();
  };
  const onEmailInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const onConfirmEmailInput = (e) => {
    e.preventDefault();
    setConfirmEmail(e.target.value);
  };
  const onNameSurnameInput = (e) => {
    e.preventDefault();
    setNameSurname(e.target.value);
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
  return (
    <div>
      <div>
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
        <PopUp
          primaryLink={routes.home}
          primaryText="Home Page"
          hideDialog={hideDialog}
          dialogContentProps={dialogContentProps}
          isSecondaryUsed={false}
        />
        <PrimaryButton onClick={submitOrder}>Order</PrimaryButton>
      </div>
    </div>
  );
};
export default Form;
