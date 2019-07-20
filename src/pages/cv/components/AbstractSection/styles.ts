import {createStyles, Theme} from '@material-ui/core';
import avatar from './avatar.jpg';

export const abstractStyles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2)
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
    borderColor: theme.designScheme.avatarBorderColor,
    borderWidth: 10,
    borderStyle: 'solid'
  },
  name: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightBold
  },
  about: {
    textAlign: 'center'
  },
  contactContainer: {
    display: 'flex',
    paddingRight: 0 + ' !important'
  },
  contactIconContainer: {
    ...theme.designScheme.sectionTitle,
    ...theme.designScheme.contactItem.iconContainer,
    marginBottom: 0
  },
  contactIcon: {
    ...theme.designScheme.contactItem.icon,
    fontSize: theme.typography.fontSize
  },
  contactLabel: {
    ...theme.designScheme.contactItem.label,
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  contactLabelContainer: {
    paddingLeft: theme.spacing()
  }
});

export default abstractStyles;
