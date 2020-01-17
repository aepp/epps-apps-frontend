import {createStyles, Theme} from '@material-ui/core';

export const staticLinearProgressStyles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      position: 'relative',
      borderRadius: theme.shape.borderRadius
    },
    progress: {
      borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`
    },
    labelContainer: {
      position: 'absolute',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    label: {
      color: theme.palette.common.white,
      fontSize: theme.typography.fontSize,
      width: 50,
      textAlign: 'left',
      whiteSpace: 'nowrap'
    }
  });

export default staticLinearProgressStyles;
