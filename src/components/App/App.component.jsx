import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useGlobalState } from '../../state/GlobalStateProvider';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import AppContainer from './App.styled';
import theme from '../../utils/theme';

function App() {
  const { state } = useGlobalState();
  return (
    <ThemeProvider
      theme={state.theme === 'light' ? { ...theme.light } : { ...theme.dark }}
    >
      <AppContainer>
        <BrowserRouter>
          <AuthProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
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
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
