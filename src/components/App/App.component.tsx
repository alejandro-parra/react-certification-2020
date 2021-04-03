import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
// @ts-ignore
import HomePage from '../../pages/Home.tsx';
// @ts-ignore
import LoginPage from '../../pages/Login.tsx';
// @ts-ignore
import NotFound from '../../pages/NotFound.tsx';
// @ts-ignore
import SecretPage from '../../pages/Secret.tsx';
// @ts-ignore
import Private from '../Private.tsx';
// @ts-ignore
import Layout from '../Layout.tsx';

function App() {
  return (
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
  );
}

export default App;
