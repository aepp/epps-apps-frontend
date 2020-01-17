import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import DefaultLayout from '../Layout/Default';
import {defaultTheme, themeOptions} from '../../theme';
import {
  DesignSchemeIdType,
  designSchemes,
  DesignSchemeType
} from '../../design';
import {RootState} from '../../reducers';
import {connect} from 'react-redux';
import {createMuiTheme} from '@material-ui/core';
import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';

const _App: React.FunctionComponent<StateProps> = props => {
  const designScheme: DesignSchemeType = designSchemes[props.designSchemeId];
  const themeOptionsWithDesign: ThemeOptions = {
    ...themeOptions,
    palette: {
      primary: designScheme.primary,
      secondary: designScheme.secondary,
      error: designScheme.error,
      background: designScheme.background
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

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <DefaultLayout />
    </ThemeProvider>
  );
};

interface StateProps {
  designSchemeId: DesignSchemeIdType;
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    designSchemeId: state.cv.designSchemeId
  };
};

export const App = connect(mapStateToProps, null)(_App);
export default App;
