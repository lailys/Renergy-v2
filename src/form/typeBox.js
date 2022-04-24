import React from "react";

import { Checkbox, FormControlLabel, Typography } from "@mui/material";

const TypeBox = ({ txt }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          value="allowExtraEmails"
          color="primary"
          style={{
            background: "none",
            padding: "0",
            margin: "0",
            // color: "#7C74D3",
            color: "var( --color_c)",
            // background: "white",
            height: "auto",
          }}
        />
      }
      label={
        <Typography
          style={{
            background: "none",
            padding: "0",
            margin: "0",
            color: "#12384bcf",
            fontWeight: "300",
            width: "100%",
            fontSize: ".8rem",
          }}
        >
          {txt}
        </Typography>
      }
    />
  );
};

export default TypeBox;
