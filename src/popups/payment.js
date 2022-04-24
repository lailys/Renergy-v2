import React from "react";

import Box from "@mui/material/Box";
import Dropdown from "../form/dropdown";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Payment() {
  return (
    <Box
      sx={{
        background: "white",
        padding: "0 0 0 1vw",
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gridTemplateRows: "repeat(12, 1fr)",
        gap: ".8vh",
        boxShadow: "rgba(0, 0, 0, 0.12) 1px 5px 5px 4px",
        borderRadius: "2px",
        width: "49vw",
        height: "50vw",
      }}
    >
      <div className="pop-row-box"></div>

      <div className="pop-row-box">
        {" "}
        <Typography
          variant="h5"
          style={{
            padding: "2% 0",
            color: "#12384b",
            fontSize: "1.4rem",
            fontWeight: "300",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          component="h2"
        >
          Payment Info{" "}
        </Typography>
      </div>
      <div className="pop-row-box">
        <i class="fa fa-cc-paypal"></i>
        <i class="fa fa-cc-visa"></i>
        <i class="fa fa-cc-mastercard"></i>
        <i class="	fa fa-cc-stripe"></i>
        <i class="	fa fa-credit-card"></i>
      </div>
      <div className="pop-row-box"></div>
      <div className="pop-row-box"></div>
      <div className="pop-row-box"></div>
      <div className="pop-row-box"></div>
      <div className="pop-row-box"></div>
      <div className="pop-row-box"></div>
      <div className="pop-row-box"></div>
    </Box>
  );
}

export default Payment;
