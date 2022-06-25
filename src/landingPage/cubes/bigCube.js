import React from "react";

import "./cube.css";

import top from "../../assets/cube-1-2.png";
import sid1 from "../../assets/cube-1-1.png";
import sid2 from "../../assets/cube-1-3.png";

function BigCube() {
  return (
    <div className="square-wrapper-big">
      <div className="square-container-big">
        <div className="square-big">
          <img src={sid2} alt="side-img-big" />
        </div>
        <div className="square2-big">
          <img src={sid1} alt="side-img2-big" />
        </div>
        <div className="square3-big">
          <img src={top} alt="side-img3-big" />
        </div>
      </div>
    </div>
  );
}

export default BigCube;
