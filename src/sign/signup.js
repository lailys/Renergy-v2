import React from "react";
import { useContext } from "react";
import { TbdContext } from "../provider/provider";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
  Grid,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Signup() {
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
            Sign Up{" "}
          </Typography>{" "}
          <Box
            component="form"
            noValidate
            onSubmit={(e) => navigate("/user-profile")}
            sx={{
              mt: 3,
              marginTop: 5,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  autoFocus
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  autoComplete="given-name"
                  sx={{
                    "& label": {
                      color: "var(--color_i)",
                    },
                  }}
                  classes={{
                    root: classes.root,
                  }}
                />
              </Grid>{" "}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  sx={{
                    "& label": {
                      color: "var(--color_i-clear",
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
                  id="email"
                  name="email"
                  label="Email Address"
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
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  autoComplete="new-password"
                  sx={{
                    "& label": {
                      color: "var(--color_four)",
                    },
                  }}
                  classes={{
                    root: classes.root,
                  }}
                />{" "}
              </Grid>{" "}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      style={{
                        color: "var(--color_e)",
                        background: "white",
                      }}
                    />
                  }
                  label={
                    <Typography
                      style={{
                        color: "var(--color_h-clear)",
                        fontWeight: "300",
                        width: "100%",
                        fontSize: ".8rem",
                      }}
                    >
                      "I want to receive inspiration, marketing promotions and
                      updates via email. "{" "}
                    </Typography>
                  }
                />{" "}
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
                  ? navigate("/user-profile")
                  : navigate("/admin-profile")
              }
            >
              Sign Up{" "}
            </Button>{" "}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  underline="hover"
                  href="/login"
                  variant="body2"
                  style={{
                    color: "var(--color_seven)",
                  }}
                >
                  Already have an account ? Sign in
                </Link>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Box>{" "}
        </Box>{" "}
      </Container>{" "}
    </ThemeProvider>
  );
}

export default Signup;
