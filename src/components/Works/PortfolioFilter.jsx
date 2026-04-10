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

export default function PortfolioFilter({ activeCategory, setActiveCategory }) {
  return (
    <div className="py-8 px-8 border-b border-white/5 bg-background sticky top-20 z-40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-primary border-primary text-on-primary shadow-[0_0_20px_rgba(61,146,204,0.3)]'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-primary/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
