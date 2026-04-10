import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Fill the Form',
    description: 'Tell us about your project, preferred time, and service needed.'
  },
  {
    number: '02',
    title: 'Get Confirmation',
    description: "We'll WhatsApp or call you within 2 hours to confirm your slot."
  },
  {
    number: '03',
    title: 'Meet Our Expert',
    description: 'Sit down (in-person or online) with our Kathmandu-based specialist.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-8 bg-background border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-on-surface-variant text-lg">Your journey to digital excellence begins with three simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-3xl bg-surface-container-low border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300 shadow-2xl">
                <span className="font-headline text-4xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-4 transition-colors group-hover:text-primary">{step.title}</h3>
              <p className="text-on-surface-variant leading-relaxed max-w-[250px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
