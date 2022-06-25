import React from "react";

import tag from "../assets/eolic-energy-1.png";

function Second() {
  return (
    <div className="landing-page-container-b">
      <div className="landing-page-container-b-text-container">
        <div className="landing-page-container-b-text-header">
          <img src={tag} alt="icon" />
          <span>WHY RENERGY US?</span>
        </div>
        <div className="landing-page-container-b-text-description">
          Renewable Energy Certificates (RECs) are a market-based instrument
          that certifies the bearer owns one megawatt-hour (MWh) of electricity
          generated from a renewable energy resource. Once the power provider
          has fed the energy into the grid, the REC received can then be sold on
          the open market as an energy commodity. RECs earned may be sold, for
          example, to other entities that are polluting as a carbon credit to
          offset their emissions. RECs can go by other names, including Green
          Tags, Tradable Renewable Certificates (TRCs), Renewable Electricity
          Certificates, or Renewable Energy Credits.
        </div>
      </div>
    </div>
  );
}

export default Second;
