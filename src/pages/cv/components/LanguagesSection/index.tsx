import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, useTheme} from '@material-ui/core';
import {CanvasRenderer} from 'react-radial-progress-indicator/dist/renderers';
import styles from './styles';

const useStyles = makeStyles(styles);

export const Languages = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Grid item container spacing={2}>
        <Grid item xs={4} className={classes.skillContainer}>
          <Typography className={classes.languageLabel}>
            {'Deutsch'}
          </Typography>
          <div className={classes.circleProgressContainer}>
            <CanvasRenderer
              backgroundTransparent
              proportion={1}
              ringFgColour={theme.palette.secondary.main}
              ringThickness={0.2}
              segmentGap={2}
              segmented
              showIntermediateProgress
              steps={10}/>
            {/*<Typography className={classes.languageLevelText}>10/10</Typography>*/}
          </div>
        </Grid>
        <Grid item xs={4} className={classes.skillContainer}>
          <Typography className={classes.languageLabel}>
            {'Russisch'}
          </Typography>
          <div className={classes.circleProgressContainer}>
            <CanvasRenderer
              backgroundTransparent
              proportion={1}
              ringFgColour={theme.palette.secondary.main}
              ringThickness={0.2}
              segmentGap={2}
              segmented
              showIntermediateProgress
              steps={10}/>
            {/*<Typography className={classes.languageLevelText}>10/10</Typography>*/}
          </div>
        </Grid>
        <Grid item xs={4} className={classes.skillContainer}>
          <Typography className={classes.languageLabel}>
            {'Englisch'}
          </Typography>
          <div className={classes.circleProgressContainer}>
            <CanvasRenderer
              backgroundTransparent
              proportion={.7}
              ringFgColour={theme.palette.secondary.main}
              ringThickness={0.2}
              segmentGap={2}
              segmented
              showIntermediateProgress
              steps={10}/>
            {/*<Typography className={classes.languageLevelText}>7/10</Typography>*/}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Languages;
