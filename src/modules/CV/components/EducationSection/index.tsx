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
            <span>2022</span>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.degree}>
              Master of Science
            </span>
            <span className={classes.institution}>
              Goethe Universität Frankfurt - <span className={classes.as}>Informatik</span>
            </span>
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border} />
          <div className={classes.dot} />
          <Typography className={classes.period} component={'div'}>
            <span>2013</span>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.degree}>
              Bachelor of Engineering
            </span>
            <span className={classes.institution}>
              Fachhochschule Bielefeld - <span className={classes.as}>Informationstechnik</span>
            </span>
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border} />
          <div className={classes.dot} />
          <Typography className={classes.period} component={'div'}>
            <span>2009</span>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.degree}>
              <span className={classes.as}>
                Informationstechnischer Assistent
              </span>
            </span>
            <span className={classes.institution}>
              Leo-Sympher Berufskolleg Minden - <span className={classes.as}>Ausbildung</span>
            </span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
