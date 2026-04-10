import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: "Simrik Ventures",
    tagline: "The Entrepreneurship Village",
    type: "Web Development",
    location: "Nepal",
    description: "A comprehensive digital platform for Nepal's entrepreneurship ecosystem.",
    image: "/products/simrik.png",
    categories: ["Web Development", "Enterprise"]
  },
  {
    id: 2,
    name: "Gafencu",
    tagline: "Luxury lifestyle magazine",
    type: "Web Development",
    location: "International",
    description: "A premium digital magazine website with editorial CMS and responsive design.",
    image: "/products/gafencu.png",
    categories: ["Web Development", "Media & News"]
  },
  {
    id: 3,
    name: "Sumy Access",
    tagline: "Smart Access Management",
    type: "Web + App",
    location: "Nepal",
    description: "Digital access management solution for modern offices and facilities.",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80",
    categories: ["Mobile App", "Enterprise"]
  },
  {
    id: 4,
    name: "eProperty Nepal",
    tagline: "ग्राहकहरु हामी खोज्छौ, तपाई बिक्री गर्नुहोस्",
    type: "Real Estate Platform",
    location: "Nepal",
    description: "Nepal's go-to platform for buying and selling property — built for local real estate agents and buyers.",
    image: "/products/eproperty.png",
    categories: ["Real Estate", "Web Development"]
  },
  {
    id: 5,
    name: "Rolwaling Excursion",
    tagline: "Adventure Company Specialized in Trekking And Expeditions",
    type: "Tourism Web",
    location: "Nepal",
    description: "A high-performance website for Nepal's premier trekking and expedition company.",
    image: "/products/rolwaling.png",
    categories: ["Tourism", "Web Development"]
  },
  {
    id: 6,
    name: "Benline",
    tagline: "Ship Management System",
    type: "Enterprise Software",
    location: "International",
    description: "A robust ship management system designed for maritime operations.",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80",
    categories: ["Enterprise"]
  },
  {
    id: 7,
    name: "The Annapurna Express",
    tagline: "Nepal's English-language broadsheet newspaper",
    type: "News Portal",
    location: "Nepal",
    description: "A modern, fast-loading digital news platform for one of Nepal's leading English newspapers.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80",
    categories: ["Media & News", "Web Development"]
  },
  {
    id: 8,
    name: "Jeep Nepal",
    tagline: "All New Jeep® 4x4 SUV is now in Nepal",
    type: "Automotive Web",
    location: "Nepal",
    description: "Official Jeep Nepal website — showcasing the full SUV lineup with booking and pricing for Nepali customers.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
    categories: ["Automotive", "Web Development"]
  },
  {
    id: 9,
    name: "Emountain TV",
    tagline: "No. 1 News Portal from Nepal",
    type: "Media Portal",
    location: "Nepal",
    description: "High-traffic digital news portal serving millions of readers from Nepal and the Nepali diaspora.",
    image: "/products/emountaintv.png",
    categories: ["Media & News", "Web Development"]
  }
];

export default function PortfolioGrid({ activeCategory }) {
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.categories.includes(activeCategory));

  return (
    <section className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-panel ghost-border rounded-3xl overflow-hidden group hover:bg-surface-bright transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={`Octoways project: ${project.name} — ${project.type} built by Kathmandu software team`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-primary/90 backdrop-blur-md text-on-primary-fixed text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">
                      {project.type}
                    </span>
                    <h2 className="font-headline text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </h2>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-primary text-sm font-bold mb-2">{project.tagline}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                       <span className="material-symbols-outlined text-sm">location_on</span> {project.location}
                    </span>
                    <button className="text-white text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors group/btn">
                      View Case Study <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-gray-500 font-headline text-2xl">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
