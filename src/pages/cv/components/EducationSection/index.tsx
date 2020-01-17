import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import styles from './styles';
import {Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles(styles);

export default function Education() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border} />
          <div className={`${classes.dot} ${classes.currentDot}`} />
          <Typography className={classes.period} component={'div'}>
            <span>ab 2015</span>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.institution}>
              Goethe Universität Frankfurt
            </span>
            <span className={classes.degree}>
              Master of Science, <span className={classes.as}>Informatik</span>
            </span>
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border} />
          <div className={classes.dot} />
          <Typography className={classes.period} component={'div'}>
            <span>2013</span>
            <span>2009</span>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.institution}>
              Fachhochschule Bielefeld
            </span>
            <span className={classes.degree}>
              Bachelor of Engineering,{' '}
              <span className={classes.as}>Informationstechnik</span>
            </span>
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border} />
          <div className={classes.dot} />
          <Typography className={classes.period} component={'div'}>
            <span>2009</span>
            <span>2006</span>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.institution}>
              Leo-Sympher Berufskolleg Minden
            </span>
            <span className={classes.degree}>
              Ausbildung,{' '}
              <span className={classes.as}>
                Informationstechnischer Assistent
              </span>
            </span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
