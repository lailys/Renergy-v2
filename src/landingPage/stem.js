import React, { useContext } from "react";
import { TbdContext } from "../provider/provider";

function Stem() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }

  return (
    <div
      className="landing-page-container-stem"
      style={{ height: `${context.stemLength}px` }}
    ></div>
  );
}

export default Stem;
