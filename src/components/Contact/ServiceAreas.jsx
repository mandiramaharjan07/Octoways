import React from 'react';

const cities = [
  'Kathmandu', 'Lalitpur', 'Bhaktapur', 'Pokhara', 'Chitwan', 
  'Butwal', 'Biratnagar', 'Dharan', 'Nepalgunj', 'Bharatpur'
];

export default function ServiceAreas() {
  return (
    <section className="py-24 px-8 bg-surface-container-low border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">We serve businesses across Nepal</h2>
          <p className="text-on-surface-variant text-lg">
            Strategically located in Kathmandu, serving the digital needs of every major city in the country.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="px-6 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-on-surface-variant font-bold text-sm hover:border-primary hover:text-primary transition-all cursor-default"
            >
              {city}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 font-bold text-lg">
            <span className="material-symbols-outlined text-xl">public</span>
            Also serving international clients globally — remote-first collaboration available.
          </div>
        </div>
      </div>
    </section>
  );
}
