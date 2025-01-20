// src/axios.js
import axios from 'axios';

// Set the base URL of the backend API
const API_URL = `http://localhost:${process.env.PORT}/api/auth`;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can set up default token in request header (for authenticated requests)
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
