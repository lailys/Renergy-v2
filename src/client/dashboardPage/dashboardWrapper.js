import { useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

function DashboardWrapper({ columns, data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper
      style={{
        background: "#fffffff9",
        zIndex: "10",
        position: "absolute",
        top: "0",
        border: "solid var(--color_c)  1px",
        height: "100%",
        width: "calc(100% )",
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
                        const value = row[column.id];
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
          // border: "1px red solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: "4vh",
          width: "calc(100% - 2vw)",
          // -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
          // -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
          boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.05)",
        }}
      />
    </Paper>
  );
}

export default DashboardWrapper;
