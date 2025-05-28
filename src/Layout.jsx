// src/Layout.jsx
import React, { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

export default function Layout() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <>
      <header style={{
        padding: 16,
        background: 'var(--header-bg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>My React App</h1>
        <button onClick={toggle} style={{
          background: 'none',
          border: '1px solid var(--text)',
          color: 'var(--text)',
          padding: '4px 8px',
          borderRadius: 4,
          cursor: 'pointer'
        }}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>

      <nav style={{ padding: 8, borderBottom: '1px solid var(--text)' }}>
        <NavLink to="/"       style={({ isActive }) => ({ marginRight: 12, color: isActive ? 'blue' : 'var(--text)' })}>Home</NavLink>
        <NavLink to="/about"  style={({ isActive }) => ({ marginRight: 12, color: isActive ? 'blue' : 'var(--text)' })}>About</NavLink>
        <NavLink to="/contact"style={({ isActive }) => ({ color: isActive ? 'blue' : 'var(--text)' })}>Contact</NavLink>
      </nav>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>

      <footer style={{ padding: 16, background: 'var(--footer-bg)', marginTop: 24 }}>
        © 2025 My React App
      </footer>
    </>
  );
}
