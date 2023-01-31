import { useEffect, useContext } from "react";
import { TbdContext } from "../../provider/provider";

function BalanceAmount() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  // const [amount, setAmount] = useState(0);
  useEffect(() => {
    context.getBalanceAmount();
  }, [context.amount]);
  return (
    <div className="BalanceAmount">
      <div className="BalanceAmount-text-title"> Balance: </div>{" "}
      <div className="BalanceAmount-text-amount"> {context.amount} </div>{" "}
    </div>
  );
}

export default BalanceAmount;
