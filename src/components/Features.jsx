import React from 'react';
import SectionTitle from './SectionTitle';

export default function Features() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">Our Core Competencies</span>
        <SectionTitle className="mb-4 text-center">Why Octoways Leads in AI Development</SectionTitle>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Octoways is an <strong>AI-focused custom software development company</strong> providing end-to-end neural solutions.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-panel ghost-border p-10 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology_alt</span>
          </div>
          <h3 className="font-headline text-2xl font-bold mb-4 text-white">Custom LLM Integration</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            We develop and deploy bespoke Large Language Models tailored to your specific industry entities and operational workflows.
          </p>
        </div>
        <div className="glass-panel ghost-border p-10 rounded-2xl text-center group hover:border-secondary/50 transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
          </div>
          <h3 className="font-headline text-2xl font-bold mb-4 text-white">Neural Application Dev</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Full-stack development of AI-native applications using modern frameworks and high-performance inference engines.
          </p>
        </div>
        <div className="glass-panel ghost-border p-10 rounded-2xl text-center group hover:border-tertiary/50 transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-20 h-20 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-4xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
          </div>
          <h3 className="font-headline text-2xl font-bold mb-4 text-white">Predictive AI Systems</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Harnessing global datasets to build predictive models that forecast market trends and optimize enterprise resource planning.
          </p>
        </div>
      </div>
    </section>
  );
}
