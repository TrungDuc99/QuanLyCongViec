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
    minWidth: 650,
  },
}));

function createData(stt, nguoitao, taibuoc, noidung, thoigian) {
  return { stt, nguoitao, taibuoc, noidung, thoigian };
}

const rows = [
  createData(
    "1",
    "leanhtoan@vietbank.com.vn",
    "Trưởng phòng tạo công việc",
    "Tạo mới công việc",
    "29/5/2021"
  ),
  createData(
    "2",
    "leanhtoan@vietbank.com.vn",
    "Trưởng phòng tạo công việc",
    "Tạo mới công việc",
    "29/5/2021"
  ),
  createData(
    "3",
    "leanhtoan@vietbank.com.vn",
    "Trưởng phòng tạo công việc",
    "Tạo mới công việc",
    "29/5/2021"
  ),
  createData(
    "4",
    "leanhtoan@vietbank.com.vn",
    "Trưởng phòng tạo công việc",
    "Tạo mới công việc",
    "29/5/2021"
  ),
  createData(
    "5",
    "leanhtoan@vietbank.com.vn",
    "Trưởng phòng tạo công việc",
    "Tạo mới công việc",
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
              <h4>Người tạo</h4>
            </TableCell>
            <TableCell align="left">
              <h4>Tại bước</h4>
            </TableCell>
            <TableCell align="left">
              <h4>Nội dung</h4>
            </TableCell>
            <TableCell align="left">
              <h4>Thời gian</h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.stt}
              </TableCell>
              <TableCell align="left">{row.nguoitao}</TableCell>
              <TableCell align="left">{row.taibuoc}</TableCell>
              <TableCell align="left">{row.noidung}</TableCell>
              <TableCell align="left">{row.thoigian}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
