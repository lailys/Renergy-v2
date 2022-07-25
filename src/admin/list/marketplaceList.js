import * as React from "react";
import { useSelector } from "react-redux";

import { marketMap } from "../../maps/dashboardMap";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

const columns = [
  ["", "button", 30],
  ["Current Price", "current_price", 30],
  ["Vintage Date", "vintage_date_for_ui", 30],
  ["Quantity", "qty", 30],
  ["States", "states_for_ui", 30],
  ["Certifying Bodies", "certifying_bodies_for_ui", 30],
  ["Order Type", "order_type", 30],
  ["ID", "id", 30],
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
  if (id === "order_type" || id === "certifying_bodies_for_ui") {
    return marketMap[id][row[id]];
  } else {
    return row[id];
  }
};
function MarketplaceList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const data = useSelector((state) => state.user.data);

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
        margin: "0 auto 8% auto",
        position: "absolute",
        top: "16vh",
        left: "0%",
        boxShadow: "rgba(0, 0, 0, 0.1) 1px 5px 5px 4px",
        borderRadius: "5px",
        // border: "solid red 1px",
        height: "76%",
        width: "100%",
      }}
    >
      <TableContainer sx={{ height: "89%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
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
            {data &&
              Array.isArray(data.data) &&
              data.data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index + "row"}
                    >
                      {columns.slice(0, 7).map((column) => {
                        const value = getValue(row, column.id);
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              color: "var(--color_four)",
                              textAlign: "center",
                            }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell
                        key={columns.button}
                        style={{ color: "var(--color_f)", textAlign: "center" }}
                      >
                        <Button
                          id="add-more-btn"
                          fullWidth
                          style={{
                            background: "var(--color_d)",
                            width: "30%",
                            height: "3vh",
                          }}
                          variant="contained"
                        >
                          {row.side === "B" ? "SELL" : "BUY"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data && Array.isArray(data.data) ? data.data.length : 0}
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
  );
}

export default MarketplaceList;
