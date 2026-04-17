import React from 'react';
import SectionTitle from './SectionTitle';

export default function Impact() {
  return (
    <section id="section-stats" className="py-24 px-8 bg-surface-container-low relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 block pl-4">AI Innovation Authority</span>
            <SectionTitle className="mb-10 text-left">The Global Impact of Octoways AI</SectionTitle>
            <p className="text-text-secondary text-lg leading-relaxed mb-12 font-medium">
              Octoways is an <strong>AI-focused custom software development company</strong> that empowers global enterprises. We integrate advanced neural architectures into scalable software solutions, bridging the gap between algorithmic complexity and business intuition.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div id="stat-years" className="bg-surface-card p-8 rounded-2xl transition-all shadow-card group hover:bg-surface-raised">
                <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">12+</h3>
                <p className="text-text-muted text-[11px] font-bold uppercase tracking-widest leading-tight">Years of AI Engineering</p>
              </div>
              <div id="stat-patents" className="bg-surface-card p-8 rounded-2xl transition-all shadow-card group hover:bg-surface-raised">
                <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-2 group-hover:text-secondary transition-colors">45+</h3>
                <p className="text-text-muted text-[11px] font-bold uppercase tracking-widest leading-tight">Patented AI Models</p>
              </div>
              <div id="stat-solutions" className="bg-surface-card p-8 rounded-2xl transition-all shadow-card group hover:bg-surface-raised">
                <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">1.2k+</h3>
                <p className="text-text-muted text-[11px] font-bold uppercase tracking-widest leading-tight">Global AI Solutions</p>
              </div>
              <div id="stat-countries" className="bg-surface-card p-8 rounded-2xl transition-all shadow-card group hover:bg-surface-raised">
                <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-2 group-hover:text-secondary transition-colors">30+</h3>
                <p className="text-text-muted text-[11px] font-bold uppercase tracking-widest leading-tight">Countries Reached</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl group aspect-square relative">
              <img 
                alt="Octoways Global AI Operations - High-fidelity command center visualization" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_EV6XCik4NHV67z5RsAuxLhk84k73ecyVQwVCbrKqk8wZS8waDSja3Z7mfo7ud5a1Qsr19E8xz5FPECAHI73bX9wVXtgI0WWk_0qkeCRjUrP3CN_FKIZ7efJfbnKBcTnhp-CL3rHVOMhUWGhfiohNeE89cak40ODA2Y5WDywv7-QZ5hrmcn6vHgA6JON7CxNr85t_jhiJ5gf9C8SLwv6aJK8Kyb-hqJIcM9enQ8_k72WK6ow4yRL0mc0XB6FAJUTngRBVINnfkvs"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay group-hover:bg-primary/0 transition-colors duration-700"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 blur-[80px] rounded-full -z-10"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
