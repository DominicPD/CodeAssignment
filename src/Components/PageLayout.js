import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ReactComponent as CruiseIcon} from '../assets/cruise.svg';
import {AuthenticateUI} from './AuthenticateUI';
import AuthenticatedGridList from './AuthenticatedGridList';

import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function PageLayout({isAuthenticated, logout, loginWithRedirect, user}) {
  const classes = useStyles();
  const history = useHistory();
  const returnToHome = () => history.push('/');
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <div style={{    display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 
          'center'}}>
            <div onClick={returnToHome}>
              <CruiseIcon/>
              <Typography variant="h6" color="inherit" noWrap>
              &nbsp;Travel0 
              </Typography>
            </div>
            <div>
              <AuthenticateUI isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect}
        logout={logout} user = {user}/>
            </div>
          </div>
        </Toolbar>

      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Cruise0
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Lorem ipsum dolor sit amet, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
            <Switch>
              <Route path="/" exact component={AuthenticatedGridList} />
              
              <Route path="/profile" exact component={() => <div>User profile</div>}/>
          
            </Switch>
          
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          powered by Auth0
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Secure access for everyone. But not just anyone.
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}