import React from "react";
import { Dialog, DialogFooter } from "@fluentui/react";
import PopupButton from "./Button/PopupButton";
import PropTypes from "prop-types";
import "./PopUp.scss";

const dialogStyles = {
  main: {
    maxWidth: 450,
  },
};
const PopUp = ({
  toggleHideDialog,
  hideDialog,
  dialogContentProps,
  primaryLink,
  secondaryLink,
  primaryText,
  secondaryText,
  isSecondaryUsed,
}) => {
  const modalProps = () => ({
    isBlocking: false,
    styles: dialogStyles,
  });

  return (
    <Dialog
      className="popup"
      hidden={hideDialog}
      onDismiss={toggleHideDialog}
      dialogContentProps={dialogContentProps}
      modalProps={modalProps}
    >
      <DialogFooter>
        {isSecondaryUsed ? (
          <div className="popup__button">
            <PopupButton buttonName={primaryText} link={primaryLink} />
            <PopupButton buttonName={secondaryText} link={secondaryLink} />
          </div>
        ) : (
          <PopupButton buttonName={primaryText} link={primaryLink} />
        )}
      </DialogFooter>
    </Dialog>
  );
};

PopUp.propTypes = {
  toggleHideDialog: PropTypes.func,
  hideDialog: PropTypes.bool,
  primaryLink: PropTypes.string,
  primaryText: PropTypes.string,
  secondaryLink: PropTypes.string,
  secondaryText: PropTypes.string,
  dialogContentProps: PropTypes.object,
  link: PropTypes.string,
  buttonText: PropTypes.string,
  isSecondaryUsed: PropTypes.bool,
};

export default PopUp;
