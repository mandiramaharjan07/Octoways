import React from 'react';

const reasons = [
  {
    icon: 'workspace_premium',
    title: 'Expert AI & Software Team',
    description: '30+ dedicated technology experts based in Kathmandu, Nepal with deep industry knowledge.'
  },
  {
    icon: 'location_on',
    title: 'Flexible Meeting Options',
    description: 'Meet us in-person at Bansbari, Kathmandu or join an online session from anywhere.'
  },
  {
    icon: 'savings',
    title: 'No Hidden Fees',
    description: 'Initial consultations are completely free — explore possibilities with no commitment required.'
  },
  {
    icon: 'bolt',
    title: 'Fast WhatsApp Confirmation',
    description: 'We confirm your appointment within 2 hours via WhatsApp or local phone call.'
  }
];

export default function WhyBook() {
  return (
    <section className="py-24 px-8 bg-surface-raised border-y border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-text-primary">Why Book with Octoways?</h2>
          <p className="text-text-secondary text-lg">Experience the commitment of Kathmandu's most responsive tech partner.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-sm">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {reason.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4 text-text-primary transition-colors group-hover:text-primary">
                {reason.title}
              </h3>
              <p className="text-text-secondary leading-relaxed font-medium">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
