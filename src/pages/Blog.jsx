import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import BlogHero from '../components/BlogHero';
import FeaturedPost from '../components/FeaturedPost';
import CategoryFilters from '../components/CategoryFilters';
import BlogGrid from '../components/BlogGrid';
import NewsletterStrip from '../components/NewsletterStrip';
import FAQSectionBlog from '../components/FAQSectionBlog';
import Pagination from '../components/Pagination';

import { blogPosts } from '../constants/blogData';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to blog grid section
    const gridElement = document.getElementById('blog-grid-section');
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <div className="overflow-x-hidden">
        <BlogHero />
        <div className="max-w-7xl mx-auto px-8 relative z-20 -mt-12 md:-mt-16 mb-24">
          <FeaturedPost />
        </div>
        
        <CategoryFilters activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        
        <div id="blog-grid-section" className="max-w-7xl mx-auto px-8 py-16 scroll-mt-24">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-full">
              <BlogGrid posts={currentPosts} indexOffset={indexOfFirstPost} />
              <Pagination 
                totalPages={totalPages} 
                currentPage={currentPage} 
                onPageChange={handlePageChange} 
              />
            </div>
          </div>
        </div>

        <NewsletterStrip />
        <FAQSectionBlog />
      </div>

      {/* SEO & Schema for Blog */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Octoways Tech Insights",
          "description": "Read the latest AI, software development, and Nepal tech insights from Octoways Pvt. Ltd.",
          "url": "https://octoways.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Octoways Pvt. Ltd.",
            "logo": {
              "@type": "ImageObject",
              "url": "https://octoways.com/logo.png"
            }
          }
        })}
      </script>
    </Layout>
  );
}
