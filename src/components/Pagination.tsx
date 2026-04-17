import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  const renderPageNumbers = () => {
    const pages = [];
    const showMax = 5;
    
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + showMax - 1);
    
    if (end === totalPages) {
      start = Math.max(1, end - showMax + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all ${
            i === currentPage 
              ? 'bg-primary text-on-primary-fixed shadow-lg shadow-primary/20' 
              : 'text-gray-500 hover:text-white hover:bg-white/5 transition-all'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16 pointer-events-auto">
      <button 
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-6 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group disabled:opacity-30 disabled:pointer-events-none shadow-sm"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold">Previous</span>
      </button>
      
      <div className="flex items-center gap-3">
        {renderPageNumbers()}
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <span className="text-gray-500 font-bold px-2">...</span>
            <button 
              onClick={() => onPageChange(totalPages)}
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-gray-500 hover:text-white hover:bg-white/5 transition-all"
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button 
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-6 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group disabled:opacity-30 disabled:pointer-events-none shadow-sm"
      >
        <span className="font-bold">Next</span>
        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default Pagination;
