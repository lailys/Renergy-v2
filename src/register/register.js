import React from "react";
import { useNavigate } from "react-router-dom";

import "./register.css";

import RegisterForm from "./registerForm";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="sign-page-container">
      <div className="sign-page-container-shade">
        <div className="sign-page-container-shade">
          <div className="sign-page-container-shade">
            <div className="sign-page-container-shade">
              <div className="register-page-container-form">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
