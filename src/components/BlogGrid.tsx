import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: any;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-surface-card rounded-[2.5rem] overflow-hidden transition-all duration-500 flex flex-col h-full shadow-card hover:shadow-xl"
    >
      <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden aspect-[16/10]">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-60" />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
            {post.category}
          </span>
        </div>
      </Link>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 mb-4 text-[11px] text-text-muted font-bold uppercase tracking-widest">
          <span>{post.date}</span>
          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-headline font-bold mb-4 text-text-primary group-hover:text-secondary transition-colors leading-tight">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="mt-auto">
          <Link 
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-widest group/link"
          >
            Read Full Article
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

interface BlogGridProps {
  posts: any[];
  indexOffset?: number;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts, indexOffset = 0 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post: any, i: number) => (
        <BlogCard key={post.slug} post={post} index={i + indexOffset} />
      ))}
      {posts.length === 0 && (
        <div className="col-span-full py-24 text-center">
          <p className="text-text-muted italic">No posts found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
