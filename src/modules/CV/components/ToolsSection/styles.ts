import {createStyles, Theme} from '@material-ui/core';
import {StyleRules} from '@material-ui/styles/withStyles';

const iconDimFactor = 6;
export const educationStyles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      flexGrow: 1
    },
    toolContainer: {},
    icon: {
      height: theme.spacing(iconDimFactor),
      width: theme.spacing(iconDimFactor)
    }
  });

export default educationStyles;
