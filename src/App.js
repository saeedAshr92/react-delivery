
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { theme } from './style';
import HomePage from './components/pages/HomePage';
import  AppBar  from './components/ui/app-bar/AppBar'


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar  />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
