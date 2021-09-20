import React from "react";
import { Dialog, DialogFooter } from "@fluentui/react/lib/Dialog";
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
    <>
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
    </>
  );
};

PopUp.propTypes = {
  toggleHideDialog: PropTypes.any,
  hideDialog: PropTypes.any,
  primaryLink: PropTypes.any,
  primaryText: PropTypes.any,
  secondaryLink: PropTypes.any,
  secondaryText: PropTypes.any,
  dialogContentProps: PropTypes.any,
  link: PropTypes.any,
  buttonText: PropTypes.any,
  isSecondaryUsed: PropTypes.any,
};

export default PopUp;
