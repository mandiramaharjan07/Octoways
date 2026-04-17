import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactHero from '../components/Contact/ContactHero';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import ServiceAreas from '../components/Contact/ServiceAreas';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';

const contactFaqs = [
  {
    q: "Where is Octoways' office located?",
    a: "Our office is at Bansbari, Kathmandu, Nepal. We welcome visits by appointment Monday to Saturday."
  },
  {
    q: "What is the fastest way to reach Octoways?",
    a: "Call or WhatsApp us at +977-9851177597 for the fastest response, especially for urgent project inquiries."
  },
  {
    q: "Does Octoways work with businesses outside Kathmandu?",
    a: "Yes. We serve clients across Nepal — Pokhara, Chitwan, Butwal, and more — as well as international clients through remote collaboration."
  },
  {
    q: "How soon will I get a response after submitting the contact form?",
    a: "We respond to all form submissions within 24 working hours. WhatsApp and phone calls are answered same day."
  },
  {
    q: "Can I visit the Octoways office in Kathmandu?",
    a: "Yes. We'd love to meet you. Please call or message ahead at +977-9851177597 to schedule a visit."
  },
  {
    q: "Does Octoways offer free project consultations?",
    a: "Yes. Our initial discovery consultation is completely free. Book at octoways.com/book-an-appointment."
  }
];

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Octoways | AI & Software Company in Bansbari, Kathmandu Nepal";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact Octoways Pvt. Ltd. at Bansbari, Kathmandu. Call +977-9851177597 or email info@octoways.com. Nepal's trusted AI-driven software development company.");
    }
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Octoways Pvt. Ltd.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bansbari",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati",
        "addressCountry": "NP"
      },
      "telephone": "+977-9851177597",
      "email": "info@octoways.com",
      "url": "https://octoways.com",
      "image": "https://octoways.com/logo.png",
      "openingHours": "Mo-Sa 09:00-18:00"
    }
  };

  return (
    <Layout>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="max-w-7xl mx-auto px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Contact', path: '/contact' }]} />
      </div>

      <ContactHero />
      <ContactInfo />
      
      <div className="bg-background relative">
        <ContactForm />
      </div>

      <section className="py-20 px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs mb-10">
            Connect with Octoways online:
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a href="#" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all font-bold group">
              <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">FB</span>
              Facebook
            </a>
            <a href="#" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all font-bold group">
              <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">IG</span>
              Instagram
            </a>
            <a href="#" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all font-bold group">
              <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">LN</span>
              LinkedIn
            </a>
            <a href="https://wa.me/9779851177597" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all font-bold group">
              <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">WA</span>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ServiceAreas />

      <FAQSection 
        items={contactFaqs}
        title="Contact Frequently Asked Questions"
        description="Quick answers about our location, responsiveness, and how to start your project with Octoways."
      />

      <CTABanner 
        title="Prefer to schedule a dedicated session with our team?"
        buttonText="Book an Appointment"
        buttonLink="/book-an-appointment"
      />
    </Layout>
  );
};

export default Contact;
