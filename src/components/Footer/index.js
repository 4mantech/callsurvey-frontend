import { Box, Card, Link, Typography, styled } from '@mui/material';

const FooterWrapper = styled(Card)(
  ({ theme }) => `
        border-radius: 0;
        margin-top: ${theme.spacing(4)};
`
);

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        p={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; Copyright © 2021 | Powered by  {' '}
            <Link
            href="https://inetworksolutions.co.th/"
            target="_blank"
            rel="noopener noreferrer"
          >
           intelligent networksolutions co.,ltd
          </Link>
          </Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 }
          }}
          variant="subtitle1"
        >
          Design by{' '}
          <Link
            href="https://www.3cxcustomize.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
           3cxCustomize
          </Link>
        </Typography>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
