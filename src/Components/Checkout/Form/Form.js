import React, { useState } from "react";
import { PrimaryButton, TextField } from "@fluentui/react";
import { regexEmail, regexName } from "./Regex";
import "./Form.scss";

const Form = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onEmailInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const onConfirmEmailInput = (e) => {
    e.preventDefault();
    setConfirmEmail(e.target.value);
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
          onGetErrorMessage={isNameSurname}
          type="text"
          required
          deferredValidationTime={1000}
        />
      </div>
      <PrimaryButton className="form__submit" onClick={handleSubmit}>
        Order
      </PrimaryButton>
    </div>
  );
};

export default Form;
