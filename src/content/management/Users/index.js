// import { useState, useEffect, useCallback } from 'react';
// import axios from 'src/utils/axios';
import * as React from 'react';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';

import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Grid } from '@mui/material';
// import useRefMounted from 'src/hooks/useRefMounted';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

// import TableUser from './Results';
import TableUser from './tableUser';
// import PageHeader from './PageHeader';
import CreateUser from './CreateUser';
import EditUser from './EditUser';


function ManagementUsers() {
  const [users, setUsers] = React.useState([]);
  const isMountedRef = useRefMounted();
  const getDataServer = React.useCallback(async () => {
    try {
      const response = await axios.get(`http://61.47.81.110:3001/api/V1/users`);
      if (isMountedRef.current) {
        setUsers(response.data.data);
      }
    } catch (err) {
      console.error(err);
    };
  }, [isMountedRef]);
  
  React.useEffect(() => {
    getDataServer();
  }, [getDataServer]);

  return (
    <>
      <Helmet>
        <title>Users - Management</title>
      </Helmet>
      <PageTitleWrapper>
        <CreateUser getDataServer={getDataServer} />
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
          <TableUser users={users} getDataServer={getDataServer} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ManagementUsers;
