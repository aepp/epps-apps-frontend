import {createStyles, Theme} from '@material-ui/core';

const dotDim = 10;
export const educationStyles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1
  },
  periodContainer: {
    display: 'flex'
  },
  border: {
    height: '100%',
    width: 2,
    backgroundColor: theme.palette.text.primary
  },
  dot: {
    position: 'relative',
    width: dotDim,
    height: dotDim,
    background: theme.palette.common.black,
    left: -(dotDim / 2) - 1,
    top: dotDim / 2,
    borderRadius: '50%'
  },
  currentDot: {
    background: theme.palette.error.main
  },
  period: {
    fontWeight: theme.typography.fontWeightBold,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing()
  },
  descriptionContainer: {
    paddingLeft: theme.spacing()
  },
  description: {
    paddingTop: theme.spacing(),
    display: 'flex',
    flexDirection: 'column'
  },
  institution: {
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold
  },
  degree: {
    fontSize: theme.typography.fontSize
  },
  as: {
    fontStyle: 'italic'
  }
});

export default educationStyles;
