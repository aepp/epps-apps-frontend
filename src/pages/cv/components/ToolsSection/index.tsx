import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {GridSize} from '@material-ui/core/Grid';
import Skill, {SkillType} from '../Skill';
import styles from './styles';

const useStyles = makeStyles(styles);
const tools = ['redux', 'redux-saga', 'webpack', 'mui'] as Array<SkillType>;
const gridItemSize = Math.floor(12 / tools.length) as GridSize;

export const Tools: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container spacing={2}>
        {tools.map(tool => (
          <Grid
            item
            xs={gridItemSize}
            className={classes.toolContainer}
            key={tool}
          >
            <Skill
              type={tool}
              labelPlacement={'bottom'}
              classes={{icon: classes.icon}}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Tools;
