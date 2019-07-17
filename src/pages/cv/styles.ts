import {createStyles, Theme} from '@material-ui/core';

export const cvStyles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2)
  },
  section: {
    width: '100%',
    padding: theme.spacing()
  },
  sectionTitleContainer: {
    display: 'flex'
  },
  sectionTitle: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(),
    fontWeight: theme.typography.fontWeightBold,
    borderRadius: '20% 0% 20% 25% / 100% 0% 100% 0%'
  }
});

export default cvStyles;
