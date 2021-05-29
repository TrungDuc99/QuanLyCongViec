import React from "react";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: lighten(theme.palette.background.paper, 0.1),
  },
  table: {
    minWidth: 200,
  },
}));

function createData(stt, tenfile, mota) {
  return { stt, tenfile, mota };
}

const rows = [
  createData("1", "Khối Công Nghệ Thông tin", "Hoàn thành"),
  createData("2", "Khối Ngành kinh doanh", "Chưa hoàn thành"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <h4>#</h4>
            </TableCell>
            <TableCell align="left">
              <h4>Đơn vị</h4>
            </TableCell>
            <TableCell align="left">
              <h4>Trang thái</h4>
            </TableCell>
            <TableCell align="left">
              <h4>icon</h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.stt}
              </TableCell>
              <TableCell align="left">{row.tenfile}</TableCell>
              <TableCell align="left">{row.mota}</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
