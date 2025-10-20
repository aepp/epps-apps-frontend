import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {GridSize} from '@material-ui/core/Grid';
import Skill, {SkillType} from '../Skill';
import styles from './styles';

const useStyles = makeStyles(styles);
const toolSizes = {row1: 3, row2: 3};
type ToolType = {
  type: SkillType,
  size: GridSize
};
const tools = [
  {
    type: 'react',
    size: toolSizes.row1
  },
  {
    type: 'redux',
    size: toolSizes.row1
  },
  {
    type: 'angular',
    size: toolSizes.row1
  },
  {
    type: 'mui',
    size: toolSizes.row1
  },
  {
    type: 'webpack',
    size: toolSizes.row2
  },
  {
    type: 'spring-boot',
    size: toolSizes.row2
  },
  {
    type: 'docker',
    size: toolSizes.row2
  },
  {
    type: 'gitlab',
    size: toolSizes.row2
  },
] as Array<ToolType>;
const gridItemSize = Math.max(Math.floor(12 / tools.length), 2) as GridSize;

export const Tools: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container spacing={2}>
        {tools.map(tool => (
          <Grid
            item
            xs={tool.size}
            className={classes.toolContainer}
            key={tool.type}
          >
            <Skill
              type={tool.type}
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
