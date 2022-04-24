import React from "react";

import backgroundImg from "../assets/landingPage2.jpg";

import "./landingPage.css";

import Button from "@mui/material/Button";
import Backdrop from "../general/backdrop";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <Backdrop />
      <div className="landing-page-container-text">
        <div className="landing-page-container-text-header"> ENERGY REC </div>{" "}
        <div className="landing-page-container-text-header-b">
          {" "}
          MARKETPLACE{" "}
        </div>{" "}
        <div className="landing-page-container-text-description">
          Renewable Energy Certificates(RECs) are a market - based instrument
          that certifies the bearer owns one megawatt - hour(MWh) of electricity
          generated from a renewable energy resource.{" "}
        </div>{" "}
        <Button
          variant="contained"
          style={{
            padding: "1.5%",
            background: "var(--color_j)",
            marginTop: "10.8%",
            borderRadius: "5px",
            width: "20%",
          }}
        >
          LEARN MORE{" "}
        </Button>{" "}
      </div>{" "}
    </div>
  );
}

export default LandingPage;
