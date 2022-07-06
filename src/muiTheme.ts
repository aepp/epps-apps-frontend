import {createTheme} from '@material-ui/core/styles';
import {ThemeOptions} from '@material-ui/core/styles/createTheme';
import {DesignSchemeType} from './theme';

const drawerWidth = 240;

export const defaultTheme = createTheme();

interface ThemeConstants {
  drawerWidth: number;
}

declare module '@material-ui/core/styles/createTheme' {
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
