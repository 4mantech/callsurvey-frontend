import { useRef, useState, useEffect, useCallback } from 'react';
import {
  Typography,
  Button,
  Box,
  alpha,
  lighten,
  Avatar,
  MenuItem,
  Menu,
  styled
} from '@mui/material';
import axios from 'axios';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
// import DocumentScannerTwoToneIcon from '@mui/icons-material/DocumentScannerTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
// import AddAlertTwoToneIcon from '@mui/icons-material/AddAlertTwoTone';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import LineAxisTwoToneIcon from '@mui/icons-material/LineAxisTwoTone';

const AvatarPageTitle = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      color: ${theme.colors.primary.main};
      margin-right: ${theme.spacing(2)};
      background: ${
        theme.palette.mode === 'dark'
          ? theme.colors.alpha.trueWhite[10]
          : theme.colors.alpha.white[50]
      };
      box-shadow: ${
        theme.palette.mode === 'dark'
          ? `0 1px 0 ${alpha(
              lighten(theme.colors.primary.main, 0.8),
              0.2
            )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.3), 0px 5px 16px -4px rgba(0, 0, 0, .5)`
          : `0px 2px 4px -3px ${alpha(
              theme.colors.alpha.black[100],
              0.4
            )}, 0px 5px 16px -4px ${alpha(theme.colors.alpha.black[100], 0.2)}`
      };
`
);

function PageHeader(props) {
  const { setSearchParams, searchParams } = props;
  const { t } = useTranslation();
  const [dniss, setDniss] = useState([{ value: 'all', text: 'All' }]);
  const isMountedRef = useRefMounted();
  const [openPeriod, setOpenMenuPeriod] = useState(false);
  const [openDnis, setOpenMenuDnis] = useState(false);
  const [period, setPeriod] = useState('All');
  const [dnis, setDnis] = useState('All');
  const actionRef1 = useRef(null);
  const actionRef2 = useRef(null);

  const periods = [
    {
      value: 'all',
      text: t('All')
    },
    {
      value: 'today',
      text: t('Today')
    },
    {
      value: 'yesterday',
      text: t('Yesterday')
    },
    {
      value: 'lastmonth',
      text: t('Last month')
    },
    {
      value: 'lastyear',
      text: t('Last year')
    }
  ];

  const getDataServer = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://61.47.81.110:3001/api/v1/dashboard/dnis2`
      );
      const { dnis }= response.data;
      if (isMountedRef.current) {
        let ans = dnis.map((data) => {
          return {
            value: `${data}`,
            text: `${data}`
          };
        });
        setDniss([{ value: 'all', text: 'All' }, ...ans]);
      }
    } catch (err) {
      console.log(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    let search = periods.find((d) =>
      d.value.includes(searchParams.get('search'))
    );
    let initSearch = !search ? { value: 'today', text: t('Today') } : search;
    setPeriod(initSearch);
    getDataServer();
  }, [getDataServer]);

  return (
    <Box
      display="flex"
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <AvatarPageTitle variant="rounded">
          <DashboardIcon fontSize="large" />
        </AvatarPageTitle>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('Dashboard')}
          </Typography>
        </Box>
      </Box>
      <Box mt={{ xs: 3, md: 0 }}>
        <Button
          variant="outlined"
          ref={actionRef2}
          onClick={() => setOpenMenuDnis(true)}
          sx={{
            mr: 1
          }}
          endIcon={<KeyboardArrowDownTwoToneIcon fontSize="small" />}
        >
          {dnis}
        </Button>

        <Menu
          disableScrollLock
          anchorEl={actionRef2.current}
          onClose={() => setOpenMenuDnis(false)}
          open={openDnis}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          {dniss
            ? dniss.map((_dnis) => {
                return (
                  <MenuItem
                    key={_dnis.value}
                    onClick={() => {
                      setDnis(_dnis.text);
                      setOpenMenuDnis(false);
                      setSearchParams({
                        dnis: _dnis.value,
                        search: searchParams.get('search')
                          ? searchParams.get('search')
                          : 'today'
                      });
                    }}
                  >
                    {_dnis.text}
                  </MenuItem>
                );
              })
            : null}
        </Menu>

        <Button
          variant="outlined"
          ref={actionRef1}
          onClick={() => setOpenMenuPeriod(true)}
          sx={{
            mr: 1
          }}
          endIcon={<KeyboardArrowDownTwoToneIcon fontSize="small" />}
        >
          {period.text}
        </Button>

        <Menu
          disableScrollLock
          anchorEl={actionRef1.current}
          onClose={() => setOpenMenuPeriod(false)}
          open={openPeriod}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          {periods.map((_period) => (
            <MenuItem
              key={_period.value}
              onClick={() => {
                setPeriod(_period);
                setOpenMenuPeriod(false);
                setSearchParams({
                  dnis: searchParams.get('dnis')
                    ? searchParams.get('dnis')
                    : 'all',
                  search: _period.value
                });
                // console.log(_period.value)
              }}
            >
              {_period.text}
            </MenuItem>
          ))}
        </Menu>
        {/* <Button variant="contained" startIcon={<DocumentScannerTwoToneIcon />}>
          {t('Export')}
        </Button> */}
      </Box>
    </Box>
  );
}

export default PageHeader;
