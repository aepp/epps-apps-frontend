import {createStyles, Theme} from '@material-ui/core';

export const cvStyles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
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
  sectionTitle: {
    fontFamily: theme.designScheme.sectionTitle.fontFamily,
    width: '100%',
    backgroundColor: theme.designScheme.sectionTitle.backgroundColor,
    color: theme.designScheme.sectionTitle.color,
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(),
    fontWeight: theme.designScheme.sectionTitle.fontWeight,
    borderRadius: '20% 0% 20% 25% / 100% 0% 100% 0%'
  }
});

export default cvStyles;
