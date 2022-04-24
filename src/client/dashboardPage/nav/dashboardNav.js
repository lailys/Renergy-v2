import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavItem from "./navItem";

function DashboardNav() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        gridTemplateAreas: `". a a a a a ." 
        ". b b b b b ."
        ". c c c  c c ."`,
        width: "100%",
        height: "92vh",
      }}
    >
      <Box
        sx={{
          gridArea: "a",
        }}
      >
        {" "}
      </Box>{" "}
      <Box
        sx={{
          gridArea: "b",
        }}
      >
        <Grid
          container
          // spacing={2}
          style={{
            background: "var(--color_c)",
            // border: "solid yellow 1px",
            height: "100%",
            width: "100%",
            padding: "0",
            margin: "0",
          }}
        >
          <NavItem text="Generators" /> <NavItem text="Recs" />
          <NavItem text="Transactions" />
          <NavItem text="Auctions" />
        </Grid>{" "}
      </Box>{" "}
      <Box
        sx={{
          gridArea: "c",
        }}
      >
        {" "}
      </Box>{" "}
    </Box>
  );
}

export default DashboardNav;
