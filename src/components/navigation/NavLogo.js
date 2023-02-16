import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import WhiteLogo from "../../imgs/Renergyblock-Logo-white.png";
import BlueLogo from "../../imgs/Renergyblock-Logo-blue.png";

function NavLogo() {
  return (
    <div className="NavLogo">
      <Link className="HomeLink logo-btn link" id="home-btn" to="/home">
        <LazyLoad>
          <img
            src={window.innerWidth >= 950 ? WhiteLogo : BlueLogo}
            alt="logo"
            className="LogoImg link clear-err"
          />
        </LazyLoad>{" "}
        <div className="LogoName link clear-err"> RENERGYBLOCK </div>{" "}
      </Link>{" "}
    </div>
  );
}

export default NavLogo;
