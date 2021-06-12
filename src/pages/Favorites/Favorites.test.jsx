import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavoritesPage from './Favorites.page';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout.component';
import AuthProvider from '../../providers/Auth';
import AppContainer from '../../components/App/App.styled';
import GlobalStateProvider from '../../state/GlobalStateProvider';
import theme from '../../utils/theme';

describe('Favorites Page', () => {
  it('renders properly', () => {
    const result = create(
      <BrowserRouter>
        <GlobalStateProvider>
          <ThemeProvider theme={theme.light}>
            <AppContainer>
              <AuthProvider>
                <DefaultLayout>
                  <Switch>
                    <Route exact path="/">
                      <FavoritesPage />
                    </Route>
                  </Switch>
                </DefaultLayout>
              </AuthProvider>
            </AppContainer>
          </ThemeProvider>
        </GlobalStateProvider>
      </BrowserRouter>
    ).toJSON();
    expect(result).toMatchSnapshot();
  });
});
