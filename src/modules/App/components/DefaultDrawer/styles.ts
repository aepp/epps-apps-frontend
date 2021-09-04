import {createStyles, Theme} from '@material-ui/core';
import {StyleRules} from '@material-ui/styles/withStyles';

export const defaultDrawerStyles = (theme: Theme): StyleRules =>
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
