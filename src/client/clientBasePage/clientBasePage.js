import "./clientBasePage.css";

import UserDashboard from "../dashboardPage/dashboard";

function ClientBasePage({ type }) {
  const pagesMap = {
    "/user-dashboard/generator": <UserDashboard folder="generator" />,
    "/user-dashboard/recs": <UserDashboard folder="recs" />,
    "/user-dashboard/orders": <UserDashboard folder="orders" />,
    "/user-dashboard/transaction": <UserDashboard folder="transaction" />,
  };
  return <div className="client-base-page-container"> {pagesMap[type]} </div>;
}

export default ClientBasePage;
