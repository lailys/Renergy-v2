import { useContext, memo } from "react";
import { TbdContext } from "../../provider/provider";
import { useNavigate } from "react-router-dom";
import BalanceAmount from "./BalanceAmount";
import BalanceBtns from "./BalanceBtns";

function DashboardBlance() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const navigate = useNavigate();
  const payment = (e) => {
    if (e.target.className === "BalanceBtns-add") {
      context.setCurrentPage(context.pageMap[window.location.pathname][0]);
      navigate("/stripe-payment");
    }
    if (e.target.className === "BalanceBtns-withdraw") {
      context.setCurrentPage(context.pageMap[window.location.pathname][0]);
      navigate("/stripe-payout");
    }
  };
  return (
    <div className="DashboardBlance-wrapper" onClick={payment}>
      <BalanceAmount />
      <BalanceBtns />
    </div>
  );
}

export default memo(DashboardBlance);
