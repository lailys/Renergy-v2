import React from "react";
import { useContext } from "react";
import { TbdContext } from "../provider/provider";
import { Link } from "react-router-dom";

import { Button, Container, Box, Typography } from "@mui/material";

function Activate() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          // border: "solid red 1px",
          marginTop: "30vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          component="h5"
          variant="h5"
          style={{
            color: "var(--color_c-clear)",
            fontSize: "1rem",
            fontWeight: "300",
          }}
        >
          Activate your account:
        </Typography>
        <Button
          type="submit"
          fullWidth
          style={{
            background: "var(--color_c-clear)",
            height: "5vh",
          }}
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
          }}
          onClick={context.activateAccount}
        >
          ACTIVATE
        </Button>
      </Box>
    </Container>
  );
}

export default Activate;
