import { useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";

import moment from "moment";

function Transactions({ openedTab, setOpenedTab, data }) {
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
    ["Price", "price", 2],
    ["Quantity", "serial_num_end", 2],
    ["Token ID", "serial_num_begin", 2],
    ["Generator ID", "id", 2],
    ["Type", "gtx_type", 1],
    ["Txt Hash", "tx_hashes", 3],
    ["Time Stamp", "timestamp", 2],
  ].reduceRight((next, key) => {
    return [
      ...next,
      {
        id: key[1],
        label: key[0],
        maxWidth: key[2],
      },
    ];
  }, []);
  const getValue = (row, id) => {
    if (id === "timestamp") {
      return moment(new Date(row[id])).format().split("T")[0];
    } else {
      return row[id];
    }
  };
  return (
    <Box
      item
      xs={12}
      style={{
        // border: "solid var(--color_c) 1px",
        background: "white",
        padding: "1vh",
        margin: "0",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: ".4vmin",
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
                                maxWidth: "10vw",
                                whiteSpace: "normal",
                                wordWrap: "break-word",
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
    </Box>
  );
}

export default Transactions;
