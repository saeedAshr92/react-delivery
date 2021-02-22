import { colors, createMuiTheme } from '@material-ui/core';
import VazirTTF from './fonts/Vazir-Medium.ttf'


const Vazir = {
  fontFamily: 'Vazir',
  fontStyle: 'normal',
  fontDisplay: 'swap',
 
  src: `
    local('Vazir-Medium'),
    url(${VazirTTF}) format('ttf')
  `
};


const theme = createMuiTheme({
  
  typography: {
    fontFamily: 'Vazir, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Vazir],
      },
    },
  },
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000'
    },
    secondary: {
      main: '#4CAF50',
      contrastText: '#fff'
    }
  }
});
export { theme };