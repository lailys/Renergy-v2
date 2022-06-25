import React, { useContext } from "react";
import { TbdContext } from "../provider/provider";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function Footer() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }

  const navigate = useNavigate();
  const btnStyle = {
    border: "blue solid 1px",
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
        background: "var(--color_c)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "0",
        left: "0",
        height: "200px",
        width: "100%",
      }}
    >
      <Grid
        item
        xs={3}
        sx={{
          height: "15vh",
        }}
      ></Grid>{" "}
      <Grid
        item
        xs={3}
        sx={{
          height: "15vh",
          margin: "0 10%",
        }}
      ></Grid>{" "}
      <Grid
        item
        xs={3}
        sx={{
          // border: "solid red 1px",
          height: "15vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href="#" className="social-Media fa fa-facebook">
          {" "}
        </a>{" "}
        <a href="#" className="social-Media fa fa-twitter">
          {" "}
        </a>{" "}
        <a href="#" className="social-Media fa fa-linkedin">
          {" "}
        </a>{" "}
        <a href="#" className="social-Media fa fa-twitter">
          {" "}
        </a>{" "}
      </Grid>{" "}
      {/* <Grid
              item
              xs={7}
              sx={{
                zIndex: "1000",
                border: "red 1px solid",
                margin: "0 1% 0 3%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "5vh",
              }}
            >
              <Button style={btnStyle} onClick={(e) => navigate("/fqa")}>
                pricing
              </Button>
              <Button style={btnStyle} onClick={(e) => navigate("/fqa")}>
                FAQ
              </Button>
              <Button style={btnStyle} onClick={(e) => navigate("/marketplace")}>
                marketplace
              </Button>
              <Button style={btnStyle} onClick={(e) => navigate("/login")}>
                login
              </Button>
            </Grid> */}{" "}
      {/* <Grid
              container
              item
              xs={1.5}
              sx={{
                zIndex: "1000",
                // border: "red 1px solid",
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
                Get Started
              </Button>
            </Grid> */}{" "}
    </Grid>
  );
}

export default Footer;
