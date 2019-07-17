import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import Skill, {SkillType} from '../Skill';
import StaticLinearProgress from "../StaticLinearProgress";
import styles from './styles';

const useStyles = makeStyles(styles);

interface SkillItemType {
  type: SkillType;
  level: number;
}

const skills: Array<SkillItemType> = [
  {
    type: 'react',
    level: 75
  },
  {
    type: 'js',
    level: 85
  },
  {
    type: 'css',
    level: 65
  },
  {
    type: 'php',
    level: 80
  },
  {
    type: 'ts',
    level: 20
  }
];

export default function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container spacing={2}>
        {skills.map(skill => (
          <Grid item xs={12} className={classes.skillContainer} key={skill.type}>
            <div className={classes.skillLabel}>
              <Skill type={skill.type} labelBefore/>
            </div>
            <StaticLinearProgress value={skill.level} color={"secondary"} className={classes.progress}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
