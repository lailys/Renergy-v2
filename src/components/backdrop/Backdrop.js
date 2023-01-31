import { useContext, useEffect } from "react";
import { TbdContext } from "../../provider/provider";
import LazyLoad from "react-lazy-load";
import LargLanding from "../../imgs/largLanding.png";
import SmallLanding from "../../imgs/smallLanding.png";
import { pageMap } from "../../utils/map";
import "./backdrop.css";

function Backdrop() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }

  if (!pageMap[window.location.pathname]) {
    return <> </>;
  }
  return (
    <div className="backdrop-wrapper">
      <LazyLoad>
        <img src={LargLanding} alt="landing" className="BackdropImg" />
      </LazyLoad>{" "}
      <div
        ref={context.blurBackDropRef}
        className={`BackdropBlur ${pageMap[window.location.pathname]}`}
      />{" "}
    </div>
  );
}

export default Backdrop;
