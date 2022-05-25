/* eslint-disable jsx-a11y/label-has-for */
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, setIn } from 'formik';
import { useTranslation } from 'react-i18next';
// import { styled } from '@mui/material/styles';
import Users from 'src/utils/api/users';
// import useAuth from 'src/hooks/useAuth';

import {
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  // Box,
  Zoom,
  Typography,
  // Divider,
  TextField,
  CircularProgress,
  // Switch,
  // Avatar,
  Autocomplete,
  // IconButton,
  Button
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useSnackbar } from 'notistack';
// import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';

// const Input = styled('input')({
//   display: 'none'
// });

// const AvatarWrapper = styled(Box)(
//   ({ theme }) => `

//     position: relative;

//     .MuiAvatar-root {
//       width: ${theme.spacing(16)};
//       height: ${theme.spacing(16)};
//     }
// `
// );

// const ButtonUploadWrapper = styled(Box)(
//   ({ theme }) => `
//     position: absolute;
//     width: ${theme.spacing(6)};
//     height: ${theme.spacing(6)};
//     bottom: -${theme.spacing(2)};
//     right: -${theme.spacing(2)};

//     .MuiIconButton-root {
//       border-radius: 100%;
//       background: ${theme.colors.primary.main};
//       color: ${theme.palette.primary.contrastText};
//       box-shadow: ${theme.colors.shadows.primary};
//       width: ${theme.spacing(6)};
//       height: ${theme.spacing(6)};
//       padding: 0;

//       &:hover {
//         background: ${theme.colors.primary.dark};
//       }
//     }
// `
// );

// const roles = [
//   { label: 'Administrator', value: 0 },
//   { label: 'User', value: 1 }
// ];

function CreateUser(props) {
  const { getDataServer, dnis } = props;
  let newDnis = [];
  if (dnis.length > 0) {
    dnis.map((data) => newDnis.push(Object.values(data)[0]));
  }
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [inputDnis, setinputDnis] = useState()
  // const { user } = useAuth();

  // const [publicProfile, setPublicProfile] = useState({
  //   public: true
  // });

  // const handlePublicProfile = (event) => {
  //   setPublicProfile({
  //     ...publicProfile,
  //     [event.target.name]: event.target.checked
  //   });
  // };

  const handleCreateUserOpen = () => {
    setOpen(true);
  };

  const handleCreateUserClose = () => {
    setOpen(false);
  };

  const handleCreateUserSuccess = () => {
    enqueueSnackbar(t('The user account was created successfully'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });

    setOpen(false);
  };
  const handleCreateUserFailed = () => {
    enqueueSnackbar(t('The user account cannot be created'), {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
  };

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('Users Management')}
          </Typography>
          {/* <Typography variant="subtitle2">
            {t(
              'All aspects related to the webapp users can be managed from this page'
            )}
          </Typography> */}
        </Grid>
        <Grid item>
          <Button
            sx={{
              mt: { xs: 2, sm: 0 }
            }}
            onClick={handleCreateUserOpen}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          > 
            {t('Create user')}
          </Button>
        </Grid>
      </Grid>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleCreateUserClose}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('Add new user')}
          </Typography>
          <Typography variant="subtitle2">
            {t(
              'Fill in the fields below to create and add a new user to the site'
            )}
          </Typography>
        </DialogTitle>
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string()
              .max(255)
              .required(t('The first name field is required')),
            lastName: Yup.string()
              .max(255)
              .required(t('The last name field is required')),
            email: Yup.string()
              .email(t('The email provided should be a valid email address'))
              .max(255)
              .required(t('The email field is required')),
            password: Yup.string()
              .max(255)
              .required(t('The password field is required')),
            confirmPassword: Yup.string()
              .max(255)
              .required(t('The Confirm Password field is required'))
              .oneOf([Yup.ref('password')], t('Your passwords do not match'))
          })}
          onSubmit={async (
            _values,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            const dnisAccess = inputDnis
            const newData = {..._values,dnisAccess}
            // const accessToken = window.localStorage.getItem('accessToken');
            // const option = {
            //   headers: {
            //     'Content-Type': 'application/json',
            //     Authorization: `Bearer ${accessToken}`
            //   }
            // };
            // console.log(newData);
            try {
            //   const response = await axios.post(
            //     'http://localhost:4000/api/V1/users',
            //     // 'http://61.47.81.110:3001/api/V1/users',
            //     newData,
            //     option
            //   );
              const response = await Users.v1.Create(newData) 
              resetForm();
              setStatus({ success: true });
              setSubmitting(false);
              handleCreateUserSuccess();
              getDataServer();
            } catch (err) {
              console.log(err);
              handleCreateUserFailed();
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
                          disa
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
                      <Grid item xs={12}>
                        <Autocomplete
                          multiple
                          fullWidth
                          limitTags={2}
                          name="dnisInput"
                          options={dnis}
                          onChange={(_,value)=>{
                            setinputDnis(value)
                          }}
                          getOptionLabel={(option) => option}
                          renderInput={(params) => {
                            return (
                              <TextField
                                {...params}
                                fullWidth
                                onBlur={handleBlur}
                                variant="outlined"
                                label={t('Select Dnis')}
                                placeholder={t('Select Dnis...')}
                              />
                            );
                          }}
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
                <Button color="secondary" onClick={handleCreateUserClose}>
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
                  {t('Add new user')}
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </>
  );
}

export default CreateUser;
