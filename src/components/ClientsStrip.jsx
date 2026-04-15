import React from 'react';
import { motion } from 'framer-motion';

export default function ClientsStrip() {
  const clients = [
    "Jeep Nepal", "Emountain TV", "The Annapurna Express", "eProperty Nepal", 
    "Gafencu", "Sumy Access", "Simrik Ventures", "Rolwaling Excursion"
  ];

  return (
    <section id="about-clients" className="py-20 bg-surface-container-low border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12 text-center">
        <h2 className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs">
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
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-gray-600 group-hover:text-primary transition-colors">corporate_fare</span>
              </div>
              <span className="font-headline text-2xl font-bold text-gray-500 group-hover:text-white transition-colors">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
