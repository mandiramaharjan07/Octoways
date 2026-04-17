import React from 'react';
import SectionTitle from './SectionTitle';

export default function Features() {
  return (
    <section id="section-services" className="py-24 px-8 bg-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-secondary font-headline font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-10 block w-fit mx-auto">Our Core Competencies</span>
        <SectionTitle className="mb-6 text-center">Why Octoways Leads in AI Development</SectionTitle>
        <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">Octoways is an <strong>AI-focused custom software development company</strong> providing end-to-end neural solutions.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="bg-surface-card p-12 rounded-[2.5rem] text-center group hover:bg-surface-raised transition-all duration-500 relative overflow-hidden shadow-card hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-10 group-hover:rotate-6 transition-all duration-500">
            <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology_alt</span>
          </div>
          <h3 className="font-headline text-2xl font-bold mb-6 text-text-primary group-hover:text-primary transition-colors">Custom LLM Integration</h3>
          <p className="text-text-secondary text-sm leading-relaxed font-medium">
            We develop and deploy bespoke Large Language Models tailored to your specific industry entities and operational workflows.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-surface-card p-12 rounded-[2.5rem] text-center group hover:bg-surface-raised transition-all duration-500 relative overflow-hidden shadow-card hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-20 h-20 bg-secondary/10 dark:bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-10 group-hover:rotate-6 transition-all duration-500">
            <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
          </div>
          <h3 className="font-headline text-2xl font-bold mb-6 text-text-primary group-hover:text-secondary transition-colors">Neural Application Dev</h3>
          <p className="text-text-secondary text-sm leading-relaxed font-medium">
            Full-stack development of AI-native applications using modern frameworks and high-performance inference engines.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-surface-card p-12 rounded-[2.5rem] text-center group hover:bg-surface-raised transition-all duration-500 relative overflow-hidden shadow-card hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-10 group-hover:rotate-6 transition-all duration-500">
            <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
          </div>
          <h3 className="font-headline text-2xl font-bold mb-6 text-text-primary group-hover:text-primary transition-colors">Predictive AI Systems</h3>
          <p className="text-text-secondary text-sm leading-relaxed font-medium">
            Harnessing global datasets to build predictive models that forecast market trends and optimize enterprise resource planning.
          </p>
        </div>
      </div>
    </section>
  );
}
