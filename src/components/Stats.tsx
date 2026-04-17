import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = "+" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Stats: React.FC = () => {
  const stats = [
    { value: 10, label: "Years of Industry Experience" },
    { value: 30, label: "Dedicated Technology Experts" },
    { value: 500, label: "Software Projects Delivered" },
    { value: 200, label: "Global Satisfied Clients" },
  ];

  return (
    <section className="py-24 px-8 bg-animated-neural relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-primary/5 opacity-[0.05] dark:opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stat-card p-10 rounded-[2.5rem] space-y-4 bg-surface-card/40 backdrop-blur-sm shadow-card"
            >
              <div className="text-5xl md:text-7xl font-headline font-bold text-primary drop-shadow-sm">
                <Counter value={stat.value} />
                <span>+</span>
              </div>
              <div className="text-[11px] md:text-xs text-text-secondary uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
