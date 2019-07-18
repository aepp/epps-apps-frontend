import {DesignSchemeType} from "./index";
import {red} from "@material-ui/core/colors";

export const darkColor = '#666666';
export const lightColor = '#EBEEF7';
export const accentColor1 = '#CE662F';
export const accentColor2 = '#F2CD02';
export const accentColor3 = '#51AEE7';

const appBarBackgroundColor = accentColor3;
const drawerBackgroundColor = lightColor;

export const sectionTitleBackgroundColor = accentColor3;
export const sectionTitleColor = lightColor;

export const cvPageBackgroundColor = lightColor;
export const cvPageColor = darkColor;

export const languageCircleColor = accentColor1;
export const skillProgressColor = accentColor1;

export const periodBorderColor = darkColor;
export const periodDotColor = darkColor;
export const periodActiveDotColor = accentColor1;

export const avatarBorderColor = accentColor2;

export const designSchemeDefault: DesignSchemeType = {
  appTitle: {
    style: {
      fontFamily: '"Raleway"',
      color: lightColor
    }
  },
  appBarBackgroundColor,
  drawerBackgroundColor,
  sectionTitle: {
    backgroundColor: sectionTitleBackgroundColor,
    color: sectionTitleColor,
    fontFamily: '"Raleway"',
    fontWeight: 'bold'
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
      fontWeight: "bold"
    }
  }
};

