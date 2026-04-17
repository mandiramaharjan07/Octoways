import React from 'react';
import { motion } from 'framer-motion';

interface CategoryFiltersProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-8 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden ${
            activeCategory === category 
              ? 'text-on-primary' 
              : 'text-text-secondary hover:text-secondary bg-surface-card border border-border'
          }`}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-primary"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
