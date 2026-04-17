import React from 'react';

export default function WorksHero() {
  const stats = [
    { label: 'Projects', value: '500+' },
    { label: 'Clients', value: '200+' },
    { label: 'Years', value: '10+' },
    { label: 'Industries', value: '9' }
  ];

  return (
    <section id="works-hero" className="relative min-h-[50vh] flex items-center px-8 pt-20 overflow-hidden bg-animated-neural transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/50 to-background z-0"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
        <div className="flex justify-center items-center gap-2 mb-6 reveal">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_var(--color-primary-val)]"></span>
          <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">Excellence in Execution</span>
        </div>
        
        <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-8 max-w-4xl mx-auto reveal delay-100 text-text-primary">
          Our Work: 500+ Digital Projects <br className="hidden md:block" /> Delivered from <span className="text-primary">Kathmandu</span>
        </h1>
        
        <p className="text-text-secondary text-xl leading-relaxed mb-12 max-w-3xl mx-auto reveal delay-200 font-medium">
          Our work is a testament to our commitment to excellence and innovation. We specialize in delivering AI-driven solutions that transform businesses across Nepal and beyond — from startups to enterprise brands.
        </p>
        
        <div className="flex justify-center gap-4 md:gap-12 reveal delay-300">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4 md:px-10 border-x first:border-l-0 last:border-r-0 border-border">
              <div className="text-3xl md:text-5xl font-headline font-bold text-primary mb-2 drop-shadow-sm">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-[0.2em] font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -z-10 -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-primary/5 blur-[120px] rounded-full"></div>
    </section>
  );
}
