import {createStyles, Theme} from '@material-ui/core';

export const educationStyles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1
  },
  circleProgressContainer: {
    position: 'relative',
    height: 120,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  languageLevelText: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: theme.typography.fontSize
  },
  skillContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  languageLabel: {
    marginBottom: theme.spacing(),
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold
  }
});

export default educationStyles;
