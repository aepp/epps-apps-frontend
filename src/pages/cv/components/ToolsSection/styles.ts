import {createStyles, Theme} from '@material-ui/core';

const iconDimFactor = 6;
export const educationStyles = (theme: Theme) => createStyles({
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
