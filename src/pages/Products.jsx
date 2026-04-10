import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductsHero from '../components/Products/ProductsHero';
import ProductsGrid from '../components/Products/ProductsGrid';
import WhyOurProducts from '../components/Products/WhyOurProducts';
import ProductsTechStack from '../components/Products/ProductsTechStack';
import ClientsStrip from '../components/ClientsStrip';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';

const productsFaqs = [
  {
    q: "Are Octoways products available for businesses in Nepal?",
    a: "Yes. All our products are designed with Nepal's market, language, and regulations in mind, including IRD compliance for VAT Bills."
  },
  {
    q: "Is VAT Bills approved by Nepal's Inland Revenue Department?",
    a: "Yes. VAT Bills is officially approved by Nepal's Inland Revenue Department (IRD) for VAT billing and reporting."
  },
  {
    q: "Can I request a demo of any Octoways product?",
    a: "Absolutely. Book an appointment at octoways.com/book-an-appointment and our team will walk you through the product."
  },
  {
    q: "Do Octoways products support multiple locations?",
    a: "Yes. Entry Keeper and other products support multiple location management from a single dashboard."
  },
  {
    q: "What tech stack are Octoways products built on?",
    a: "Our products are built on modern stacks including React, Node.js, Python, AWS, and Azure — ensuring performance and reliability."
  },
  {
    q: "Can Octoways build a custom product for my business?",
    a: "Yes. Alongside our own products, we build fully custom software solutions tailored to your unique business needs."
  }
];

export default function Products() {
  useEffect(() => {
    // SEO implementation
    document.title = "AI & Web Products | KTM AI, VAT Bills, Entry Keeper | Octoways Nepal";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore Octoways' AI-powered products — KTM AI Assistance, POV, Entry Keeper & IRD-approved VAT Bills. Built in Kathmandu for businesses across Nepal.");
    }

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "KTM AI Assistance",
          "description": "AI-powered companion app for KTM motorcycle riders.",
          "brand": { "@type": "Brand", "name": "Octoways" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "POV – Power Of Views",
          "description": "Smart review and feedback management platform.",
          "brand": { "@type": "Brand", "name": "Octoways" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Entry Keeper",
          "description": "Digital visitor management and entry tracking system.",
          "brand": { "@type": "Brand", "name": "Octoways" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "VAT Bills",
          "description": "IRD-approved VAT billing software for Nepal.",
          "brand": { "@type": "Brand", "name": "Octoways" }
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
        <Breadcrumbs items={[{ name: 'Products', path: '/products' }]} />
      </div>

      <ProductsHero />
      <ProductsGrid />
      <WhyOurProducts />
      <ProductsTechStack />
      
      <div className="bg-surface-container-lowest">
        <ClientsStrip />
      </div>

      <FAQSection 
        items={productsFaqs}
        title="Products Frequently Asked Questions"
        description="Find answers to common questions about our software products and how they can help your business in Nepal."
      />

      <CTABanner />
    </Layout>
  );
}
