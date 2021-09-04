import {createStyles, Theme} from '@material-ui/core';
import {StyleRules} from '@material-ui/styles/withStyles';

export const projectExperienceStyles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      flexGrow: 1
    },
    roleContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    projectLabel: {
      textTransform: 'uppercase',
      fontWeight: 900,
      textAlign: 'center'
    },
    projectSubLabel: {
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold
    },
    divider: {
      backgroundColor: 'transparent'
    },
    underline: {
      width: '100%',
      height: 3,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '20% 0% 20% 25% / 100% 0% 100% 0%'
    }
  });

export default projectExperienceStyles;
