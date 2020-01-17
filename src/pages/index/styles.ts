import {createStyles, Theme} from '@material-ui/core';

export const indexStyles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3)
    },
    link: {
      color: theme.palette.secondary.main
    }
  });

export default indexStyles;
