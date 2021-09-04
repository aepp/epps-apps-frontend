import {createStyles, Theme} from '@material-ui/core';
import chronicStyles from '../chronicStyles';
import {StyleRules} from '@material-ui/styles/withStyles';

export const educationStyles = (theme: Theme): StyleRules =>
  createStyles({
    ...chronicStyles(theme),
    root: {
      flexGrow: 1
    },
    description: {
      paddingTop: theme.spacing(),
      display: 'flex',
      flexDirection: 'column'
    },
    descriptionContainer: {
      paddingLeft: theme.spacing()
    },
    institution: {
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold
    },
    as: {},
    area: {},
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      paddingLeft: theme.spacing(6),
      fontSize: theme.typography.fontSize
    },
    skill: {
      marginRight: theme.spacing(0.5),
      marginTop: theme.spacing(0.5)
    }
  });

export default educationStyles;
