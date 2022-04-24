import React from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function NavBar() {
  const navigate = useNavigate();
  const btnStyle = {
    // border: "yellow solid 1px",
    color: "var(--color_f)",
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
        zIndex: "1000",
        background: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        left: "0",
        height: "10vh",
        width: "100%",
      }}
    >
      <Grid
        item
        xs={2}
        sx={{
          height: "8vh",
        }}
      >
        <Button
          style={{
            // border: "yellow solid 1px",
            zIndex: "3",
            color: "white",
            padding: "0",
            margin: "0",
            fontSize: "3rem",
            border: "none",
            height: "10vh",
          }}
          onClick={(e) => navigate("/")}
        >
          LOGO{" "}
        </Button>{" "}
      </Grid>{" "}
      <Grid
        item
        xs={8}
        sx={{
          zIndex: "1000",
          // border: "red 1px solid",
          margin: "0 1% 0 3%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "5vh",
        }}
      >
        <Button style={btnStyle} onClick={(e) => navigate("/fqa")}>
          pricing{" "}
        </Button>{" "}
        <Button style={btnStyle} onClick={(e) => navigate("/fqa")}>
          FAQ{" "}
        </Button>{" "}
        <Button style={btnStyle} onClick={(e) => navigate("/marketplace")}>
          marketplace{" "}
        </Button>{" "}
        <Button style={btnStyle} onClick={(e) => navigate("/login")}>
          login{" "}
        </Button>{" "}
      </Grid>{" "}
      <Grid
        container
        item
        xs={1}
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
            background: "var(--color_g)",
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
