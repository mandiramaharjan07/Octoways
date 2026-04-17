import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronLeft, Share2 } from 'lucide-react';
import Layout from '../components/Layout';
import { blogPosts } from '../constants/blogData';
import NewsletterStrip from '../components/NewsletterStrip';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-6 text-text-primary">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
            <ChevronLeft size={20} /> Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="pt-32 pb-24 px-8 overflow-x-hidden transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs & Back Button */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <Link to="/blog" className="w-10 h-10 rounded-full bg-surface-raised border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-primary/50 transition-all shadow-sm">
              <ChevronLeft size={20} />
            </Link>
            <span className="text-text-muted uppercase tracking-[0.2em] text-[10px] font-bold">
              Blog / {post.category}
            </span>
          </motion.div>

          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8 leading-tight text-text-primary">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-text-muted mb-12 py-6 border-y border-border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  O
                </div>
                <span className="text-text-primary font-bold">Octoways Editorial</span>
              </div>
              <div className="flex items-center gap-2 font-medium"><Calendar size={18} className="text-primary" /> {post.date}</div>
              <div className="flex items-center gap-2 font-medium"><Clock size={18} className="text-primary" /> {post.readTime} read</div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-border"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-full max-w-none">
              <div 
                className="blog-content text-text-secondary leading-relaxed space-y-8 prose prose-lg prose-invert lg:prose-xl max-w-none 
                prose-headings:text-text-primary prose-a:text-secondary prose-strong:text-text-primary prose-blockquote:border-primary prose-blockquote:bg-surface-raised prose-blockquote:rounded-xl prose-blockquote:px-6 prose-blockquote:py-1"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Share Section */}
              <div className="mt-16 pt-12 border-t border-border flex flex-wrap items-center gap-6">
                <span className="font-bold text-text-primary flex items-center gap-2">
                  <Share2 size={20} className="text-primary" /> Share this post:
                </span>
                <div className="flex gap-4">
                  {[
                    { name: 'Facebook', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> },
                    { name: 'X', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/> },
                    { name: 'LinkedIn', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> }
                  ].map((social) => (
                    <button key={social.name} className="w-10 h-10 rounded-xl bg-surface-raised border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-all shadow-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon}
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <NewsletterStrip />

      {/* Structured Data for the post */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": post.image,
          "datePublished": post.date,
          "author": {
            "@type": "Organization",
            "name": "Octoways Pvt. Ltd."
          },
          "publisher": {
            "@type": "Organization",
            "name": "Octoways Pvt. Ltd.",
            "logo": {
              "@type": "ImageObject",
              "url": "https://octoways.com/logo.png"
            }
          },
          "description": post.excerpt
        })}
      </script>
    </Layout>
  );
}
