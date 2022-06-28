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
        </div>{" "}
        <div
          className="square2"
          style={{
            height: height,
          }}
        >
          {" "}
        </div>{" "}
        <div className="square3"> </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Cube;
