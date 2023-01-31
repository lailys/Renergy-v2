import React, { useState, useContext } from "react";
import { TbdContext } from "../../provider/provider";
import DashboardTable from "./DashboardTable";
import DashboardFilter from "./DashboardFilter";
import PaginationBar from "../generals/PaginationBar";
import DashboardBtn from "./DashboardBtn";
import DashboardBlance from "./DashboardBlance";
import "./dashboadPage.css";

function DashboardPage({ tab }) {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const [activeTab, setActiveTab] = useState(tab || "Generator");
  const [activePage, setActivePage] = useState(0);
  const openCorrectForm = (e) => {
    if (
      e.target.textContent === "RETIRE" ||
      e.target.textContent === "WITHDRAW"
    ) {
      context.setPopupId(e.target.textContent);
      console.log(e.target.getAttribute("data-id"));
      context.setRecId(e.target.getAttribute("data-id"));
    }
    if (e.target.textContent === "ADD ORDER")
      context.setDraftedOrder({
        side: null,
        form: null,
      });
  };
  return (
    <div onClick={openCorrectForm}>
      <DashboardBtn tab={tab} setPopupId={context.setPopupId} />{" "}
      <DashboardTable
        activeTab={activeTab}
        activePage={activePage}
        context={context}
      />{" "}
      <DashboardFilter
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        context={context}
      />{" "}
      <DashboardBlance />
      <PaginationBar
        setActivePage={setActivePage}
        activePage={activePage}
        generator
      />
    </div>
  );
}

export default DashboardPage;
