import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../constants/blogData';

export default function FeaturedPost() {
  // We'll feature the 'Mastering Local SEO' post as it's highly relevant to the latest request
  const post = blogPosts.find(p => p.slug === 'mastering-local-seo-kathmandu') || blogPosts[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-panel rounded-[2.5rem] border border-white/5 overflow-hidden group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden aspect-video lg:aspect-auto">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-6 left-6">
            <span className="bg-primary text-on-primary-fixed px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-8 md:p-14 flex flex-col justify-center">
          <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
            <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime} read</span>
          </div>
          
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h2>
          
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
            {post.excerpt}
          </p>
          
          <Link 
            to={`/blog/${post.slug}`}
            className="flex items-center gap-4 text-primary font-bold text-lg group/btn hover:translate-x-2 transition-transform inline-flex"
          >
            Read More <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
