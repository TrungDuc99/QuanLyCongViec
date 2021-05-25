import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CKEditor from "react-ckeditor-component";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Radio from '@material-ui/core/Radio';
import { useDropzone } from 'react-dropzone';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  FormControl,
  FormControlLabel,

  FormLabel,
  Input,
  InputLabel,
  LinearProgress,
  ListItem,
  MenuItem,
  Paper,
  RadioGroup,
  Select,
  TableCell,
  TableContainer,
  TableRow,
  TextareaAutosize,
  TextField,
  useTheme,
} from "@material-ui/core";
import { DatePicker, KeyboardDatePicker, KeyboardDateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Grid, List } from "react-virtualized";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}
function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
/// data table for nhan xet
function createDatacmt(sttnx, nguoitaonx, taibuoc, noidungnx, thoigiantao) {
  return { sttnx, nguoitaonx, taibuoc, noidungnx, thoigiantao };
}

const rowscmt = [
  createDatacmt('1', 'leanhtoan@vietbank.com.vn', 'Truong phong tao cong viec', 'Tao moi cong viec', '2021/05/25'),
  createDatacmt('2', 'leanhtoan@vietbank.com.vn', 'Truong phong tao cong viec', 'Tao moi cong viec', '2021/05/25'),
];
///data table for tabs uploads file
const columns = [
  { id: 'stt', label: 'STT', minWidth: 170 },
  { id: 'namefile', label: 'Ten File', minWidth: 170 },
  { id: 'mota', label: 'Mo ta', minWidth: 100 },
  {
    id: 'loaifile',
    label: 'Loai File',
    minWidth: 170,
    align: 'right',
    //format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'nguoitao',
    label: 'Nguoi tao',
    minWidth: 170,
    align: 'right',
    //format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'thoigian',
    label: 'Thoi gian',
    minWidth: 170,
    align: 'right',
    //format: value => value.toFixed(2),
  },
];

function createData(stt, namfile, mota, loaifile,nguoitao, thoigian) {
  const density = loaifile / nguoitao;
  return { stt, namfile, mota, loaifile,nguoitao, thoigian };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263,'2021/05/25'),
  createData('China', 'CN', 1403500365, 9596961,'2021/05/25'),
  createData('Italy', 'IT', 60483973, 301340,'2021/05/25'),
  createData('United States', 'US', 327167434, 9833520,'2021/05/25'),
  
];
//0--------//
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,

  },
   heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ScrollableTabsButtonForce() {

//---- thong tin chi tiet cong viec
  
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeinf = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  //---------
  const classes = useStyles1();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [submited, setSubmited] = useState(false);
  // defaut Persion

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
  const [state, setState] = useState({
    name: "",
    description: "",
    note: "",
    people: [],
    date: "2017-05-24",
  });
  const [selectedDate, handleDateChange] = useState(
    new Date("2021-05-23T18:54")
  );
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

// xu ly checkbox
  const [valueckb1, setValueckb1] = React.useState('');
  const [valueckb2, setValueckb2] = React.useState('');
  const [valueckb3, setValueckb3] = React.useState('');
  const [error, setError] = React.useState(false);

  const [disabledckb, setdisabledckb] = React.useState(false);
  const handleRadioChange = (event) => {
      setValueckb1(event.target.value);
      setError(false);
    };
     const handleRadioChange1 = (event) => {
      setValueckb2(event.target.value);
      setError(false);
    };
    const handleRadioChange2 = (event) => {
      setValueckb3(event.target.value);
      setError(false);
    };
    const checkboxCoTH = () => {
      setdisabledckb(true);
    };
    const checkboxKhongTH = () => {
      setdisabledckb(false);
    };

  ///xu ly select trong chon don vi
  const [stateselect1, settateselect1] = React.useState({
    age: '',
    name: 'hai',
  });
  const [stateselect2, settateselect2] = React.useState({
    age: '',
    name: 'hai',
  });
  const [stateselect3, settateselect3] = React.useState({
    age: '',
    name: 'hai',
  });
   const handleChangeselecteDV1 = (event) => {
    const name = event.target.name;
    settateselect1({
      ...state,
      [name]: event.target.value,
    });
  };
  const handleChangeselecteDV2 = (event) => {
    const name = event.target.name;
    settateselect2({
      ...state,
      [name]: event.target.value,
    });
  };
  const handleChangeselecteDV3 = (event) => {
    const name = event.target.name;
    settateselect3({
      ...state,
      [name]: event.target.value,
    });
  };

  // xu ly upload file 
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map(file => (
    <ListItem key={file.path}>
      {file.path} - {file.size} bytes
    </ListItem>
  ));
// xu ly progress bar cho file upload
  
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // table loai file upload
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Thong tin" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab label="Thuoc tinh" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Chon don vi" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Dinh kem" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Nhan xet" icon={<ShoppingBasket />} {...a11yProps(4)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2>Thong tin</h2>
      <Box className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChangeinf('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography className={classes.heading}>Ten cong viec</Typography>
          <Typography className={classes.secondaryHeading}>Test</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>

      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChangeinf('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography className={classes.heading}>Mo ta</Typography>
          <Typography className={classes.secondaryHeading}>Test Decription</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChangeinf('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography className={classes.heading}>Ghi chu</Typography>
          <Typography className={classes.secondaryHeading}>
            Test Note
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
            Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChangeinf('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography className={classes.heading}>Ten Phong</Typography>
          <Typography className={classes.secondaryHeading}>
           Phong PTUD
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
            Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChangeinf('panel5')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography className={classes.heading}>Truong phong</Typography>
          <Typography className={classes.secondaryHeading}>
            Le Anh Toan
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
            Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChangeinf('panel6')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography className={classes.heading}>Loai</Typography>
          <Typography className={classes.secondaryHeading}>
            Loai cong viec
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
            Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChangeinf('panel7')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography className={classes.heading}>Loai cong viec</Typography>
          <Typography className={classes.secondaryHeading}>
           Vo thoi han
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
            Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion expanded={expanded === 'panel8'} onChange={handleChangeinf('panel8')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography className={classes.heading}>Cap phe duet cuoi cung</Typography>
          <Typography className={classes.secondaryHeading}>
           Van phong TGD
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.
            Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>

      </TabPanel>

      <TabPanel value={value} index={1}>
      <FormControl>
      <FormControl>
      <FormControl
        component="fieldset"
        error={error}
        className={classes.formControl}
      >
        <FormLabel component="legend">Chon thoi gian hoan thanh cong viec</FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="ThoiGian"
          value={valueckb1}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="cothoihan"
            control={<Radio />}
            label="Co thoi han"
            onClick={checkboxCoTH}
          />
          <FormControlLabel
            value="khongthoihan"
            control={<Radio />}
            label="Khong Thoi Han"
            onClick={checkboxKhongTH}
          />
        </RadioGroup>
         <FormLabel component="legend">Loai Cong Viec</FormLabel>
          <RadioGroup aria-label="quiz" name="LoaiCV" value={valueckb2} onChange={handleRadioChange1}>
          <FormControlLabel  value="qltotrinh" control={<Radio />} label="Quan ly to trinh" />
          <FormControlLabel  value="qlcv" control={<Radio />} label="Quan ly cong viec" />
        </RadioGroup>
         <FormLabel component="legend">Cap phe duyet cuoi cung</FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="pheduyet"
          value={valueckb3}
          onChange={handleRadioChange2}
        >
          <FormControlLabel
            value="khoi"
            control={<Radio />}
            label="Khoi"
          />
          <FormControlLabel
            value="vpTGD"
            control={<Radio />}
            label="Van phong Tong Giam Doc"
          />
        </RadioGroup>
      </FormControl>
      <FormLabel component="legend">Bat dau va ke thuc</FormLabel>
        <KeyboardDateTimePicker
          value={selectedDate}
          label="chon ngay bat dau"
          onError={console.log}
          minDate={new Date("2018-01-01T00:00")}
          format="yyyy/MM/dd hh:mm a"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          // set statis khi chon checkbox
          disabled={disabledckb}
        />

        <KeyboardDateTimePicker
          value={selectedDate}
          label="chon ngay ket thuc"
          onError={console.log}
          minDate={new Date("2018-01-01T00:00")}
          format="yyyy/MM/dd hh:mm a"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          disabled={disabledckb}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        
          </FormControl>
          <FormControl> 
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
          >
            Tạo
          </Button>
          </FormControl>
          </FormControl>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Chon don vi</h2>
        <Paper>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
            <Select
          native
          value={state.age}
          onChange={handleChangeselecteDV1}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
          </FormControl>
        </Paper>
        <h2>Chon trung tam</h2>
        <Paper>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
            <Select
          native
          value={state.age}
          onChange={handleChangeselecteDV2}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
          </FormControl>
        </Paper>
        <h2>Chon phong</h2>
        <Paper>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
            <Select
          native
          value={state.age}
          onChange={handleChangeselecteDV3}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
          </FormControl>
        </Paper>
        <h2>Nhân sự thực hiện</h2>
        <Paper>
          <FormControl fullWidth className={classes.margin} variant="outlined">
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
                    <Chip key={value} label={value} className={classes.chip} />
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
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <h2>Mô tả công việc</h2>
          
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
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Tạo
        </Button>
      </TabPanel>
      
      <TabPanel value={value} index={3}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <h2>Mô tả công việc</h2>
          
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
        <h2>Loai file</h2>
        <Paper>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
            <Select
          native
          value={state.age}
          onChange={handleChangeselecteDV3}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
          </FormControl>
        </Paper>
              
       <Box className={classes.root}>
          <Box>
      <Box {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Typography>Drag 'n' drop some files here</Typography>
        <Button variant="outlined" type="button" onClick={open}>
          Open File Dialog
        </Button>
      </Box>
      
        <Typography component="h4" variant="inherit">
          Files{files}
        </Typography>
        <List>{files}</List>
        </Box>
      </Box>

      <div className={classes.root}>
          <LinearProgressWithLabel value={progress} />
        </div>


    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.namfile}>
                  {columns.map(column => {
                    const value = row[column.stt];
                    return (
                      <TableCell key={column.stt} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>

      </TabPanel>
      <TabPanel value={value} index={4}>
      <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align="right">Nguoi tao</TableCell>
            <TableCell align="right">Tai buoc</TableCell>
            <TableCell align="right">Noi dung</TableCell>
            <TableCell align="right">Thoi gian</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowscmt.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.sttnx}
              </TableCell>
              <TableCell align="right">{row.nguoitaonx}</TableCell>
              <TableCell align="right">{row.taibuoc}</TableCell>
              <TableCell align="right">{row.noidungnx}</TableCell>
              <TableCell align="right">{row.thoigiantao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
    </Box>
  );
}
