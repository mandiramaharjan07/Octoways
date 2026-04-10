import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

function Counter({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const impactStats = [
  { value: 500, label: "Projects Completed" },
  { value: 200, label: "Satisfied Clients" },
  { value: 9, label: "Industry Sectors" },
  { value: 10, label: "Years Experience" }
];

export default function ImpactNumbers() {
  return (
    <section className="py-24 px-8 bg-animated-neural relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-primary/5 opacity-50"></div>
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
              <div className="text-5xl md:text-7xl font-headline font-bold text-primary flex items-center justify-center">
                <Counter value={stat.value} />
                <span>+</span>
              </div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
