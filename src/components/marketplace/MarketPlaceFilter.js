import { useContext, useState } from "react";
import { TbdContext } from "../../provider/provider";
import nextKey from "react-id-generator";
import Dropdown from "react-bootstrap/Dropdown";
import { filter, marketPlaceMap, marketplaceFiltermap } from "../../utils/map";
import Datepicker from "../generals/Datepicker";

function MarketPlaceFilter() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const [value, setValue] = useState(filter);
  const handleChange = (e) => {
    const data = e.split(",");
    const updatedValue = {
      ...value,
    };
    updatedValue[data[2]] = data[0];
    context.getMarketFilterParam(e);
    setValue(updatedValue);
  };
  return (
    <div className="MarketPlaceFilter">
      {" "}
      {marketplaceFiltermap.map((f) => (
        <div className="MarketPlaceFilter-item" key={nextKey()}>
          <Dropdown className="d-inline-block" onSelect={handleChange}>
            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
              {value[f[0]]}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              {marketPlaceMap[f[0]].map((g, i) => (
                <Dropdown.Item
                  as="button"
                  eventKey={marketPlaceMap[f[0]][i] + "," + f[0]}
                  key={nextKey()}
                >
                  {g[0]}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ))}{" "}
      <div className="MarketPlaceFilter-item-date MarketPlaceFilter-item">
        <Datepicker isSideSet={context.isSideSet} />{" "}
      </div>{" "}
    </div>
  );
}

export default MarketPlaceFilter;
