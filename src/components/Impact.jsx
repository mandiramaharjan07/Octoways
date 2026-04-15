import React from 'react';
import SectionTitle from './SectionTitle';

export default function Impact() {
  return (
    <section id="section-stats" className="py-24 px-8 bg-surface-container-low border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">AI Innovation Authority</span>
            <SectionTitle className="mb-8">The Global Impact of Octoways AI</SectionTitle>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              Octoways is an <strong>AI-focused custom software development company</strong> that empowers global enterprises. We integrate advanced neural architectures into scalable software solutions, bridging the gap between algorithmic complexity and business intuition.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div id="stat-years" className="glass-panel ghost-border p-6 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="text-4xl font-bold text-white mb-1">12+</h3>
                <p className="text-gray-400 text-sm font-semibold">Years of AI Engineering</p>
              </div>
              <div id="stat-patents" className="glass-panel ghost-border p-6 rounded-xl hover:border-secondary/50 transition-colors">
                <h3 className="text-4xl font-bold text-white mb-1">45+</h3>
                <p className="text-gray-400 text-sm font-semibold">Patented AI Models</p>
              </div>
              <div id="stat-solutions" className="glass-panel ghost-border p-6 rounded-xl hover:border-primary/50 transition-colors">
                <h3 className="text-4xl font-bold text-white mb-1">1.2k+</h3>
                <p className="text-gray-400 text-sm font-semibold">Global AI Solutions</p>
              </div>
              <div id="stat-countries" className="glass-panel ghost-border p-6 rounded-xl hover:border-secondary/50 transition-colors">
                <h3 className="text-4xl font-bold text-white mb-1">30+</h3>
                <p className="text-gray-400 text-sm font-semibold">Countries Reached</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video relative">
              <img 
                alt="Octoways Global AI Operations - High-fidelity command center visualization" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_EV6XCik4NHV67z5RsAuxLhk84k73ecyVQwVCbrKqk8wZS8waDSja3Z7mfo7ud5a1Qsr19E8xz5FPECAHI73bX9wVXtgI0WWk_0qkeCRjUrP3CN_FKIZ7efJfbnKBcTnhp-CL3rHVOMhUWGhfiohNeE89cak40ODA2Y5WDywv7-QZ5hrmcn6vHgA6JON7CxNr85t_jhiJ5gf9C8SLwv6aJK8Kyb-hqJIcM9enQ8_k72WK6ow4yRL0mc0XB6FAJUTngRBVINnfkvs"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/30 blur-[60px] rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 blur-[60px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
