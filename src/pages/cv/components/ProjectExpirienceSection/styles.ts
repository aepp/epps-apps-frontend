import {createStyles, Theme} from '@material-ui/core';

export const projectExperienceStyles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1
  },
  roleContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  projectLabel: {
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold
  },
  projectSubLabel: {
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold
  },
  divider: {
    backgroundColor: theme.palette.primary.main
  }
});

export default projectExperienceStyles;
