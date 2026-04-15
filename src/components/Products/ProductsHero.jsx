import React from 'react';

export default function ProductsHero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products-hero" className="relative min-h-[60vh] flex items-center px-8 pt-20 overflow-hidden bg-animated-neural">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/50 to-background z-0"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
        <div className="flex justify-center items-center gap-2 mb-6 reveal">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#3d92cc]"></span>
          <span className="text-primary-fixed-dim text-xs font-bold uppercase tracking-[0.3em]">Next-Generation Software Solutions</span>
        </div>
        
        <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-8 max-w-4xl mx-auto reveal delay-100">
          AI-Powered Products Built in <span className="text-primary">Kathmandu</span> for Nepal and the World
        </h1>
        
        <p className="text-on-surface-variant text-xl leading-relaxed mb-12 max-w-3xl mx-auto reveal delay-200">
          Discover cutting-edge web and AI solutions by Octoways. Our advanced technologies drive efficiency, precision, and adaptability — transforming how businesses operate.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 reveal delay-300">
          <button 
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(61,146,204,0.5)] transition-all active:scale-95"
          >
            Explore Products
          </button>
          <button 
            onClick={() => window.location.href = '/book-an-appointment'}
            className="glass-panel ghost-border px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-bright transition-all group active:scale-95"
          >
            Book a Demo <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 -z-10 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>
    </section>
  );
}
