import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStateProvider from './state/GlobalStateProvider';
import App from './components/App/App.component';
import './global.css';

ReactDOM.render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>,
  document.getElementById('root')
);
