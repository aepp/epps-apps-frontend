import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Hidden, Typography, useTheme} from '@material-ui/core';
import {RadialProgress} from 'react-radial-progress-indicator';
import styles from './styles';
import {lighten} from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

export const Languages = () => {
  const classes = useStyles();
  const theme = useTheme();

  const radialProgressProps = {
    backgroundTransparent: true,
    duration: 1000,
    height: '100%',
    ringFgColour: theme.designScheme.languageCircleColor,
    ringBgColour: lighten(theme.designScheme.languageCircleColor, 0.7),
    ringThickness: 0.05,
    segmented: true,
    showIntermediateProgress: false,
    startStep: 0,
    steps: 10,
    text: () => '',
    width: '100%'
  };

  return (
    <div className={classes.root}>
      <Grid item container spacing={2}>
        <Grid item sm={4} xs={12} className={classes.skillContainer}>
          <Typography className={classes.languageLabel}>{'Deutsch'}</Typography>
          <div className={classes.circleProgressContainer}>
            <RadialProgress {...radialProgressProps} step={10} />
            <Hidden mdDown>
              <Typography className={classes.languageLevelText}>
                {'Muttersprache'}
              </Typography>
            </Hidden>
            <Hidden lgUp>
              <Typography className={classes.languageLevelText}>
                {'Mutter-\nsprache'}
              </Typography>
            </Hidden>
          </div>
        </Grid>
        <Grid item sm={4} xs={12} className={classes.skillContainer}>
          <Typography className={classes.languageLabel}>
            {'Russisch'}
          </Typography>
          <div className={classes.circleProgressContainer}>
            <RadialProgress {...radialProgressProps} step={10} />
            <Hidden mdDown>
              <Typography className={classes.languageLevelText}>
                {'Muttersprache'}
              </Typography>
            </Hidden>
            <Hidden lgUp>
              <Typography className={classes.languageLevelText}>
                {'Mutter-\nsprache'}
              </Typography>
            </Hidden>
          </div>
        </Grid>
        <Grid item sm={4} xs={12} className={classes.skillContainer}>
          <Typography className={classes.languageLabel}>
            {'Englisch'}
          </Typography>
          <div className={classes.circleProgressContainer}>
            <RadialProgress {...radialProgressProps} step={7} />
            <Typography className={classes.languageLevelText} component={'div'}>
              gute
              <br />
              Kenntnisse
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Languages;
