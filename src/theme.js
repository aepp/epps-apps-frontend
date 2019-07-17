import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

const defaultTheme = createMuiTheme();
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1dafa1'
    },
    secondary: {
      main: '#556cd6'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  mixins: {
    ...defaultTheme.mixins,
    sectionTitle: {}
  }
});

export default theme;
