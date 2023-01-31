import { dashboardMap } from "../../utils/map";
import TableBody from "../generals/TableBody";
import DashboardRows from "./DashboardRows";

function DashboardTable({ activeTab, activePage, context }) {
  return (
    <TableBody list={dashboardMap[context.dashboardFolder]}>
      <DashboardRows
        activeTab={activeTab}
        activePage={activePage}
        context={context}
      />{" "}
    </TableBody>
  );
}

export default DashboardTable;
