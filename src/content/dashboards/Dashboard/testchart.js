// import {
//   Typography,
//   Box,
//   Avatar,
//   Card,
//   Grid,
//   useTheme,
//   styled
// } from '@mui/material';

// import { useTranslation } from 'react-i18next';
// // import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
// import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
// // import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
// import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
// import YardTwoToneIcon from '@mui/icons-material/YardTwoTone';
// import SnowmobileTwoToneIcon from '@mui/icons-material/SnowmobileTwoTone';
// import Chart from 'react-apexcharts';

// const AvatarWrapper = styled(Avatar)(
//   ({ theme }) => `
//       color:  ${theme.colors.alpha.trueWhite[100]};
//       width: ${theme.spacing(5.5)};
//       height: ${theme.spacing(5.5)};
// `
// );

// // function scoreBoard(props) {
// //   const { score1,score2,score3,totalDay } = props.data;
// //   // const free = "";
// //   const { t } = useTranslation();
// //   const theme = useTheme();

// const DotLegend = styled('span')(
//   ({ theme }) => `
//       border-radius: 22px;
//       width: ${theme.spacing(1.5)};
//       height: ${theme.spacing(1.5)};
//       display: inline-block;
//       margin-right: ${theme.spacing(0.5)};
//   `
// );

// function SalesByCategory() {
//   const { t } = useTranslation();
//   const theme = useTheme();

//   const sales = {
//     datasets: [
//       {
//         backgroundColor: [
//           theme.palette.primary.main,
//           theme.palette.success.main,
//           theme.palette.warning.main,
//           theme.palette.info.main,
//           theme.palette.secondary.main
//         ]
//       }
//     ],
//     labels: [
//       t('Point 1'),
//       t('Point 2'),
//       t('Point 3'),
//       t('Point 4'),
//       t('Point 5')
//     ]
//   };

//   const chartOptions = {
//     chart: {
//       background: 'transparent',
//       stacked: false,
//       toolbar: {
//         show: false
//       }
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           size: '40%'
//         }
//       }
//     },
//     colors: [
//       theme.palette.primary.main,
//       theme.palette.success.main,
//       theme.palette.warning.main,
//       theme.palette.info.main,
//       theme.palette.secondary.main
//     ],
//     dataLabels: {
//       enabled: true,
//       formatter(val) {
//         return `${val}%`;
//       },
//       dropShadow: {
//         enabled: true,
//         top: 1,
//         left: 1,
//         blur: 1,
//         color: theme.colors.alpha.black[50],
//         opacity: 0.5
//       }
//     },
//     fill: {
//       opacity: 1
//     },
//     labels: sales.labels,
//     legend: {
//       labels: {
//         colors: theme.colors.alpha.trueWhite[100]
//       },
//       show: false
//     },
//     stroke: {
//       width: 0
//     },
//     theme: {
//       mode: theme.palette.mode
//     }
//   };

//   const chartSeries = [15, 45, 25, 15, 69];

//   return (
//     <Grid container spacing={4}>
//       <Grid item lg={3}>
//         <Card
//           sx={{
//             px: 3,
//             pb: 6,
//             pt: 3
//           }}
//         >
//           <Box display="flex" alignItems="center">
//             <AvatarWrapper
//               sx={{
//                 background: `${theme.colors.gradients.blue4}`
//               }}
//             >
//               <ReceiptTwoToneIcon fontSize="small" />
//             </AvatarWrapper>
//             <Typography
//               sx={{
//                 ml: 1.5,
//                 fontSize: `${theme.typography.pxToRem(16)}`,
//                 fontWeight: 'bold'
//               }}
//               variant="subtitle2"
//               component="div"
//             >
//               {t('Total Day')}
//             </Typography>
//           </Box>
//           <Grid
//             md={12}
//             item
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Chart
//               height={200}
//               options={chartOptions}
//               series={chartSeries}
//               type="donut"
//             />
//           </Grid>
//         </Card>
//       </Grid>

//       <Grid item xs={12} sm={6} lg={3}>
//         <Card
//           sx={{
//             px: 3,
//             pb: 6,
//             pt: 3
//           }}
//         >
//           <Box display="flex" alignItems="center">
//             <AvatarWrapper
//               sx={{
//                 background: `${theme.colors.gradients.orange3}`
//               }}
//             >
//               <SupportTwoToneIcon fontSize="small" />
//             </AvatarWrapper>
//             <Typography
//               sx={{
//                 ml: 1.5,
//                 fontSize: `${theme.typography.pxToRem(15)}`,
//                 fontWeight: 'bold'
//               }}
//               variant="subtitle2"
//               component="div"
//             >
//               {t('Score 1')}
//             </Typography>
//           </Box>
//           <Grid
//             md={12}
//             item
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Chart
//               height={210}
//               options={chartOptions}
//               series={chartSeries}
//               type="donut"
//             />
//           </Grid>
//         </Card>
//       </Grid>

//       <Grid item xs={12} sm={6} lg={3}>
//         <Card
//           sx={{
//             px: 3,
//             pb: 6,
//             pt: 3
//           }}
//         >
//           <Box display="flex" alignItems="center">
//             <AvatarWrapper
//               sx={{
//                 background: `${theme.colors.success.main}`
//               }}
//             >
//               <YardTwoToneIcon fontSize="small" />
//             </AvatarWrapper>
//             <Typography
//               sx={{
//                 ml: 1.5,
//                 fontSize: `${theme.typography.pxToRem(15)}`,
//                 fontWeight: 'bold'
//               }}
//               variant="subtitle2"
//               component="div"
//             >
//               {t('Score 2')}
//             </Typography>
//           </Box>
//           <Grid
//             md={12}
//             item
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Chart
//               height={220}
//               options={chartOptions}
//               series={chartSeries}
//               type="donut"
//             />
//           </Grid>
//         </Card>
//       </Grid>

//       <Grid item xs={12} sm={6} lg={3}>
//         <Card
//           sx={{
//             px: 3,
//             pb: 6,
//             pt: 3
//           }}
//         >
//           <Box display="flex" alignItems="center">
//             <AvatarWrapper
//               sx={{
//                 background: `${theme.colors.primary.main}`
//               }}
//             >
//               <SnowmobileTwoToneIcon fontSize="small" />
//             </AvatarWrapper>
//             <Typography
//               sx={{
//                 ml: 1.5,
//                 fontSize: `${theme.typography.pxToRem(15)}`,
//                 fontWeight: 'bold'
//               }}
//               variant="subtitle2"
//               component="div"
//             >
//               {t('Score 3')}
//             </Typography>
//           </Box>
//           <Grid
//             md={12}
//             item
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Chart
//               height={230}
//               options={chartOptions}
//               series={chartSeries}
//               type="donut"
//             />
//           </Grid>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// }

// // export default scoreBoard;
// export default SalesByCategory;
