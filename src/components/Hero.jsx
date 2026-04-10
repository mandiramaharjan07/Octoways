import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-8 pt-20 overflow-hidden bg-neural-grid">
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
          </div>
        </div>

        <div className="relative reveal delay-300">
          <div className="glass-panel p-4 rounded-2xl border border-white/10 shadow-2xl relative">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="ml-auto text-[10px] font-mono text-gray-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success"></span> NEURAL ENGINE: V4.0 ACTIVE
              </div>
            </div>
            <div className="aspect-video rounded-lg bg-surface-container-lowest overflow-hidden relative group border border-white/5">
              <img
                alt="High-fidelity cybernetic octopus with bioluminescent neural circuitry - Octoways Brand Mascot"
                className="w-full h-full object-cover"
                src="/mascot-blue.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-mono border border-primary/30 text-primary">
                  PROMPT: "hyper-realistic AI infrastructure, global connectivity, 8k"
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className="w-[88%] h-full bg-gradient-to-r from-secondary to-primary animate-pulse"></div>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-gray-400">
                <span>Optimization Level: 88%</span>
                <span>Latency: 14ms</span>
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
