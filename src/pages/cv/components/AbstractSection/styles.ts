import {createStyles, Theme} from '@material-ui/core';
import avatar from './avatar.jpg';

export const abstractStyles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    backgroundImage: `url(${avatar})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: 200,
    height: 200,
    borderRadius: '50%',
    borderColor: theme.palette.primary.main,
    borderWidth: 10,
    borderStyle: 'solid'
  },
  name: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightBold
  },
  about: {}
});

export default abstractStyles;
