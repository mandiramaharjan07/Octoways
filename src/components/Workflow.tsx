import React from 'react';
import SectionTitle from './SectionTitle';

export default function Workflow() {
  return (
    <section id="section-workflow" className="py-24 px-8 bg-surface-container-low relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionTitle className="text-center">The Octoways AI Workflow</SectionTitle>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-[32px] left-0 w-full h-[2px] bg-gradient-to-r from-primary/5 via-primary to-primary/5 z-0"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-card flex items-center justify-center mb-8 relative transition-all duration-500 shadow-sm">
                <div className="absolute inset-0 rounded-full animate-spin duration-[4s] opacity-0 group-hover:opacity-100"></div>
                <span className="text-primary font-headline text-xl font-bold">01</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-6 text-text-primary group-hover:text-primary transition-colors">Neural Inception</h3>
              <p className="text-text-secondary max-w-xs font-medium leading-relaxed">Define your entity-based requirements and trigger Octoways' generative engine.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-card flex items-center justify-center mb-8 relative transition-all duration-500 shadow-sm">
                <span className="text-secondary font-headline text-xl font-bold">02</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-6 text-text-primary group-hover:text-secondary transition-colors">AI Optimization</h3>
              <p className="text-text-secondary max-w-xs font-medium leading-relaxed">Iterative model training and fine-tuning to achieve enterprise-grade software standards.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-8 shadow-lg shadow-primary/20 scale-110">
                <span className="text-on-primary font-headline text-xl font-bold">03</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-6 text-text-primary group-hover:text-primary transition-colors">Global Deployment</h3>
              <p className="text-text-secondary max-w-xs font-medium leading-relaxed">Launch your AI-native solution across global markets with secure, localized infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
