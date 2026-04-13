import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl max-w-full font-headline tracking-tight border-b border-white/5">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img 
            alt="Octoways Official Brand Identity" 
            className="h-8 md:h-10 w-auto object-contain" 
            loading="lazy"
            src="/logo.png" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
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

        <div className="flex items-center gap-4">
          <Link to="/book-an-appointment" className="hidden sm:block">
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-4 md:px-6 py-2 md:py-2.5 rounded-xl font-bold text-sm md:text-base active:scale-95 duration-200 transition-all">
              Book an Appointment
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/5 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl transition-all duration-300 px-4 py-3 rounded-xl ${
                  location.pathname === link.path
                    ? 'text-primary font-bold bg-primary/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book-an-appointment" 
              onClick={() => setIsMenuOpen(false)}
              className="mt-4"
            >
              <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed py-4 rounded-xl font-bold active:scale-95 duration-200 transition-all">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
