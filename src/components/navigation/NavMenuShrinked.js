import { useEffect, useState, useContext } from "react";
import { TbdContext } from "../../provider/provider";
import { Link } from "react-router-dom";
import MenuIcon from "./menuIcon/MenuIcon";

function NavMenuShrinked() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  useEffect(() => {}, [context.openMenu]);
  return (
    <div className="NavMenuShrinked" onClick={context.clickCatcher}>
      <MenuIcon openMenu={context.openMenu} />
      <div
        className="NavMenuBottom "
        id={context.openMenu ? "NavMenuBottom-opened" : ""}
      >
        {context.userLogedin ? (
          <>
            <div
              className="NavLinkShrinked  shrinked-authentication-in-btn"
              id={
                (window.location.pathname === "/signin" ||
                  window.location.pathname === "/signup") &&
                "shrinked-activated"
              }
              onClick={context.logout}
            >
              LOGOUT
            </div>
          </>
        ) : (
          <Link
            className="NavLinkShrinked  shrinked-authentication-in-btn"
            id={
              (window.location.pathname === "/signin" ||
                window.location.pathname === "/signup") &&
              "shrinked-activated"
            }
            to="/signin"
          >
            LOGIN
          </Link>
        )}
        {!context.isRegistered && context.userLogedin && (
          <Link
            className="NavLinkShrinked  shrinked-registration-btn"
            id={
              window.location.pathname === "/register" && "shrinked-activated"
            }
            to="/register"
          >
            JOIN US
          </Link>
        )}

        <div
          className="NavLinkShrinked shrinked "
          id={
            window.location.pathname === "/marketplace" && "shrinked-activated"
          }
          onClick={context.navigateToMarketplace}
        >
          Marketplace
        </div>
        <div
          className="NavLinkShrinked shrinked "
          id={window.location.pathname === "/dashboard" && "shrinked-activated"}
          onClick={context.navigateToDashboard}
        >
          Dashboard
        </div>
      </div>
    </div>
  );
}

export default NavMenuShrinked;
