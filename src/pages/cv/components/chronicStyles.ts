import {createStyles, Theme} from '@material-ui/core';

const dotDim = 10;
export const chronicStyles = (theme: Theme) => createStyles({
  periodContainer: {
    display: 'flex'
  },
  border: {
    height: '100%',
    width: 2,
    backgroundColor: theme.designScheme.periodBorderColor
  },
  dot: {
    position: 'relative',
    width: dotDim,
    height: dotDim,
    background: theme.designScheme.periodDotColor,
    left: -(dotDim / 2) - 1,
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
  }
});

export default chronicStyles;
