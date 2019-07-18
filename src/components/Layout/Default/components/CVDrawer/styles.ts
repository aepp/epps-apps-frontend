import {createStyles, Theme} from '@material-ui/core';

export const staticLinearProgressStyles = (theme: Theme) => createStyles({
  root: {},
  changeDesignFormControl: {
    marginTop: theme.spacing(2)
  },
  changeDesignFormControlLabel: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase'
  },
  changeDesignRadioGroup: {}
});

export default staticLinearProgressStyles;
