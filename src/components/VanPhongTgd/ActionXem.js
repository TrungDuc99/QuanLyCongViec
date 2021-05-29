import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import { green, red } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import TableNoiDung from "./tableNoiDung";
import TableDonVi from "./tableDonVi";
import TableDinhKem from "./tableDinhKem";
import TableLichSuTT from "./tableLichSuTT";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    </div>
  );
}
///////-data noi dung-///

const a = {
  id: "123",
  mota: "mô tả công việc",
  nguoitao: "Đỗ Trung Đức",
  thoigian: "29/05/2021",
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}
//-----makestyles textfled----//

const useStylesTextfled1 = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    position: "relative",
    minHeight: 500,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(4),
    right: theme.spacing(20),
  },

  fab1: {
    position: "absolute",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
  fabGreen1: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: red[600],
    "&:hover": {
      backgroundColor: red[600],
    },
  },
}));

const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function FloatingActionButtonZoom() {
  const classesGrid = useStylesGrid();

  const classesTextfled1 = useStylesTextfled1();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: "inherit",
      className: clsx(classes.fab, classes.fabGreen),
      icon: <DeleteIcon />,
      label: "Expand",
    },
    {
      color: "inherit",
      className: clsx(classes.fab, classes.fabGreen),
      icon: <DeleteIcon />,
      label: "Expand",
    },
    {
      color: "inherit",
      className: clsx(classes.fab, classes.fabGreen),
      icon: <DeleteIcon />,
      label: "Expand",
    },
  ];
  const fabs1 = [
    {
      color: "inherit",
      className: clsx(classes.fab1, classes.fabGreen1),
      icon: <UpIcon />,
      label: "Expand",
    },
    {
      color: "inherit",
      className: clsx(classes.fab1, classes.fabGreen1),
      icon: <UpIcon />,
      label: "Expand",
    },
    {
      color: "inherit",
      className: clsx(classes.fab1, classes.fabGreen1),
      icon: <UpIcon />,
      label: "Expand",
    },
  ];
  return (
    <Box className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Đơn vị" {...a11yProps(0)} />
          <Tab label="Đính kèm" {...a11yProps(1)} />
          <Tab label="Lịch sử thao tác" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={classesGrid.root}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <TableDonVi />
                </Paper>
              </Grid>

              <Grid item xs={12} sm={8}>
                <Paper className={classes.paper}>
                  <Grid container spacing={4} alignItems="flex-end">
                    <Grid item xs={6}>
                      <h5
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Nội dung
                      </h5>
                      <TextField
                        id="input-with-icon-grid"
                        value={a.mota}
                        className={classesTextfled1.textField}
                        disabled={true}
                        variant="filled"
                      />
                    </Grid>

                    <Grid item xs={3}>
                      <h5>Người tạo</h5>
                      <TextField
                        id="input-with-icon-grid"
                        value={a.nguoitao}
                        disabled={true}
                        className={classesTextfled1.textField}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <h5>Ngày tạo</h5>
                      <TextField
                        id="input-with-icon-grid"
                        value={a.thoigian}
                        disabled={true}
                        className={classesTextfled1.textField}
                      />
                    </Grid>
                  </Grid>
                </Paper>

                <Paper className={classes.paper}>
                  <TableNoiDung />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TableDinhKem />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TableLichSuTT />
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          <Fab
            aria-label={fab.label}
            className={fab.className}
            color={fab.color}
          >
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
      {fabs1.map((fab1, index) => (
        <Zoom
          key={fab1.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          <Fab
            aria-label={fab1.label}
            className={fab1.className}
            color={fab1.color}
          >
            {fab1.icon}
          </Fab>
        </Zoom>
      ))}
    </Box>
  );
}
