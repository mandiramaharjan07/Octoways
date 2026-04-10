import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-8" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-primary transition-colors">Home</Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          {index === items.length - 1 ? (
            <span className="text-on-surface font-medium" aria-current="page">{item.name}</span>
          ) : (
            <Link to={item.path} className="hover:text-primary transition-colors">{item.name}</Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
