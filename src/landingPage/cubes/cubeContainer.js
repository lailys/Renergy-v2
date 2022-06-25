import React from "react";

import "./cube.css";

import Cube from "./cube";

function CubeContainer({ style, height }) {
  return (
    <div className="landing-page-container-a-cube-wrapper" style={style}>
      <Cube
        styleInfo={{
          bottom: "-4px",
          right: "400px",
        }}
        height={height}
        className="cube-first"
      />
      <Cube
        styleInfo={{
          bottom: "110px",
          right: "550px",
        }}
        height={height}
        className="cube-second"
      />
      <Cube
        styleInfo={{
          bottom: "222px",
          right: "700px",
        }}
        height={height}
        className="cube-third"
      />
      <Cube
        styleInfo={{
          bottom: "18px",
          right: "710px",
        }}
        height={height}
        className="cube-forth"
      />
      <Cube
        styleInfo={{
          bottom: "130px",
          right: "862px",
        }}
        height={height}
        className="cube-fifth"
      />
      <Cube
        styleInfo={{
          bottom: "40px",
          left: "390px",
        }}
        height={height}
        className="cube-sixth"
      />
      <Cube
        styleInfo={{
          bottom: "120px",
          left: "60px",
        }}
        height={height}
        className="cube-eight"
      />
      <Cube
        styleInfo={{
          bottom: "-50px",
          left: "240px",
        }}
        height={height}
        className="cube-nine"
      />
      {/* <Cube
        styleInfo={{
          bottom: "-888px",
          right: "-200px",
        }}
        height={height}
        className="cube-eight"
        // className="cube-ten"
      /> */}
    </div>
  );
}

export default CubeContainer;
