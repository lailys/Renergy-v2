import { useContext, useState } from "react";
import { TbdContext } from "../../provider/provider";
import nextKey from "react-id-generator";
import Pagination from "react-bootstrap/Pagination";
import "./paginationBar.css";

function PaginationBar({ setActivePage, activePage, marketplace }) {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const pagesCount = Math.ceil(
    (marketplace
      ? context.marketplaceRowsCount
      : context.dashboardRowsCount[1]) / 7
  );
  const movePage = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "«") setActivePage(0);
    if (e.target.textContent === "‹" && activePage > 0)
      setActivePage((prev) => prev - 1);
    if (e.target.textContent === "»") setActivePage(pagesCount - 1);
    if (e.target.textContent === "›" && activePage < pagesCount - 1)
      setActivePage((prev) => prev + 1);
  };
  return (
    <div className="Pagination-component" onClick={movePage}>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />{" "}
        {[...Array(pagesCount)].map((_, i) =>
          activePage === i ? (
            <Pagination.Item
              key={nextKey()}
              onClick={(e) => setActivePage(i)}
              active
            >
              {" "}
              {i + 1}{" "}
            </Pagination.Item>
          ) : (
            <Pagination.Item key={nextKey()} onClick={(e) => setActivePage(i)}>
              {" "}
              {i + 1}{" "}
            </Pagination.Item>
          )
        )}{" "}
        {/* <Pagination.Ellipsis /> */} <Pagination.Next />
        <Pagination.Last />
      </Pagination>{" "}
    </div>
  );
}

export default PaginationBar;
