import * as React from "react";
import { useContext } from "react";
import { TbdContext } from "../provider/provider";

import "../App.css";

import { optionsMap } from "../maps/dashboardMap";

import moment from "moment";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

function Dropdown({ title, type, length, height, object, fn }) {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  const data = useSelector((state) => state.user.data);
  const [value, setValue] = React.useState("");

  let options =
    object === "action" && context.userType === "client"
      ? optionsMap[object].slice(0, 2)
      : optionsMap[type] || [];
  const handleChange = (event) => {
    fn(event.target.value, type);
    setValue(event.target.value);
    // if (object === "rec") {
    //   let curr = context.newRec;
    //   curr[title] = event.target.value;
    //   context.setNewRec(curr);
    // } else if (object === "gen") {
    //   let curr = context.newGenerator;
    //   curr[title] = event.target.value;
    //   context.setNewGenerator(curr);
    // } else if (object === "action") {
    //   context.setOpenedTab(event.target.value);
    // } else {
    //   let curr = context.newUser;
    //   curr[title] = event.target.value;
    //   context.setNewUser(curr);
    // }
  };
  return (
    <Box
      sx={{
        zIndex: "19",
        width: `${length}`,
        height: "5vh",
      }}
    >
      <FormControl fullWidth id="form-dropdown-css">
        <InputLabel
          sx={{
            padding: "0 2%",
            background: "white",
            fontSize: ".8rem",
            top: "5%",
            color: "var(--color_k)",
            fontWeight: "300",
            // height: "5vh",
            "&.MuiInputLabel-shrink": {
              top: ".3vh",
            },
          }}
        >
          {title}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="State"
          onChange={handleChange}
          style={{
            color: "var(--color_c)",
            width: `${length}`,
            // height: ` ${height ? height : "5vh"}`,
            height: "5vh",
          }}
        >
          {options.map((each, index) => (
            <MenuItem
              key={index}
              value={each[1]}
              style={{
                color: "var(--color_c)",
              }}
            >
              {each[0]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Dropdown;
