import React from 'react';
import SectionTitle from './SectionTitle';

export default function TechStack() {
  return (
    <section id="section-stack" className="py-24 px-8 bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <SectionTitle className="mb-4">Proprietary AI Stack</SectionTitle>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Access the core technology that makes Octoways the premier <strong>AI-focused software company</strong> for global creators.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel ghost-border p-8 rounded-xl hover:bg-surface-bright transition-all group border-l-2 border-l-primary/30">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 text-white">Prompt Engineering</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Expert refinement of latent space traversal for maximum aesthetic and functional output precision.</p>
            <a className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all" href="#">Explore Lab <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
          <div className="glass-panel ghost-border p-8 rounded-xl hover:bg-surface-bright transition-all group border-l-2 border-l-secondary/30">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>transform</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 text-white">Neural Transcoding</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Convert multi-modal inputs into structured enterprise data using custom OCR and NLP architectures.</p>
            <a className="text-secondary text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all" href="#">Explore Lab <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
          <div className="glass-panel ghost-border p-8 rounded-xl hover:bg-surface-bright transition-all group border-l-2 border-l-tertiary/30">
            <div className="w-12 h-12 rounded-lg bg-tertiary/20 flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>motion_mode</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 text-white">Motion Synthesis</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Procedural generation of cinematic video assets using temporal-consistent diffusion frameworks.</p>
            <a className="text-tertiary text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all" href="#">Explore Lab <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
          <div className="glass-panel ghost-border p-8 rounded-xl hover:bg-surface-bright transition-all group border-l-2 border-l-primary-fixed-dim/30">
            <div className="w-12 h-12 rounded-lg bg-primary-fixed-dim/20 flex items-center justify-center mb-6 text-primary-fixed-dim group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>high_quality</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 text-white">8K Super-Res</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">AI-driven upscaling of legacy digital assets using generative texture hallucination and sharpening.</p>
            <a className="text-primary-fixed-dim text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all" href="#">Explore Lab <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
