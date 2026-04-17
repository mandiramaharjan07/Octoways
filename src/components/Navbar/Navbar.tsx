import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../../data/navData';
import MegaMenu from './MegaMenu';
import ThemeToggle from '../ThemeToggle';

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  const navRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const handleToggle = (id: string) => {
    setActiveMenu(prev => prev === id ? null : id);
  };

  const toggleMobileItem = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[9997] h-[60px] flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
          scrolled 
            ? 'bg-nav-bg backdrop-blur-xl shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        {/* LOGO - Reverting to original image logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Octoways Logo" 
            className="h-8 md:h-9 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onMouseEnter={() => scrolled && setActiveMenu(item.id)}
              onClick={() => handleToggle(item.id)}
              className={`relative px-4 py-2 font-headline text-[13.5px] font-bold tracking-wide transition-all duration-300 flex items-center gap-1.5 rounded-lg ${
                activeMenu === item.id 
                  ? 'text-primary bg-primary/10' 
                  : scrolled 
                    ? 'text-text-primary/70 hover:text-primary hover:bg-primary/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
              <motion.span 
                animate={{ rotate: activeMenu === item.id ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="material-symbols-outlined text-[16px] leading-none"
              >
                expand_more
              </motion.span>
              {activeMenu === item.id && (
                <motion.div 
                  layoutId="nav-dot"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <button className={`hidden lg:block font-headline text-[13px] font-bold tracking-widest uppercase transition-colors ${
            scrolled ? 'text-text-muted hover:text-text-primary' : 'text-white/60 hover:text-white'
          }`}>
            Sign In
          </button>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            <button 
              onClick={() => navigate('/book-an-appointment')}
              className="hidden sm:block px-6 py-2 bg-primary text-on-primary font-headline text-[12px] font-extrabold uppercase tracking-[0.2em] rounded-full hover:bg-secondary transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              Book a Demo
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors ${
              scrolled ? 'text-text-primary' : 'text-white'
            }`}
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* MEGA MENU RENDERING */}
        <MegaMenu 
          item={NAV_ITEMS.find(i => i.id === activeMenu) || NAV_ITEMS[0]}
          isOpen={!!activeMenu}
          onClose={() => setActiveMenu(null)}
        />
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-overlay backdrop-blur-sm z-[9995] md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-[60px] left-0 bottom-0 w-[85%] max-w-[340px] bg-surface backdrop-blur-2xl z-[9996] md:hidden overflow-y-auto shadow-2xl"
            >
              <div className="p-8 space-y-6">
                {NAV_ITEMS.map((item) => (
                  <div key={item.id} className="space-y-4">
                    <button 
                      onClick={() => toggleMobileItem(item.id)}
                      className="w-full flex items-center justify-between font-headline text-lg font-bold text-text-primary group"
                    >
                      <span className={expandedItems.includes(item.id) ? 'text-primary' : ''}>
                        {item.label}
                      </span>
                      <span className={`material-symbols-outlined transition-transform duration-300 ${expandedItems.includes(item.id) ? 'rotate-180 text-primary' : 'text-text-muted'}`}>
                        expand_more
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {expandedItems.includes(item.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden space-y-2 pl-4"
                        >
                          {item.type === 'mega' && item.columns?.map(sub => (
                            <Link key={sub.id} to={sub.href} className="block py-2">
                              <div className="text-text-primary text-sm font-bold mb-0.5">{sub.label}</div>
                              <div className="text-text-muted text-xs">{sub.description}</div>
                            </Link>
                          ))}
                          {item.type === 'grouped' && item.groups?.map(group => (
                            <div key={group.groupLabel} className="space-y-2 pb-4">
                              <span className="block text-[10px] font-bold text-primary uppercase tracking-widest py-2">{group.groupLabel}</span>
                              {group.items.map(sub => (
                                <Link key={sub.id} to={sub.href} className="block py-2">
                                  <div className="text-text-primary text-sm font-bold mb-0.5">{sub.label}</div>
                                  <div className="text-text-muted text-xs">{sub.description}</div>
                                </Link>
                              ))}
                            </div>
                          ))}
                          {item.type === 'simple' && item.simpleItems?.map(sub => (
                            <Link key={sub.id} to={sub.href} className="block py-2">
                              <div className="text-text-primary text-sm font-bold mb-0.5">{sub.label}</div>
                              <div className="text-text-muted text-xs">{sub.description}</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="pt-8 flex flex-col gap-4">
                   <button className="text-left font-headline text-sm font-bold text-text-muted uppercase tracking-widest">Sign In</button>
                   <button 
                    onClick={() => navigate('/book-an-appointment')}
                    className="w-full py-4 bg-primary text-on-primary font-headline font-extrabold uppercase tracking-widest rounded-2xl shadow-lg shadow-primary/20"
                   >
                     Book a Demo
                   </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
