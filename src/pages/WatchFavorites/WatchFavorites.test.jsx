import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WatchFavoritesPage from './WatchFavorites.page';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout.component';
import AuthProvider from '../../providers/Auth';
import AppContainer from '../../components/App/App.styled';
import GlobalStateProvider from '../../state/GlobalStateProvider';
import theme from '../../utils/theme';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
    state: {
      currentVideo: 'abcd',
    },
  }),
}));

describe('WatchPage', () => {
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
                      <WatchFavoritesPage />
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
