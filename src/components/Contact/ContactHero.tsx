import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative min-h-[40vh] flex items-center px-8 pt-20 overflow-hidden bg-animated-neural transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/50 to-background z-0"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
        <div className="flex justify-center items-center gap-2 mb-6 reveal">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_var(--color-primary-val)]"></span>
          <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">We're Here to Help</span>
        </div>
        
        <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-8 max-w-4xl mx-auto reveal delay-100 text-text-primary">
          Contact Octoways — Kathmandu's <span className="text-primary">AI & Software</span> Development Team
        </h1>
        
        <p className="text-text-secondary text-xl leading-relaxed max-w-3xl mx-auto reveal delay-200">
          Have a project in mind? Talk to our experts in Bansbari, Kathmandu. We respond within 24 hours for all Nepal-based and international inquiries.
        </p>
      </div>

      <div className="absolute -z-10 -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-primary/10 blur-[120px] rounded-full"></div>
    </section>
  );
}
