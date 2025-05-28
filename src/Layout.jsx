import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header style={{ padding: 16, background: '#eee' }}>
        <h1>My React App</h1>
      </header>

      <nav style={{ padding: 8, borderBottom: '1px solid #ccc' }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            marginRight: 12,
            color: isActive ? 'blue' : 'black',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            marginRight: 12,
            color: isActive ? 'blue' : 'black',
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? 'blue' : 'black',
          })}
        >
          Contact
        </NavLink>
      </nav>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>

      <footer style={{ padding: 16, background: '#eee', marginTop: 24 }}>
        © 2025 My React App
      </footer>
    </>
  );
}
