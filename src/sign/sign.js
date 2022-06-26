import React from "react";

import "./sign.css";

import Signin from "./signin";
import Signup from "./signup";
import Activate from "./Activate";

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
                  {type === "in" ? (
                    <Signin />
                  ) : type === "up" ? (
                    <Signup />
                  ) : (
                    <Activate />
                  )}{" "}
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
