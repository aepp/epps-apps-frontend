import {DESIGN_SCHEME_ID_RETRO, designSchemeRetro} from './retro';
import {DESIGN_SCHEME_ID_DEFAULT, designSchemeDefault} from './default';
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
  appBarBackgroundColor: string;
  appBarBackgroundContrastColor: string;
  drawerBackgroundColor: string;
  cvPageBackgroundColor: string;
  cvPageColor: string;
  languageCircleColor: string;
  skillProgressColor: string;
  periodBorderColor: string;
  periodDotColor: string;
  periodActiveDotColor: string;
  avatarBorderColor: string;
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
