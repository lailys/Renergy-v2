import React, { useRef } from "react";

import AddGenerator from "../../popups/addGenerator";
import AddRec from "../../popups/addRec";
import Payment from "../../popups/payment";
import Retire from "../../popups/retire";
import Withdraw from "../../popups/withdraw";

function Popup({ tab, setTab }) {
  const popoupMap = {
    "add-generator": <AddGenerator setTab={setTab} />,
    "add-rec": <AddRec />,
    retire: <Retire setTab={setTab} />,
    withdraw: <Withdraw setTab={setTab} />,
    payment: <Payment />,
  };
  const openClosePopup = (e) => {
    if (
      e.target.className === "popup-container" ||
      e.target.id === "go-back-btn-gen"
    ) {
      setTab("");
    } else if (e.target.id === "submit-gen") {
      setTab("add-rec");
    } else if (e.target.id === "go-back-btn-rec") {
      setTab("add-generator");
    } else if (e.target.id === "submit-rec") {
    } else if (
      e.target.id === "retire-submit" ||
      e.target.id === "remove-submit"
    ) {
      setTab("payment");
    } else {
      setTab(tab);
    }
  };

  return (
    <div
      className="popup-container"
      style={{
        display: tab === "" ? "none" : "flex",
        zIndex: "20",
      }}
      onClick={openClosePopup}
    >
      {" "}
      {popoupMap[tab]}{" "}
    </div>
  );
}

export default Popup;
