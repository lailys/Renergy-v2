import React, { useContext } from "react";
import { TbdContext } from "../provider/provider";

import { useNavigate } from "react-router-dom";

import Logo from "../assets/Renergyblock-Logo.png";

import axios from "axios";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function NavBar() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }

  const navigate = useNavigate();
  const btnStyle = {
    color: "var(--color_c)",
    padding: "0",
    margin: "0 0 0 3%",
    fontSize: ".9rem",
    fontWeight: "500",
    border: "none",
    height: "5vh",
  };
  return (
    <Grid
      container
      spacing={0}
      item
      xs={12}
      sx={{
        // border: "solid red 1px",
        padding: "0 5px",
        zIndex: "1000",
        // background: context.landingPageFirstClicked ? "white" : "none",
        background:
          context.landingPageFirstClicked && window.location.pathname === "/"
            ? "white"
            : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        left: "0",
        height: "160px",
        width: "100vw",
        // width: "1678px",
      }}
    >
      <Grid
        item
        xs={2}
        sx={{
          // border: "border: solid 1px red",
          height: "130px",
          marginRight: "2vw",
        }}
      >
        <img
          id="logo-color"
          src={Logo}
          alt="logo"
          style={{
            opacity: window.document.location.pathname === "/" ? "0" : "1",
          }}
          onClick={(e) => navigate("/")}
        />{" "}
      </Grid>{" "}
      <Grid
        item
        xs={6.7}
        sx={{
          zIndex: "100",
          margin: "0 1% 0 3%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "5vh",
        }}
      >
        <Button style={btnStyle} onClick={(e) => navigate("/payment")}>
          payment{" "}
        </Button>{" "}
        <Button style={btnStyle} onClick={(e) => navigate("/fqa")}>
          FAQ{" "}
        </Button>{" "}
        <Button style={btnStyle} onClick={context.getToMarket}>
          marketplace{" "}
        </Button>{" "}
        {context.loading ? (
          <Button style={btnStyle} onClick={context.handleSigOut}>
            logout{" "}
          </Button>
        ) : (
          <Button style={btnStyle} onClick={(e) => navigate("/login")}>
            login{" "}
          </Button>
        )}{" "}
      </Grid>{" "}
      <Grid
        container
        item
        xs={1.5}
        sx={{
          zIndex: "1000",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "8vh",
        }}
      >
        <Button
          variant="contained"
          style={{
            background: "var(--color_c)",
            padding: "2%",
            margin: "0",
            wordSpacing: ".3rem",
            borderRadius: "5px",
            width: "100%",
            height: "5vh",
          }}
          onClick={(e) => navigate("/signup")}
        >
          Get Started{" "}
        </Button>{" "}
      </Grid>{" "}
    </Grid>
  );
}

export default NavBar;
