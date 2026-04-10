import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-6 mt-16 pointer-events-auto">
      <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/5 text-gray-400 hover:text-white hover:bg-white/5 transition-all group">
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold">Previous</span>
      </button>
      
      <div className="flex items-center gap-3">
        {[1, 2, 3].map((num) => (
          <button 
            key={num}
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all ${
              num === 1 ? 'bg-primary text-on-primary-fixed shadow-lg shadow-primary/20' : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5'
            }`}
          >
            {num}
          </button>
        ))}
        <span className="text-gray-500 font-bold px-2">...</span>
        <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-gray-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5">
          12
        </button>
      </div>

      <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/5 text-gray-400 hover:text-white hover:bg-white/5 transition-all group">
        <span className="font-bold">Next</span>
        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
