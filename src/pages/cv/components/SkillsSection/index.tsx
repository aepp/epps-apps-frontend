import React from 'react';
import {makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import Skill, {SkillType} from '../Skill';
import StaticLinearProgress from "../StaticLinearProgress";
import styles from './styles';

const useStyles = makeStyles(styles);

interface SkillItemType {
  type: SkillType;
  level: number;
  label?: string;
}

const skills: Array<SkillItemType> = [
  {
    type: 'react',
    level: 75,
    label: '> 2 Jahre'
  },
  {
    type: 'js',
    level: 85,
    label: '> 5 Jahre'
  },
  {
    type: 'css',
    level: 65,
    label: '> 5 Jahre'
  },
  {
    type: 'php',
    level: 80,
    label: '> 5 Jahre'
  },
  {
    type: 'ts',
    level: 20,
    label: '< 1/2 Jahre'
  }
];

export default function Skills() {
  const classes = useStyles();
  const theme: Theme = useTheme();

  return (
    <div className={classes.root}>
      <Grid item container spacing={2}>
        {skills.map(skill => (
          <Grid item xs={12} className={classes.skillContainer} key={skill.type}>
            <div className={classes.skillLabel}>
              <Skill type={skill.type} labelBefore/>
            </div>
            <StaticLinearProgress
              value={skill.level}
              className={classes.progress}
              label={skill.label}
              color={theme.designScheme.skillProgressColor}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
