import React, { useContext, useEffect } from "react";
import { TbdContext } from "../provider/provider";

import "./landingPage.css";

import First from "./first";
import Second from "./second";
import Footer from "../navBar/footer";
import Third from "./third";
import Forth from "./forth";
import Fifth from "./fifth";

function LandingPage() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }

  return (
    <div
      className="landing-page-wrapper"
      onScroll={context.handleScroll}
      style={{
        overflowY: context.landingPageFirstClicked ? "scroll" : "hidden",
      }}
    >
      <div className="landing-page-container" onClick={context.catchFirstClick}>
        <div
          className="landing-page-container-arrow"
          style={{
            position: context.dimensions.blobAPosition,
            width: context.dimensions.blobAW,
            height: context.dimensions.blobAH,
            bottom: context.dimensions.blobABottom,
            borderRadius: context.dimensions.blobARadius,
          }}
        />
        <First />
        {context.landingPageFirstClicked && (
          <>
            <Second />
            <Third />
            <Forth />
            <Fifth />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
