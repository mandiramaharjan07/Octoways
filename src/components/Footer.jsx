import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Products', href: '/products' },
    { name: 'Works', href: '/works' },
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/octoways-official',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/octoways.official/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'X', 
      href: 'https://x.com/octoways',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/octowaysnp/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-zinc-950 font-body text-sm leading-relaxed border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-12 py-20 w-full">
        <div className="flex flex-col gap-8">
          <Link to="/" className="flex items-center gap-3">
            <img 
              alt="Octoways Official Brand Identity" 
              className="h-10 w-auto" 
              loading="lazy"
              src="/logo.png" 
            />
          </Link>
          <div className="space-y-4 text-gray-500">
            <p className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Octoways PVT LTD</p>
            <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">location_on</span> Bansbari, Kathmandu, NP</p>
            <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">public</span> Global Headquarters (Remote First)</p>
            <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">mail</span> info@octoways.com</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.href.startsWith('http') || item.href === '#' ? (
                  <a className="text-gray-400 hover:text-primary transition-all duration-300" href={item.href}>
                    {item.name}
                  </a>
                ) : (
                  <Link className="text-gray-400 hover:text-primary transition-all duration-300" to={item.href}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Connect & Subscribe</h4>
          <div className="flex gap-2 mb-8">
            <input 
              className="bg-surface-container-low border border-white/5 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary w-full text-white" 
              placeholder="Professional Email" 
              type="email"
            />
            <button className="bg-primary text-on-primary-fixed px-4 rounded-xl hover:bg-primary-dim transition-colors shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">bolt</span>
            </button>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110 p-2" 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="px-8 md:px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-xs text-center md:text-left">©2026 Octoways AI-Focused Custom Software Development Company. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="text-gray-400 text-xs hover:text-white transition-colors" href="#">Privacy Protocol</a>
          <a className="text-gray-400 text-xs hover:text-white transition-colors" href="#">Data Processing Agreement</a>
        </div>
      </div>
    </footer>
  );
}
