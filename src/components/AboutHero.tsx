import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section id="about-hero" className="relative py-24 px-8 overflow-hidden bg-animated-neural min-h-[60vh] flex items-center justify-center transition-colors duration-300">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_var(--color-primary-val)]"></span>
          <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.3em]">
            Since 2014 • Kathmandu, Nepal
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8 text-text-primary"
        >
          Kathmandu's Trusted <span className="text-primary">AI & Software</span> Development Experts
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-text-secondary text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium"
        >
          We are an AI-driven service company — a dedicated team of creative and passionate individuals in Bansbari, Kathmandu, committed to leveraging artificial intelligence for transformative digital solutions.
        </motion.p>
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
