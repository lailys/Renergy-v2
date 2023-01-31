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
    <div className="NavMenuShrinked shrinked">
      <MenuIcon openMenu={context.openMenu} />
      <div
        className="NavMenuBottom shrinked"
        id={context.openMenu ? "NavMenuBottom-opened" : ""}
      >
        <Link
          className="NavLinkShrinked shrinked shrinkedBtn"
          id="shrinked-registration-btn"
          to="/register"
        >
          JOIN US
        </Link>
        <Link
          className="NavLinkShrinked shrinked shrinkedBtn"
          id="shrinked-authentication-in-btn"
          to="/signin"
        >
          LOGIN
        </Link>
        <div
          className="NavLinkShrinked shrinked shrinkedBtn"
          onClick={context.navigateToMarketplace}
        >
          Marketplace
        </div>
        <div
          className="NavLinkShrinked shrinked shrinkedBtn"
          onClick={context.navigateToDashboard}
        >
          Dashboard
        </div>
      </div>
    </div>
  );
}

export default NavMenuShrinked;
