import React from "react";

import "./adminBasePage.css";

import AdminDashboard from "../dashboardPage/dashboard";
import AdminUserList from "../list/adminUserList";
import AdminGeneratorList from "../list/adminGeneratorList";
import AdminTokenList from "../list/adminTokenList";
import AuthBackdrop from "../../general/authBackdrop";

function AdminBasePage({ type }) {
  const pagesMap = {
    "/admin-dashboard": <AdminDashboard />,
    "/admin-user-list": <AdminUserList />,
    "/admin-generator-list": <AdminGeneratorList />,
    "/admin-token-list": <AdminTokenList />,
  };
  return (
    <div className="admin-base-page-container">
      <AuthBackdrop />
      {pagesMap[type]}
    </div>
  );
}

export default AdminBasePage;
