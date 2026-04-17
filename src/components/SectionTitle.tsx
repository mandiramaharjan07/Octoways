import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`font-headline text-4xl lg:text-5xl font-bold tracking-tighter text-text-primary uppercase ${className}`}>
      {children}
    </h2>
  );
}
