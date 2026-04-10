import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function NewsletterStrip() {
  return (
    <section className="py-24 px-8 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-[21/9] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Mail className="text-primary w-8 h-8" />
          </div>
          
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">
            Get the latest AI and tech insights <br className="hidden md:block" />
            from Kathmandu in your inbox
          </h2>
          
          <p className="text-on-surface-variant text-lg mb-10">
            Subscribe to our newsletter for a weekly roundup of industry news, 
            coding tips, and Nepal tech ecosystem updates.
          </p>
          
          <div className="max-w-md mx-auto relative mb-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                className="flex-grow bg-surface-container-low border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                placeholder="Professional Email Adress" 
                type="email" 
              />
              <button className="bg-primary text-on-primary-fixed px-8 py-4 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(61,146,204,0.3)] transition-all flex items-center justify-center gap-2">
                Subscribe <Send size={18} />
              </button>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm italic">
            No spam. Unsubscribe any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
