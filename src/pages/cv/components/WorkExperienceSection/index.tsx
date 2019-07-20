import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import styles from './styles';
import {Grid, Typography} from "@material-ui/core";
import Skill from '../Skill';

const useStyles = makeStyles(styles);

export default function WorkExperience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border}/>
          <div className={`${classes.dot} ${classes.currentDot}`}/>
          <Typography className={classes.period} component={'div'}>
            <span>ab 2013</span>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.institution}>
              Freelancer
            </span>
            <span className={classes.area}>Bereich: Web-Entwicklung</span>
            <span>Tech-Stack:</span>
            <span className={classes.techStack}>
              <Skill className={classes.skill} type={'react'}/>&nbsp;
              <Skill className={classes.skill} type={'javascript'}/>&nbsp;
              <Skill className={classes.skill} type={'css'}/>&nbsp;
              <Skill className={classes.skill} type={'php'}/>&nbsp;
              <Skill className={classes.skill} type={'wordpress'}/>&nbsp;
              <Skill className={classes.skill} type={'mysql'}/>
            </span>
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border}/>
          <div className={classes.dot}/>
          <Typography className={classes.period} component={'div'}>
            <span>2018</span>
            <span>2015</span>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.institution}>
              DKD Internet Services
            </span>
            <span className={classes.as}>
              Junior Developer
            </span>
            <span className={classes.area}>Bereich: Web-Entwicklung</span>
            <span>Tech-Stack:</span>
            <span className={classes.techStack}>
              <Skill className={classes.skill} type={'typo3'}/>&nbsp;
              <Skill className={classes.skill} type={'php'}/>&nbsp;
              <Skill className={classes.skill} type={'mysql'}/>&nbsp;
              <Skill className={classes.skill} type={'javascript'}/>&nbsp;
              <Skill className={classes.skill} type={'wordpress'}/>&nbsp;
              <Skill className={classes.skill} type={'css'}/>
            </span>
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border}/>
          <div className={classes.dot}/>
          <Typography className={classes.period} component={'div'}>
            <span>2014</span>
            <span>2013</span>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.institution}>
              Deutsche Bundesbank
            </span>
            <span className={classes.as}>
              Softwareentwickler
            </span>
            <span className={classes.area}>Bereich: Web-Entwicklung</span>
            <span>Tech-Stack:</span>
            <span className={classes.techStack}>
              <Skill className={classes.skill} type={'java'}/>
            </span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
