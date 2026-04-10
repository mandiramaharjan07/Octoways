import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ value, suffix = "+" }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  const stats = [
    { value: 10, label: "Years of Industry Experience" },
    { value: 30, label: "Dedicated Technology Experts" },
    { value: 500, label: "Software Projects Delivered" },
    { value: 200, label: "Global Satisfied Clients" },
  ];

  return (
    <section className="py-24 px-8 bg-animated-neural relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="text-5xl md:text-7xl font-headline font-bold text-primary">
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
