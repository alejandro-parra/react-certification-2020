import React, { createContext, useContext, useReducer } from 'react';
import reducer from './GlobalStateReducer';

const initialState = {
  searchTerm: '',
  theme: 'light',
};

const GlobalContext = createContext({
  searchTerm: '',
  theme: '',
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
