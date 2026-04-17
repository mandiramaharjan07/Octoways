import React from 'react';
import { motion } from 'framer-motion';

export default function OttoParticles() {
  const particles = Array.from({ length: 12 });

  return (
    <g className="otto-particles">
      {particles.map((_, i) => (
        <motion.circle
          key={i}
          r={Math.random() * 2 + 1}
          fill="#3d92cc"
          initial={{ opacity: 0 }}
          animate={{
            x: [Math.random() * 120, Math.random() * 120],
            y: [Math.random() * 140, Math.random() * 140],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </g>
  );
}
