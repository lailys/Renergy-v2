import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import RecTitleRow from "./recTitleRow";
import RecRow from "./recRow";

function Recs({ tab, setTab }) {
  const title = [
    "Status",
    "Vintage Date",
    "Generator ID",
    "Token ID",
    "Serial Num Range",
    "Days to Green-e Expiration",
    "Quantity",
    "Action",
  ];
  return (
    <Box
      style={{
        // border: "solid green 1px",
        background: "#fffffff9",
        padding: "1vh",
        margin: "0 0 2.5vh 2vh",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 2fr 2fr 3fr 2fr 2fr 2fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 2fr",
        gap: ".5vmin",
        boxShadow: "rgba(0, 0, 0, 0.12) 1px 5px 5px 4px",
        borderRadius: "10px",
        height: "22vh",
        width: "calc(94% - 2vh)",
      }}
    >
      <Grid
        container
        style={{
          color: "var(--color_c)",
          // border: "solid green 1px",
          gridColumnStart: "1",
          gridColumnEnd: "10",
          fontFamily: "Roboto, sans-serif",
          fontSize: "1.8vmin",
          fontWeight: "600",
        }}
      >
        RECs{" "}
      </Grid>{" "}
      <RecTitleRow />
      <RecRow />
      <RecRow />
      <RecRow />
      <div
        style={{
          // background: "grey",
          gridColumnStart: "1",
          gridColumnEnd: "9",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          fontFamily: "Roboto, sans-serif",
          fontSize: "1.6vmin",
          fontWeight: "400",
        }}
      >
        <Button
          variant="contained"
          style={{
            background: "var(--color_c-clear)",
            width: "18%",
            height: "3.5vh",
          }}
          onClick={(e) => setTab("add-generator")}
        >
          List REC{" "}
        </Button>{" "}
      </div>{" "}
    </Box>
  );
}

export default Recs;
