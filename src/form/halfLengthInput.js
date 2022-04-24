import React from "react";

import { createStyles, makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";

function HalfLengthInput({ title, length, object }) {
  const shortInputStyles = makeStyles((theme) =>
    createStyles({
      root: {
        "& .MuiOutlinedInput-root": {
          color: "var(--color_c)",
          "& fieldset": {
            color: "var(--color_c-clear)",
            borderColor: "var(  --color_i-clear)", // default
          },
          "&:hover fieldset": {
            borderColor: "var(--color_j)",
          },
          "&:focus fieldset": {
            borderColor: "var(--color_j)",
          },
        },
      },
      // root: {
      //   "& .MuiOutlinedInput-root": {
      //     width: `${length}`,
      //     height: "5vh",
      //     "& fieldset": {
      //       borderColor: "#C4C4C4", // default
      //     },
      //     "&.Mui-focused fieldset": {
      //       border: "1px solid #7C74D3", // customized
      //     },
      //   },
      // },
    })
  );
  const shortClasses = shortInputStyles();

  return (
    <TextField
      id="outlined-password-input"
      label={title}
      required
      defaultValue=""
      sx={{
        "& label": {
          color: "#6e8b9aee",
          fontWeight: "300",
          fontSize: ".8rem",
          marginLeft: "1.5%",
          marginTop: "0",
          top: "-1vh",
          "&.Mui-focused": {
            color: "#7C74D3",
            marginRight: "2%",
            top: ".5vh",
          },
        },
      }}
      classes={{
        root: shortClasses.root,
      }}
    />
  );
}

export default HalfLengthInput;
