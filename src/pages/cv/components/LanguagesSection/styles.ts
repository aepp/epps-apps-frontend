import {createStyles, Theme} from '@material-ui/core';

export const educationStyles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1
  },
  circleProgressContainer: {
    position: 'relative',
    height: 'auto',
    width: 'auto'
  },
  languageLevelText: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.main
  },
  skillContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  languageLabel: {
    marginBottom: theme.spacing(),
    textAlign: 'center'
  }
});

export default educationStyles;
