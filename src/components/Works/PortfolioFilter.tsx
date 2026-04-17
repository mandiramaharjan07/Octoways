import React from 'react';

const categories = [
  'All', 
  'Web Development', 
  'Mobile App', 
  'AI Solutions', 
  'Media & News', 
  'Automotive', 
  'Real Estate', 
  'Tourism', 
  'Enterprise'
];

interface PortfolioFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const PortfolioFilter: React.FC<PortfolioFilterProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="py-8 px-8 border-b border-border bg-background sticky top-20 z-40 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border uppercase tracking-widest ${
                activeCategory === category
                  ? 'bg-primary border-primary text-on-primary shadow-lg shadow-primary/20 scale-105'
                  : 'bg-surface-raised border-border text-text-muted hover:border-border-accent hover:text-text-primary hover:bg-surface-card'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
