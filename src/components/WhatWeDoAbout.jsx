import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Logo Design",
    description: "Custom logo designs aligned with your brand identity, color schemes, and company goals.",
    icon: "brand_awareness"
  },
  {
    title: "App Design",
    description: "Transforming your ideas into easy-to-use, profitable mobile apps with appealing designs.",
    icon: "smartphone"
  },
  {
    title: "Website Development",
    description: "Smart, responsive web development by professional tech experts covering all technical, functional, and visual aspects.",
    icon: "language"
  },
  {
    title: "AI Solutions",
    description: "Intelligent AI-driven systems that automate workflows, enhance decision-making, and improve customer experiences.",
    icon: "psychology"
  },
  {
    title: "Web App Development",
    description: "Robust, scalable, high-performing web applications using modern technologies and frameworks.",
    icon: "terminal"
  }
];

export default function WhatWeDoAbout() {
  return (
    <section id="about-what-we-do" className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            We deliver end-to-end digital excellence, combining creative design with cutting-edge AI and software expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group ${index === 4 ? 'lg:col-span-1 md:col-span-2' : ''}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary">{service.icon}</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
