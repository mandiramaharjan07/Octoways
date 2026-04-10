import React from 'react';

const reasons = [
  {
    icon: 'location_on',
    title: 'Built in Nepal, for Nepal',
    description: "Designed with Nepal's business environment, IRD compliance, and local user needs in mind."
  },
  {
    icon: 'neurology',
    title: 'AI-First Architecture',
    description: 'Every product leverages machine learning and intelligent automation for smarter outcomes.'
  },
  {
    icon: 'trending_up',
    title: 'Scalable for Growth',
    description: 'From startups to enterprises — our products scale with your business.'
  },
  {
    icon: 'history',
    title: 'Backed by 10+ Years',
    description: 'Built by an experienced Kathmandu-based team with 500+ projects delivered.'
  }
];

export default function WhyOurProducts() {
  return (
    <section className="py-24 px-8 bg-surface-container-low border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Why Our Products</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Strategic software tools engineered for the modern Nepali enterprise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-[0_0_20px_rgba(61,146,204,0.1)]">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {reason.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4 text-white">
                {reason.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
