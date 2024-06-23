// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);

      setIsAdmin(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  const isAdminUser = () =>{
    return isAdmin
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated,isAdminUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
