import TableBody from "../generals/TableBody";
import "./marketplacePage.css";
import MarketPlaceRows from "./MarketPlaceRows";

function MarketplaceTable({ list, activePage, listFilter }) {
  return (
    <TableBody list={list}>
      <MarketPlaceRows activePage={activePage} listFilter={listFilter} />
    </TableBody>
  );
}

export default MarketplaceTable;
