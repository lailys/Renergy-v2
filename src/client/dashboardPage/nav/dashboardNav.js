import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbdContext } from "../../../provider/provider";

import "./dashboardNav.css";

function DashboardNav() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  const navigate = useNavigate();

  const activeFolder = (e) => {
    const urlMap = {
      transaction: "/order/transaction",
      orders: "/order/search?owner=ME",
      recs: "/rec-token/list/",
      generator: "/generator-asset/",
    };
    const clickedFolder = e.target.getAttribute("data-title");
    context.setAxctiveGenerator(clickedFolder);
    navigate(`/user-dashboard/${clickedFolder}`);
  };
  return (
    <div className="dashboard-nav-container" onClick={activeFolder}>
      <div
        className="dashboard-nav-container-item"
        data-title="transaction"
        id={
          context.activeGenerator === "transaction"
            ? "dashboard-nav-container-item-activated"
            : ""
        }
      >
        Transactions
      </div>

      <div
        className="dashboard-nav-container-item"
        data-title="orders"
        id={
          context.activeGenerator === "orders"
            ? "dashboard-nav-container-item-activated"
            : ""
        }
      >
        Orders
      </div>
      <div
        className="dashboard-nav-container-item"
        data-title="recs"
        id={
          context.activeGenerator === "recs"
            ? "dashboard-nav-container-item-activated"
            : ""
        }
      >
        Recs
      </div>
      <div
        className="dashboard-nav-container-item"
        data-title="generator"
        id={
          context.activeGenerator === "generator"
            ? "dashboard-nav-container-item-activated"
            : ""
        }
        // id="dashboard-nav-container-item-activated"
      >
        Generator
      </div>
    </div>
  );
}

export default DashboardNav;
