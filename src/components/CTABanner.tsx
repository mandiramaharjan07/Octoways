import React from 'react';
import { motion } from 'framer-motion';

interface CTABannerProps {
  title?: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ 
  title = <>Ready to build something great with <br className="hidden md:block" /> <span className="text-primary">Kathmandu's leading AI & software team?</span></>,
  buttonText = "Book an Appointment",
  buttonLink = "/book-an-appointment"
}) => {
  return (
    <section id="section-cta" className="py-24 px-8 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-video bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-card p-12 md:p-24 rounded-[3.5rem] border border-border text-center relative overflow-hidden shadow-card"
        >
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-12 leading-tight text-text-primary">
            {title}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.location.href = buttonLink}
              className="w-full md:w-auto bg-primary text-on-primary px-12 py-5 rounded-2xl font-bold text-xl hover:bg-secondary transition-all active:scale-95 shadow-lg shadow-primary/20"
            >
              {buttonText}
            </button>
            <a 
              href="/blog" 
              className="w-full md:w-auto px-12 py-5 rounded-2xl font-bold text-xl border border-border bg-surface-raised hover:bg-surface-card transition-all text-text-primary text-center shadow-sm active:scale-95"
            >
              Read Our Blog
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-border flex flex-wrap justify-center gap-8 text-text-muted text-[11px] font-bold uppercase tracking-[0.2em]">
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
};

export default CTABanner;
