import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-inner ${
        isDark ? 'bg-surface-variant' : 'bg-gray-200'
      }`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {/* Sliding knob */}
      <motion.div
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md ${
          isDark ? 'bg-primary' : 'bg-white'
        }`}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
