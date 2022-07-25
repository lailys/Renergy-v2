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
  ["Asset Access", "assetAcc", 50],
  ["Admin Approve", "adminAprove", 50],
  ["State", "state", 50],
  ["Name plate Rating", "namePlate", 50],
  ["Certifying body", "certifyingBody", 50],
  ["Gen Type", "genType", 50],
  ["Generator Name", "genName", 50],
  ["Generator DB Id", "genId", 50],
  ["Asset ID", "assetId", 50],
  ["Owner Id", "ownerId", 50],
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
  ownerId,
  assetId,
  genId,
  genName,
  genType,
  certifyingBody,
  namePlate,
  state,
  adminAprove,
  assetAcc
) {
  return {
    id,
    ownerId,
    assetId,
    genId,
    genName,
    genType,
    certifyingBody,
    namePlate,
    state,
    adminAprove,
    assetAcc,
  };
}

const rows = [
  createData("0", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  createData("1", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  createData("2", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
];

function AdminGeneratorList() {
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
        // border: "solid blue 1px",
      }}
    >
      <TableContainer sx={{ height: "92%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, f) => (
                <TableCell
                  key={`f-${TableCell}`}
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
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column, j) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={`j-${TableCell}`}
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
        style={{ color: "var(--color_e)" }}
      />
    </Paper>
  );
}

export default AdminGeneratorList;
