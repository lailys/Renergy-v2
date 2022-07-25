import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

function Fund() {
  return (
    <Box
      sx={{
        background: "var( --color_d)",
        position: "fixed",
        top: "12vh",
        left: "15.2vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        height: "12vh",
        width: "20.03vw",
      }}
    >
      <Box
        sx={{
          // border: "solid red 1px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "400",
          fontSize: "1.2rem",
          height: "4vh",
          width: "70%",
        }}
      >
        Current Blance
      </Box>
      <Box
        sx={{
          // border: "solid red 1px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "800",
          fontSize: "2rem",
          height: "6vh",
          width: "60%",
        }}
      >
        $15,000.24
      </Box>
      <Box
        direction="row"
        spacing={1}
        style={{
          padding: "0",
          // border: "solid 1px red",
          position: "fixed",
          top: "15vh",
          left: "37vw",
          height: "6vh",
          width: "40vw",
        }}
      >
        <button className="add-fund-btn" title="add fund" aria-label="add fund">
          <i className="fa" style={{ color: "var( --color_d)" }}>
            &#xf067;
          </i>
        </button>
      </Box>
      {/* <IconButton
        style={{
          position: "fixed",
          right: "30vw",
          // width: "40px",
          // height: "40px",
          // borderRadius: "50%",
        }}
      >
        <AddRoundedIcon
          color="success"
          fontSize="large"
          sx={{
            padding: "0",
            background: "pink",
            fontSize: "3.5rem",
            width: "40px",
            height: "40px",
          }}
        />
      </IconButton> */}
    </Box>
  );
}

export default Fund;
