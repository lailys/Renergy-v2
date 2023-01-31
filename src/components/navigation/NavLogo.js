import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Logo from "../../imgs/Renergyblock-Logo-white.png";

function NavLogo() {
  return (
    <div className="NavLogo">
      <Link className="HomeLink logo-btn link" id="home-btn" to="/home">
        <LazyLoad>
          <img src={Logo} alt="logo" className="LogoImg link" />
        </LazyLoad>
        <div className="LogoName link">RENERGYBLOCK</div>
      </Link>
    </div>
  );
}

export default NavLogo;
