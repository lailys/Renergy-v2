import React from "react";

function RecTitleRow() {
  const title = [
    "Status",
    "Vintage Date",
    "Generator ID",
    "Token ID",
    "Serial Num Range",
    "Days to Green-e Expiration",
    "Quantity",
    "",
  ];
  return (
    <>
      {" "}
      {title.map((t, i) => (
        <div
          key={i}
          style={{
            // border: "solid green 1px",
            color: "var(--color_h-clear)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "Roboto, sans-serif",
            fontSize: "1.4vmin",
            fontWeight: "400",
          }}
        >
          {t}{" "}
        </div>
      ))}{" "}
      <div
        style={{
          color: "var(--color_four)",
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

export default RecTitleRow;
