// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter }    from 'react-router-dom';
import './index.css';
import App                  from './App';
import { ThemeProvider }    from './ThemeContext';  // 이름 맞춤

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <ThemeProvider>               
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>               
  </React.StrictMode>
);
