import { useEffect, useContext, useState, useRef, memo } from "react";
import { TbdContext } from "../../provider/provider";
import nextKey from "react-id-generator";
import MarketSellBuyBtn from "./MarketSellBuyBtn";

function MarketPlaceRows({ activePage }) {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const start = activePage * 7;
  const [list, setList] = useState([]);
  const hasFetchedData = useRef(false);
  useEffect(() => {
    context.getMarketplace().then((res) => {
      setList(res.data);
      context.setMarketplaceRowsCount(res.data.length);
    });
    hasFetchedData.current = true;
  }, [context.filterChanged]);
  return list
    .sort((a, b) => b.id - a.id)
    .slice(start, start + 7)
    .map((order) => (
      <tr key={nextKey()}>
        {" "}
        {[
          ["id", false],
          ["order_type", true],
          ["current_price", true],
          ["vintage_date_for_ui", false],
          ["qty", false],
          ["states_for_ui", false],
          ["certifying_bodies_for_ui", true],
          ["", false],
        ].map((title) => (
          <td
            className={
              title[0] === "current_price"
                ? "align-middle price-td"
                : "align-middle"
            }
            key={nextKey()}
            onClick={context.marketOrderExec}
          >
            {title[0] !== "" ? (
              !title[1] ? (
                order[title[0]]
              ) : (
                context.getCorrectData(title[0], order[title[0]])
              )
            ) : (
              <MarketSellBuyBtn
                action={order.side === "B" ? "SELL" : "BUY"}
                id={order.id}
              />
            )}{" "}
          </td>
        ))}{" "}
      </tr>
    ));
}

export default memo(MarketPlaceRows);
