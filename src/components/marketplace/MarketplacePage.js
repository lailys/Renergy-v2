import { useState } from "react";
import PaginationBar from "../generals/PaginationBar";
import MarketPlaceFilter from "./MarketPlaceFilter";
import MarketplaceTable from "./MarketplaceTable";

function MarketplacePage() {
  const marketplaceList = [
    "ID",
    "Order Type",
    "Current Price",
    "Vintage Date",
    "Quantity",
    "States",
    "Certifying Bodies",
    "Action",
  ];
  const [activePage, setActivePage] = useState(0);
  return (
    <>
      <MarketplaceTable list={marketplaceList} activePage={activePage} />
      <MarketPlaceFilter />
      <PaginationBar
        setActivePage={setActivePage}
        activePage={activePage}
        marketplace
      />
    </>
  );
}

export default MarketplacePage;
