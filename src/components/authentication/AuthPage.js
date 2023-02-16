import { useEffect, useState } from "react";
import { useContext } from "react";
import { TbdContext } from "../../provider/provider";
import { Link } from "react-router-dom";
import "./authPage.css";
import Signin from "./Signin";
import Signup from "./Signup";
import Register from "./Register";

function AuthPage({ mode }) {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const authmap = {
    "/signin": <Signin />,
    "/signup": <Signup />,
    "/register": <Register />,
  };
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <div className="Auth-wrapper" onClick={context.PageNavigation}>
      {mode !== "/register" && (
        <label className="Auth-form-title">
          {mode === "/signup" ? "SIGN UP" : "LOGIN"}
        </label>
      )}
      <div
        className="container"
        id={mode === "/register" ? "register-form-container" : ""}
      >
        <div className="row d-flex justify-content-center">
          {" "}
          {authmap[mode]}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default AuthPage;
