import {createStyles, Theme} from '@material-ui/core';

export const educationStyles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    progress: {
      width: '70%'
    },
    skillContainer: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    skillLabel: {
      width: '30%',
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: theme.spacing()
    }
  });

export default educationStyles;
