import React, { useState } from 'react';

const categories = [
  "All", "AI & Machine Learning", "Web Development", "Mobile Apps", 
  "SEO & Marketing", "GEO Services", "Tech News", "Nepal Tech", "Product Updates"
];

export default function CategoryFilters({ activeCategory, setActiveCategory }) {
  return (
    <div className="max-w-7xl mx-auto px-8 mb-12 overflow-x-auto scrollbar-hide py-2">
      <div className="flex items-center gap-4 whitespace-nowrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border ${
              activeCategory === cat 
                ? 'bg-primary border-primary text-on-primary-fixed shadow-lg shadow-primary/20' 
                : 'bg-surface-container-low border-white/5 text-gray-400 hover:border-primary/40 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
