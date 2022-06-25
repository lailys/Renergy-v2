import React from "react";
import Cube from "../landingPage/cubes/cube";

function AuthBackdrop() {
  return (
    <div className="backdrop-a-container">
      <Cube
        styleInfo={{
          bottom: "0px",
          left: "380px",
        }}
        className="cube-twel"
        height="100px"
      />
      {/* <div className="auth-backdrop-a-container-blob-a"> </div>
            <div className="auth-backdrop-a-container-blob-b"> </div>
            <div className="auth-backdrop-a-container-blob-c"></div>
            <div className="auth-backdrop-a-container-blob-d"></div>
            <div className="auth-backdrop-a-container-blob-e"> </div>
            <div className="auth-backdrop-a-container-blob-f"> </div> */}{" "}
    </div>
  );
}

export default AuthBackdrop;
