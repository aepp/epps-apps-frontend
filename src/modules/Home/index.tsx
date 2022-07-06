import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import routes from '../../variables/routes';
import styles from './styles';

// @ts-ignore
const useStyles = makeStyles(styles);

export const CV = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Link to={routes.cv} className={classes.link}>
            {'My CV'}
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CV;
