import * as React from 'react';
import axios from 'axios';
import { useState, forwardRef } from 'react';
import { Dialog, Zoom, styled, Slide, Avatar, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Label from 'src/components/Label';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useSnackbar } from 'notistack';

const DialogWrapper = styled(Dialog)(
  () => `
      .MuiDialog-paper {
        overflow: visible;
      }
`
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(12)};
      height: ${theme.spacing(12)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(45)};
      }
`
);

const ButtonError = styled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};
     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const getUserRoleLabel = (userRole) => {
  console.log(userRole);
  const map = {
    0: {
      text: 'Administrator',
      color: 'error'
    },
    1: {
      text: 'User',
      color: 'info'
    }
  };

  const { text, color } = map[userRole];
  return <Label color={color}>{text}</Label>;
};

const DialogDelete = (props) => {
  const { id, getDataServer } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const { t } = useTranslation();

  const handleConfirmDelete = () => {
    setOpenConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };
  
  const handleDeleteCompleted = async () => {
    try{
      const response = await axios.delete(`http://61.47.81.110:3001/api/V1/users/${id}`)
      console.log(response.data);
      getDataServer();
      setOpenConfirmDelete(false);
      enqueueSnackbar(t('Deleted User Successfully'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });
    }catch(error){
      console.log(error);
      setOpenConfirmDelete(false);
      enqueueSnackbar(t('Deleted User Failed'), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        TransitionComponent: Zoom
      });
    }
  };

  return (
    <>
      <Tooltip title={t('Delete')} arrow>
        <IconButton onClick={handleConfirmDelete} color="error">
          <DeleteTwoToneIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <DialogWrapper
        open={openConfirmDelete}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        on
        Close={closeConfirmDelete}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={5}
        >
          <AvatarError>
            <CloseIcon />
          </AvatarError>
          <Typography
            align="center"
            sx={{
              py: 4,
              px: 6
            }}
            variant="h3"
          >
            {t('Are you sure you want to permanently delete this user account')}
            ?
          </Typography>

          <Box>
            <Button
              variant="text"
              size="large"
              sx={{
                mx: 1
              }}
              onClick={closeConfirmDelete}
            >
              {t('Cancel')}
            </Button>
            <ButtonError
              onClick={handleDeleteCompleted}
              size="large"
              sx={{
                mx: 1,
                px: 3
              }}
              variant="contained"
            >
              {t('Delete')}
            </ButtonError>
          </Box>
        </Box>
      </DialogWrapper>
    </>
  );
};

export default function usersTable(props) {
  const { users, getDataServer } = props;
  const { t } = useTranslation();

  return (
    <Paper sx={{ width: '100%', mb: 2 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="center">{t('name')}</TableCell>
              <TableCell align="center">{t('email')}</TableCell>
              <TableCell align="center">{t('role')}</TableCell>
              <TableCell align="center">{t('action')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{++index}</TableCell>
                <TableCell align="center">
                  {row.firstName}&nbsp;{row.lastName}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  {getUserRoleLabel(row.role)}
                </TableCell>

                <TableCell align="center">
                  <Typography noWrap>
                    <DialogDelete id={row.id} getDataServer={getDataServer} />
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          // count={filteredUsers.length}
          // onPageChange={handlePageChange}
          // onRowsPerPageChange={handleLimitChange}
          // page={page}
          // rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 15]}
        />
      </Box>
    </Paper>
  );
}
