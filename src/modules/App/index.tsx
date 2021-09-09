import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core';
import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';
import {defaultTheme, themeOptions} from '../../muiTheme';
import {designSchemes, DesignSchemeType} from '../../theme';
import {DESIGN_SCHEME_ID_RETRO} from '../../theme/retro';
import {action} from '../../index';
import DefaultLayout from './components/DefaultTemplate';
import {CHECK_AUTHENTICATION_STATUS} from './actions/auth';
import {getCurrentDesignSchemeId} from './reducers';

export const App: React.FunctionComponent = () => {
  const designSchemeId = useSelector(getCurrentDesignSchemeId);

  const designScheme: DesignSchemeType =
    (designSchemeId && designSchemes[designSchemeId]) || DESIGN_SCHEME_ID_RETRO;
  const themeOptionsWithDesign: ThemeOptions = {
    ...themeOptions,
    palette: {
      primary: designScheme.primary,
      secondary: designScheme.secondary,
      error: designScheme.error,
      background: designScheme.background,
      designScheme: designSchemeId
    },
    designScheme: designScheme,
    overrides: {
      MuiButton: designScheme.MuiButton
    },
    mixins: {
      ...defaultTheme.mixins
    }
  } as ThemeOptions;

  const theme = createMuiTheme(themeOptionsWithDesign);

  useEffect(() => {
    action(CHECK_AUTHENTICATION_STATUS);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <DefaultLayout />
    </ThemeProvider>
  );
};

export default App;
