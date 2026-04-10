import React from 'react';
import { motion } from 'framer-motion';

export default function CTABanner({ 
  title = <>Ready to build something great with <br className="hidden md:block" /> <span className="text-primary">Kathmandu's leading AI & software team?</span></>,
  buttonText = "Book an Appointment",
  buttonLink = "/book-an-appointment"
}) {
  return (
    <section className="py-24 px-8 bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-video bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-12 md:p-24 rounded-[3.5rem] border border-white/10 text-center relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-10 leading-tight">
            {title}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.location.href = buttonLink}
              className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-[0_0_40px_rgba(61,146,204,0.4)] transition-all active:scale-95"
            >
              {buttonText}
            </button>
            <a 
              href="/works" 
              className="w-full md:w-auto px-12 py-5 rounded-2xl font-bold text-xl border border-white/10 hover:bg-white/5 transition-all text-center"
            >
              View Our Projects
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 text-gray-400 text-sm font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">bolt</span> High Fidelity
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">security</span> Enterprise Grade
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">public</span> Global Reach
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
