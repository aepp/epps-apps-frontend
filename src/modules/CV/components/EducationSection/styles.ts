import {createStyles, Theme} from '@material-ui/core';
import chronicStyles from '../chronicStyles';
import {StyleRules} from '@material-ui/styles/withStyles';

export const educationStyles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      flexGrow: 1
    },
    ...chronicStyles(theme),
    descriptionContainer: {
      paddingLeft: theme.spacing()
    },
    description: {
      paddingTop: theme.spacing(),
      display: 'flex',
      flexDirection: 'column'
    },
    institution: {
      fontSize: theme.typography.fontSize
    },
    degree: {
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold
    },
    as: {
      fontStyle: 'italic'
    }
  });

export default educationStyles;
