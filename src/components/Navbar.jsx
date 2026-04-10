import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Products', path: '/products' },
    { name: 'Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full font-headline tracking-tight border-b border-white/5">
      <Link to="/" className="flex items-center gap-3">
        <img 
          alt="Octoways Official Brand Identity" 
          className="h-10 w-auto" 
          loading="lazy"
          src="/logo.png" 
        />
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`transition-all duration-300 px-3 py-1 rounded-xl ${
              location.pathname === link.path
                ? 'text-primary font-bold border-b-2 border-primary rounded-none'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Link to="/book-an-appointment">
        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-6 py-2.5 rounded-xl font-bold active:scale-95 duration-200 transition-all">
          Book an Appointment
        </button>
      </Link>
    </nav>
  );
}
