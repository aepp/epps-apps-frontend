import {createStyles, Theme} from '@material-ui/core';
import chronicStyles from "../chronicStyles";

export const educationStyles = (theme: Theme) => createStyles({
  ...chronicStyles(theme),
  root: {
    flexGrow: 1
  },
  description: {
    paddingTop: theme.spacing(),
    display: 'flex',
    flexDirection: 'column'
  },
  descriptionContainer: {
    paddingLeft: theme.spacing()
  },
  institution: {
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold
  },
  as: {},
  area: {},
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: theme.spacing(6),
    fontSize: theme.typography.fontSize
  },
  skill: {
    margin: theme.spacing(.5)
  }
});

export default educationStyles;
