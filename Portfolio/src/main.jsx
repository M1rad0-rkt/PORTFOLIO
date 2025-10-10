import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root');
if (!root) {
  console.error('Root element not found. Check index.html for <div id="root">');
} else {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}