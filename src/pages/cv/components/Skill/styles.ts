import {createStyles, Theme} from '@material-ui/core';
import {StyleRules} from '@material-ui/styles/withStyles';

export const skillStyles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    logo: {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: theme.spacing(4),
      height: theme.spacing(4)
    },
    chipIcon: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      borderRadius: '50%'
    }
  });

export default skillStyles;
