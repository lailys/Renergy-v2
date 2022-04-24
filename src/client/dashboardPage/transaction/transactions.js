import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Transactions({ openedTab, setOpenedTab }) {
  const title = [
    "Auction ID",
    "Token Id",
    "QTY",
    "Auction Start",
    "Auction Expiration",
    "Start Price",
    "Floor Price",
  ];
  return (
    <Box
      item
      xs={12}
      style={{
        background: "white",
        padding: "1vh",
        margin: "0 0 2.5vh 2vh",
        display: "grid",
        gridTemplateColumns: "2fr 2fr 1fr 2fr 2fr 2fr 2fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 2fr 2fr",
        gap: ".4vmin",
        boxShadow: "rgba(0, 0, 0, 0.12) 1px 5px 5px 4px",
        borderRadius: "10px",
        height: "14vh",
        width: "calc(94% - 2vh)",
      }}
    >
      <Grid
        container
        style={{
          color: "var(--color_c)",
          gridColumnStart: "1",
          gridColumnEnd: "9",
          fontFamily: "Roboto, sans-serif",
          fontSize: "1.8vmin",
          fontWeight: "600",
        }}
      >
        Transaction{" "}
      </Grid>{" "}
      {title.map((t, i) => (
        <div
          key={i}
          style={{
            color: "var(--color_h-clear)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Roboto, sans-serif",
            fontSize: "1.6vmin",
            fontWeight: "400",
          }}
        >
          {t}{" "}
        </div>
      ))}{" "}
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
      {title.map((t, i) => (
        <div
          key={i}
          style={{
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
      {title.map((t, i) => (
        <div
          key={i}
          style={{
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
      {title.map((t, i) => (
        <div
          key={i}
          style={{
            // background: "grey",
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
      <div
        style={{
          // background: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Roboto, sans-serif",
          fontSize: "1.6vmin",
          fontWeight: "400",
        }}
      ></div>{" "}
    </Box>
  );
}

export default Transactions;
