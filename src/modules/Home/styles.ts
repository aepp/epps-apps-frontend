import {createStyles, Theme} from '@material-ui/core';
import {StyleRules} from '@material-ui/styles/withStyles';

export const indexStyles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      padding: theme.spacing(3)
    },
    link: {
      color: theme.palette.secondary.main
    }
  });

export default indexStyles;
