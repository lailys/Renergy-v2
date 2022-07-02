import * as React from "react";
import { useContext } from "react";
import { TbdContext } from "../provider/provider";

import "../App.css";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { createStyles, makeStyles } from "@mui/styles";
import Select from "@mui/material/Select";

const optionsMap = {
  changeGenerator: [],
  changeOwner: [],
  action: [
    ["Remove", "withdraw"],
    ["Retire", "retire"],
    ["Transfer", "transfer"],
  ],
  alreadyListedGenerator: [],
  generatorType: [],
  customerClass: [],
  certifyingBody: [],
  country: [],
  state: [
    ["AL", "Alabama"],
    ["AK", "Alaska"],
    ["AS", "American Samoa"],
    ["AZ", "Arizona"],
    ["AR", "Arkansas"],
    ["CA", "California"],
    ["CO", "Colorado"],
    ["CT", "Connecticut"],
    ["DE", "Delaware"],
    ["DC", "District Of Columbia"],
    ["FM", "Federated States Of Micronesia"],
    ["FL", "Florida"],
    ["GA", "Georgia"],
    ["GU", "Guam"],
    ["HI", "Hawaii"],
    ["ID", "Idaho"],
    ["IL", "Illinois"],
    ["IN", "Indiana"],
    ["IA", "Iowa"],
    ["KS", "Kansas"],
    ["KY", "Kentucky"],
    ["LA", "Louisiana"],
    ["ME", "Maine"],
    ["MH", "Marshall Islands"],
    ["MD", "Maryland"],
    ["MA", "Massachusetts"],
    ["MI", "Michigan"],
    ["MN", "Minnesota"],
    ["MS", "Mississippi"],
    ["MO", "Missouri"],
    ["MT", "Montana"],
    ["NE", "Nebraska"],
    ["NV", "Nevada"],
    ["NH", "New Hampshire"],
    ["NJ", "New Jersey"],
    ["NM", "New Mexico"],
    ["NY", "New York"],
    ["NC", "North Carolina"],
    ["ND", "North Dakota"],
    ["MP", "Northern Mariana Islands"],
    ["OH", "Ohio"],
    ["OK", "Oklahoma"],
    ["OR", "Oregon"],
    ["PW", "Palau"],
    ["PA", "Pennsylvania"],
    ["PR", "Puerto Rico"],
    ["RI", "Rhode Island"],
    ["SC", "South Carolina"],
    ["SD", "South Dakota"],
    ["TN", "Tennessee"],
    ["TX", "Texas"],
    ["UT", "Utah"],
    ["VT", "Vermont"],
    ["VI", "Virgin Islands"],
    ["VA", "Virginia"],
    ["WA", "Washington"],
    ["WV", "West Virginia"],
    ["WI", "Wisconsin"],
    ["WY", "Wyoming"],
  ],
  orderType: [
    ["ALL", "ALL"],
    ["BUY", "BUY"],
    ["SELL", "SELL"],
  ],
};

const dropdownStyle = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiOutlinedInput-root": {
        color: "var(--color_c)",
        width: "41vh",
        height: "5vh",
        "& fieldset": {
          borderColor: "#C4C4C4", // default
        },
        "&.Mui-focused fieldset": {
          border: "1px solid #7C74D3", // customized
        },
      },
    },
  })
);

function Dropdown({ title, type, length, height, object }) {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  const dropdownClasses = dropdownStyle();
  const [value, setValue] = React.useState("");

  const options =
    object === "action" && context.userType === "client"
      ? optionsMap[object].slice(0, 2)
      : optionsMap[type];

  const handleChange = (event) => {
    setValue(event.target.value);
    if (object === "rec") {
      let curr = context.newRec;
      curr[title] = event.target.value;
      context.setNewRec(curr);
    } else if (object === "gen") {
      let curr = context.newGenerator;
      curr[title] = event.target.value;
      context.setNewGenerator(curr);
    } else if (object === "action") {
      context.setOpenedTab(event.target.value);
    } else {
      let curr = context.newUser;
      curr[title] = event.target.value;
      context.setNewUser(curr);
    }
  };

  return (
    <Box
      sx={{
        zIndex: "19",
        width: `${length}`,
      }}
    >
      <FormControl fullWidth id="form-dropdown-css">
        <InputLabel
          sx={{
            padding: "0 2%",
            background: "white",
            fontSize: ".8rem",
            top: "-20%",
            color: "var(--color_k)",
            fontWeight: "300",
            "&.MuiInputLabel-shrink": {
              top: ".3vh",
            },
          }}
        >
          {title}{" "}
        </InputLabel>{" "}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="State"
          onChange={handleChange}
          classes={{
            root: dropdownClasses.root,
          }}
          style={{
            color: "var(--color_c)",
            width: `${length}`,
            height: ` ${height ? height : "5vh"}`,
          }}
        >
          {options.map((each, index) => (
            <MenuItem
              key={index}
              value={each[1]}
              style={{ color: "var(--color_c)" }}
            >
              {" "}
              {each[0]}{" "}
            </MenuItem>
          ))}{" "}
        </Select>{" "}
      </FormControl>{" "}
    </Box>
  );
}

export default Dropdown;
