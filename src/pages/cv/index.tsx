import React from 'react';
import {withStyles} from '@material-ui/styles';
import {WithStyles, Container, Typography, Grid} from '@material-ui/core';
import Education from './components/EducationSection';
import WorkExperience from './components/WorkExperienceSection';
import Abstract from './components/AbstractSection';
import styles from './styles';
import Skills from './components/SkillsSection';
import Tools from './components/ToolsSection';
import Languages from './components/LanguagesSection';
import {cvContainerId} from '../../variables/constants';
import ProjectExperience from './components/ProjectExpirienceSection';

type Props = WithStyles<typeof styles>;

export const CV = withStyles(styles)((props: Props) => {
  const {classes} = props;
  return (
    <Container className={classes.root} id={cvContainerId}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className={classes.noPaddingBottom}>
          <div className={classes.section}>
            <Abstract />
          </div>
          <div className={classes.section}>
            <Typography className={classes.sectionTitle}>
              {'Berufserfahrung'}
            </Typography>
            <WorkExperience />
          </div>
        </Grid>
        <Grid item container xs={12} md={6} className={classes.noPaddingBottom}>
          <div className={classes.section}>
            <Typography className={classes.sectionTitle}>
              {'Ausbildung'}
            </Typography>
            <Education />
          </div>
          <div className={classes.section}>
            <Typography className={classes.sectionTitle}>{'Skills'}</Typography>
            <Skills />
          </div>
          <div className={classes.section}>
            <Typography className={classes.sectionTitle}>
              {'Tools & Frameworks'}
            </Typography>
            <Tools />
          </div>
          <div className={classes.section}>
            <Typography className={classes.sectionTitle}>
              {'Sprachen'}
            </Typography>
            <Languages />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.section}>
            <Typography className={classes.sectionTitle}>
              {'Letzte Projekte'}
            </Typography>
            <ProjectExperience />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
});

export default CV;
