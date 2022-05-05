// import { useState, useEffect, useCallback } from 'react';
// import axios from 'src/utils/axios';

import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Grid } from '@mui/material';
// import useRefMounted from 'src/hooks/useRefMounted';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

// import Block2 from './Results';
import Block2 from './tableUser';
// import PageHeader from './PageHeader';
import CreateUser from './CreateUser';

function ManagementUsers() {
  // const isMountedRef = useRefMounted();
  // const [users, setUsers] = useState([]);

  // const getUsers = useCallback(async () => {
  //   try {
  //     const response = await axios.get('/api/users');

  //     if (isMountedRef.current) {
  //       setUsers(response.data.users);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [isMountedRef]);

  // useEffect(() => {
  //   getUsers();
  // }, [getUsers]);

  return (
    <>
      <Helmet>
        <title>Users - Management</title>
      </Helmet>
      <PageTitleWrapper>
        <CreateUser />
      </PageTitleWrapper>

      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <Block2 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ManagementUsers;
