import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import BlogHero from '../components/BlogHero';
import FeaturedPost from '../components/FeaturedPost';
import CategoryFilters from '../components/CategoryFilters';
import BlogGrid from '../components/BlogGrid';
import NewsletterStrip from '../components/NewsletterStrip';
import FAQSectionBlog from '../components/FAQSectionBlog';
import Pagination from '../components/Pagination';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="overflow-x-hidden">
        <BlogHero />
        <div className="max-w-7xl mx-auto px-8 relative z-20 -mt-12 md:-mt-16 mb-24">
          <FeaturedPost />
        </div>
        
        <CategoryFilters activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-full">
              <BlogGrid activeCategory={activeCategory} />
              <Pagination />
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
