import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import { Link, useHistory } from "react-router-dom";
import "./NavigateBack.scss";

const NavigateBack = () => {
  const history = useHistory();
  return (
    <div className="cart-button">
      <Link to={`/cart`}>
        <Icon
          className="back-button"
          onClick={() => history.goBack()}
          iconName="ChromeBack"
        />
      </Link>
    </div>
  );
};

export default NavigateBack;
