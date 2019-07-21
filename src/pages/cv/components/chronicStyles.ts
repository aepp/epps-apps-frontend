import {createStyles, Theme} from '@material-ui/core';

const dotDim = 10;
export const chronicStyles = (theme: Theme) => createStyles({
  periodContainer: {
    display: 'flex',
    position: 'relative'
  },
  border: {
    height: '100%',
    width: 3,
    backgroundColor: theme.designScheme.periodBorderColor,
    position: 'absolute'
  },
  dot: {
    position: 'absolute',
    width: dotDim,
    height: dotDim,
    background: theme.designScheme.periodDotColor,
    left: -3,
    top: dotDim / 2,
    borderRadius: '50%'
  },
  currentDot: {
    background: theme.designScheme.periodActiveDotColor,
    top: 0
  },
  period: {
    fontWeight: theme.typography.fontWeightBold,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(),
    paddingLeft: theme.spacing()
  }
});

export default chronicStyles;
