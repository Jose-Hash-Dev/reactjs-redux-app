import React from "react";
import { useHistory } from "react-router-dom";
import "./NavigateBack.scss";
import { Icon } from "@fluentui/react";
import PropTypes from "prop-types";

const NavigateBack = () => {
  const history = useHistory();
  return (
    <div className="cart-button">
      <Icon
        className="back-button"
        onClick={() => history.goBack()}
        iconName="ChromeBack"
      />
    </div>
  );
};

NavigateBack.propTypes = {
  isUsed: PropTypes.bool,
};

export default NavigateBack;
