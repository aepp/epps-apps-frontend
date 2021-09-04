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

const REACT_START_YEAR = 2018;
const JS_START_YEAR = 2013;
const CSS_START_YEAR = 2013;
const PHP_START_YEAR = 2013;
const SPRING_BOOT_START_YEAR = 2020;

const skills: Array<SkillItemType> = [
  {
    type: 'react',
    level: 85,
    label: `> ${currentYear - REACT_START_YEAR} Jahre`
  },
  {
    type: 'js',
    level: 85,
    label: `> ${currentYear - JS_START_YEAR} Jahre`
  },
  {
    type: 'css',
    level: 65,
    label: `> ${currentYear - CSS_START_YEAR} Jahre`
  },
  {
    type: 'ts',
    level: 20,
    label: '< 1 Jahr'
  },
  {
    type: 'php',
    level: 75,
    label: `> ${currentYear - PHP_START_YEAR} Jahre`
  },
  {
    type: 'spring-boot',
    level: 30,
    label:
      `> ${currentYear - SPRING_BOOT_START_YEAR} Jahr` +
      (currentYear - SPRING_BOOT_START_YEAR > 1 ? 'e' : '')
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
