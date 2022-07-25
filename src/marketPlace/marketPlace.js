import { useContext, useEffect } from "react";
import { TbdContext } from "../provider/provider";
import { useSelector } from "react-redux";

import FullLengthInput from "../form/fullLengthInput";
import TimePicker from "../form/timePicker";

import MarketplaceList from "../admin/list/marketplaceList";
import Dropdown from "../form/dropdown";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./marketplace.css";

function MarketPlace() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  useEffect(() => {
    context.getMarket();
  }, [context.filterChanged]);
  const filter = [
    <Dropdown
      title="Generator Type"
      type="generatorType"
      length="9.5vw"
      object="gen"
      fn={context.getMarketParam}
    />,
    <Dropdown
      title="Certifying Body"
      type="certifyingBody"
      length="9.5vw"
      object="gen"
      fn={context.getMarketParam}
    />,
    <Dropdown
      title="state"
      type="state"
      length="5.5vw"
      object="gen"
      fn={context.getMarketParam}
    />,
    <TimePicker />,
    <FullLengthInput
      title="Quantity"
      length="7vw"
      object="gen"
      type="number"
      param="qty"
      fn={context.getMarketParam}
    />,
    <Dropdown
      title="Order Side"
      type="side"
      length="7vw"
      object="gen"
      fn={context.getMarketParam}
    />,
  ];
  return (
    <div className="marketplace-page-container">
      <Box
        sx={{
          // border: "solid 1px red",
          background: "none",
          padding: "0",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          position: "absolute",
          top: "20vh",
          width: "80vw",
          height: "70vh",
        }}
      >
        <Box
          sx={{
            zIndex: "10",
            // border: "solid 1px red",
            background: "white",
            padding: "0",
            margin: "0",
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "center",
            gap: "1vh",
            boxShadow: "rgba(0, 0, 0, 0.1) 1px 5px 5px 4px",
            borderRadius: "5px",
            width: "100%",
            height: "12%",
          }}
        >
          <div className="filter-row-box ">
            <Typography
              variant="h5"
              style={{
                // border: "solid 1px red",
                padding: "2% 0",
                margin: "0 0 0 .6vw ",
                color: "var(--color_c)",
                fontSize: "1.1rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "5vw",
              }}
              component="h2"
            >
              Filter by:
            </Typography>
          </div>
          {filter.map((ele, inx) => (
            <div className="filter-row-box " key={inx}>
              {ele}
            </div>
          ))}
        </Box>

        <MarketplaceList />
      </Box>
    </div>
  );
}

export default MarketPlace;
