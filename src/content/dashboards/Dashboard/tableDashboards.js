import * as React from 'react';
// import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function dashboardTable(props) {
  const { data } = props;

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', mb: 2 }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow hover>
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
    <TablePagination
    component="div"
    count={100}
    page={page}
    onPageChange={handleChangePage}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
  </Paper>
  );
}
