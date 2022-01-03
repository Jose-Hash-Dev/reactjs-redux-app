import React from "react";
import { Dialog, DialogFooter } from "@fluentui/react";
import PopupButton from "./Button/PopupButton";
import PropTypes from "prop-types";
import "./PopUp.scss";

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
  return (
    <Dialog
      className="popup"
      hidden={hideDialog}
      onDismiss={toggleHideDialog}
      dialogContentProps={dialogContentProps}
    >
      <div style={{ justifyContent: "center" }}>
        <DialogFooter>
          {isSecondaryUsed ? (
            <div>
              <PopupButton buttonName={primaryText} link={primaryLink} />
              <PopupButton buttonName={secondaryText} link={secondaryLink} />
            </div>
          ) : (
            <div>
              <PopupButton buttonName={primaryText} link={primaryLink} />
            </div>
          )}
        </DialogFooter>
      </div>
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
  isSecondaryUsed: PropTypes.bool,
};
export default PopUp;
