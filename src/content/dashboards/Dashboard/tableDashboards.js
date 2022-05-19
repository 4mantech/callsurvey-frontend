// import * as React from 'react';
// // import axios from 'axios';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TablePagination from '@mui/material/TablePagination';
// import Paper from '@mui/material/Paper';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

// export default function dashboardTable(props) {
//   const { data } = props;

//   return (
//     <Paper sx={{ width: '100%', mb: 2 }}>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow hover>
//             <TableCell align="center">#</TableCell>
//             <TableCell align="center">AGENTNAME</TableCell>
//             <TableCell align="center">Datetimes</TableCell>
//             <TableCell align="center">SCORE1</TableCell>
//             <TableCell align="center">SCORE2</TableCell>
//             <TableCell align="center">SCORE3</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row,index) => (
//             <TableRow
//               key={index}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//                 <TableCell align="center">{++index}</TableCell>
//                 <TableCell align="center">{row.agentname}</TableCell>
//                 <TableCell align="center">{row.datetimes}</TableCell>
//                 <TableCell align="center">{row.score1 ? row.score1:"-"}</TableCell>
//                 <TableCell align="center">{row.score2 ? row.score2:"-"}</TableCell>
//                 <TableCell align="center">{row.score3 ? row.score3:"-"}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     <TablePagination
// component="div"
// count={100}
// page={page}
// onPageChange={handleChangePage}
// rowsPerPage={rowsPerPage}
// onRowsPerPageChange={handleChangeRowsPerPage}
//   />
//   </Paper>
//   );
// }

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: '#', minWidth: 20, flex: 1 },
  { field: 'agentname', headerName: 'Agentname', minWidth: 330, flex: 1 },
  { field: 'datetimes', headerName: 'Datetime', minWidth: 330, flex: 1 },
  { field: 'score1', headerName: 'Score1', minWidth: 100, flex: 1 },
  { field: 'score2', headerName: 'Score2', minWidth: 100, flex: 1 },
  { field: 'score3', headerName: 'Score3', minWidth: 100, flex: 1 },
];

// function CustomToolbar() {
//   return (
//     <GridToolbarContainer >
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );
// }b

export default function dashboardTable(props) {
  const { data } = props;
  const rows = data;
  rows.forEach((element, index) => {
    element.id = Number(++index);
  });
  const [pageSize, setPageSize] = React.useState(10);
  return (
    <>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <div style={{ width: '100%' }}>
          <DataGrid
            alignItems="flex-center"
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            rowsPerPageOptions={[10, 20, 50]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            autoHeight
            disableSelectionOnClick
          />
        </div>
      </Paper>
    </>
  );
}
