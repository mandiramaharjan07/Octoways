import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts as posts } from '../constants/blogData';

function BlogCard({ post, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel rounded-3xl border border-white/5 overflow-hidden flex flex-col group h-full"
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          width="800"
          height="500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-background/80 backdrop-blur-md border border-white/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-gray-500 text-[10px] mb-4 uppercase tracking-wider font-bold">
          <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
        </div>
        
        <h2 className="font-headline text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
          {post.title}
        </h2>
        
        <p className="text-on-surface-variant text-sm leading-relaxed mb-8 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="mt-auto">
          <Link 
            to={`/blog/${post.slug}`}
            className="flex items-center gap-2 text-primary font-bold text-sm group/btn hover:translate-x-1 transition-transform inline-flex"
          >
            Read More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogGrid({ posts, indexOffset = 0 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, i) => (
        <BlogCard key={post.slug} post={post} index={i + indexOffset} />
      ))}
      {posts.length === 0 && (
        <div className="col-span-full py-20 text-center">
          <h3 className="text-2xl font-bold text-gray-500">No posts found in this category.</h3>
        </div>
      )}
    </div>
  );
}
