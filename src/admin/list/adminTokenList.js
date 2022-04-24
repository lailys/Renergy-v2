import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  ["Token Access", "tokenAccess", 50],

  ["Admin Approve", "dminApprove", 50],
  ["Remove Dt", "removeDt", 50],
  ["Retired Dt", "retireDt", 50],
  ["State", "state", 50],
  ["Gen Type", "genType", 50],
  ["Generator Name", "genName", 50],
  ["Generator Asset ID", "genAssId", 50],
  ["Owner Id", "ownerId", 50],
  ["Token DB Id", "dbId", 50],
  ["Token ID", "tokenId", 50],
  ["Request Type", "redType", 50],
  ["ID", "id", 50],
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

function createData(
  id,
  redType,
  dbId,
  tokenId,
  ownerId,
  genAssId,
  genName,
  genType,
  state,
  retireDt,
  removeDt,
  dminApprove,
  tokenAccess
) {
  return {
    id,
    redType,
    dbId,
    tokenId,
    ownerId,
    genAssId,
    genName,
    genType,
    state,
    retireDt,
    removeDt,
    dminApprove,
    tokenAccess,
  };
}

const rows = [
  createData("0", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  createData("1", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  createData("2", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
];

function AdminRecList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        height: "60vh",
        width: "70vw",
        position: "absolute",
        top: "25vh",
        left: "15vw",
        // border: "solid red 1px",
      }}
    >
      <TableContainer sx={{ height: "92%" }}>
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
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ color: "var(--color_f)" }}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ color: "var(--color_seven)" }}
      />
    </Paper>
  );
}

export default AdminRecList;
