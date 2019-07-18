import {createStyles, Theme} from '@material-ui/core';

export const staticLinearProgressStyles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  drawer: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: theme.constants.drawerWidth,
      flexShrink: 0
    },
  },
  appBar: {
    marginLeft: theme.constants.drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.constants.drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width:theme.constants.drawerWidth,
    backgroundColor: theme.designScheme.drawerBackgroundColor
  },
  content: {
    flexGrow: 1
  }
});

export default staticLinearProgressStyles;
