import {
  Box,
  CircularProgress,
  Card,
  Typography,
  alpha,
  circularProgressClasses,
  styled,
  Avatar,
  Grid,
  useTheme
  // styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
// import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
// import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import FunctionsIcon from '@mui/icons-material/Functions';

// import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
// import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
// import YardTwoToneIcon from '@mui/icons-material/YardTwoTone';
// import SnowmobileTwoToneIcon from '@mui/icons-material/SnowmobileTwoTone';
import Chart from 'react-apexcharts';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import CallIcon from '@mui/icons-material/Call';

const CardBorderBottom = styled(Card)(
  () => `
    border-bottom: transparent 5px solid;
  `
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      color:  ${theme.colors.alpha.trueWhite[100]};
      width: ${theme.spacing(5.5)};
      height: ${theme.spacing(5.5)};
`
);

// function scoreBoard(props) {
//   const { score1,score2,score3,totalDay } = props.data;
//   // const free = "";
//   const { t } = useTranslation();
//   const theme = useTheme();

// const DotLegend = styled('span')(
//   ({ theme }) => `
//       border-radius: 22px;
//       width: ${theme.spacing(1.5)};
//       height: ${theme.spacing(1.5)};
//       display: inline-block;
//       margin-right: ${theme.spacing(0.5)};
//   `
// );

function SalesByCategory(props) {
  const { data1, data2, data3, dataTotal, totalGivenScore, totalNotGiven } =
    props;
  const { t } = useTranslation();
  const theme = useTheme();
  const reDucer = (data) => {
    return (
      data.reduce((a, b) => {
        return a + b;
      }, 0) === 0
    );
  };

  const total = {
    datasets: [
      {
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.success.main,
          theme.palette.warning.main,
          theme.palette.info.main,
          theme.palette.secondary.main
        ]
      }
    ],
    labels: [t('Score 1'), t('Score 2'), t('Score 3')]
  };

  const sales = {
    datasets: [
      {
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.success.main,
          theme.palette.warning.main,
          theme.palette.info.main,
          theme.palette.secondary.main
        ]
      }
    ],
    labels: [
      t('Point 1'),
      t('Point 2'),
      t('Point 3'),
      t('Point 4'),
      t('Point 5')
    ]
  };

  const scoreSelect = {
    labels: [t('Score')]
  };

  const chartOptions2 = {
    series: [
      {
        name: t('Given Score'),
        data: [totalGivenScore]
      },
      {
        name: t('Not Given Score'),
        data: [totalNotGiven]
      }
    ],
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%',
      background: 'transparent',
      toolbar: {
        show: false,
        download: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 500,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 1000
        }
      }
    },
    stroke: {
      width: 2,
      colors: ['#fff']
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 5
      }
    },
    colors: [theme.palette.success.main, theme.palette.error.main],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${val.toFixed(2)}%`;
      }
    },
    fill: {
      opacity: 1
    },
    labels: scoreSelect.labels,
    // legend: {
    //   labels: {
    //     colors: theme.colors.alpha.trueWhite[100]
    //   },
    //   show: false
    // },
    // stroke: {
    //   width: 1
    // },
    theme: {
      mode: theme.palette.mode
    }
    // legend: {
    //   horizontalAlign: 'left',
    //   offsetX: 80
    // }
  };

  const chartOptions = {
    chart: {
      width: '100%',
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '40%'
        }
      }
    },
    colors: [
      theme.palette.error.main,
      theme.palette.warning.main,
      theme.palette.secondary.light,
      theme.palette.info.main,
      theme.palette.success.main
    ],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${val.toFixed(2)}%`;
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

  const chartOptionTotal = { ...chartOptions };
  const chartOptionTotal2 = { ...chartOptions2 };
  chartOptionTotal.labels = total.labels;

  const chartSeries1 = data1;
  const chartSeries2 = data2;
  const chartSeries3 = data3;
  const chartSeries4 = dataTotal;

  return (
    <Grid container spacing={4}>
      {/* <Grid item xs={12} sm={6}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.error.main}`,
            boxShadow: `
                    0 .7rem 1rem ${alpha(theme.colors.error.main, 0.08)},
                    0 .25rem .7rem ${alpha(theme.colors.error.main, 0.15)}
                    `,
            display: 'flex',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box flexGrow={1} mr={2}>
            <Typography
              component="div"
              fontWeight="bold"
              sx={{
                pb: 1
              }}
              variant="caption"
            >
              {t('ไม่ให้คะแนน')}
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              variant="h2"
            >
              <KeyboardArrowUpTwoToneIcon
                sx={{
                  mr: 0.5,
                  color: `${theme.colors.success.main}`
                }}
              />
              <span>94</span>
            </Typography>
          </Box>
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  color: `${theme.colors.error.main}`
                }}
                variant="h5"
              >
                43%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.error.lighter
              }}
              size={70}
              thickness={2}
              value={100}
            />
            <CircularProgress
              size={70}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.error.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={2}
              variant="determinate"
              value={43}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.success.main}`,
            boxShadow: `
                    0 .7rem 1rem ${alpha(theme.colors.success.main, 0.08)},
                    0 .25rem .7rem ${alpha(theme.colors.success.main, 0.15)}
                    `,
            display: 'flex',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box flexGrow={1} mr={2}>
            <Typography
              component="div"
              fontWeight="bold"
              sx={{
                pb: 1
              }}
              variant="caption"
            >
              {t('ให้คะแนน')}
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              variant="h2"
            >
              <AddTwoToneIcon
                sx={{
                  mr: 0.5,
                  color: `${theme.colors.success.main}`
                }}
              />
              <span>545</span>
              <Typography
                sx={{
                  alignSelf: 'self-end',
                  pl: 0.5
                }}
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                {t('new')}
              </Typography>
            </Typography>
          </Box>
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  color: `${theme.colors.success.main}`
                }}
                variant="h5"
              >
                76%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.success.lighter
              }}
              size={70}
              thickness={2}
              value={100}
            />
            <CircularProgress
              size={70}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.success.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={2}
              variant="determinate"
              value={70}
            />
          </Box>
        </CardBorderBottom>
      </Grid> */}
      <Grid item xs={12}>
        <Card
          sx={{
            px: 3,
            pb: 4,
            pt: 3
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.gradients.blue4}`
              }}
            >
              <CallIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(16)}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('All Score')}
            </Typography>
          </Box>
          {!totalNotGiven && !totalGivenScore ? (
            
            <Typography
            sx={{
              ml: 1.5,
              fontSize: `${theme.typography.pxToRem(30)}`,
              pt: 8,
              fontWeight: 'bold',
            }}
              align="center"
              variant="subtitle2"
              component="div"
              height={192}
            >
              {t('No Score')}
            </Typography>
          ) : (
            <Chart
              height={150}
              // width={1000}
              series={chartOptions2.series}
              options={chartOptionTotal2}
              type="bar"
            />
          )}
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
                background: `${theme.colors.gradients.blue4}`
              }}
            >
              <FunctionsIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(16)}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('Score average')}
            </Typography>
          </Box>
          <Grid
            md={12}
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {reDucer(chartSeries4) ? (
              <Typography
                sx={{
                  ml: 1.5,
                  fontSize: `${theme.typography.pxToRem(30)}`,
                  pt: 8,
                  fontWeight: 'bold'
                }}
                variant="subtitle2"
                component="div"
                height={192}
              >
                {t('No Score')}
              </Typography>
            ) : (
              <Chart
                height={210}
                options={chartOptionTotal}
                series={chartSeries4}
                type="donut"
              />
            )}
          </Grid>
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
              <LooksOneIcon fontSize="small" />
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
          <Grid
            md={12}
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {reDucer(chartSeries1) ? (
              <Typography
                sx={{
                  ml: 1.5,
                  fontSize: `${theme.typography.pxToRem(30)}`,
                  pt: 8,
                  fontWeight: 'bold'
                }}
                variant="subtitle2"
                component="div"
                height={192}
              >
                {t('No Score')}
              </Typography>
            ) : (
              <Chart
                height={210}
                options={chartOptions}
                series={chartSeries1}
                type="donut"
              />
            )}
          </Grid>
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
                background: `${theme.palette.success.main}`
              }}
            >
              <LooksTwoIcon fontSize="small" />
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
          <Grid
            md={12}
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {reDucer(chartSeries2) ? (
              <Typography
                sx={{
                  ml: 1.5,
                  fontSize: `${theme.typography.pxToRem(30)}`,
                  pt: 8,
                  fontWeight: 'bold'
                }}
                variant="subtitle2"
                component="div"
                height={192}
              >
                {t('No Score')}
              </Typography>
            ) : (
              <Chart
                height={210}
                options={chartOptions}
                series={chartSeries2}
                type="donut"
              />
            )}
          </Grid>
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
              <Looks3Icon fontSize="small" />
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
          <Grid
            md={12}
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {reDucer(chartSeries3) ? (
              <Typography
                sx={{
                  ml: 1.5,
                  fontSize: `${theme.typography.pxToRem(30)}`,
                  pt: 8,
                  fontWeight: 'bold'
                }}
                variant="subtitle2"
                component="div"
                height={192}
              >
                {t('No Score')}
              </Typography>
            ) : (
              <Chart
                height={210}
                options={chartOptions}
                series={chartSeries3}
                type="donut"
              />
            )}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

// export default scoreBoard;
export default SalesByCategory;
