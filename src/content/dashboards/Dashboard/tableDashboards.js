import * as React from 'react';
// import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import useRefMounted from 'src/hooks/useRefMounted';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function dashboardTable(props) {
  const { data } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">AGENTNAME</TableCell>
            <TableCell align="center">Datetimes</TableCell>
            <TableCell align="center">SCORE1</TableCell>
            <TableCell align="center">SCORE2</TableCell>
            <TableCell align="center">SCORE3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="center">{++index}</TableCell>
                <TableCell align="center">{row.agentname}</TableCell>
                <TableCell align="center">{row.datetimes}</TableCell>
                <TableCell align="center">{row.score1 ? row.score1:"-"}</TableCell>
                <TableCell align="center">{row.score2 ? row.score2:"-"}</TableCell>
                <TableCell align="center">{row.score3 ? row.score3:"-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
