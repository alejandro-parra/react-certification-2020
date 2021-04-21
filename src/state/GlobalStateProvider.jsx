import React, { createContext, useContext, useReducer } from 'react';
import { AUTH_USERINFO_KEY, AUTH_FAVORITES_KEY } from '../utils/constants';
import { storage } from '../utils/storage';
import reducer from './GlobalStateReducer';

const initialState = {
  theme: 'light',
  userInfo: storage.get(AUTH_USERINFO_KEY)
    ? {
        ...storage.get(AUTH_USERINFO_KEY),
        favorites:
          storage.get(
            `${AUTH_FAVORITES_KEY}${storage.get(AUTH_USERINFO_KEY).googleId}`
          ) || [],
      }
    : null,
};

const GlobalContext = createContext({
  theme: '',
  userInfo: null,
});

function useGlobalState() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useGlobalState" without a GlobalStateProvider!`);
  }
  return context;
}

function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobalState };

export default GlobalStateProvider;
