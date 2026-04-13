import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'ktm-ai',
    name: 'KTM AI Assistance',
    badge: 'AI-Powered',
    description: 'An AI-powered companion app for KTM motorcycle riders in Nepal. Combines real-time diagnostics, ride statistics, and smart navigation to elevate the riding experience.',
    features: ['Real-Time Diagnostics', 'Maintenance Reminders', 'Riding Statistics', 'Navigation and Route Planning'],
    image: '/products/ktm_ai.png',
    ctaLink: '/ktm-ai'
  },
  {
    id: 'pov',
    name: 'POV – Power Of Views',
    badge: 'Popular in Nepal',
    description: 'A smart review and feedback management platform for businesses. Collect, centralize, and act on customer reviews effortlessly using QR codes and one-click requests.',
    features: ['One-Click Review Requests', 'QR Code Feedback Collection', 'Centralized Review Management', 'Customizable Feedback Forms'],
    image: '/products/pov.png',
    ctaLink: '/pov'
  },
  {
    id: 'entry-keeper',
    name: 'Entry Keeper',
    badge: 'Multi-Location',
    description: 'A digital visitor management and entry tracking system with QR-based seamless entry. Perfect for offices, events, and multi-location businesses across Nepal.',
    features: ['One-Click Signup', 'Personalized QR Code', 'Seamless Entry', 'Secure Information Storage', 'Multiple Location Support'],
    image: '/products/entry_keeper.png',
    ctaLink: '/entry-keeper'
  },
  {
    id: 'vat-bills',
    name: 'VAT Bills',
    badge: 'IRD Approved',
    description: "Nepal's IRD-approved VAT billing software designed for businesses of all sizes. 100% accurate, time-saving, and fully compliant with Nepal's Inland Revenue Department requirements.",
    features: ['Approved by Inland Revenue Department', '100% Accurate & Error Free', 'Pricing Right for All Businesses', 'Easy VAT and Reporting'],
    image: '/products/vat_bills.png',
    ctaLink: '/vat-bills'
  }
];

export default function ProductsGrid() {
  return (
    <section id="products-grid" className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel ghost-border rounded-[2.5rem] overflow-hidden group hover:bg-surface-bright transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={`${product.name} - ${product.badge} software by Octoways Nepal`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width="800"
                  height="500"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-primary/90 backdrop-blur-md text-on-primary-fixed text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {product.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h2 className="font-headline text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {product.name}
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  {product.description}
                </p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary/70">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => window.location.href = product.ctaLink}
                  className="flex items-center gap-2 font-bold text-primary group/btn w-fit"
                >
                  Learn More 
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-2">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
