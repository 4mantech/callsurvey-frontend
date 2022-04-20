import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Link,
  // Tooltip,
  Typography,
  Container,
  // Alert,
  styled
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
// import Logo from 'src/components/Logo';
// import Scrollbar from 'src/components/Scrollbar';

import useAuth from 'src/hooks/useAuth';
import Auth0Login from '../LoginAuth0';
import FirebaseAuthLogin from '../LoginFirebaseAuth';
import JWTLogin from '../LoginJWT';
import AmplifyLogin from '../LoginAmplify';

// const icons = {
//   Auth0: '/static/images/logo/auth0.svg',
//   FirebaseAuth: '/static/images/logo/firebase.svg',
//   JWT: '/static/images/logo/jwt.svg',
//   Amplify: '/static/images/logo/amplify.svg'
// };

const Content = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    width: 100%;
`
);

const MainContent = styled(Box)(
  () => `
  width: 100%;
  display: flex;
  align-items: center;
`
);

// const SidebarWrapper = styled(Box)(
//   ({ theme }) => `
//     position: fixed;
//     left: 0;
//     top: 0;
//     height: 100%;
//     background: ${theme.colors.alpha.white[100]};
//     width: 440px;
// `
// );

// const SidebarContent = styled(Box)(
//   ({ theme }) => `
//   display: flex;
//   flex-direction: column;
//   padding: ${theme.spacing(6)};
// `
// );

// const CardImg = styled(Card)(
//   ({ theme }) => `
//     border-radius: 100%;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//     border: 1px solid ${theme.colors.alpha.black[10]};
//     transition: ${theme.transitions.create(['border'])};
//     position: absolute;

//     &:hover {
//       border-color: ${theme.colors.primary.main};
//     }
// `
// );

// const TypographyH1 = styled(Typography)(
//   ({ theme }) => `
//     font-size: ${theme.typography.pxToRem(33)};
// `
// );

function LoginCover() {
  const { method } = useAuth();
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Content>
        <MainContent>
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
            maxWidth="sm"
          >
            <Card
              sx={{
                p: 4,
                my: 4
              }}
            >
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1
                  }}
                >
                  {t('CALL SURWAY')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3
                  }}
                >
                  {t('กรุณากรอกข้อมูล')}
                </Typography>
              </Box>
              {method === 'Auth0' && <Auth0Login />}
              {method === 'FirebaseAuth' && <FirebaseAuthLogin />}
              {method === 'JWT' && <JWTLogin />}
              {method === 'Amplify' && <AmplifyLogin />}
              <Box my={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t('Don’t have an account, yet? luuu')}
                </Typography>{' '}
                <Link component={RouterLink} to="/account/register">
                  <b>Sign up here</b>
                </Link>
              </Box>
              {/* {method !== 'Auth0' && (
                <Tooltip
                  title={t('Used only for the live preview demonstration!')}
                >
                  <Alert severity="warning">
                    Use <b>demo@example.com</b> and password <b>TokyoPass1@</b>
                  </Alert>
                </Tooltip>
              )} */}
            </Card>
          </Container>
        </MainContent>
      </Content>
    </>
  );
}

export default LoginCover;
