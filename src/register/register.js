import React from "react";
import { useNavigate } from "react-router-dom";
import AuthBackdrop from "../general/authBackdrop";

import "./register.css";

import RegisterForm from "./registerForm";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="sign-page-container">
      <AuthBackdrop />
      <div className="register-page-container-form">
        <RegisterForm />
      </div>{" "}
    </div>
  );
}

export default Register;
