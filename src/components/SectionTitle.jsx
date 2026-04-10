import React from 'react';

export default function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`font-headline text-4xl lg:text-5xl font-bold tracking-tighter text-white uppercase ${className}`}>
      {children}
    </h2>
  );
}
