import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout   from './Layout';
import Home     from './pages/Home';
import About    from './pages/About';
import Contact  from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index       element={<Home />} />
        <Route path="about"   element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*"       element={<h2>404: 없는 페이지</h2>} />
      </Route>
    </Routes>
  );
}
