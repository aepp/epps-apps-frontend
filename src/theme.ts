import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';
import {DesignSchemeType} from './design';

const drawerWidth = 240;

export const defaultTheme = createMuiTheme();

interface ThemeConstants {
  drawerWidth: number;
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    designScheme: DesignSchemeType;
    constants: ThemeConstants;
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    designScheme: DesignSchemeType;
    constants: ThemeConstants;
  }
}

export const themeOptions: Partial<ThemeOptions> = {
  typography: {
    fontFamily: ['Raleway', 'serif'].join(',')
  },
  constants: {
    drawerWidth
  }
};
