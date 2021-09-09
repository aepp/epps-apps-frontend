import {red} from '@material-ui/core/colors';
import {defaultTheme} from '../muiTheme';
import {DesignSchemeIdType, DesignSchemeType} from './index';

export const DESIGN_SCHEME_ID_RETRO: DesignSchemeIdType = 'retro';
export const darkColor = '#655643';
export const lightColor = '#F6F7BD';
export const accentColor1 = '#BF4D28';
export const accentColor2 = '#E6AC27';
export const accentColor3 = '#048171';

const appBarBackgroundColor = lightColor;
const drawerBackgroundColor = accentColor2;

const sectionTitleBackgroundColor = accentColor1;
const sectionTitleColor = lightColor;

const cvPageBackgroundColor = darkColor;
const cvPageColor = lightColor;

const languageCircleColor = accentColor3;
const skillProgressColor = accentColor3;
const periodBorderColor = accentColor2;
const periodDotColor = accentColor2;
const periodActiveDotColor = accentColor1;
const avatarBorderColor = accentColor1;

export const designSchemeRetro: DesignSchemeType = {
  id: DESIGN_SCHEME_ID_RETRO,
  appTitle: {
    style: {
      fontFamily: '"Monoton"',
      '& > div': {
        '&:nth-child(1)': {
          color: accentColor3
        },
        '&:nth-child(2)': {
          color: accentColor1
        },
        '&:nth-child(3)': {
          color: accentColor2
        },
        '&:nth-child(4)': {
          color: darkColor
        },
        '&:nth-child(6)': {
          color: accentColor2
        },
        '&:nth-child(7)': {
          color: darkColor
        },
        '&:nth-child(8)': {
          color: accentColor3
        },
        '&:nth-child(9)': {
          color: accentColor1
        }
      }
    }
  },
  appBarBackgroundColor,
  appBarBackgroundContrastColor: accentColor1,
  drawerBackgroundColor,
  sectionTitle: {
    backgroundColor: sectionTitleBackgroundColor,
    color: sectionTitleColor,
    fontFamily: '"Sigmar One"',
    fontWeight: 'normal',
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
    main: accentColor1
  },
  secondary: {
    main: lightColor
  },
  error: {
    main: red.A400
  },
  background: {
    default: darkColor
  },
  MuiButton: {
    containedPrimary: {
      color: lightColor,
      fontWeight: 'bold'
    }
  },
  contactItem: {
    icon: {
      fill: lightColor
    },
    iconContainer: {
      width: 50,
      borderRadius: '50% 0% 50% 25% / 100% 0% 100% 0%'
    },
    label: {
      color: lightColor
    }
  }
};
