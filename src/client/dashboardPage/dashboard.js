import { useContext, useEffect } from "react";
import { TbdContext } from "../../provider/provider";
import { useSelector } from "react-redux";

import "./dashboard.css";

import Box from "@mui/material/Box";
import Recs from "./rec/recs";
import Acuctions from "./auction/auctions";
import DashboardNav from "./nav/dashboardNav";
import Generators from "./generator/generators";
import Transactions from "./transaction/transactions";
import Popup from "./popup";

import Fund from "./fund";

function Dashboard({ folder }) {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  const urlMap = {
    transaction: "/order/transaction",
    orders: "/order/search?owner=ME",
    recs: "/rec-token/list/",
    generator: "/generator-asset/",
  };
  useEffect(() => {
    context.getDashboard(urlMap[folder], folder);
    context.setAxctiveGenerator(folder);
  }, [folder]);
  const data = useSelector((state) => state.user);
  console.log(data, "################################################");
  const pageMap = {
    transaction: (
      <Transactions
        tab={context.openedTab}
        setTab={context.setOpenedTab}
        data={data}
      />
    ),
    generator: (
      <Generators
        tab={context.openedTab}
        setTab={context.setOpenedTab}
        data={data}
      />
    ),
    recs: (
      <Recs tab={context.openedTab} setTab={context.setOpenedTab} data={data} />
    ),

    orders: (
      <Acuctions
        tab={context.openedTab}
        setTab={context.setOpenedTab}
        data={data}
      />
    ),
  };
  return (
    <Box
      sx={{
        background: "none",
        width: "100vw",
        position: "fixed",
        bottom: "0",
      }}
    >
      <Fund />
      <DashboardNav />
      <Box
        sx={{
          // border: "solid yellow 1px",
          margin: "0 auto 10vh 15.5vw ",
          position: "relative",
          top: "6vh",
          width: "80vw",
          height: "60vh",
        }}
      >
        {pageMap[folder]}{" "}
        <Box
          sx={{
            opacity: ".2",
            borderRight: "solid var(--color_c) 1px",
            position: "absolute",
            left: "-16.5vw",
            top: "-36vh",
            width: "10vw",
            height: "100vh",
          }}
        />{" "}
      </Box>{" "}
      <Popup tab={context.openedTab} setTab={context.setOpenedTab} />{" "}
    </Box>
  );
}

export default Dashboard;
