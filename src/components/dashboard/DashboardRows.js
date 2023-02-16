import { useEffect, useState, memo } from "react";
import nextKey from "react-id-generator";
import { dashboardTabMap } from "../../utils/map";
import DashboardRetireWithdrawBtn from "./DashboardRetireWithdrawBtn";

function DashboardRows({ activePage, context }) {
  const [list, setList] = useState([]);
  const [activeTab, setActiveTab] = useState("generator");
  const start = activePage * 7;
  useEffect(() => {
    context
      .getDashboard(
        window.location.pathname.split("/dashboard/")[1] || "generator"
      )
      .then((res) => {
        setList(res.data);
        context.setDashboardRowsCount([activeTab, res.data.length]);
        setActiveTab(context.dashboardFolder);
      });
  }, [context.dashboardFolder, context.dashboardTableUpdate]);
  const getValue = (title, order) => {
    const value =
      context.dashboardFolder === activeTab &&
      context.getCorrectData(title[0], order[title[0]]);
    return value === "ACCEPTED" || value === "DRAFT" ? (
      <div
        className={`indv-order-btn ${value}`}
        onClick={(e) =>
          value === "DRAFT"
            ? context.editOrder(e, order)
            : context.cancelOrder(e, order.id)
        }
      >
        {value === "DRAFT" ? "DRAFTED" : "CANCEL"}{" "}
      </div>
    ) : (
      value
    );
  };

  return list
    .sort((a, b) => b.id - a.id)
    .slice(start, start + 7)
    .map((order) => (
      <tr key={nextKey()}>
        {" "}
        {dashboardTabMap[context.dashboardFolder].map((title) => (
          <td
            className={
              title[0] === "price" || title[0] === "price_start"
                ? "align-middle price-td"
                : "align-middle"
            }
            key={nextKey()}
          >
            {title[0] !== "" ? (
              !title[1] ? (
                order[title[0]]
              ) : (
                getValue(title, order)
              )
            ) : (
              <DashboardRetireWithdrawBtn
                id={order.status === "M"}
                orderId={order.id}
              />
            )}{" "}
          </td>
        ))}{" "}
      </tr>
    ));
}

export default memo(DashboardRows);
