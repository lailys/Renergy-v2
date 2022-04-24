import React from "react";
import { useContext } from "react";
import { TbdContext } from "../provider/provider";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Signin() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  const navigate = useNavigate();
  const muiTheme = createTheme({});
  const fullInputStyles = makeStyles((theme) =>
    createStyles({
      root: {
        "& .MuiOutlinedInput-root": {
          color: "var(--color_c)",
          "& fieldset": {
            color: "var(--color_c-clear)",
            borderColor: "var(  --color_i-clear)", // default
          },
          "&:hover fieldset": {
            borderColor: "var(--color_j)",
          },
          "&:focus fieldset": {
            borderColor: "var(--color_j)",
          },
        },
      },
    })
  );
  const classes = fullInputStyles();
  return (
    <ThemeProvider theme={muiTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: "var(--color_c-clear)",
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
            Login{" "}
          </Typography>{" "}
          <Box
            component="form"
            noValidate
            onSubmit={(e) => navigate("/user-dashboard")}
            sx={{
              mt: 3,
              marginTop: 8,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{
                    "& label": {
                      color: "var(--color_i-clear)",
                    },
                  }}
                  classes={{
                    root: classes.root,
                  }}
                />{" "}
              </Grid>{" "}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{
                    "& label": {
                      color: "var(--color_i-clear)",
                    },
                  }}
                  classes={{
                    root: classes.root,
                  }}
                />{" "}
              </Grid>{" "}
              <Grid item xs={12}>
                {" "}
              </Grid>{" "}
            </Grid>{" "}
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
              onClick={(e) =>
                context.user === "client"
                  ? navigate("/user-dashboard")
                  : navigate("/admin-dashboard")
              }
            >
              Sign In{" "}
            </Button>{" "}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  underline="hover"
                  href="/signup"
                  variant="body2"
                  style={{
                    color: "var(--color_e-clear)",
                  }}
                >
                  Do not have an account ? Sign up here{" "}
                </Link>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Box>{" "}
        </Box>{" "}
      </Container>{" "}
    </ThemeProvider>
  );
}

export default Signin;
