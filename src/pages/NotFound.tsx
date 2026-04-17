import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 bg-neural-grid relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/50 to-background z-0"></div>
      
      <div className="max-w-xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-headline text-8xl lg:text-9xl font-bold tracking-tighter text-primary/20 mb-4 select-none">
            404
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white tracking-tight">
            Lost in the Neural Net?
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            It looks like this path hasn't been mapped by our AI yet. Don't worry, my tentacles are usually better than this!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-primary text-on-primary-fixed px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_25px_rgba(61,146,204,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">home</span>
              Swim back Home
            </Link>
            <button 
               onClick={() => window.dispatchEvent(new CustomEvent('otto:restart'))}
               className="glass-panel ghost-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-bright transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">explore</span>
              Re-tour the Site
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
