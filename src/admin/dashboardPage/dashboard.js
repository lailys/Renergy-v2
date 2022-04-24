import React from "react";
import { useNavigate } from "react-router-dom";

import "./dashboard.css";

import Button from "@mui/material/Button";
import AuthBackdrop from "../../general/authBackdrop";

function Dashboard() {
  const navigate = useNavigate();
  const btnList = [
    ["Manage Users", "/admin-user-list"],
    ["Manage Assets", "/admin-generator-list"],
    ["Manage Recs", "/admin-token-list"],
    ["Manage Orders", "/"],
  ];
  const btnStyle = {
    zIndex: "300",
    background: "var(--color_d) ",
    padding: "2%",
    margin: "2% 0",
    wordSpacing: ".3rem",
    borderRadius: "5px",
    width: "80%",
    height: "8vh",
  };

  return (
    // <div className="dashboard-page-container">

    <div className="dashboard-page-container-form">
      {btnList.map((title, index) => (
        <Button
          key={index}
          variant="contained"
          style={btnStyle}
          onClick={(e) => navigate(title[1])}
        >
          {title[0]}
        </Button>
      ))}
    </div>
    // </div>
  );
}

export default Dashboard;
