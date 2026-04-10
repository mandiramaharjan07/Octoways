import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultFaqs = [
  {
    q: "Where is Octoways located?",
    a: "Octoways is based in Bansbari, Kathmandu, Nepal. We serve clients across Nepal and globally."
  },
  {
    q: "How long has Octoways been in business?",
    a: "Octoways has 10+ years of industry experience delivering software and AI solutions."
  },
  {
    q: "What industries does Octoways work with?",
    a: "We work across industries including media, automotive, real estate, tourism, finance, and enterprise software."
  },
  {
    q: "How many projects has Octoways completed?",
    a: "We have successfully completed 500+ software projects for 200+ satisfied clients worldwide."
  },
  {
    q: "Is Octoways a registered company in Nepal?",
    a: "Yes, Octoways Pvt. Ltd. is a legally registered software company in Kathmandu, Nepal."
  },
  {
    q: "Can Octoways work with international clients?",
    a: "Absolutely. While headquartered in Kathmandu, we work with clients globally, delivering remote and on-site solutions."
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
        <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-500'}`}>
          expand_more
        </span>
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

export default function FAQSection({ 
  items = defaultFaqs, 
  title = "Frequently Asked Questions", 
  description = "Everything you need to know about Kathmandu's leading AI-driven software partner." 
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-on-surface-variant text-lg">
            {description}
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5">
          {items.map((faq, i) => (
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
