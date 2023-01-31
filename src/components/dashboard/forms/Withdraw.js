import { useState, useContext } from "react";
import { TbdContext } from "../../../provider/provider";

function Withdraw() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const [withdrawQty, setWithdrawQty] = useState(null);
  const handleChange = (e) => {
    setWithdrawQty(parseInt(e.target.value));
  };
  const withdraw = (e) => {
    context.recAction("withdraw", { qty_to_withdraw: withdrawQty });
  };
  return (
    <div className="col-md-4">
      <label className="popup-form-title">Retire</label>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          id="qty"
          name="QuantityInput"
          aria-describedby="QuantityHelp"
          placeholder="Quantity"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <div className="new-rec-form-wrapper">
          <div className="new-rec-form cancel">CANCEL</div>
          <div className="new-rec-form action-submit" onClick={withdraw}>
            SUBMIT
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
