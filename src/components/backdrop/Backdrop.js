import { useContext, useEffect } from "react";
import { TbdContext } from "../../provider/provider";
import LazyLoad from "react-lazy-load";
import LargLanding from "../../imgs/largLanding1.png";
import { pageMap } from "../../utils/map";
import "./backdrop.css";

function Backdrop() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  console.log(window.location.pathname, "Context dose not exists");
  if (
    window.location.pathname.includes("/dashboard") ||
    window.location.pathname.includes("/marketplace")
  ) {
    return <> </>;
  }
  return (
    <div className="backdrop-wrapper">
      <LazyLoad>
        <img
          src={LargLanding}
          ref={context.imgBackDropRef}
          alt="landing"
          className="BackdropImg"
        />
      </LazyLoad>
      <div className="BackdropBlur-wrapper">
        <div
          ref={context.blurBackDropRef}
          className={`BackdropBlur ${
            pageMap[window.location.pathname]
              ? pageMap[window.location.pathname][0]
              : ""
          }`}
        />
      </div>
    </div>
  );
}

export default Backdrop;
