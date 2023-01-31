import { useState, useContext } from "react";
import { TbdContext } from "../../../provider/provider";

function Retire({}) {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const [retireQty, setRetireQty] = useState(null);
  const handleChange = (e) => {
    setRetireQty(parseInt(e.target.value));
  };
  const retire = (e) => {
    context.recAction("retire", { qty_to_retire: retireQty });
  };
  return (
    <div className="col-md-4">
      <label className="popup-form-title"> Retire </label>{" "}
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          id="qty_to_retire"
          placeholder="Quantity"
          onChange={handleChange}
        />{" "}
      </div>{" "}
      <div className="form-group">
        <div className="new-rec-form-wrapper">
          <div className="new-rec-form cancel">CANCEL</div>{" "}
          <div className="new-rec-form action-submit" onClick={retire}>
            SUBMIT
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Retire;
