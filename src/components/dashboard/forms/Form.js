import React, { useState, useEffect, useContext } from "react";
import { TbdContext } from "../../../provider/provider";
import "./form.css";
import ListRec from "./ListRec";
import ListGenerator from "./ListGenerator";
import ListOrder from "./ListOrder";
import Retire from "./Retire";
import Withdraw from "./Withdraw";

function Form() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const popupFormMap = {
    Generator: <ListGenerator />,
    RECs: <ListRec />,
    Orders: <ListOrder />,
    RETIRE: <Retire />,
    WITHDRAW: <Withdraw />,
  };
  const handleBtnClicks = (e) => {
    if (e.target.classList.contains("cancel")) {
      context.setPopupId("");
      context.setError("");
    }
  };
  return (
    <div
      className="popup-form-wrapper"
      id={context.popupId !== "" ? "isOpened" : ""}
      onClick={handleBtnClicks}
    >
      <div className="popup-form-container">
        {" "}
        {popupFormMap[context.popupId]}{" "}
      </div>{" "}
    </div>
  );
}

export default Form;
