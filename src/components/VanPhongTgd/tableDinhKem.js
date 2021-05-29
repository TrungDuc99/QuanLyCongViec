import React from "react";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: lighten(theme.palette.background.paper, 0.1),
  },
  table: {
    minWidth: 650,
  },
}));

function createData(stt, tenfile, mota, loaifile, nguoitao, thoigian) {
  return { stt, tenfile, mota, loaifile, nguoitao, thoigian };
}

const rows = [
  createData(
    "1",
    "file cong viec",
    "mo ta cong viec",
    "file hinh",
    "nguoi tao cong viec",
    "29/5/2021"
  ),
  createData(
    "2",
    "file cong viec",
    "mo ta cong viec",
    "file hinh",
    "nguoi tao cong viec",
    "29/5/2021"
  ),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h4>STT</h4>
            </TableCell>
            <TableCell>
              <h4>Tên file</h4>
            </TableCell>
            <TableCell align="left">
              <h4>Mô tả</h4>
            </TableCell>
            <TableCell align="left">
              <h4>Loại file</h4>
            </TableCell>
            <TableCell align="left">
              <h4>Người tạo</h4>
            </TableCell>
            <TableCell align="left">
              <h4>Thời gian</h4>
            </TableCell>
            <TableCell align="left">
              <h4></h4>
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
              <TableCell align="left">{row.loaifile}</TableCell>
              <TableCell align="left">{row.nguoitao}</TableCell>
              <TableCell align="left">{row.thoigian}</TableCell>
              <TableCell
                component="th"
                scope="row"
                padding="none"
                color="primary"
              >
                <Link to={`thong-tin-chi-tiet/${row.docId}`}>Xem</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
