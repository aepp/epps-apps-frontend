import {createStyles, Theme} from '@material-ui/core';

export const skillStyles = (theme: Theme) =>
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
    }
  });

export default skillStyles;
