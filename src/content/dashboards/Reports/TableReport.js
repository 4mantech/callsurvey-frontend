import * as React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';
import useRefMounted from 'src/hooks/useRefMounted';

// function createData(dnis, datetimes, callerid, agentid, agentname, did, score1, score2, score3) {
//   return {
//     dnis,
//     datetimes,
//     callerid,
//     agentid,
//     agentname,
//     did,
//     score1,
//     score2,
//     score3,
//   };
// }

// const rows = [
//   createData('0000', 25, 2, 2000, 5, 22047983, 2, 2, 2),
//   createData('0000', 25, 2, 2001, 5, 22047983, 1, 2, 2),
//   createData('0001', 3, 2, 2001, 5, 22047983, 2, 2, 2),
//   createData('0000', 20, 2, 2001, 5, 22047983, 4, 2, 2),
//   createData('0000', 2022/3/25, 2, 2001, 5, 22047983, 4, 2, 2),
//   createData('0001', 2022/3/25, 2, 2002, 5, 22047983, 4, 2, 2),
//   createData('0001', 2022/3/25, 2, 2001, 5, 22047983, 1, 2, 2),
//   createData('0000', 2022/3/25, 2, 2008, 5, 22047983, 4, 2, 2),
//   createData('0000', 2022/3/25, 2, 2001, 5, 22047983, 3, 2, 2),
//   createData('0000', 2022/3/25, 2, 2001, 5, 22047983, 2, 2, 2),
//   createData('0001', 2022/3/25, 2, 2002, 5, 22047983, 2, 2, 2),
//   createData('0000', 2022/3/25, 2, 2003, 5, 22047983, 4, 2, 2),
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: 'dnis',
//     numeric: false,
//     disablePadding: true,
//     align : 'center',
//     label: 'dnis',
//   },
//   {
//     id: 'datetimes',
//     numeric: true,
//     disablePadding: false,
//     align : 'center',
//     label: 'datetimes',
//   },
//   {
//     id: 'callerid',
//     numeric: true,
//     align : 'center',
//     disablePadding: false,
//     label: 'callerid',
//   },
//   {
//     id: 'agentid',
//     numeric: true,
//     align : 'center',
//     disablePadding: false,
//     label: 'agentid',
//   },
//   {
//     id: 'agentname',
//     numeric: true,
//     align : 'center',
//     disablePadding: false,
//     label: 'agentname',
//   },
//   {
//     id: 'did',
//     numeric: true,
//     align : 'center',
//     disablePadding: false,
//     label: 'did',
//   },{
//     id: 'score1',
//     numeric: true,
//     align : 'center',
//     disablePadding: false,
//     label: 'score1',
//   },{
//     id: 'score2',
//     numeric: true,
//     align : 'center',
//     disablePadding: false,
//     label: 'score2',
//   },{
//     id: 'score3',
//     numeric: true,
//     align : 'center',
//     disablePadding: false,
//     label: 'score3',
//   },
// ];

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const EnhancedTableToolbar = (props) => {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 120%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Report
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };


export default function EnhancedTable() {
  // const [order, setOrder] = React.useState('asc');
  // const [orderBy, setOrderBy] = React.useState('calories');
  // const [selected, setSelected] = React.useState([]);
  // const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [reports, setReports] = React.useState([]);
  const isMountedRef = useRefMounted();

  const getDataServer = React.useCallback(async() => {
    try{
      const response = await axios.get(`http://61.47.81.110:3001/api/v1/reports`);
      console.table(reports);
      if (isMountedRef.current) {
        setReports(response.data.data);
      }
    }catch(err){
      console.error(err);
    };
  },[isMountedRef]);

  React.useEffect(()=>{
    getDataServer();
  },[getDataServer]);

  // const handleRequestSort = (event, property) => {
  //   const isAsc = orderBy === property && order === 'asc';
  //   setOrder(isAsc ? 'desc' : 'asc');
  //   setOrderBy(property);
  // };

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = rows.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  // const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
<Paper sx={{ width: '100%', mb: 2 }}>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
    <TableRow  hover >
      <TableCell align="center">#</TableCell>
      <TableCell align="center">DNIS</TableCell>
      <TableCell align="center">Datetimes</TableCell>
      <TableCell align="center">CALLERID</TableCell>
      <TableCell align="center">AGENTID</TableCell>
      <TableCell align="center">AGENTNAME</TableCell>
      <TableCell align="center">DID</TableCell>
      <TableCell align="center">SCORE1</TableCell>
      <TableCell align="center">SCORE2</TableCell>
      <TableCell align="center">SCORE3</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {reports.map((row,index) => (
      <TableRow
        key={row.callid}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="center">{++index}</TableCell>
        <TableCell align="center">{row.dnis}</TableCell>
        <TableCell align="center">{row.datetimes}</TableCell>
        <TableCell align="center">{row.callerid}</TableCell>
        <TableCell align="center">{row.agentid}</TableCell>
        <TableCell align="center">{row.agentname}</TableCell>
        <TableCell align="center">{row.did ? row.did:"-"}</TableCell>
        <TableCell align="center">{row.score1 ? row.score1:"-"}</TableCell>
        <TableCell align="center">{row.score2 ? row.score2:"-"}</TableCell>
        <TableCell align="center">{row.score3 ? row.score3:"-"}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
</Paper>
  );
}


