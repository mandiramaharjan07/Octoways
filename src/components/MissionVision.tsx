import React from 'react';
import { motion } from 'framer-motion';

export default function MissionVision() {
  const missionBullets = [
    "Deliver Smart AI Solutions",
    "Blend Tech with Human Insight",
    "Empower Teams to Innovate",
    "Exceed Client Expectations Always"
  ];

  const visionBullets = [
    "Human-Centered AI-Powered Solutions",
    "Adaptive Innovation Always Evolving",
    "Deep Tech Smart Execution",
    "Empowering Growth Through Learning"
  ];

  return (
    <section id="about-mission" className="py-24 px-8 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-card p-10 md:p-14 rounded-[3rem] relative overflow-hidden shadow-card"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-8xl text-primary">rocket_launch</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-text-primary">
            <span className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-primary text-2xl">target</span>
            </span>
            Our Mission
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-10 font-medium">
            Our mission is to provide cutting-edge AI and application solutions that drive business success. We empower our team through continuous learning and innovation to deliver exceptional results and exceed client expectations.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {missionBullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3 text-text-muted font-bold text-xs uppercase tracking-widest">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface-raised p-10 md:p-14 rounded-[3rem] relative overflow-hidden shadow-card"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-8xl text-secondary">visibility</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-text-primary">
            <span className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-secondary text-2xl">insights</span>
            </span>
            Our Vision
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-10 font-medium">
            Our vision is to lead the industry in AI-driven solutions, creating transformative digital experiences that set new standards. We aim to foster talent and innovation, shaping a future where technology enhances every aspect of business.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visionBullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3 text-text-muted font-bold text-xs uppercase tracking-widest">
                <span className="material-symbols-outlined text-secondary text-sm">auto_awesome</span>
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
