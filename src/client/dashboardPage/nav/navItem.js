import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function NavItem({ text }) {
  const navigate = useNavigate();
  return (
    <Grid
      item
      xs={12}
      sx={{
        height: "15%",
        width: "100%",
        // border: "solid blue 1px",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "var(--color_c)",
      }}
    >
      <Link
        href={`/dashboard/${text}`}
        underline="hover"
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "1.2vw",
          fontWeight: "300",
          color: "white",
        }}
      >
        {" "}
        {text}
      </Link>
      {/* <Button
        variant="text"
        sx={{ fontWeight: "300", width: "100%", border: "solid red 1px" }}
      >
        {text}
      </Button> */}
    </Grid>
  );
}

export default NavItem;
