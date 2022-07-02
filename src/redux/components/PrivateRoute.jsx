import { useContext } from "react";
import { Route } from "react-router-dom";
import { TbdContext } from "../../provider/provider";

import Sign from "../../sign/sign";

import React from "react";

function PrivateRoute({ Component }) {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  const user = context.user;

  return !user ? <Sign type="in" /> : Component;
}

export default PrivateRoute;
