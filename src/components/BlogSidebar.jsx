import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

const tags = [
  "AI", "Nepal Tech", "Web Development", "Mobile Apps", 
  "Blockchain", "Machine Learning", "Software Tools", "Cloud Computing",
  "React", "Node.js", "Python", "Automation"
];

export default function BlogSidebar() {
  return (
    <section className="py-16 px-8 bg-surface-container-low/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Tag size={20} className="text-primary" />
          </div>
          <h2 className="font-headline text-2xl md:text-3xl font-bold">Popular Topics</h2>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {tags.map((tag, i) => (
            <motion.button
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-6 py-2 rounded-xl bg-background border border-white/5 text-gray-400 hover:text-primary hover:border-primary/30 transition-all font-bold text-sm flex items-center gap-2"
            >
              # {tag}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
