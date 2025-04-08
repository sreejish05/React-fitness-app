import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css'; // Ensure this line is correct

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
