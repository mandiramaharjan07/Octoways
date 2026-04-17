import React from 'react';
import { motion } from 'framer-motion';

export default function ClientsStrip() {
  const clients = [
    "Jeep Nepal", "Emountain TV", "The Annapurna Express", "eProperty Nepal", 
    "Gafencu", "Sumy Access", "Simrik Ventures", "Rolwaling Excursion"
  ];

  return (
    <section id="about-clients" className="py-24 bg-surface-raised overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
        <h2 className="text-text-muted font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
          Trusted by Leading Brands in Nepal and Beyond
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Double the array for seamless scrolling */}
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-surface-card flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shadow-sm">
                <span className="material-symbols-outlined text-text-secondary group-hover:text-primary transition-colors text-2xl">corporate_fare</span>
              </div>
              <span className="font-headline text-2xl font-bold text-text-muted group-hover:text-text-primary transition-colors duration-300">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
