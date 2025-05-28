// src/ThemeContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // 처음 로드할 때 로컬스토리지에서 테마 불러오기
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setTheme('dark');
  }, []);

  // 테마가 바뀔 때마다 <html> 에 data-theme 속성 설정 & 저장
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
