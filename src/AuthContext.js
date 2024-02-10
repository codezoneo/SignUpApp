

import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [logoutTimer, setLogoutTimer] = useState(null);

  
  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    setLogoutTimer(setTimeout(logout, 5 * 60 * 1000)); // Auto logout after 5 minutes
  };

 
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    clearTimeout(logoutTimer); // Clear auto logout timer
  };

  
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setLogoutTimer(setTimeout(logout, 5 * 60 * 1000)); // Start auto logout timer
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
