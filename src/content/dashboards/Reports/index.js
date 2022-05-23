import * as React from 'react';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import useRefMounted from 'src/hooks/useRefMounted';
import axios from 'axios';

// import Block1 from 'src/content/blocks/Statistics/Block3';
// import Block2 from 'src/content/blocks/ListsLarge/Block8';
// import Block10 from 'src/content/blocks/ListsSmall/Block7';
// import Block11 from 'src/content/blocks/ListsSmall/Block8';
import PageHeader from './PageHeader';
import EnhancedTable from './TableReport';
// import Block3 from './Block3';
// import Block4 from './Block4';
// import Block5 from './Block5';
// import Block6 from './Block6';
// import Block7 from './Block7';
// import Block8 from './Block8';
// import Block9 from './Block9';
// import Block12 from './Block12';
// import Block13 from './Block13';

function DashboardReports() {
  const isMountedRef = useRefMounted();
  const [reports, setReports] = React.useState([]);

  const getDataServer = React.useCallback(async () => {
    try {
      const response = await axios.get(
        `http://61.47.81.110:3001/api/v1/reports`
      );
      console.table(response);
      if (isMountedRef.current) {
        setReports(response.data.data);
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
