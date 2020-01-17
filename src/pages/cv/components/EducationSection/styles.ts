import {createStyles, Theme} from '@material-ui/core';
import chronicStyles from '../chronicStyles';

export const educationStyles = (theme: Theme) =>
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
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold
    },
    degree: {
      fontSize: theme.typography.fontSize
    },
    as: {
      fontStyle: 'italic'
    }
  });

export default educationStyles;
