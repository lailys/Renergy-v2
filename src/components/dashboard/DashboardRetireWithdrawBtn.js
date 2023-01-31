import React from "react";

function DashboardRetireWithdrawBtn({ id, orderId }) {
  return (
    <div
      className="DashboardRetireWithdrawBtn-wrapper"
      id={id ? "" : "disabled-actions"}
    >
      <button className="DashboardRetireWithdrawBtn" data-id={orderId}>
        RETIRE
      </button>
      <button className="DashboardRetireWithdrawBtn" data-id={orderId}>
        WITHDRAW
      </button>
    </div>
  );
}

export default DashboardRetireWithdrawBtn;
