import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbdContext } from "../provider/provider";

import "./popUp.css";

import FullLengthInput from "../form/fullLengthInput";

import TypeBox from "../form/typeBox";
import Box from "@mui/material/Box";
import Dropdown from "../form/dropdown";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function AddGenerator({ setTab }) {
  const [adminApprove, setAdminApprove] = useState(false);
  const [assetAccess, setAssetAccess] = useState(false);
  const navigate = useNavigate();
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists- dashboard component -");
  }
  return (
    <Box
      sx={{
        background: "white",
        padding: "0 0 0 1vw",
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gridTemplateRows:
          context.user !== "client" ? "repeat(15, 1fr)" : "repeat(13, 1fr)",
        gap: "0",
        boxShadow: "rgba(0, 0, 0, 0.12) 1px 5px 5px 4px",
        borderRadius: "10px",
        width: "49vw",
        height: "50vw",
      }}
    >
      {" "}
      <div className="pop-row-box"> </div>{" "}
      <div className="pop-row-box">
        <Dropdown
          title="Generator ID for Generators Listed before"
          type="alreadyListedGenerator"
          length="78vh"
        />
      </div>{" "}
      <div className="pop-row-box">
        {" "}
        <Typography
          variant="h5"
          style={{
            padding: "2% 0",
            color: "var(--color_c)",
            fontSize: "1.4rem",
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          component="h2"
        >
          Generator Info{" "}
        </Typography>{" "}
      </div>{" "}
      <div className="pop-row-box">
        <FullLengthInput title="Site Name" length="48vw" object="gen" />
      </div>{" "}
      <div className="pop-row-box">
        <FullLengthInput title="Site Address" length="48vw" object="gen" />
      </div>{" "}
      <div className="pop-row-box">
        <FullLengthInput title="Address2" length="48vw" object="gen" />
      </div>{" "}
      <div className="pop-row-box">
        <FullLengthInput title="City" length="22vw" object="gen" />
        <FullLengthInput title="State" length="8vw" object="gen" />
        <FullLengthInput title="Zip" length="12vw" object="gen" />
      </div>{" "}
      <div className="pop-row-box">
        <Dropdown
          title="Generator Type"
          type="generatorType"
          length="18vh"
          object="gen"
        />
        <Dropdown
          title="Customer Class"
          type="customerClass"
          length="18vh"
          object="gen"
        />
        <Dropdown
          title="Certifying Body"
          type="certifyingBody"
          length="18vh"
          object="gen"
        />
      </div>{" "}
      <div className="pop-row-box">
        <FullLengthInput title="Placed In Service" length="18vw" object="gen" />
        <FullLengthInput title="System Size" length="10vw" object="gen" />
        <FullLengthInput title="Nameplate Rating" length="14vw" object="gen" />
      </div>{" "}
      <div className="pop-row-box">
        <FullLengthInput title="Decomission Date" length="18vw" object="gen" />
      </div>{" "}
      {context.user !== "client" ? (
        <>
          <div
            className="pop-row-box"
            style={{
              justifyContent: "flex-start",
            }}
          >
            <TypeBox txt=" Admin approve" />
            <Button
              id="go-back-btn-gen"
              style={{
                color: "var(--color_c) ",
                border: "var(--color_c) solid 1px",
                width: "22%",
                height: "4vh",
              }}
              // variant="contained"
              onClick={(e) => setTab("")}
            >
              Assign Asset ID{" "}
            </Button>{" "}
          </div>{" "}
          <div
            className="pop-row-box"
            style={{
              justifyContent: "flex-start",
            }}
          >
            <TypeBox txt="Asset Access" />
            <Button
              id="go-back-btn-gen"
              style={{
                color: "var(--color_c) ",
                border: "var(--color_c) solid 1px",
                width: "22%",
                height: "4vh",
              }}
              // variant="contained"
              onClick={(e) => setTab("")}
            >
              Transact{" "}
            </Button>{" "}
          </div>{" "}
        </>
      ) : (
        <> </>
      )}{" "}
      <div className="pop-row-box"> </div>{" "}
      <div className="pop-row-box">
        <Button
          id="go-back-btn-gen"
          fullWidth
          style={{
            color: "var(--color_c) ",
            border: "var(--color_c) solid 1px",
            width: "18%",
            height: "4vh",
          }}
          // variant="contained"
          onClick={(e) => setTab("")}
        >
          Go Back{" "}
        </Button>{" "}
        <Button
          id="submit-gen"
          fullWidth
          style={{
            background: "var(--color_c)",
            width: "18%",
            height: "4vh",
          }}
          variant="contained"
        >
          Submit{" "}
        </Button>{" "}
        <Button
          id="add-more-btn"
          fullWidth
          style={{
            background: "var(--color_c)",
            width: "30%",
            height: "4vh",
          }}
          variant="contained"
        >
          Add More Assets{" "}
        </Button>{" "}
      </div>{" "}
      <div className="pop-row-box"> </div>
    </Box>
  );
}

export default AddGenerator;
