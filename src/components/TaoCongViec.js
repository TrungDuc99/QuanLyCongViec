import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import CKEditor from "react-ckeditor-component";
import SaveIcon from "@material-ui/icons/Save";
import { KeyboardDateTimePicker } from "@material-ui/pickers";

import {
  Input,
  MenuItem,
  Select,
  TextareaAutosize,
  useTheme,
} from "@material-ui/core";

import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  section: {
    "&:not(:last-child)": {
      marginBottom: theme.typography.pxToRem(32),
    },
  },
  sectionHeading: {
    marginBottom: theme.typography.pxToRem(16),
  },

  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(6),
  },
}));

//---fake list select -----
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
//-----------//*/

const TaoCvPhong = () => {
  const [state, setState] = useState({
    name: "",
    description: "",
    note: "",
    people: [],
    date: "2017-05-24",
  });

  const [submited, setSubmited] = useState(false);
  // defaut Persion
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  // Select persion

  const handleChange1 = (event) => {
    setPersonName(event.target.value);
  };
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setState({ ...state, description: newContent });
  };
  const handleSubmit = (e) => {
    // your submit logic
    console.log(e);
    setSubmited(true);
  };

  const onBlur = (evt) => {
    console.log("onBlur event called with event info: ", evt);
  };

  const afterPaste = (evt) => {
    console.log("afterPaste event called with event info: ", evt);
  };
  ///---pick date--
  const [selectedDate, handleDateChange] = useState(
    new Date("2019-01-01T18:54")
  );
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <h3>Tên công việc</h3>
          <Paper>
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
              <TextField
                error={submited && state.name === ""}
                required
                value={state.name}
                id="NameCV"
                label="Outlined"
                variant="outlined"
                labelWidth={60}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={6}></Grid>
        <Grid item xs={8}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <h3>Mô tả công việc</h3>
            <Paper className={classes.paper}>
              <CKEditor
                activeClass="p10"
                content={state.description}
                events={{
                  blur: onBlur,
                  afterPaste: afterPaste,
                  change: onChange,
                }}
              />
            </Paper>
          </FormControl>
        </Grid>

        <Grid item xs={6}></Grid>

        <Grid item xs={8}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <h3>Ghi chú công việc</h3>

            <TextareaAutosize
              rowsMin={4}
              placeholder=""
              defaultValue=""
              style={{ width: "100%" }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6}></Grid>

        <Grid item xs={8}>
          <h3>Nhân sự thực hiện</h3>
          <Paper>
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange1}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={6}></Grid>

        <Grid item xs={8}>
          <h3>Ngày Thực hiện</h3>{" "}
          <Paper>
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
              <KeyboardDateTimePicker
                value={selectedDate}
                onChange={handleDateChange}
                label="Keyboard with error handler"
                onError={console.log}
                minDate={new Date("2018-01-01T00:00")}
                format="yyyy/MM/dd hh:mm a"
              />
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={6}></Grid>

        <Grid item xs={8}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
          >
            Tạo
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TaoCvPhong;
