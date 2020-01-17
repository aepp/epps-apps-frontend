import {createStyles, Theme} from '@material-ui/core';

export const defaultDrawerStyles = (theme: Theme) =>
  createStyles({
    changeDesignFormControl: {
      marginTop: theme.spacing(2)
    },
    changeDesignFormControlLabel: {
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'uppercase'
    },
    changeDesignRadioGroup: {}
  });

export default defaultDrawerStyles;
