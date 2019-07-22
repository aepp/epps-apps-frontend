import {createStyles, Theme} from '@material-ui/core';

export const staticLinearProgressStyles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  drawer: {},
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
    padding: theme.spacing(2),
    width: theme.constants.drawerWidth,
    backgroundColor: theme.designScheme.drawerBackgroundColor
  },
  content: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.constants.drawerWidth
    }
  }
});

export default staticLinearProgressStyles;
