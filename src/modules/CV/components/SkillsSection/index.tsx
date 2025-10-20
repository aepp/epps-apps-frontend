import React from 'react';
import {makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Skill, {SkillType} from '../Skill';
import StaticLinearProgress from '../StaticLinearProgress';
import styles from './styles';

const useStyles = makeStyles(styles);

interface SkillItemType {
  type: SkillType;
  level: number;
  label?: string;
}

const currentYear = new Date().getFullYear();

const MAX_SKILL_YEARS = 8;

const REACT_START_YEAR = 2018;
const ANGULAR_START_YEAR = 2023;
const JS_START_YEAR = 2013;
const TYPESCRIPT_START_YEAR = 2022;
const JAVA_START_YEAR = 2020;

const getLabelAndLevelFromStartYear = (startYear: number) => {
  const years = currentYear - startYear;
  return {
    label: `> ${years} Jahre`,
    level: years > MAX_SKILL_YEARS ? 90 : years * 10
  };
  // return `> ${years} years`;
};
const skills: Array<SkillItemType> = [
  {
    type: 'react',
    ...getLabelAndLevelFromStartYear(REACT_START_YEAR)
  },
  {
    type: 'angular',
    ...getLabelAndLevelFromStartYear(ANGULAR_START_YEAR)
  },
  {
    type: 'js',
    ...getLabelAndLevelFromStartYear(JS_START_YEAR)
  },
  {
    type: 'ts',
    ...getLabelAndLevelFromStartYear(TYPESCRIPT_START_YEAR)
  },
  {
    type: 'java',
    ...getLabelAndLevelFromStartYear(JAVA_START_YEAR)
  }
];

export const Skills: React.FunctionComponent = () => {
  const classes = useStyles();
  const theme: Theme = useTheme();

  return (
    <div className={classes.root}>
      <Grid item container spacing={2}>
        {skills.map(skill => (
          <Grid
            item
            xs={12}
            className={classes.skillContainer}
            key={skill.type}
          >
            <div className={classes.skillLabel}>
              <Skill type={skill.type} labelBefore chip />
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
};
export default Skills;
