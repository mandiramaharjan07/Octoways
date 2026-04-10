import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Products from './pages/Products';
import Works from './pages/Works';
import Contact from './pages/Contact';
import BookAnAppointment from './pages/BookAnAppointment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/products" element={<Products />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-an-appointment" element={<BookAnAppointment />} />
    </Routes>
  );
}

export default App;
