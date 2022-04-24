import React from "react";

import "./sign.css";

import AuthBackdrop from "../general/authBackdrop";
import Signin from "./signin";
import Signup from "./signup";

function Sign({ type }) {
  return (
    <div className="sign-page-container">
      <AuthBackdrop />
      <div className="sign-page-container-form">
        {" "}
        {type === "in" ? <Signin /> : <Signup />}{" "}
      </div>{" "}
    </div>
  );
}

export default Sign;
