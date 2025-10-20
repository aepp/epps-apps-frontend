import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import styles from './styles';
import {Grid, Hidden, Typography} from '@material-ui/core';
import Skill from '../Skill';

const useStyles = makeStyles(styles);

export default function WorkExperience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border} />
          <div className={`${classes.dot} ${classes.currentDot}`} />
          <Typography className={classes.period} component={'div'}>
            {/* @ts-ignore */}
            <Hidden smDown>
              <span>ab 02/2020</span>
              {/*<span>since 02/2020</span>*/}
            </Hidden>
            {/* @ts-ignore */}
            <Hidden mdUp>
              <span>ab 2020</span>
              {/*<span>since 2020</span>*/}
            </Hidden>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.institution}>Hessischer Rundfunk</span>
            <span className={classes.as}>Softwareentwickler</span>
            {/*<span className={classes.as}>Software Developer</span>*/}
            <span className={classes.area}>
              Schwerpunkte: Fullstack, Frontend / UX
              {/*Focus: Fullstack, Frontend / UX*/}
            </span>
            <span>Tech-Stack:</span>
            <span className={classes.techStack}>
              <Skill chip className={classes.skill} type={'react'} />
              <Skill chip className={classes.skill} type={'javascript'} />
              <Skill chip className={classes.skill} type={'typescript'} />
              <Skill chip className={classes.skill} type={'jakarta'} />
              <Skill chip className={classes.skill} type={'spring-boot'} />
            </span>
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border} />
          <div className={`${classes.dot} ${classes.currentDot}`} />
          <Typography className={classes.period} component={'div'}>
            {/* @ts-ignore */}
            <Hidden smDown>
              <span>ab 01/2015</span>
              {/*<span>since 01/2015</span>*/}
            </Hidden>
            {/* @ts-ignore */}
            <Hidden mdUp>
              <span>ab 2015</span>
              {/*<span>since 2015</span>*/}
            </Hidden>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.institution}>Freelancer</span>
            <span className={classes.area}>Bereich: Web-Entwicklung</span>
            {/*<span className={classes.area}>Focus: Web Development</span>*/}
            <span>Tech-Stack:</span>
            <span className={classes.techStack}>
              <Skill chip className={classes.skill} type={'react'} />
              <Skill chip className={classes.skill} type={'javascript'} />
              <Skill chip className={classes.skill} type={'css'} />
              <Skill chip className={classes.skill} type={'php'} />
              <Skill chip className={classes.skill} type={'wordpress'} />
              <Skill chip className={classes.skill} type={'mysql'} />
            </span>
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border} />
          <div className={classes.dot} />
          <Typography className={classes.period} component={'div'}>
            <span>2018</span>
            <span>2015</span>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.institution}>DKD Internet Services</span>
            <span className={classes.as}>Junior Software Developer</span>
            <span className={classes.area}>Bereich: Web-Entwicklung</span>
            {/*<span className={classes.area}>Focus: Web Development</span>*/}
            <span>Tech-Stack:</span>
            <span className={classes.techStack}>
              <Skill chip className={classes.skill} type={'typo3'} />
              <Skill chip className={classes.skill} type={'php'} />
              <Skill chip className={classes.skill} type={'mysql'} />
              <Skill chip className={classes.skill} type={'javascript'} />
              <Skill chip className={classes.skill} type={'wordpress'} />
              <Skill chip className={classes.skill} type={'css'} />
            </span>
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.periodContainer}>
          <div className={classes.border} />
          <div className={classes.dot} />
          <Typography className={classes.period} component={'div'}>
            <span>2014</span>
            <span>2013</span>
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.descriptionContainer}>
          <Typography className={classes.description} component={'div'}>
            <span className={classes.institution}>Deutsche Bundesbank</span>
            <span className={classes.as}>Softwareentwickler</span>
            {/*<span className={classes.as}>Software Developer</span>*/}
            <span className={classes.area}>Bereich: Web-Entwicklung</span>
            {/*<span className={classes.area}>Focus: Web Development</span>*/}
            <span>Tech-Stack:</span>
            <span className={classes.techStack}>
              <Skill chip className={classes.skill} type={'java'} />
            </span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
