// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/common/Page';
import Logo from '../components/common/Logo';
// sections
import { LoginForm } from '../components/auth/login';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));


const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {

  return (
    <Page title="Login">
      <RootStyle>
        <HeaderStyle>
          <Logo />
        </HeaderStyle>

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" align='center' marginBottom={10} gutterBottom>
              Giriş Yap
            </Typography>

            <LoginForm />

          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
