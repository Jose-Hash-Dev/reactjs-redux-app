import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavouriteIconStyle } from "./FavouriteStyle";

const DropDownButton = () => {
  return (
    <FavouriteIconStyle>
      <FavoriteIcon color="primary" fontSize="small" />
    </FavouriteIconStyle>
  );
};
export default DropDownButton;
