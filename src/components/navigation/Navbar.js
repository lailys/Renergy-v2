import { useContext } from "react";
import { TbdContext } from "../../provider/provider";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavMenuShrinked from "./NavMenuShrinked";
import "./navBar.css";

function Navbar() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  return (
    <div className="navbar-wrapper" onClick={context.PageNavigation}>
      <NavLogo />{" "}
      {context.currentPage !== "authentication-up-btn" &&
        context.currentPage !== "authentication-in-btn" && (
          <>
            <NavMenu curr={context.currentPage} /> <NavMenuShrinked />
          </>
        )}{" "}
    </div>
  );
}

export default Navbar;
