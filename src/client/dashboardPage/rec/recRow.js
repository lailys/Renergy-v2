import React from "react";

import Dropdown from "../../../form/dropdown";

function RecRow() {
  const title = [
    "Status",
    "Vintage Date",
    "Generator ID",
    "Token ID",
    "Serial Num Range",
    "Days to Green-e Expiration",
    "Quantity",
    // "Action",
  ];
  return (
    <>
      {" "}
      {title.map((t, i) => (
        <div
          key={i}
          style={{
            // border: "solid green 1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Roboto, sans-serif",
            fontSize: "1.6vmin",
            fontWeight: "300",
          }}
        >
          {i}{" "}
        </div>
      ))}{" "}
      <Dropdown
        title="Action"
        type="action"
        length="17vh"
        height="3.5vh"
        object="action"
      />
      <div
        style={{
          color: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Roboto, sans-serif",
          fontSize: "1.6vmin",
          fontWeight: "400",
        }}
      ></div>{" "}
    </>
  );
}

export default RecRow;
