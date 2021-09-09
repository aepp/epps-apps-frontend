import {DESIGN_SCHEME_ID_RETRO, designSchemeRetro} from './retro';
import {DESIGN_SCHEME_ID_DEFAULT, designSchemeDefault} from './default';
import {Color} from 'csstype';
import {PaletteColorOptions, StyleRules} from '@material-ui/core/styles';
import {TypeBackground} from '@material-ui/core/styles/createPalette';
import {ButtonClassKey} from '@material-ui/core/Button';
import {CSSProperties} from '@material-ui/styles';

export type DesignSchemeIdType = 'retro' | 'default';

export const designSchemes = {
  [DESIGN_SCHEME_ID_RETRO]: designSchemeRetro,
  [DESIGN_SCHEME_ID_DEFAULT]: designSchemeDefault
};

interface AppStyleType {
  style: {};
}

export interface DesignSchemeType {
  id: DesignSchemeIdType;
  appTitle: AppStyleType;
  sectionTitle: CSSProperties;
  appBarBackgroundColor: Color;
  appBarBackgroundContrastColor: Color;
  drawerBackgroundColor: Color;
  cvPageBackgroundColor: Color;
  cvPageColor: Color;
  languageCircleColor: Color;
  skillProgressColor: Color;
  periodBorderColor: Color;
  periodDotColor: Color;
  periodActiveDotColor: Color;
  avatarBorderColor: Color;
  primary: PaletteColorOptions;
  secondary: PaletteColorOptions;
  error: PaletteColorOptions;
  background: Partial<TypeBackground>;
  MuiButton: Partial<StyleRules<ButtonClassKey>>;
  contactItem: {
    iconContainer: CSSProperties;
    icon: CSSProperties;
    label: CSSProperties;
  };
}
