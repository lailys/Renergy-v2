import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function Generators({ tab, setTab }) {
  const title = [
    "name",
    "state",
    "Type",
    "Nameplate Rating",
    "Ceritifying Body",
    "Place In Service",
    "DecomissionDate",
  ];
  return (
    <Box
      style={{
        // border: "solid green 1px",
        background: "white",
        padding: "1vh",
        margin: "10vh 0 2.5vh 2vh",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 2fr 2fr 2fr 2fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr 2fr",
        gap: "1vmin",
        boxShadow: "rgba(0, 0, 0, 0.12) 1px 5px 5px 4px",
        borderRadius: "10px",
        height: "17vh",
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
        Generator{" "}
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
            marginRight: "1vh",
          }}
          onClick={(e) => setTab("add-generator")}
        >
          List A Generator{" "}
        </Button>{" "}
      </div>{" "}
    </Box>
  );
}

export default Generators;
