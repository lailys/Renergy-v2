import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbdContext } from "../provider/provider";

import "./popUp.css";

import FullLengthInput from "../form/fullLengthInput";

import TypeBox from "../form/typeBox";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Dropdown from "../form/dropdown";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Input = styled("input")({
  zIndex: "1",
  opacity: "0",
  cursor: "pointer",
  position: "absolute",
  left: "-2%",
});

function AddRec() {
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
          context.userType !== "client" ? "repeat(14, 1fr)" : "repeat(8, 1fr)",
        gap: "1vh",
        boxShadow: "rgba(0, 0, 0, 0.12) 1px 5px 5px 4px",
        borderRadius: "10px",
        width: "40vw",
        height: context.userType !== "client" ? "40vw" : "30vw",
      }}
    >
      <div className="pop-row-box"> </div>{" "}
      <div className="pop-row-box">
        {" "}
        <Typography
          variant="h5"
          style={{
            padding: "2% 0",
            color: "var(--color_c)",
            fontSize: "1.4rem",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          component="h2"
        >
          {context.userType !== "client" ? "Mint Request" : "REC Info"}{" "}
        </Typography>{" "}
      </div>{" "}
      <div className="pop-row-box">
        <FullLengthInput
          title="Beginning Serial ID"
          length="39.2vw"
          object="rec"
        />
      </div>{" "}
      <div className="pop-row-box">
        <FullLengthInput title="End Serial ID" length="39.2vw" object="rec" />
      </div>{" "}
      <div
        className="pop-row-box"
        style={{
          position: "relative",
        }}
      >
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />

        <FullLengthInput title="Required Files for Green e" length="15vw" />
        <FullLengthInput title="Vintage Date" length="10vw" object="rec" />
        <Dropdown
          title="Select Generator"
          type="alreadyListedGenerator"
          length="18vh"
          height="4.5vh"
          object="rec"
        />
      </div>{" "}
      {context.userType !== "client" ? (
        <>
          <div
            className="pop-row-box"
            style={{
              justifyContent: "flex-start",
              padding: ".5vh ",
              width: "90%",
            }}
          >
            {" "}
            <TypeBox txt=" Admin approve" />
            <Button
              id="go-back-btn-gen"
              style={{
                color: "var(--color_c) ",
                border: "var(--color_c) solid 1px",
                height: "4vh",
              }}
              // onClick={(e) => setTab("")}
            >
              Assign Asset ID{" "}
            </Button>{" "}
          </div>{" "}
          <div
            className="pop-row-box"
            style={{
              justifyContent: "flex-start",
              padding: ".5vh",
              width: "90%",
            }}
          >
            {" "}
            <TypeBox txt="Asset Access" />
            <Button
              id="go-back-btn-gen"
              style={{
                color: "var(--color_c) ",
                border: "var(--color_c) solid 1px",
                height: "4vh",
              }}
              // variant="contained"
              // onClick={(e) => setTab("")}
            >
              Transact{" "}
            </Button>{" "}
          </div>{" "}
          <div
            className="pop-row-box"
            style={{
              justifyContent: "flex-start",
              padding: ".5vh",
              width: "90%",
            }}
          >
            {" "}
            <TypeBox txt="Retire Token" />
            <Button
              id="go-back-btn-gen"
              style={{
                background: "var(--color_c) ",
                height: "4vh",
              }}
              variant="contained"
              // onClick={(e) => setTab("")}
            >
              Retire{" "}
            </Button>{" "}
          </div>{" "}
          <div
            className="pop-row-box"
            style={{
              justifyContent: "flex-start",
              padding: ".5vh",
              width: "90%",
            }}
          >
            <TypeBox txt="Remove Token" />
            <Button
              id="go-back-btn-gen"
              style={{
                background: "var(--color_c) ",
                width: "20%",
                height: "4vh",
              }}
              variant="contained"
              // onClick={(e) => setTab("")}
            >
              Remove{" "}
            </Button>{" "}
          </div>{" "}
          <div className="pop-row-box"> </div>{" "}
          <div className="pop-row-box">
            {" "}
            <Dropdown
              title="Change Owner"
              type="customerClass"
              length="30vh"
              object="gen"
            />{" "}
            <Dropdown
              title="Change Generator"
              type="customerClass"
              length="30vh"
              object="gen"
            />
          </div>{" "}
          <div className="pop-row-box"> </div>{" "}
        </>
      ) : (
        <> </>
      )}
      <div className="pop-row-box">
        <Button
          id="go-back-btn-rec"
          fullWidth
          style={{
            color: "var(--color_c)",
            border: "#7C74D3 solid 1px",
            width: "18%",
            height: "4vh",
          }}
          // variant="contained"
        >
          Back{" "}
        </Button>{" "}
        <Button
          id="submit"
          fullWidth
          style={{
            background: "var(--color_c)",
            width: "18%",
            height: "4vh",
          }}
          variant="contained"
        >
          Cancel{" "}
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
          Save{" "}
        </Button>{" "}
      </div>{" "}
    </Box>
  );
}

export default AddRec;
