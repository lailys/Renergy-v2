import React from "react";

import "./sign.css";

import Signin from "./signin";
import Signup from "./signup";

function Sign({ type }) {
  return (
    <div className="sign-page-container">
      {" "}
      <div className="sign-page-container-shade">
        <div className="sign-page-container-shade">
          <div className="sign-page-container-shade">
            <div className="sign-page-container-shade">
              <div className="sign-page-container-shade">
                <div className="sign-page-container-form">
                  {" "}
                  {type === "in" ? <Signin /> : <Signup />}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Sign;
