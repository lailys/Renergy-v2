import React, { useContext } from "react";
import { TbdContext } from "../../provider/provider";

import Box from "@mui/material/Box";

import "./dashboard.css";

import Recs from "./rec/recs";
import Acuctions from "./auction/auctions";
import DashboardNav from "./nav/dashboardNav";
import Generators from "./generator/generators";
import Transactions from "./transaction/transactions";
import Popup from "./popup";

function Dashboard() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  return (
    <Box
      sx={{
        // border: "solid blue 1px",
        background: "none",
        width: "100vw",
        position: "relative",
        top: "-4vh",
        "& > .MuiBox-root > .MuiBox-root": {
          p: 1,
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gridTemplateRows: "repeat(1, 1fr)",
          gridTemplateAreas: `"sidebar main main main main main main"`,
          width: "100vw",
          height: "92vh",
        }}
      >
        <Box
          sx={{
            gridArea: "main",
          }}
        >
          <div>
            <Generators tab={context.openedTab} setTab={context.setOpenedTab} />{" "}
            <Recs tab={context.openedTab} setTab={context.setOpenedTab} />{" "}
            <Acuctions tab={context.openedTab} setTab={context.setOpenedTab} />{" "}
            <Transactions
              tab={context.openedTab}
              setTab={context.setOpenedTab}
            />{" "}
          </div>{" "}
        </Box>{" "}
        <Box
          sx={{
            gridArea: "sidebar",
            background: "var(--color_c)",
            position: "absolute",
            top: "1vh",
            left: "1vh",
            width: "12vw",
            maxWidth: "12vw",
            minWidth: "12vw",
            borderRadius: "10px 0 0 10px",
            height: "96vh",
          }}
        >
          <DashboardNav />
        </Box>{" "}
      </Box>{" "}
      <Popup tab={context.openedTab} setTab={context.setOpenedTab} />{" "}
    </Box>
  );
}

export default Dashboard;
