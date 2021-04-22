import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStateProvider from './state/GlobalStateProvider';
import App from './components/App/App.component';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
