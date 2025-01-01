// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from '../axios';

// Auth Context to hold auth-related state
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Fetch the user profile if token exists
      axios.get('/profile')
        .then((response) => {
          setUser(response.data);
        })
        .catch(() => {
          localStorage.removeItem('authToken');
        });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    axios.get('/profile')
      .then((response) => {
        setUser(response.data);
      });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
