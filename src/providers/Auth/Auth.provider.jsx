import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useGlobalState } from '../../state/GlobalStateProvider';
import { AUTH_STORAGE_KEY, AUTH_USERINFO_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const { dispatch } = useGlobalState();
  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback((userInfo) => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);
    storage.set(AUTH_USERINFO_KEY, userInfo);
    dispatch({ type: 'UPDATE_USER_INFO', payload: userInfo });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
    storage.set(AUTH_USERINFO_KEY, null);
    dispatch({ type: 'UPDATE_USER_INFO', payload: null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
