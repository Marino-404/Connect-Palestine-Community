import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { AppProvider } from './AppContext.jsx'; 
import App from './App.jsx';
import BackGroundPage from './assets/BackGroundPage.jsx';
import './index.css'; 
import AnimatedLines from './assets/AnimatedLines.jsx';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppProvider>
      <BackGroundPage />
      <AnimatedLines />
      <App />
    </AppProvider>
  </StrictMode>
);
