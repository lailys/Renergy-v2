import React, { useEffect, useContext } from "react";
import { TbdContext } from "../provider/provider";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Logo from "../assets/Renergyblock-Logo.png";
import LogoWhite from "../assets/Renergyblock-Logo-white.png";

import CubeContainer from "./cubes/cubeContainer";

function First() {
  const navigate = useNavigate();

  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  useEffect(() => {
    console.log("context.dimensions.bottom", context.dimensions.bottom);
  }, [context.dimensions.bottom]);
  return (
    <div className="landing-page-container-a">
      <img
        id="logo-color"
        src={Logo}
        alt="logo"
        style={{
          zIndex: context.landingPageFirstClicked ? "1000" : "0",
        }}
        onClick={(e) => navigate("/")}
      />{" "}
      {/* <img
              id="logo-white"
              src={LogoWhite}
              alt="logo"
              style={{
                opacity: context.landingPageFirstClicked ? "0" : "1",
              }}
              onClick={(e) => navigate("/")}
            /> */}{" "}
      <div
        className="landing-page-container-a-img"
        style={{
          bottom: context.dimensions.bottom,
          right: context.dimensions.right,
          width: context.dimensions.width,
          height: context.dimensions.height,
        }}
      />{" "}
      <div
        style={{
          opacity: context.dimensions.bottom === "80px" ? "1" : "0",
        }}
        className="landing-page-container-a-img-fade"
      />
      <div
        style={{
          opacity: context.dimensions.bottom === "80px" ? "1" : "0",
        }}
        className="landing-page-container-a-img-fade"
      />
      <CubeContainer
        style={{
          opacity: context.dimensions.bottom === "80px" ? "1" : "0",
        }}
        height={context.dimensions.bottom === "80px" ? "50px" : "0"}
      />{" "}
      <div
        className="landing-page-container-a-arrow-container"
        style={{
          color: context.dimensions.blobArrowColor,
          top: context.dimensions.blobArrowTop,
          left: context.dimensions.blobArrowLeft,
          opacity: context.dimensions.blobArrowOpacity,
        }}
      >
        <Button
          variant="contained"
          style={{
            padding: "5px 10px",
            background: "var(--color_j)",
            borderRadius: "5px",
            width: "200px",
          }}
        >
          REQUEST DEMO{" "}
        </Button>{" "}
      </div>{" "}
      <div>
        <div
          className="landing-page-container-a-blob-text-a"
          style={{
            top: context.dimensions.blobTextATop,
            left: context.dimensions.blobTextALeft,
            fontSize: context.dimensions.blobTextAFontSize,
          }}
        >
          <div
            style={{
              color: context.dimensions.blobTextADivColor,
            }}
          >
            {" "}
            RENERGY{" "}
          </div>{" "}
          <span
            style={{
              color: context.dimensions.blobTextASpanColor,
            }}
          >
            BLOCK{" "}
          </span>{" "}
        </div>{" "}
        <div
          className="landing-page-container-a-blob-text-b"
          style={{
            opacity: context.dimensions.blobTextBOpacity,
            color: context.dimensions.blobTextBColor,
            top: context.dimensions.blobTextBTop,
            left: context.dimensions.blobTextBLeft,
          }}
        >
          BURN BLOCKS TO BUILD THE ENERGY...
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default First;
