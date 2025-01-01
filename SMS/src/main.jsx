import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Your global CSS
import App from './App.jsx'; // Your App component

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create the root and render the App component
const root = createRoot(rootElement); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
