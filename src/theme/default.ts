import {red} from '@material-ui/core/colors';
import {defaultTheme} from '../muiTheme';
import {DesignSchemeIdType, DesignSchemeType} from './index';
import {DESIGN_SCHEME_ID_RETRO} from './retro';

export const DESIGN_SCHEME_ID_DEFAULT: DesignSchemeIdType = 'default';

export const darkColor = '#646069';
// export const lightColor = '#EBEEF7';
export const lightColor = '#ffffff';
export const accentColor1 = '#61C9A8';
export const accentColor2 = '#4C3B4D';
export const accentColor3 = '#A53860';

const appBarBackgroundColor = accentColor3;
const drawerBackgroundColor = lightColor;

export const sectionTitleBackgroundColor = accentColor3;
export const sectionTitleColor = lightColor;

export const cvPageBackgroundColor = lightColor;
export const cvPageColor = darkColor;

export const languageCircleColor = accentColor1;
export const skillProgressColor = accentColor2;

export const periodBorderColor = darkColor;
export const periodDotColor = darkColor;
export const periodActiveDotColor = accentColor1;

export const avatarBorderColor = accentColor3;

export const designSchemeDefault: DesignSchemeType = {
  // id: DESIGN_SCHEME_ID_DEFAULT,
  id: DESIGN_SCHEME_ID_RETRO,
  appTitle: {
    style: {
      fontFamily: '"Raleway"',
      color: lightColor
    }
  },
  appBarBackgroundColor,
  appBarBackgroundContrastColor: lightColor,
  drawerBackgroundColor,
  sectionTitle: {
    backgroundColor: sectionTitleBackgroundColor,
    color: sectionTitleColor,
    fontFamily: '"Raleway"',
    fontWeight: 'bold',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase',
    marginBottom: defaultTheme.spacing(2),
    padding: defaultTheme.spacing(),
    borderRadius: '20% 0% 20% 25% / 100% 0% 100% 0%'
  },
  cvPageBackgroundColor,
  cvPageColor,
  languageCircleColor,
  skillProgressColor,
  periodBorderColor,
  periodDotColor,
  periodActiveDotColor,
  avatarBorderColor,
  primary: {
    main: accentColor3
  },
  secondary: {
    main: accentColor1
  },
  error: {
    main: red.A400
  },
  background: {
    default: lightColor
  },
  MuiButton: {
    containedPrimary: {
      color: lightColor,
      fontWeight: 'bold'
    }
  },
  contactItem: {
    iconContainer: {
      fill: accentColor3,
      width: 50,
      borderRadius: '50% 0% 50% 25% / 100% 0% 100% 0%'
    },
    icon: {
      borderRadius: '40% 0% 40% 25% / 100% 0% 100% 0%'
    },
    label: {
      color: darkColor
    }
  }
};
