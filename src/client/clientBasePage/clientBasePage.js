import React from "react";

import "./clientBasePage.css";

import AuthBackdrop from "../../general/authBackdrop";
import UserDashboard from "../dashboardPage/dashboard";

function ClientBasePage({ type }) {
  const pagesMap = {
    "/user-dashboard": <UserDashboard />,
  };
  return <div className="client-base-page-container">{pagesMap[type]}</div>;
}

export default ClientBasePage;
