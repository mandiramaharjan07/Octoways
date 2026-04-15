import React, { useState, useEffect } from 'react';


export default function Hero() {
  const [ottoState, setOttoState] = useState('greeting');

  useEffect(() => {
    const timer = setTimeout(() => setOttoState('idle'), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="section-hero" className="relative min-h-[90vh] flex items-center px-8 pt-20 overflow-hidden bg-neural-grid">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/50 to-background z-0"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="reveal">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#3d92cc]"></span>
            <span className="text-primary-fixed-dim text-xs font-bold uppercase tracking-[0.3em]">Leading AI-Focused Software Development</span>
          </div>
          <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-8">
            Octoways: Engineering the Future of <span className="text-primary">Neural Creativity</span>
          </h1>
          <p className="text-on-surface-variant text-xl leading-relaxed mb-10 max-w-xl">
            As an <strong>AI-focused custom software development company</strong>, Octoways redefines digital ecosystems with high-fidelity generative models and enterprise-grade AI automation.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(61,146,204,0.5)] transition-all">
              Scale with AI
            </button>
            <button className="glass-panel ghost-border px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-bright transition-all group">
              Our AI Portfolio <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('otto:restart'))}
              className="glass-panel ghost-border border-primary/40 text-primary-fixed-dim px-8 py-4 rounded-xl font-bold hover:bg-primary/10 transition-all flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-primary">explore</span>
              Meet Otto — Your AI Guide
            </button>
          </div>
        </div>

        <div className="relative reveal delay-300">
          <div className="glass-panel rounded-2xl border border-white/10 shadow-2xl relative flex items-center justify-center min-h-[480px] overflow-hidden p-12">
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="text-[10px] font-mono text-gray-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success"></span> NEURAL ENGINE: V4.0 ACTIVE
              </div>
            </div>
            
            {/* Static High-Fidelity Mascot (Full Box) */}
            <div className="relative z-10 group/otto w-full h-full flex items-center justify-center">
                <img 
                  src="/mascot-blue.webp" 
                  alt="Octoways Neural Mascot" 
                  className="w-full h-auto max-w-[420px] drop-shadow-[0_0_50px_rgba(61,146,204,0.4)] group-hover/otto:scale-105 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
              <div className="w-64 h-64 bg-primary/20 blur-[80px] rounded-full animate-pulse"></div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4">
              <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-mono border border-primary/30 text-primary">
                REACTION: {ottoState.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
