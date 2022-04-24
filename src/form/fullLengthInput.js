import React, { useContext } from "react";
import { TbdContext } from "../provider/provider";

import "../App.css";

import { createStyles, makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";

function FullLengthInput({ title, length, object }) {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  const handleChange = (event) => {
    if (object === "rec") {
      let curr = context.newRec;
      curr[title] = event.target.value;
      context.setNewRec(curr);
    } else if (object === "gen") {
      let curr = context.newGenerator;
      curr[title] = event.target.value;
      context.setNewGenerator(curr);
    } else {
      let curr = context.newUser;
      curr[title] = event.target.value;
      context.setNewUser(curr);
    }
  };

  const fullInputStyles = makeStyles((theme) =>
    createStyles({
      root: {
        "& .MuiOutlinedInput-root": {
          width: `${length}`,
          height: "4.5vh",
          color: "var(--color_c)",
          "& fieldset": {
            color: "var(  --color_k)",
            borderColor: "var(  --color_k)", // default
          },
          "&:hover fieldset": {
            borderColor: "var(--color_j)",
          },
          "&:focus fieldset": {
            borderColor: "var(--color_j)",
          },
        },
      },
    })
  );
  const classes = fullInputStyles();
  return (
    <TextField
      // focused
      id="outlined-name"
      label={title}
      sx={{
        "& label": {
          color: "var(  --color_k)",
          fontWeight: "300",
          fontSize: ".8rem",
          margin: "auto",
          marginTop: "0",
          top: "-.8vh",
          "&.Mui-focused": {
            color: "var(--color_j)",
            marginLeft: "0",
            top: ".5vh",
          },
        },
      }}
      classes={{
        root: classes.root,
      }}
      onChange={handleChange}
    />
    // <TextField
    //   focused
    //   id="outlined-name"
    //   label={title}
    //   style={{
    //     // color: "var(--color_c)",
    //     "& label": {
    //       // color: "var(--color_i-clear)",
    //       fontWeight: "300",
    //       fontSize: ".8rem",
    //       margin: "auto",
    //       marginTop: "0",
    //       top: "-.8vh",
    //       "&.Mui-focused": {
    //         // color: "var(--color_c)",
    //         marginLeft: "0",
    //         top: ".5vh",
    //       },
    //     },
    //   }}
    //   classes={{
    //     root: classes.root,
    //   }}
    //   onChange={handleChange}
    //   required
    // />
  );
}

export default FullLengthInput;
