import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import WorksHero from '../components/Works/WorksHero';
import PortfolioFilter from '../components/Works/PortfolioFilter';
import PortfolioGrid from '../components/Works/PortfolioGrid';
import ImpactNumbers from '../components/Works/ImpactNumbers';
import ClientsStrip from '../components/ClientsStrip';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';

const worksFaqs = [
  {
    q: "What types of projects has Octoways completed?",
    a: "We've delivered 500+ projects across web development, mobile apps, AI solutions, media portals, automotive platforms, and enterprise software."
  },
  {
    q: "Has Octoways worked with media companies in Nepal?",
    a: "Yes. We built The Annapurna Express and Emountain TV — two of Nepal's most prominent digital news platforms."
  },
  {
    q: "Does Octoways work with international clients?",
    a: "Yes. Projects like Gafencu and Benline are for international clients, while most of our portfolio is Nepal-focused."
  },
  {
    q: "Can I see detailed case studies for specific projects?",
    a: "Yes. Click on any project card to view the full case study including problem, solution, and results."
  },
  {
    q: "What is Octoways' typical project timeline?",
    a: "Timelines vary by scope — most web projects take 4–12 weeks. We provide a detailed timeline after the initial consultation."
  },
  {
    q: "How do I start a project with Octoways?",
    a: "Book an appointment at octoways.com/book-an-appointment and our team will guide you from discovery to launch."
  }
];

const techStack = [
  'React', 'Next.js', 'Node.js', 'Python', 'React Native', 'AWS', 'Azure', 'MongoDB', 'MySQL', 'Docker', 'Figma'
];

const Works: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = "Our Work & Portfolio | 500+ Projects | Octoways, Kathmandu Nepal";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore Octoways' portfolio of 500+ completed projects — web, mobile, AI, and enterprise solutions for clients in Nepal and globally. Based in Kathmandu.");
    }
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Octoways Project Portfolio",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Simrik Ventures",
          "description": "Digital platform for Nepal's entrepreneurship ecosystem."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "Jeep Nepal",
          "description": "Official automotive website for Jeep in Nepal."
        }
      }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="max-w-7xl mx-auto px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Works', path: '/works' }]} />
      </div>

      <WorksHero />
      
      <div className="bg-background">
        <PortfolioFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <PortfolioGrid activeCategory={activeCategory} />
      </div>

      <section className="py-20 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs mb-10">
            Technologies powering our projects:
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <span 
                key={i} 
                className="bg-white/5 hover:bg-primary/20 hover:text-primary transition-all px-6 py-2 rounded-xl text-sm font-bold cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ImpactNumbers />

      <ClientsStrip />

      <FAQSection 
        items={worksFaqs}
        title="Portfolio Frequently Asked Questions"
        description="Learn more about our project delivery process, experience, and how we work with clients in Kathmandu and beyond."
      />

      <CTABanner 
        title="Ready to be Octoways' next success story?"
        buttonText="Book a Free Consultation"
        buttonLink="/book-an-appointment"
      />
    </Layout>
  );
};

export default Works;
