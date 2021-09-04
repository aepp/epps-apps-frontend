import React, {useEffect, useState} from 'react';
import {withStyles} from '@material-ui/styles';
import {WithStyles, Container, Grid, Button} from '@material-ui/core';
import styles from './styles';
import {Link, useLocation} from 'react-router-dom';
import routes from '../../variables/routes';

type Props = WithStyles<typeof styles>;

export const CV = withStyles(styles)((props: Props) => {
  const {classes} = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const headers = new Headers(); // Currently empty

    headers.append('accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials', 'true');

    const params: RequestInit = {
      method: 'GET',
      credentials: 'include',
      headers
    };

    fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/login/success`, params)
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error('failed to authenticate user');
      })
      .then(responseJson => {
        setIsAuthenticated(true);
        setUser(responseJson.user);
      })
      .catch(error => {
        setIsAuthenticated(false);
        setUser(null);
        console.error('authentication failed', error);
      });
  }, []);

  const location = useLocation();
  const onLogin = (): void => {
    window.open(
      `${
        process.env.REACT_APP_BACKEND_API_URL
      }/auth?returnTo=${encodeURIComponent(location.pathname)}`,
      '_self'
    );
  };

  const onLogout = (): void => {
    const headers = new Headers(); // Currently empty

    headers.append('accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Credentials', 'true');

    const params: RequestInit = {
      method: 'GET',
      credentials: 'include',
      headers
    };

    fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/logout`, params)
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error('failed to authenticate user');
      })
      .then(responseJson => {
        console.log('responseJson', responseJson);
        setIsAuthenticated(false);
        setUser(null);
      })
      .catch(error => {
        console.error('logout failed', error);
      });
    // window.open(
    //   `${process.env.REACT_APP_BACKEND_API_URL}/auth/logout`,
    //   '_self'
    // );
    // setIsAuthenticated(false);
    // setUser(null);
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Link to={routes.cv} className={classes.link}>
            {'My CV'}
          </Link>
        </Grid>
        <Grid item xs={12}>
          {!isAuthenticated && (
            <Button onClick={onLogin} color={'primary'} variant={'contained'}>
              Login
            </Button>
          )}
          {isAuthenticated && (
            <Button
              onClick={onLogout}
              color={'secondary'}
              variant={'contained'}
            >
              Logout
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
});

export default CV;
