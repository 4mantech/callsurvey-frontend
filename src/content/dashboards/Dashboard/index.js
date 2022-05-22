import * as React from 'react';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

import { Grid } from '@mui/material';

// import SalesByCategory from 'src/content/dashboards/Commerce/SalesByCategory';
import TableDashboards from './tableDashboards';
// import TableDashboardstest from './testchart';
// import Block5 from './testchart';
import ChartScore from './chartScore';
// import Block10 from 'src/content/blocks/ListsSmall/Block7';
// import Block11 from 'src/content/blocks/ListsSmall/Block8'; chartDashboard
// import Block3 from './Commerce/SalesByCategory';
import PageHeader from './PageHeader';
// import Block1 from './totalScore';
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
  const [dataDashboard, setDataDashboard] = React.useState([]);
  const [dataTotalScore, setDataTotalScore] = React.useState([]);
  const [dataScore1, setDataScore1] = React.useState([]);
  const [dataScore2, setDataScore2] = React.useState([]);
  const [dataScore3, setDataScore3] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const isMountedRef = useRefMounted();
  const getDataServer = React.useCallback(async () => {
    const accessToken = window.localStorage.getItem('accessToken');
    const option = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };
    let date = searchParams.get('search')
      ? searchParams.get('search')
      : 'today';
    let dnis = searchParams.get('dnis') ? searchParams.get('dnis') : 'all';
    try {
      const response = await axios.get(
        `http://61.47.81.110:3001/api/v1/dashboard?search=${date}&dnis=${dnis}`
      ,option);
      const { data, score1, score2, score3, totalScore } = response.data;
      if (isMountedRef.current) {
        setDataDashboard(data);
        setDataScore1(score1);
        setDataScore2(score2);
        setDataScore3(score3);
        setDataTotalScore(totalScore);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef, searchParams]);

  React.useEffect(() => {
    getDataServer();
  }, [getDataServer]);


  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
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
          {/* <Block1 data={data}/> */}
        </Grid>

        <Grid item xs={12}>
          <ChartScore
            data1={dataScore1}
            data2={dataScore2}
            data3={dataScore3}
            dataTotal={dataTotalScore}
          />
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
              <TableDashboards data={dataDashboard} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardReports;
