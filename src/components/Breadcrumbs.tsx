import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-[11px] md:text-xs text-text-muted font-bold uppercase tracking-[0.2em] mb-8">
      <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="material-symbols-outlined text-[14px] opacity-40">chevron_right</span>
          {index === items.length - 1 ? (
            <span className="text-secondary">{item.label}</span>
          ) : (
            <Link to={item.path} className="hover:text-secondary transition-colors">{item.label}</Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
