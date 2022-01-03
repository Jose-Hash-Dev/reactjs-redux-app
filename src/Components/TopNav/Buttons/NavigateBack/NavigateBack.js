import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { NavigateBackStyle } from "./Styles/NavigateBackStyle";

const NavigateBack = () => {
  const history = useHistory();
  return (
    <div className="cart-button">
      <NavigateBackStyle
        onClick={() => history.goBack()}
        iconName="ChromeBack"
        color="primary"
      />
    </div>
  );
};

NavigateBack.propTypes = {
  isUsed: PropTypes.bool,
};

export default NavigateBack;
