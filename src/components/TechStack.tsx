import React from 'react';
import SectionTitle from './SectionTitle';

export default function TechStack() {
  return (
    <section id="section-stack" className="py-24 px-8 bg-surface-raised transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <SectionTitle className="mb-6">Proprietary AI Stack</SectionTitle>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">Access the core technology that makes Octoways the premier <strong>AI-focused software company</strong> for global creators.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stack Item 1 */}
          <div className="bg-surface-card p-10 rounded-[2.5rem] hover:bg-surface transition-all duration-500 group shadow-card hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 text-text-primary group-hover:text-primary transition-colors">Prompt Engineering</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 font-medium">Expert refinement of latent space traversal for maximum aesthetic and functional output precision.</p>
            <a className="text-primary text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" href="#">Explore Lab <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>

          {/* Stack Item 2 */}
          <div className="bg-surface-card p-10 rounded-[2.5rem] hover:bg-surface transition-all duration-500 group shadow-card hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mb-8 text-secondary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>transform</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 text-text-primary group-hover:text-secondary transition-colors">Neural Transcoding</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 font-medium">Convert multi-modal inputs into structured enterprise data using custom OCR and NLP architectures.</p>
            <a className="text-secondary text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" href="#">Explore Lab <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>

          {/* Stack Item 3 */}
          <div className="bg-surface-card p-10 rounded-[2.5rem] hover:bg-surface transition-all duration-500 group shadow-card hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#D4537E]/10 dark:bg-[#D4537E]/20 flex items-center justify-center mb-8 text-[#D4537E] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>motion_mode</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 text-text-primary group-hover:text-[#D4537E] transition-colors">Motion Synthesis</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 font-medium">Procedural generation of cinematic video assets using temporal-consistent diffusion frameworks.</p>
            <a className="text-[#D4537E] text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" href="#">Explore Lab <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>

          {/* Stack Item 4 */}
          <div className="bg-surface-card p-10 rounded-[2.5rem] hover:bg-surface transition-all duration-500 group shadow-card hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#5ccafc]/10 dark:bg-[#5ccafc]/20 flex items-center justify-center mb-8 text-[#5ccafc] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>high_quality</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4 text-text-primary group-hover:text-[#5ccafc] transition-colors">8K Super-Res</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 font-medium">AI-driven upscaling of legacy digital assets using generative texture hallucination and sharpening.</p>
            <a className="text-[#5ccafc] text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" href="#">Explore Lab <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
