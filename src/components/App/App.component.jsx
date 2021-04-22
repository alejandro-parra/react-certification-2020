import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useGlobalState } from '../../state/GlobalStateProvider';
import AuthProvider from '../../providers/Auth';
import MainPage from '../../pages/Main';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import Layout from '../Layout';
import AppContainer from './App.styled';
import theme from '../../utils/theme';
import WatchPage from '../../pages/Watch';
import FavoritesPage from '../../pages/Favorites';
import WatchFavoritesPage from '../../pages/WatchFavorites/WatchFavorites.page';

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
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
              <Private exact path="/watch/favorites/:videoId">
                <WatchFavoritesPage />
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
