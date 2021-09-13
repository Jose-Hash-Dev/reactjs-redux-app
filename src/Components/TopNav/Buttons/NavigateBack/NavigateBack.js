import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import { useHistory } from "react-router-dom";
import "./NavigateBack.scss";

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

export default NavigateBack;
