import * as React from "react";
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
  ["Current Price", "price", 30],
  ["Vintage Date", "date", 30],
  ["Quantity", "quantity", 30],
  ["State", "state", 30],
  ["Certifying Body", "body", 30],
  ["Generator Type", "type", 30],
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

function createData(type, body, state, quantity, date, price, button) {
  return { type, body, state, quantity, date, price, button };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

function MarketplaceList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

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
                    // color: "var(--color_four)",
                    color: "var(--color_c)",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
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
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ color: "var(--color_four)" }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell
                      key={columns.button}
                      // align={column.align}
                      style={{ color: "var(--color_f)" }}
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
                        buy
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ color: "var(--color_e)" }}
      />
    </Paper>
  );
}

export default MarketplaceList;
