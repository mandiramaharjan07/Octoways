import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative py-24 px-8 overflow-hidden bg-animated-neural min-h-[60vh] flex items-center justify-center">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-primary-fixed-dim) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#3d92cc]"></span>
          <span className="text-primary-fixed-dim text-xs font-bold uppercase tracking-[0.3em]">
            Since 2014 • Kathmandu, Nepal
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8"
        >
          Kathmandu's Trusted <span className="text-primary">AI & Software</span> Development Experts
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-on-surface-variant text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
        >
          We are an AI-driven service company — a dedicated team of creative and passionate individuals in Bansbari, Kathmandu, committed to leveraging artificial intelligence for transformative digital solutions.
        </motion.p>
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
