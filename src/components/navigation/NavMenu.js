import { useContext, useEffect } from "react";
import { TbdContext } from "../../provider/provider";
import { Link } from "react-router-dom";

function NavMenu() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  useEffect(() => {}, [context.userLogedin]);
  return (
    <div className="NavMenu">
      <div className="NavMenuLeft">
        <div
          className="NavLink link"
          id={
            window.location.pathname === "/marketplace" ? "marketplace-btn" : ""
          }
          onClick={context.navigateToMarketplace}
        >
          Marketplace
        </div>
        <div
          className="NavLink link"
          id={window.location.pathname === "/dashboard" ? "dashboard-btn" : ""}
          onClick={context.navigateToDashboard}
        >
          Dashboard
        </div>
      </div>
      <div className="NavMenuRight">
        {context.userLogedin ? (
          <div
            className="NavLink link"
            id="authentication-in-btn"
            onClick={context.logout}
          >
            LOGOUT
          </div>
        ) : (
          <Link
            className="NavLink link"
            id="authentication-in-btn"
            to="/signin"
          >
            LOGIN
          </Link>
        )}
        <Link className="NavLink link" id="registration-btn" to="/register">
          JOIN US
        </Link>
      </div>
    </div>
  );
}

export default NavMenu;
