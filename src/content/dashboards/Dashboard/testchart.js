import {
  Typography,
  Box,
  Avatar,
  Card,
  Grid,
  useTheme,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
// import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
// import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import YardTwoToneIcon from '@mui/icons-material/YardTwoTone';
import SnowmobileTwoToneIcon from '@mui/icons-material/SnowmobileTwoTone';

const { t } = useTranslation();
const theme = useTheme();
const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      color:  ${theme.colors.alpha.trueWhite[100]};
      width: ${theme.spacing(5.5)};
      height: ${theme.spacing(5.5)};
`
);
const sales = {
  datasets: [
    {
      backgroundColor: [
        theme.palette.primary.main,
        theme.palette.success.main,
        theme.palette.warning.main,
        theme.palette.info.main
      ]
    }
  ],
  labels: [t('Electronics'), t('Furniture'), t('Fashion'), t('Home & Decor')]
};

const chartOptions = {
  chart: {
    background: 'transparent',
    stacked: false,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    pie: {
      donut: {
        size: '55%'
      }
    }
  },
  colors: [
    theme.palette.primary.main,
    theme.palette.success.main,
    theme.palette.warning.main,
    theme.palette.info.main
  ],
  dataLabels: {
    enabled: true,
    formatter(val) {
      return `${val}%`;
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      color: theme.colors.alpha.black[50],
      opacity: 0.5
    }
  },
  fill: {
    opacity: 1
  },
  labels: sales.labels,
  legend: {
    labels: {
      colors: theme.colors.alpha.trueWhite[100]
    },
    show: false
  },
  stroke: {
    width: 0
  },
  theme: {
    mode: theme.palette.mode
  }
};

function scoreBoard(props) {
  const { score1,score2,score3} = props.data;
  // const free = "";

  const theme = useTheme();
  const chartSeries = [15, 45, 25, 15];
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} lg={3}>
        <Card
          sx={{
            px: 3,
            pb: 6,
            pt: 3
          }}
        >
          <Chart
              height={228}
              options={chartOptions}
              series={chartSeries}
              type="donut"
            />
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <Card
          sx={{
            px: 3,
            pb: 6,
            pt: 3
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.gradients.orange3}`
              }}
            >
              <SupportTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('Score 1')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pt: 2,
              pb: 1.5,
              justifyContent: 'center'
            }}
          >
            <Typography
              sx={{
                pl: 1,
                fontSize: `${theme.typography.pxToRem(35)}`
              }}
              variant="h1"
            >
              {score1}%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Card
          sx={{
            px: 3,
            pb: 6,
            pt: 3
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.success.main}`
              }}
            >
              <YardTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('Score 2')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pt: 2,
              pb: 1.5,
              justifyContent: 'center'
            }}
          >
            <Typography
              sx={{
                pl: 1,
                fontSize: `${theme.typography.pxToRem(35)}`
              }}
              variant="h1"
            >
              {score2}%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Card
          sx={{
            px: 3,
            pb: 6,
            pt: 3
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.primary.main}`
              }}
            >
              <SnowmobileTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('Score 3')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pt: 2,
              pb: 1.5,
              justifyContent: 'center'
            }}
          >
            <Grid
            md={3}
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Chart
              height={300}
              options={chartOptions}
              series={chartSeries}
              type="donut"
            />
          </Grid>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default scoreBoard;