import { Badge, Grid, InputBase, Menu, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { MoreVert, Search } from "@material-ui/icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import defaultTheme from "../../theme/defaultTheme";

import clsx from "clsx";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/styles";
import TablePagination from "@material-ui/core/TablePagination";
import { useHistory } from "react-router";
const MySwal = withReactContent(Swal);

/* ------- TOOLBAR ------- */
const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
    display: "flex",
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
  tabs: {
    flex: "1 1 30%",
  },
  tab: {
    padding: "16px 24px",
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: `2px solid ${defaultTheme.palette.primary.main}`,
      cursor: "pointer",
    },
  },
  tabActive: {
    borderBottom: `2px solid ${defaultTheme.palette.primary.main}`,
  },
  search: {
    display: "flex",
    marginLeft: 0,
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #DEDEDE",
    borderRadius: "6px",
    height: "100%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    margin: "2px",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    width: "100%",
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -14,
    top: -5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "4px",
    borderRadius: 4,
  },
}))(Badge);

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { tab, onChangeTab, onSearchChange } = props;
  //Open Dialog

  const handleSearch = (e) => {
    onSearchChange(e.target.value);
  };
  // Tab n??o ??ang ???????c k??ch ho???t set color l?? primary
  const checkTab = (tabLocal) => {
    return tab === tabLocal ? "primary" : "initial";
  };

  const handleTabChange = (tab) => {
    onChangeTab(tab);
  };

  return (
    <div>
      <Toolbar className={classes.root}>
        <Grid container justify="flex-start" className={classes.tabs}>
          <Grid item>
            <div
              className={clsx(classes.tab, {
                [classes.tabActive]: tab === "Ti???p nh???n",
              })}
              onClick={() => handleTabChange("Ti???p nh???n")}
            >
              <StyledBadge badgeContent={99} max={999} color="primary">
                <Typography
                  variant="h6"
                  id="tableTitle"
                  component="div"
                  color={checkTab("Ti???p nh???n")}
                >
                  Ti???p nh???n
                </Typography>
              </StyledBadge>
            </div>
          </Grid>
          <Grid item>
            <div
              className={classes.tab}
              onClick={() => handleTabChange("Vi ph???m")}
            >
              <StyledBadge badgeContent={9999} max={999} color="error">
                <Typography
                  variant="h6"
                  id="tableTitle"
                  component="div"
                  color={checkTab("Vi ph???m")}
                >
                  Vi ph???m
                </Typography>
              </StyledBadge>
            </div>
          </Grid>
          <Grid item>
            <div
              className={classes.tab}
              onClick={() => handleTabChange("Ho??n th??nh")}
            >
              <StyledBadge badgeContent={9999} max={999} color="secondary">
                <Typography
                  variant="h6"
                  id="tableTitle"
                  component="div"
                  color={checkTab("Ho??n th??nh")}
                >
                  Ho??n th??nh
                </Typography>
              </StyledBadge>
            </div>
          </Grid>
        </Grid>
      </Toolbar>

      <Grid container spacing={2} justify="flex-end">
        <Grid item>
          <div className={classes.search}>
            <InputBase
              placeholder="Nh???p th??ng tin c???n t??m???"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleSearch}
              inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.searchIcon}>
              <Search />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
/* ---X--- TOOLBAR ---X--- */

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(namecv, nameroom, nameTp, mailTp, ngaytao) {
  return {
    namecv,
    nameroom,
    nameTp,
    mailTp,
    ngaytao,
    history: [
      {
        date: "2020-01-05",
        mota: "test description",
        note: "test",
        nsth: "L?? Anh To??n",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const history = useHistory();

  //*Pagination

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const sweetAlerts = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        MySwal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.namecv}
        </TableCell>
        <TableCell align="right">{row.nameroom}</TableCell>
        <TableCell align="right">{row.nameTp}</TableCell>
        <TableCell align="right">{row.mailTp}</TableCell>
        <TableCell align="right">{row.ngaytao}</TableCell>
        <TableCell>
          <IconButton aria-controls="menu" onClick={handleClickMenu}>
            <MoreVert />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={open1}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={sweetAlerts}>X??a</MenuItem>
            <MenuItem
              onClick={() => history.push(`/phong/sua-cv/${row.namecv}`)}
            >
              S???a
            </MenuItem>
            <MenuItem onClick={sweetAlerts}>Chuy???n</MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Chi ti???t c??ng vi???c
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Ng??y ho??n th??nh</TableCell>
                    <TableCell>M?? t???</TableCell>
                    <TableCell align="right">Ghi ch??</TableCell>
                    <TableCell align="right">Ng?????i th???c hi???n</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.mota}</TableCell>
                      <TableCell align="right">{historyRow.note}</TableCell>
                      <TableCell align="right">{historyRow.nsth}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "Test",
    "Ph??ng PTUD",
    "L?? Anh To??n",
    "leanhtoan@vietbank.com.vn",
    "19/05/2021",
    3.99
  ),
  createData(
    "Test",
    "Ph??ng PTUD",
    "L?? Anh To??n",
    "leanhtoan@vietbank.com.vn",
    "19/05/2021",
    3.99
  ),
  createData(
    "Test",
    "Ph??ng PTUD",
    "L?? Anh To??n",
    "leanhtoan@vietbank.com.vn",
    "19/05/2021",
    3.99
  ),
  createData(
    "Test",
    "Ph??ng PTUD",
    "L?? Anh To??n",
    "leanhtoan@vietbank.com.vn",
    "19/05/2021",
    3.99
  ),
  createData(
    "Test",
    "Ph??ng PTUD",
    "L?? Anh To??n",
    "leanhtoan@vietbank.com.vn",
    "19/05/2021",
    3.99
  ),
  createData(
    "Test",
    "Ph??ng PTUD",
    "L?? Anh To??n",
    "leanhtoan@vietbank.com.vn",
    "19/05/2021",
    3.99
  ),
  createData(
    "Test",
    "Ph??ng PTUD",
    "L?? Anh To??n",
    "leanhtoan@vietbank.com.vn",
    "19/05/2021",
    3.99
  ),
  createData(
    "Test",
    "Ph??ng PTUD",
    "L?? Anh To??n",
    "leanhtoan@vietbank.com.vn",
    "19/05/2021",
    3.99
  ),
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: lighten(theme.palette.background.paper, 0.1),
  },
}));

export default function CollapsibleTable() {
  const classes = useStyles();

  return (
    <Paper>
      <EnhancedTableToolbar />
      <TableContainer component={Paper} className={classes.root}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>T??n c??ng vi???c</TableCell>
              <TableCell align="right">T??n ph??ng</TableCell>
              <TableCell align="right">Tr?????ng ph??ng</TableCell>
              <TableCell align="right">Email TP</TableCell>
              <TableCell align="right">Ng??y t???o</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={5}
          page={0}
          //onChangePage={handleChangePage}
          // onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Paper>
  );
}
