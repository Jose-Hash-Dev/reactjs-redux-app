import React from "react";
import { PrimaryButton } from "@fluentui/react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./PopupButton.scss";

const PopupButton = ({ link, buttonName }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(link);
  };
  return (
    <div>
      <PrimaryButton text={buttonName} onClick={handleClick} />
    </div>
  );
};

PopupButton.propTypes = {
  link: PropTypes.string,
  buttonName: PropTypes.string,
};

export default PopupButton;
