// import * as React from 'react';
// import axios from 'axios';
// import useRefMounted from 'src/hooks/useRefMounted';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';

import { Grid } from '@mui/material';


// import SalesByCategory from 'src/content/dashboards/Commerce/SalesByCategory';
import Block2 from './tableDashboards';
// import Block5 from './testchart';
import Block5 from './chartScore1';
// import Block10 from 'src/content/blocks/ListsSmall/Block7';
// import Block11 from 'src/content/blocks/ListsSmall/Block8'; chartDashboard
// import Block3 from './Commerce/SalesByCategory';
import PageHeader from './PageHeader';
import Block1 from './totalScore';
// import Block3 from './Block3';
// import Block4 from './Block4';
// import Block5 from './Block5';
// import Block6 from './Block6';
// import Block7 from './Block7';
// import Block8 from './Block8';
// import Block9 from './Block9';
//  import Block12 from './Block12';
// import Block13 from './Block13';

function DashboardReports() {
  // const [data, setData] = React.useState({});
  // const isMountedRef = useRefMounted();
  // const getDataServer = React.useCallback(async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:4000/api/v1/dashboard`);
  //     console.table(reports);
  //     if (isMountedRef.current) {
  //       setReports(response.data.data);
  //     }
  //   } catch (err) {
  //     console.eror(err);
  //   };
  // }, [isMountedRef]);

  // React.useEffect(() => {
  //   getDataServer();
  // }, [getDataServer]);
  const data = {
    "totalDay":594,
    "score1": 50,
    "score2": 20,
    "score3": 70
  };
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
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
        <Grid item xs={12}>
          <Block1 data={data}/>
        </Grid>
        
        <Grid item xs={12}>
          <Block5 data={data}/>
        </Grid>
        
        <Grid item md={10} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <Block2 /> 
            </Grid>
            {/* <Grid item xs={12}>
              <Block4 />
            </Grid> */}
          </Grid>
        </Grid>
        {/* <Grid item md={5} xs={12}>
          <Block3 />
        </Grid>
        <Grid item xs={12}>
          <Block5 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block6 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block7 />
        </Grid>
        <Grid item md={5} xs={12}>
          <Block8 />
        </Grid>
        <Grid item md={7} xs={12}>
          <Block9 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block10 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block11 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block12 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block13 />
        </Grid> */}
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardReports;
