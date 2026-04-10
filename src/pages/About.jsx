import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import WhatWeDoAbout from '../components/WhatWeDoAbout';
import Stats from '../components/Stats';
import MissionVision from '../components/MissionVision';
import ClientsStrip from '../components/ClientsStrip';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="overflow-x-hidden">
        {/* SEO Metadata and Schema handled via script tag for simplicity in this React setup */}
        <AboutHero />
        <OurStory />
        <WhatWeDoAbout />
        <Stats />
        <MissionVision />
        <ClientsStrip />
        <FAQSection />
        <CTABanner />
      </div>

      {/* Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["AboutPage", "LocalBusiness"],
          "name": "Octoways Pvt. Ltd.",
          "description": "Kathmandu's trusted AI-driven software company with 10+ years of experience, 500+ projects, and 200+ global clients.",
          "url": "https://octoways.com/about",
          "telephone": "+977-9851177597",
          "email": "info@octoways.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bansbari",
            "addressLocality": "Kathmandu",
            "addressRegion": "Bagmati",
            "addressCountry": "NP"
          },
          "openingHours": "Mo-Fr 09:00-18:00",
          "image": "https://octoways.com/logo.png"
        })}
      </script>
    </Layout>
  );
}
