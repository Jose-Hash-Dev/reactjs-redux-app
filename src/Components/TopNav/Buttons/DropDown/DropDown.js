import React from "react";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import { DropDownStyle } from "./DropDownStyle";
import { Link } from "react-router-dom";
import { routes } from "../../../../Routes/Routes";
const DropDownButton = () => {
  return (
    <Link to={routes.order} style={{ textDecoration: "none" }}>
      {" "}
      <DropDownStyle>
        <AllInboxIcon sx={{ fontSize: 26, marginTop: 0.5 }} color="primary" />
      </DropDownStyle>
    </Link>
  );
};
export default DropDownButton;
