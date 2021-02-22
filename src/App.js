
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { theme } from './style';
import HomePage from './components/pages/HomePage';
import  AppBar  from './components/ui/app-bar/AppBar'
import CardPage from './components/pages/CardPage';


function App() {
  return (
    <MuiThemeProvider theme={theme}>
            <BrowserRouter>
      <AppBar  />


        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/card" exact component={CardPage} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
