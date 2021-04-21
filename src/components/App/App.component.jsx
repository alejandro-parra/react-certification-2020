import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useGlobalState } from '../../state/GlobalStateProvider';
import AuthProvider from '../../providers/Auth';
import MainPage from '../../pages/Main';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import AppContainer from './App.styled';
import theme from '../../utils/theme';
import WatchPage from '../../pages/Watch';

function App() {
  const { state } = useGlobalState();
  return (
    <ThemeProvider theme={state.theme === 'light' ? theme.light : theme.dark}>
      <AppContainer>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/watch/:videoId">
                <WatchPage />
              </Route>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </AppContainer>
    </ThemeProvider>
  );
}

export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
