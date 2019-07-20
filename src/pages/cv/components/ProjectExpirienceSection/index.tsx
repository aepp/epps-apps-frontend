import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, Divider} from '@material-ui/core';
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
    descriptionLong: 'Entwicklung einer React App mit geschützten Kunden- und Admin-Bereichen. Die App ermöglicht Objekte von unterschiedlichen Typen zu erstellen, zu verknüpfen und zu bearbeiten. Die Objekte durchlaufen durch die Bearbeitung verschiedene Stati und werden je nach Status der Administration oder dem Kunden zur weiteren Bearbeitung zugewiesen. Zusätzlich sind standard Dashboard Funktionen verfügbar: Auflistung, Filterung, Sortierung, Benutzereinstellungen. Kommunikation mit Backend erfolgt über eine REST Schnittstelle.',
    descriptionShorter: 'Eine React App mit geschützten Kunden- und Admin-Bereichen. Die App ermöglicht Objekte von unterschiedlichen Typen zu erstellen, zu verknüpfen und zu bearbeiten. Die Objekte durchlaufen verschiedene Stati und werden je nach Status der Administration oder dem Kunden zugewiesen. Zusätzlich sind standard Dashboard Funktionen verfügbar: Auflistung, Filterung, Sortierung, Benutzereinstellungen. Kommunikation mit Backend erfolgt über eine REST Schnittstelle.',
    // duration: '> 1 Jahr, laufend',
    // availability: '40-60 Stunden im Monat'
  },
  {
    name: 'Projekt 2',
    role: 'Frontend Developer',
    descriptionLong: 'Entwicklung einer React App mit einem öffentlichen Bereich und geschützten Kunden- und Admin-Bereichen. Im öffentlichen Bereich wird Google Maps API, deren Ausgabe komplett an Corporate Design des Kunden angepasst ist, eingesetzt. Im geschützten Bereich gibt es ein Chat-ähnliches System und standard Dashboard Funktionen sind verfügbar: Auflistung, Filterung, Sortierung, Benutzereinstellungen. Kommunikation mit Backend erfolgt über eine REST Schnittstelle.',
    descriptionShorter: 'Eine React App mit einem öffentlichen Bereich und geschützten Kunden- und Admin-Bereichen. Einsatz von Google Maps API in Corporate Design des Kunden. Im geschützten Bereich ein Chat-ähnliches System und standard Dashboard Funktionen sind verfügbar: Auflistung, Filterung, Sortierung, Benutzereinstellungen. Kommunikation mit Backend über eine REST Schnittstelle.',
    // duration: '1 Jahr, abgeschlossen',
    // availability: '40-60 Stunden im Monat'
  },
  // {
  //   name: 'Projekt 3',
  //   role: 'Fullstack Developer',
  //   description: 'Im Backend wird Zend Framework 3 eingesetzt, um ein typisches CRUD (Create, Read, Update, Delete) Dashboard zur Verfügung zu stellen. Die Daten werden in einer relationelen MySQL Datenbank verwaltet. Die Objekte aus dem Backend werden dem Frontend über eine REST Schnittstelle zur Verfügung stellt. Die Ausgabe im Frontend erfolgt durch ein WordPress Plugin, welches Inhalte mit Plain Javascript und kleinen React Apps zeichnet.',
  //   duration: '> 5 Jahre, laufend',
  //   availability: 'ca. 20-60 Stunden im Monat'
  // }
];

const leftColumnSize = 2;
const rightColumnSize = 10;

export const ProjectExperience: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item container spacing={1}>
        {projects.map((project: Project) => (<>
          <Grid item xs={leftColumnSize}>
            <Typography className={classes.projectLabel}>
              {project.name}
            </Typography>
          </Grid>
          <Grid item xs={rightColumnSize} md={rightColumnSize} className={classes.roleContainer}>
            <Typography>
              {'Rolle:'}&nbsp;{project.role}
            </Typography>
          </Grid>
          {/*<Grid item xs={12} md={leftColumnSize}>*/}
          {/*  <Typography className={classes.projectSubLabel}>*/}
          {/*    {'Rolle'}*/}
          {/*  </Typography>*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12} md={rightColumnSize}>*/}
          {/*  <Typography>*/}
          {/*    {project.role}*/}
          {/*  </Typography>*/}
          {/*</Grid>*/}
          <Grid item xs={12} md={leftColumnSize}>
            <Typography className={classes.projectLabel}>
              {'Inhalt'}
            </Typography>
          </Grid>
          <Grid item xs={12} md={rightColumnSize}>
            {project.descriptionShorter}
          </Grid>
          {/*<Grid item xs={12} md={leftColumnSize}>*/}
          {/*  <Typography className={classes.projectLabel}>*/}
          {/*    {'Dauer'}*/}
          {/*  </Typography>*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12} md={rightColumnSize}>*/}
          {/*  {project.duration}*/}
          {/*</Grid>*/}
          <Grid item xs={12}>
            <Divider className={classes.divider}/>
          </Grid>
        </>))}
      </Grid>
    </div>
  );
};

export default ProjectExperience;
