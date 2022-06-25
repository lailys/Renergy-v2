import React from "react";

import "./cube.css";

import backgroundLanding from "../../assets/backgroundLanding.jpg";

function Cube({ styleInfo, className, height }) {
  return (
    <div className={`square-wrapper ${className}`} style={styleInfo}>
      <div className="square-container">
        <div
          className="square"
          style={{
            height: height,
          }}
        >
          {" "}
          {/* <img src={backgroundLanding} alt="side-img" /> */}{" "}
        </div>{" "}
        <div
          className="square2"
          style={{
            height: height,
          }}
        >
          {" "}
          {/* <img src={backgroundLanding} alt="side-img2" /> */}{" "}
        </div>{" "}
        <div className="square3">
          {" "}
          {/* <img src={backgroundLanding} alt="side-img3" /> */}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Cube;
