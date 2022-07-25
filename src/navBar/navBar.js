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
    // border: "solid red 1px",
    color: "var(--color_c)",
    padding: "0",
    margin: " 0 2% 0 1%",
    fontSize: ".9rem",
    fontWeight: "600",
    // border: "none",
    height: "5vh",
    width: "12%",
  };
  return (
    <>
      {context.landingPageFirstClicked && (
        <Grid
          container
          spacing={0}
          item
          xs={12}
          sx={{
            // border: "solid red 1px",
            padding: "0 4px",
            zIndex: "1000",
            background:
              context.landingPageFirstClicked &&
              window.location.pathname === "/"
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
          }}
        >
          <img
            id="logo-color"
            src={Logo}
            alt="logo"
            style={{
              opacity: window.location.pathname === "/" ? "0" : "1",
            }}
            onClick={(e) => navigate("/")}
          />
          {window.location.pathname === "/" && (
            <>
              {" "}
              <Grid
                item
                xs={8}
                sx={{
                  // border: "solid red 1px",
                  zIndex: "100",
                  margin: "0 .8% 0 27.5%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  height: "5vh",
                }}
              >
                {context.loading ? (
                  <>
                    <Button
                      style={btnStyle}
                      onClick={(e) =>
                        navigate(`/user-dashboard/${context.activeGenerator}`)
                      }
                    >
                      dashboard
                    </Button>
                    <Button style={btnStyle} onClick={context.getMarket}>
                      marketplace
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        ...btnStyle,
                        color: "white",
                        background: "var(--color_c)",
                        // padding: "1.8%",
                        wordSpacing: ".3rem",
                        borderRadius: "5px",
                        width: "20%",
                        // height: "5vh",
                      }}
                      onClick={(e) => navigate("/signup")}
                    >
                      Get Started
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        ...btnStyle,
                        background: "var(--color_d)",
                        color: "white",
                        width: "13%",
                      }}
                      onClick={context.handleSigOut}
                    >
                      logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button style={{ ...btnStyle, pointerEvents: "none" }} />
                    <Button style={{ ...btnStyle, pointerEvents: "none" }} />
                    <Button
                      style={{
                        ...btnStyle,
                        // color: "white",
                        // background: "var(--color_c)",
                        border: "solid 1px var(--color_c)",
                        // padding: "2%",
                        wordSpacing: ".3rem",
                        borderRadius: "5px",
                        width: "18%",
                        // height: "5vh",
                      }}
                      onClick={(e) => navigate("/signup")}
                      variant="outlined"
                    >
                      Get Started
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        ...btnStyle,
                        background: "var(--color_d)",
                        color: "white",
                        width: "13%",
                      }}
                      onClick={(e) => navigate("/login")}
                    >
                      {" "}
                      login
                    </Button>
                  </>
                )}
              </Grid>
            </>
          )}
        </Grid>
      )}
    </>
  );
}

export default NavBar;
