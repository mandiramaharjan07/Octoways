import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem: React.FC<{ q: string; a: string; isOpen: boolean; onClick: () => void }> = ({ q, a, isOpen, onClick }) => {
  return (
    <div className="overflow-hidden last:pb-0">
      <button 
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className={`text-[15px] md:text-[17px] font-medium transition-colors ${isOpen ? 'text-secondary' : 'text-text-primary group-hover:text-secondary'}`}>
          {q}
        </span>
        <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${isOpen ? 'rotate-180 text-secondary' : 'text-primary'}`}>
          expand_more
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 text-[14px] md:text-[15px] text-text-secondary leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  items?: FAQ[]; // Alias for faqs for compatibility
  title?: string;
  subtitle?: string;
  description?: string; // Alias for subtitle for compatibility
}

const FAQSection: React.FC<FAQSectionProps> = ({ 
  faqs, 
  items,
  title = "Expert Solutions for the Digital Era", 
  subtitle,
  description
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const displayFaqs = items || faqs || [];
  const displaySubtitle = description || subtitle || "Our AI-first methodology ensures high-fidelity results across every touchpoint.";

  if (displayFaqs.length === 0) return null;

  return (
    <section className="section-padding bg-background relative overflow-hidden" id="section-faq">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-4 text-text-primary"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-text-secondary max-w-2xl mx-auto"
          >
            {displaySubtitle}
          </motion.p>
        </div>

        <div className="bg-surface rounded-3xl p-6 md:p-10 shadow-card">
          {displayFaqs.map((faq, index) => (
            <FAQItem 
              key={index}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
