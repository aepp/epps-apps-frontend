import {createStyles, Theme} from '@material-ui/core';

export const appBarStyles = (theme: Theme) => createStyles({
  appBar: {
    backgroundColor: theme.designScheme.appBarBackgroundColor,
    marginLeft: theme.constants.drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.constants.drawerWidth}px)`,
    },
  },
  title: {
    display: 'flex',
    textTransform: 'uppercase',
    fontSize: theme.typography.fontSize * 2,
    ...theme.designScheme.appTitle.style
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }
});

export default appBarStyles;
