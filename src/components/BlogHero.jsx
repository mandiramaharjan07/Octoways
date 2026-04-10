import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-24 px-8 bg-animated-neural overflow-hidden min-h-[40vh] flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-primary/5 opacity-40"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-6"
        >
          Daily Dose of Education
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8"
        >
          Tech Insights & <span className="text-primary italic">AI News</span> from Kathmandu
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-12"
        >
          Octoways shares expert knowledge on AI, software development, and digital transformation — written for businesses and developers in Nepal and beyond.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl mx-auto relative group"
        >
          <div className="absolute inset-0 bg-primary/20 blur-xl group-focus-within:bg-primary/40 transition-all duration-500 rounded-2xl"></div>
          <div className="relative glass-panel rounded-2xl border border-white/10 flex items-center px-6 py-4">
            <Search className="text-gray-500 w-6 h-6 mr-4" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 w-full text-lg outline-none" 
              placeholder="Search AI models, dev tools, or KTM news..." 
              type="text" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
