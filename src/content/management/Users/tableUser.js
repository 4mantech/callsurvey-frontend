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



export default function usersTable() {
  const [users, setUsers] = React.useState([]);
  const isMountedRef = useRefMounted();

  const getDataServer = React.useCallback(async() => {
    try{
      const response = await axios.get(`http://61.47.81.110:3001/api/V1/users`);
      console.table(users);
      if (isMountedRef.current) {
        setUsers(response.data.data);
      }
    }catch(err){
      console.error(err);
    };
  },[isMountedRef]);

  React.useEffect(()=>{
    getDataServer();
  },[getDataServer]);

  return (
<Paper sx={{ width: '100%', mb: 2 }}>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell align="center">#</TableCell>
      <TableCell align="center">NAME</TableCell>
      <TableCell align="center">EMAIL</TableCell>
      <TableCell align="center">ROLE</TableCell>
      <TableCell align="center">ACTION</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {users.map((row,index) => (
      <TableRow
        key={row}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="center">{++index}</TableCell>
        <TableCell align="center">{row.firstName}&nbsp;{row.lastName}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
</Paper>
  );
}


