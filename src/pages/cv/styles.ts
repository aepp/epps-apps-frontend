import {createStyles, Theme} from '@material-ui/core';

export const cvStyles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10)
      },
      paddingTop: theme.spacing(4),
      backgroundColor: theme.designScheme.cvPageBackgroundColor,
      color: theme.designScheme.cvPageColor
    },
    section: {
      width: '100%',
      padding: theme.spacing()
    },
    sectionTitleContainer: {
      display: 'flex'
    },
    sectionTitle: theme.designScheme.sectionTitle,
    noPaddingBottom: {
      paddingBottom: 0 + '!important'
    }
  });

export default cvStyles;
