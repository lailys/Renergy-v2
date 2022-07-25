import { useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { orderMap } from "../../../maps/dashboardMap";

import moment from "moment";

function Acuctions({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const columns = [
    ["Order Expire", "end_dt", 2],
    ["Floor Price", "price_end", 2],
    ["Start Price", "price_start", 2],
    ["QTY", "qty", 2],
    ["Token Info", "generator_asset", 1],
    ["Side", "side", 3],
    ["Status", "status", 2],
  ].reduceRight((next, key) => {
    return [
      ...next,
      {
        id: key[1],
        label: key[0],
        minWidth: key[2],
      },
    ];
  }, []);
  const getValue = (row, id) => {
    if (id === "end_dt") {
      return moment(new Date(row[id])).format().split("T")[0];
    } else if (id === "status" || id === "side") {
      return orderMap[id][row[id]];
    } else {
      return row[id];
    }
  };
  return (
    <Box
      item
      xs={12}
      style={{
        background: "white",
        padding: "1vh",
        margin: "0",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1vmin",
        position: "absolute",
        top: "0",
        boxShadow: "rgba(0, 0, 0, 0.1) 1px 5px 5px 4px",
        borderRadius: "0 0 10px 10px",
        height: "70%",
        width: "calc(100% - 2vh)",
      }}
    >
      <Paper
        style={{
          background: "#fffffff9",
          zIndex: "10",
          position: "absolute",
          top: "0",
          border: "solid var(--color_c)  1px",
          height: "100%",
          width: "100%",
        }}
      >
        <TableContainer sx={{ height: "87%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, f) => (
                  <TableCell
                    key={f + "headcell"}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "500",
                      fontSize: "1rem",
                      color: "var(--color_c)",
                      textAlign: "center",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.data &&
                data.data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={i + "tablerow"}
                      >
                        {columns.map((column, j) => {
                          const value = getValue(row, column.id);
                          return (
                            <TableCell
                              key={j + "tablecell"}
                              align={column.align}
                              style={{
                                color: "var(--color_f)",
                                textAlign: "center",
                                // border: "solid green 1px",
                              }}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.data ? data.data.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{
            padding: "0 1vw",
            color: "var(--color_e)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: "4vh",
            width: "calc(100% - 4vw)",
            overflow: "hidden",
            boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.02)",
          }}
        />
      </Paper>
      <Button
        // variant="contained"
        style={{
          color: "var(--color_c)",
          border: "var(--color_c) solid 1px",
          position: "absolute",
          bottom: "-10vh",
          right: "20%",
          width: "20%",
          height: "3.5vh",
          marginRight: "1vh",
        }}
      >
        Abort Auction{" "}
      </Button>{" "}
      <Button
        variant="contained"
        style={{
          background: "var(--color_c)",
          position: "absolute",
          bottom: "-10vh",
          right: "0",
          width: "20%",
          height: "3.5vh",
          // marginRight: "1vh",
        }}
      >
        Approve Auction{" "}
      </Button>{" "}
    </Box>
  );
}

export default Acuctions;
