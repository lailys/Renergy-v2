import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbdContext } from "../provider/provider";
// import { withStyles } from "@material-ui/core/styles";

import TypeBox from "../form/typeBox";
import FullLengthInput from "../form/fullLengthInput";

import { Button, Typography, Box } from "@mui/material";
import Dropdown from "../form/dropdown";

function RegisterForm() {
  const navigate = useNavigate();
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  return (
    <Box
      component="form"
      sx={{
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: 1.4,
        gridTemplateRows: "repeat(12, 1fr)",
        height: "100%",
      }}
      // noValidate
      autoComplete="off"
    >
      <Typography
        variant="h5"
        style={{
          padding: "2% 0",
          color: "var( --color_c)",
          fontSize: "2rem",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
        component="h2"
      >
        {context.userType === "client" ? "Register User" : "Admin User"}{" "}
      </Typography>{" "}
      <div className="form-check-box">
        <div>
          <TypeBox txt=" Seller Of RECS" />
        </div>{" "}
        <div>
          <TypeBox txt=" Buyer Of RECS" />
        </div>{" "}
      </div>{" "}
      {/* <div className="form-row-box">
        <FullLengthInput title="Company Name" length="85.5vh" />
      </div>{" "} */}
      <div className="form-row-box">
        <FullLengthInput title="First Name" length="41vh" />
        <FullLengthInput title="Last Name" length="41vh" />
      </div>{" "}
      <div className="form-row-box">
        <FullLengthInput title="Address" length="85.5vh" />
      </div>{" "}
      <div className="form-row-box">
        <FullLengthInput title="Address 2" length="85.5vh" />
      </div>{" "}
      <div className="form-row-box">
        <FullLengthInput title="City" length="41vh" />
        <Dropdown title="State" type="state" length="22vh" />
        <FullLengthInput title="Zip" length="15vh" />
      </div>{" "}
      {/* <div className="form-row-box">
              <Dropdown title="Country" type="country" length="41vh" />
            </div> */}{" "}
      <div className="form-row-box">
        <FullLengthInput title="Email" length="85.5vh" />
      </div>{" "}
      <div className="form-row-box">
        <FullLengthInput title="Phone" length="85.5vh" />
      </div>{" "}
      {context.userType === "client" ? (
        <div className="form-row-box">
          <Button
            type="submit"
            fullWidth
            style={{
              marginRight: "2%",
              background: "none",
              color: "var(--color_c)",
              border: "solid 1px  var(--color_c)",
              width: "30%",
            }}
            variant="outlined"
          >
            Cancel{" "}
          </Button>{" "}
          <Button
            type="submit"
            fullWidth
            style={{
              background: "var(--color_c)",
              width: "65%",
            }}
            variant="contained"
            onClick={(e) => navigate("/login")}
          >
            Submit{" "}
          </Button>{" "}
        </div>
      ) : (
        <div className="form-row-box">
          <Button
            type="submit"
            fullWidth
            style={{
              marginRight: "2%",
              background: "none",
              color: "var(--color_c)",
              border: "solid 1px  var(--color_c)",
              width: "25%",
            }}
            variant="outlined"
          >
            Back{" "}
          </Button>{" "}
          <Button
            type="submit"
            fullWidth
            style={{
              marginRight: "2%",
              background: "none",
              color: "var(--color_c)",
              border: "solid 1px  var(--color_c)",
              width: "25%",
            }}
            variant="outlined"
          >
            Cancel{" "}
          </Button>{" "}
          <Button
            type="submit"
            fullWidth
            style={{
              background: "var(--color_c)",
              width: "40%",
            }}
            variant="contained"
            onClick={(e) => navigate("/login")}
          >
            Next{" "}
          </Button>{" "}
        </div>
      )}{" "}
    </Box>
  );
}

export default RegisterForm;
