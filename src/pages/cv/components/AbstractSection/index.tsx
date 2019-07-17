import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import styles from './styles';
import {Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles(styles);

export default function Abstract() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container spacing={2}>
        <Grid item xs={12} className={classes.avatarContainer}>
          <div className={classes.avatar}/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'h4'} className={classes.name}>
            {'Aleksandr Epp'}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.about}>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
