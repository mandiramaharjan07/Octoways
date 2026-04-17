import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('octoways_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    
    // Respect system preference
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('octoways_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
    } else {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
