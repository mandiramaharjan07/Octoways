import React from 'react';
import SectionTitle from './SectionTitle';

export default function Workflow() {
  return (
    <section id="section-workflow" className="py-24 px-8 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionTitle>The Octoways AI Workflow</SectionTitle>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-primary/10 via-primary to-primary/10 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest ghost-border flex items-center justify-center mb-8 relative group-hover:border-primary transition-all">
                <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin duration-[4s]"></div>
                <span className="text-primary font-headline text-xl font-bold">01</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-white">Neural Inception</h3>
              <p className="text-on-surface-variant max-w-xs">Define your entity-based requirements and trigger Octoways' generative engine.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest ghost-border flex items-center justify-center mb-8 group-hover:border-secondary transition-all">
                <span className="text-secondary font-headline text-xl font-bold">02</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-white">AI Optimization</h3>
              <p className="text-on-surface-variant max-w-xs">Iterative model training and fine-tuning to achieve enterprise-grade software standards.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(61,146,204,0.6)]">
                <span className="text-on-primary font-headline text-xl font-bold">03</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-white">Global Deployment</h3>
              <p className="text-on-surface-variant max-w-xs">Launch your AI-native solution across global markets with secure, localized infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
