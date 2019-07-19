import React from 'react';
import {withStyles} from '@material-ui/styles';
import {WithStyles, Container, Grid} from '@material-ui/core';
import styles from './styles';
import {Link} from "react-router-dom";
import routes from "../../variables/routes";

interface Props extends WithStyles<typeof styles> {}

export const CV = withStyles(styles)((props: Props) => {
  const {classes} = props;
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
});

export default CV;

