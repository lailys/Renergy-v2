import React from "react";

function DashboardBtn({ tab, setPopupId }) {
  const btnMap = {
    Generator: "ADD GENERATOR",
    RECs: "ADD REC",
    Orders: "ADD ORDER",
  };
  const openCorrectForm = (e) => {
    setPopupId(tab);
  };
  return btnMap[tab] ? (
    <div className={`DahboardBtn ${tab}`} onClick={openCorrectForm}>
      {btnMap[tab]}
    </div>
  ) : (
    <> </>
  );
}

export default DashboardBtn;
