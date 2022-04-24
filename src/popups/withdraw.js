import React from "react";

import "./popUp.css";

import FullLengthInput from "../form/fullLengthInput";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Dropdown from "../form/dropdown";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Withdraw({ setTab }) {
  return (
    <Box
      sx={{
        background: "white",
        padding: "0 0 0 1vw",
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gridTemplateRows: "repeat(6, 1fr)",
        gap: ".8vh",
        boxShadow: "rgba(0, 0, 0, 0.12) 1px 5px 5px 4px",
        borderRadius: "10px",
        width: "40vw",
        height: "13vw",
      }}
    >
      <div className="pop-row-box"></div>
      <div className="pop-row-box">
        {" "}
        <Typography
          variant="h5"
          style={{
            padding: "2% 0",
            color: "var(--color_c) ",
            fontSize: "1.4rem",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          component="h2"
        >
          Generator Info{" "}
        </Typography>
      </div>
      <div className="pop-row-box">
        <Dropdown
          title="Generator Name"
          type="action"
          length="9vw"
          height="3.5vh"
          object="action"
        />
        <Dropdown
          title="Token Id"
          type="action"
          length="9vw"
          height="3.5vh"
          object="action"
        />
        <Dropdown
          title="QTY"
          type="action"
          length="4.5vw"
          height="3.5vh"
          object="action"
        />
        <Dropdown
          title="Reason for Retirement"
          type="action"
          length="15vw"
          height="3.5vh"
          object="action"
        />
      </div>
      <div className="pop-row-box"></div>
      <div className="pop-row-box">
        <Button
          id="remove-cancel"
          fullWidth
          style={{
            color: "var(--color_c) ",
            border: "var(--color_c) solid 1px",
            width: "18%",
            height: "4vh",
          }}
          // variant="contained"
        >
          Cancel
        </Button>
        <Button
          id="remove-submit"
          fullWidth
          style={{
            background: "var(--color_c) ",
            width: "30%",
            height: "4vh",
          }}
          variant="contained"
        >
          Submit
        </Button>
      </div>
      <div className="pop-row-box"></div>
    </Box>
  );
}

export default Withdraw;
