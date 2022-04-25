import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// logoตอนย่อ

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
  () => `
        width: 52px;
        height: 38px;
        margin-top: 4px;
        transform: scale(.8);
`
);

// const LogoSign = styled(Box)(
//   ({ theme }) => `
//         background: ${theme.general.reactFrameworkColor};
//         width: 18px;
//         height: 18px;
//         border-radius: ${theme.general.borderRadiusSm};
//         position: relative;
//         transform: rotate(45deg);
//         top: 3px;
//         left: 17px;

//         &:after, 
//         &:before {
//             content: "";
//             display: block;
//             width: 18px;
//             height: 18px;
//             position: absolute;
//             top: -1px;
//             right: -20px;
//             transform: rotate(0deg);
//             border-radius: ${theme.general.borderRadiusSm};
//         }

//         &:before {
//             background: ${theme.palette.primary.main};
//             right: auto;
//             left: 0;
//             top: 20px;
//         }

//         &:after {
//             background: ${theme.palette.secondary.main};
//         }
// `
// );

// const LogoSignInner = styled(Box)(
//   ({ theme }) => `
//         width: 16px;
//         height: 16px;
//         position: absolute;
//         top: 12px;
//         left: 12px;
//         z-index: 5;
//         border-radius: ${theme.general.borderRadiusSm};
//         background: ${theme.header.background};
// `
// );

const LogoTextWrapper = styled(Box)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
`
);

const LogoImage2 = () =>{
  return <img src="/static/images/logo/logo2.svg" alt="Logo"
  style={{
    width :"80px",
    position: "absolute",
    top: "-17px",
    left: "-12px"
  }} />;
}

function Logo() {
  // const { t } = useTranslation();

  return (
    <LogoWrapper to="/overview">
      <LogoSignWrapper>
        {/* <LogoSign> */}
          {/* <LogoSignInner /> */}
          <LogoImage2 />
        {/* </LogoSign> */}
      </LogoSignWrapper>
      <Box
        component="span"
        sx={{
          display: { xs: 'none', sm: 'inline-block' }
        }}
      >
        <LogoTextWrapper>
          {/* <Tooltip title={`${t('Call Survey')}`} arrow placement="right">
          </Tooltip> */}
        </LogoTextWrapper>
      </Box>
    </LogoWrapper>
  );
}

export default Logo;
