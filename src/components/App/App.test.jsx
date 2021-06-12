import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import GlobalStateProvider from '../../state/GlobalStateProvider';
import App from './App.component';

describe('App with router', () => {
  it('renders properly', () => {
    const result = render(
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    );
    expect(result).toBeTruthy();
  });

  it('reroutes to 404 when no page is found', async () => {
    window.history.pushState({}, 'Testing 404', '/ThisRouteDoesNotExist');
    render(
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    );
    const result = screen.getByAltText('page not found');
    expect(result).toBeInTheDocument();
  });

  it('reroutes to initialPage when no user is logged in', async () => {
    window.history.pushState(
      { test: 'this field will not be present later' },
      'Testing private',
      '/favorites'
    );
    render(
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    );
    const result = window.history.state;
    expect(result.test).toBeUndefined();
  });
});
