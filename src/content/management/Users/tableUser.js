import * as React from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useState, forwardRef } from 'react';
import {
  Dialog,
  Zoom,
  styled,
  Slide,
  Avatar,
  Button,
  Grid,
  DialogTitle,
  DialogActions,
  DialogContent,
  Box,
  Typography,
  TextField,
  CircularProgress
  // Autocomplete
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import wait from 'src/utils/wait';
import { Formik } from 'formik';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Label from 'src/components/Label';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditIcon from '@mui/icons-material/Edit';
import { useSnackbar } from 'notistack';
import Users from 'src/utils/api/users';

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
const DialogEdit = (props) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { getDataServer } = props;
  const { id, firstName, lastName, password, Confirmpassword, email } =
    props.row;
  const [ModalEdit, setModalEdit] = useState(false);
  const [InputFirstName, setInputFirstName] = useState(firstName);
  const [InputLastName, setInputLastName] = useState(lastName);
  const [InputPassword, setInputPassword] = useState(password);
  const [InputConfirmPassword, setInputConfirmPassword] =
    useState(Confirmpassword);
  const [InputEmail, setInputEmail] = useState(email);

  const openModalEdit = () => {
    console.log(firstName);
    setModalEdit(true);
  };

  const closeModalEdit = () => {
    setModalEdit(false);
  };

  const handleEditSuccess = () => {
    enqueueSnackbar(t('The user account was edited successfully'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });

    setModalEdit(false);
  };

  return (
    <>
      <Tooltip title={t('Edit')} arrow>
        <IconButton onClick={openModalEdit} color="warning">
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Dialog fullWidth maxWidth="sm" open={ModalEdit} onClose={closeModalEdit}>
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('Edit User')}
          </Typography>
          <Typography variant="subtitle2">
            {t('Fill in the fields below to edit user')}
          </Typography>
        </DialogTitle>
        <Formik
          initialValues={{
            email: InputEmail,
            firstName: InputFirstName,
            lastName: InputLastName,
            password: '',
            confirmPassword: ''
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email(t('The email provided should be a valid email address'))
              .max(255)
              .required(t('The email field is required')),
            firstName: Yup.string()
              .max(255)
              .required(t('The first name field is required')),
            lastName: Yup.string()
              .max(255)
              .required(t('The last name field is required')),
            password: Yup.string()
              .max(255)
              // .required(t('The password field is required')),
              .oneOf(
                [Yup.ref('confirmPassword')],
                t('Your passwords do not match')
              ),
            confirmPassword: Yup.string()
              .max(255)
              // .required(t('The Confirm Password field is required'))
              .oneOf([Yup.ref('password')], t('Your passwords do not match'))
          })}
          onSubmit={async (
            _values,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            const option = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            try {
              Users.v1.Update(id,_values);
              // const response = await Users.v1.All();
              // const response = await axios.patch(
              //   `http://61.47.81.110:3001/api/V1/users/${id}`,
              //   _values,
              //   option
              // );
              await wait(1000);
              resetForm();
              setStatus({ success: true });
              setSubmitting(false);
              handleEditSuccess();
              getDataServer();
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent
                dividers
                sx={{
                  p: 3
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={12}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          error={Boolean(touched.email && errors.email)}
                          fullWidth
                          helperText={touched.email && errors.email}
                          label={t('Email address')}
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="email"
                          value={values.email}
                          variant="outlined"
                          InputProps={{
                            readOnly: true
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          error={Boolean(touched.firstName && errors.firstName)}
                          fullWidth
                          helperText={touched.firstName && errors.firstName}
                          label={t('First name')}
                          name="firstName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstName}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          error={Boolean(touched.lastName && errors.lastName)}
                          fullWidth
                          helperText={touched.lastName && errors.lastName}
                          label={t('Last name')}
                          name="lastName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.lastName}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          error={Boolean(touched.password && errors.password)}
                          fullWidth
                          margin="normal"
                          helperText={touched.password && errors.password}
                          label={t('Password')}
                          name="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="password"
                          value={values.password}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          error={Boolean(
                            touched.confirmPassword && errors.confirmPassword
                          )}
                          fullWidth
                          margin="normal"
                          helperText={
                            touched.confirmPassword && errors.confirmPassword
                          }
                          label={t('Confirm Password')}
                          name="confirmPassword"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="password"
                          value={values.confirmPassword}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions
                sx={{
                  p: 3
                }}
              >
                <Button color="secondary" onClick={closeModalEdit}>
                  {t('Cancel')}
                </Button>
                <Button
                  type="submit"
                  startIcon={
                    isSubmitting ? <CircularProgress size="1rem" /> : null
                  }
                  disabled={Boolean(errors.submit) || isSubmitting}
                  variant="contained"
                >
                  {t('Submit')}
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </>
  );
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
    try {
      Users.v1.Destroy(id);
      // const response = await axios.delete(
      //   `http://61.47.81.110:3001/api/V1/users/${id}`
      // );
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
    } catch (error) {
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
  const rows = users;

  const columns = [
    { field: 'id', headerName: '#', minWidth: 20, flex: 1, hide: true },
    {
      field: 'fullName',
      headerName: 'Name',
      minWidth: 400,
      flex: 1,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`
    },
    { field: 'email', headerName: 'Email', minWidth: 450, flex: 2 },
    { field: 'role', headerName: 'Role', minWidth: 380, flex: 2 },
    {
      field: 'action',
      headerName: 'Action',
      minWidth: 10,
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          const { api } = params;
          const thisRow = {};

          api
            .getAllColumns()
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          console.log(JSON.stringify(thisRow, null, 3));
        };

        return (
          <>
            <DialogEdit row={params.row} getDataServer={getDataServer} />
            <DialogDelete getDataServer={getDataServer} id={params.id} />
            {/* <Button onClick={onClick}>Click</Button> */}
          </>
        );
      }
    }
  ];

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

  // return (
  //   <Paper sx={{ width: '100%', mb: 2 }}>
  //     <TableContainer component={Paper}>
  //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //         <TableHead>
  //           <TableRow>
  //             <TableCell align="center">#</TableCell>
  //             <TableCell align="center">{t('name')}</TableCell>
  //             <TableCell align="center">{t('email')}</TableCell>
  //             <TableCell align="center">{t('role')}</TableCell>
  //             <TableCell align="center">{t('action')}</TableCell>
  //           </TableRow>
  //         </TableHead>
  //         <TableBody>
  //           {users.map((row, index) => (
  //             <TableRow
  //               key={index}
  //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //             >
  //               <TableCell align="center">{++index}</TableCell>
  //               <TableCell align="center">
  //                 {row.firstName} {row.lastName}
  //               </TableCell>
  //               <TableCell align="center">{row.email}</TableCell>
  //               <TableCell align="center">
  //                 {getUserRoleLabel(row.role)}
  //               </TableCell>

  //               <TableCell align="center">
  //                 <Typography noWrap>
  // <DialogEdit row={row} getDataServer={getDataServer}/>
  // <DialogDelete id={row.id} getDataServer={getDataServer} />
  //                 </Typography>
  //               </TableCell>
  //             </TableRow>
  //           ))}
  //         </TableBody>
  //       </Table>
  //     </TableContainer>
  //     <Box p={2}>
  //       <TablePagination
  //         component="div"
  //         count={users.length}
  //         onPageChange={handlePageChange}
  //         onRowsPerPageChange={handleLimitChange}
  //         page={page}
  //         rowsPerPage={limit}
  //         labelRowsPerPage=""
  //         rowsPerPageOptions={[5, 10, 15]}
  //       />
  //     </Box>
  //   </Paper>
  // );
}
