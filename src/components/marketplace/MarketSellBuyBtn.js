function MarketSellBuyBtn({ action, id }) {
  return (
    <button className={`MarketSellBuyBtn ${action}`} id={"buySell-" + id}>
      {" "}
      {action}{" "}
    </button>
  );
}

export default MarketSellBuyBtn;
