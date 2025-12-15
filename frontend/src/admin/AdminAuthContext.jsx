import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const TOKEN_KEY = 'tradeed_admin_token';
const CREDS_KEY = 'tradeed_admin_creds';

const defaultCreds = { email: 'admin@tradeedglobal.com', password: 'Admin@123' };

const AdminAuthContext = createContext();

const getStoredCreds = () => {
  const raw = localStorage.getItem(CREDS_KEY);
  if (!raw) return defaultCreds;
  try {
    const parsed = JSON.parse(raw);
    if (parsed?.email && parsed?.password) return parsed;
    return defaultCreds;
  } catch {
    return defaultCreds;
  }
};

export const AdminAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(localStorage.getItem(TOKEN_KEY)));
  const [creds, setCreds] = useState(() => getStoredCreds());

  useEffect(() => {
    const handler = () => {
      setIsAuthenticated(Boolean(localStorage.getItem(TOKEN_KEY)));
      setCreds(getStoredCreds());
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const login = (email, password) => {
    const currentCreds = getStoredCreds();
    if (email === currentCreds.email && password === currentCreds.password) {
      localStorage.setItem(TOKEN_KEY, 'authenticated');
      setIsAuthenticated(true);
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setIsAuthenticated(false);
  };

  const changePassword = (currentPassword, newPassword) => {
    const currentCreds = getStoredCreds();
    if (currentPassword !== currentCreds.password) {
      return { success: false, message: 'Current password is incorrect.' };
    }
    const updated = { ...currentCreds, password: newPassword };
    localStorage.setItem(CREDS_KEY, JSON.stringify(updated));
    setCreds(updated);
    return { success: true };
  };

  const value = useMemo(
    () => ({ isAuthenticated, login, logout, changePassword, creds }),
    [isAuthenticated, creds]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => useContext(AdminAuthContext);

