import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface CounterProps {
  value: number;
}

const Counter: React.FC<CounterProps> = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const impactStats = [
  { value: 500, label: "Projects Completed" },
  { value: 200, label: "Satisfied Clients" },
  { value: 9, label: "Industry Sectors" },
  { value: 10, label: "Years Experience" }
];

const ImpactNumbers: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-animated-neural relative overflow-hidden border-y border-border transition-colors duration-300">
      <div className="absolute inset-0 bg-primary/5 opacity-[0.05] dark:opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="text-5xl md:text-7xl font-headline font-bold text-primary flex items-center justify-center drop-shadow-sm">
                <Counter value={stat.value} />
                <span>+</span>
              </div>
              <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
