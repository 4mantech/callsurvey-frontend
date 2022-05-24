import * as React from 'react';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import useRefMounted from 'src/hooks/useRefMounted';
import axios from 'axios';
import Reports from 'src/utils/api/reports'
import PageHeader from './PageHeader';
import EnhancedTable from './TableReport';


function DashboardReports() {
  const isMountedRef = useRefMounted();
  const [reports, setReports] = React.useState([]);

  const getDataServer = React.useCallback(async () => {
    const option = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await Reports.v1.All(option);
      // const response = await axios.get(
      //   `http://61.47.81.110:3001/api/v1/reports`
      // );
      console.table(response);
      if (isMountedRef.current) {
        setReports(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  React.useEffect(() => {
    getDataServer();
  }, [getDataServer]);
  return (
    <>
      <Helmet>
        <title>Reports</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
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
        {/* <Grid item xs={12}>
          <EnhancedTable />
        </Grid> */}

        <Grid item md={10} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <EnhancedTable reports={reports} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardReports;
