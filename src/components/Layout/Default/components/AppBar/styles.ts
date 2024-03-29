import {createStyles, Theme} from '@material-ui/core';
import {StyleRules} from '@material-ui/styles/withStyles';

export const appBarStyles = (theme: Theme): StyleRules =>
  createStyles({
    appBar: {
      backgroundColor: theme.designScheme.appBarBackgroundColor,
      marginLeft: theme.constants.drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${theme.constants.drawerWidth}px)`
      }
    },
    titleContainer: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
    titleLink: {
      textDecoration: 'none',
      '&:visited, &:focus': {
        textDecoration: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: 'auto'
      }
    },
    title: {
      display: 'flex',
      textTransform: 'uppercase',
      fontSize: theme.typography.fontSize * 2,
      ...theme.designScheme.appTitle.style
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    menuIcon: {
      color: theme.designScheme.appBarBackgroundContrastColor
    },
    toolbar: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center'
      }
    },
    titleAddition: {
      color: theme.designScheme.appBarBackgroundContrastColor,
      [theme.breakpoints.up('sm')]: {
        marginLeft: 'auto'
      }
    }
  });

export default appBarStyles;
