// import { useState, useEffect, useCallback } from 'react';
// import axios from 'src/utils/axios';
import * as React from 'react';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';
import Users from 'src/utils/api/users';
import Dashboard from 'src/utils/api/dashboard';

import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Grid } from '@mui/material';
// import useRefMounted from 'src/hooks/useRefMounted';

import PageTitleWrapper from 'src/components/PageTitleWrapper';

// import TableUser from './Results';
import TableUser from './tableUser';
// import ApplicationsJobsPlatform from './test';
// import PageHeader from './PageHeader';
import CreateUser from './CreateUser';
import EditUser from './EditUser';

function ManagementUsers() {
  const [users, setUsers] = React.useState([]);
  const [dnis, setDnis] = React.useState([]);

  const isMountedRef = useRefMounted();
  const getDataServer = React.useCallback(async () => {
    try {
      const response = await Users.v1.FindAll();
      if (isMountedRef.current) {
        setUsers(response.data);
      }
    } catch (err) {
      console.error(err);
    };
  }, [isMountedRef]);

  const getDnis = React.useCallback(async () => {
    try {
      const response = await Users.v1.Dnis();
      if (isMountedRef.current) {
        setDnis(response.dnis);
      }
    } catch (err) {
      console.error(err);
    };
  }, [isMountedRef]);
  
  React.useEffect(() => {
    getDataServer();
    getDnis();
  }, [getDataServer]);


  return (
    <>
      <Helmet>
        <title>Users - Management</title>
      </Helmet>
      <PageTitleWrapper>
        <CreateUser dnis={dnis} getDataServer={getDataServer} />
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
          <TableUser dnis={dnis} users={users} getDataServer={getDataServer} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ManagementUsers;
