import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, Divider, Hidden} from '@material-ui/core';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Project {
  name: string;
  role: string;
  descriptionLong: string;
  descriptionShorter?: string;
  // duration: string;
  // availability: string;
}

const projects: Array<Project> = [
  {
    name: 'Projekt 1',
    role: 'Frontend Developer',
    descriptionLong:
      'Entwicklung einer React App mit geschützten Kunden- und Admin-Bereichen. Die App ermöglicht Objekte von unterschiedlichen Typen zu erstellen, zu verknüpfen und zu bearbeiten. Die Objekte durchlaufen durch die Bearbeitung verschiedene Stati und werden je nach Status der Administration oder dem Kunden zur weiteren Bearbeitung zugewiesen. Zusätzlich sind standard Dashboard Funktionen verfügbar: Auflistung, Filterung, Sortierung, Benutzereinstellungen. Kommunikation mit Backend erfolgt über eine REST Schnittstelle.',
    descriptionShorter:
      'Eine React App mit geschützten Kunden- und Admin-Bereichen. Die App ermöglicht Objekte von unterschiedlichen Typen zu erstellen, zu verknüpfen und zu bearbeiten. Die Objekte durchlaufen verschiedene Stati und werden je nach Status der Administration oder dem Kunden zugewiesen. Zusätzlich sind standard Dashboard Funktionen verfügbar: Auflistung, Filterung, Sortierung, Benutzereinstellungen. Kommunikation mit Backend erfolgt über eine REST Schnittstelle.'
    // duration: '> 1 Jahr, laufend',
    // availability: '40-60 Stunden im Monat'
  },
  {
    name: 'Projekt 2',
    role: 'Frontend Developer',
    descriptionLong:
      'Entwicklung einer React App mit einem öffentlichen Bereich und geschützten Kunden- und Admin-Bereichen. Im öffentlichen Bereich wird Google Maps API, deren Ausgabe komplett an Corporate Design des Kunden angepasst ist, eingesetzt. Im geschützten Bereich gibt es ein Chat-ähnliches System und standard Dashboard Funktionen sind verfügbar: Auflistung, Filterung, Sortierung, Benutzereinstellungen. Kommunikation mit Backend erfolgt über eine REST Schnittstelle.',
    descriptionShorter:
      'Eine React App mit einem öffentlichen Bereich und geschützten Kunden- und Admin-Bereichen. Einsatz von Google Maps API in Corporate Design des Kunden. Im geschützten Bereich ein Chat-ähnliches System und standard Dashboard Funktionen sind verfügbar: Auflistung, Filterung, Sortierung, Benutzereinstellungen. Kommunikation mit Backend über eine REST Schnittstelle.'
    // duration: '1 Jahr, abgeschlossen',
    // availability: '40-60 Stunden im Monat'
  }
  // {
  //   name: 'Projekt 3',
  //   role: 'Fullstack Developer',
  //   description: 'Im Backend wird Zend Framework 3 eingesetzt, um ein typisches CRUD (Create, Read, Update, Delete) Dashboard zur Verfügung zu stellen. Die Daten werden in einer relationelen MySQL Datenbank verwaltet. Die Objekte aus dem Backend werden dem Frontend über eine REST Schnittstelle zur Verfügung stellt. Die Ausgabe im Frontend erfolgt durch ein WordPress Plugin, welches Inhalte mit Plain Javascript und kleinen React Apps zeichnet.',
  //   duration: '> 5 Jahre, laufend',
  //   availability: 'ca. 20-60 Stunden im Monat'
  // }
];

export const ProjectExperience: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container spacing={1}>
        {projects.map((project: Project) => (
          <React.Fragment key={project.name}>
            {/* Project name */}
            <Grid item xs={12} md={3}>
              <Typography className={classes.projectLabel} component={'div'}>
                {project.name}
              </Typography>
              <div className={classes.underline} />
            </Grid>
            <Hidden smDown>
              <Grid item md={9}></Grid>
            </Hidden>
            {/* Role */}
            <Grid item xs={3} md={2} lg={1}>
              <Typography className={classes.projectSubLabel}>
                {'Rolle'}
              </Typography>
            </Grid>
            <Grid item xs={9} md={10} lg={11}>
              <Typography>{project.role}</Typography>
            </Grid>
            {/* Description */}
            <Grid item xs={12} md={2} lg={1}>
              <Typography className={classes.projectSubLabel}>
                {'Inhalt'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={10} lg={11}>
              {project.descriptionShorter}
            </Grid>
            {/* Divider */}
            <Grid item sm={12}>
              <Divider className={classes.divider} />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectExperience;
