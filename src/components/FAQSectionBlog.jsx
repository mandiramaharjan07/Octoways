import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const blogFaqs = [
  {
    q: "What topics does the Octoways blog cover?",
    a: "We cover AI, machine learning, web development, mobile apps, Nepal tech news, and digital transformation insights."
  },
  {
    q: "How often does Octoways publish new blog posts?",
    a: "We publish new articles regularly — typically 2–4 times per month."
  },
  {
    q: "Are the articles relevant for businesses in Nepal?",
    a: "Yes. Many articles are tailored to the Nepali tech ecosystem, regulations, and market context."
  },
  {
    q: "Can I submit a guest blog post to Octoways?",
    a: "We're open to collaborations. Reach us at info@octoways.com with your topic proposal."
  },
  {
    q: "How do I subscribe to Octoways blog updates?",
    a: "Use the newsletter signup on this page or follow us on social media for the latest updates."
  },
  {
    q: "Can I share Octoways articles on social media?",
    a: "Absolutely. We encourage sharing our content — every article has social share buttons."
  }
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-headline text-xl font-bold group-hover:text-primary transition-colors">{q}</span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-on-primary-fixed border-primary' : 'text-gray-500'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-on-surface-variant leading-relaxed text-lg">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSectionBlog() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant text-lg">
            Everything you need to know about our tech publication.
          </p>
        </div>

        {/* FAQ Schema for SEO & GEO Authority */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": blogFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>

        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10">
          {blogFaqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              q={faq.q} 
              a={faq.a} 
              isOpen={openIndex === i} 
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
