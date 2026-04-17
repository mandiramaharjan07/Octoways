import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OttoSVG = ({ size = 140, mode = 'idle', lookDir = 'forward', facingLeft = false }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibility = () => setIsVisible(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const tentacles = [
    { id: 1, d: "M 30,72 C 18,88 14,106 17,122" },
    { id: 2, d: "M 40,78 C 30,96 28,112 31,126" },
    { id: 3, d: "M 50,82 C 43,100 42,116 45,130" },
    { id: 4, d: "M 58,84 C 54,103 54,118 56,132" },
    { id: 5, d: "M 66,84 C 70,103 70,118 68,132" },
    { id: 6, d: "M 74,82 C 81,100 82,116 79,130" },
    { id: 7, d: "M 84,78 C 94,96 96,112 93,126" },
    { id: 8, d: "M 94,72 C 106,88 110,106 107,122" },
  ];

  return (
    <div 
      className="otto-cartoon-mascot"
      style={{ 
        width: size, 
        height: size,
        transform: facingLeft ? 'scaleX(-1)' : 'scaleX(1)',
        transition: 'transform 0.4s ease',
        willChange: 'transform'
      }}
    >
      <svg viewBox="0 0 120 140" className="w-full h-full overflow-visible">
        {/* Glow Filter */}
        <defs>
          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <motion.g
          animate={isVisible ? { y: [0, mode === 'swim' ? -15 : -10, 0] } : false}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'url(#soft-glow)' }}
        >
          {/* Subtle Glow Background (Hardware Accelerated Opacity) */}
          <motion.ellipse 
            cx="60" cy="45" rx="42" ry="38" 
            fill="rgba(61, 146, 204, 0.4)"
            animate={isVisible ? { opacity: [0.3, 0.6, 0.3] } : false}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Tentacles */}
          {tentacles.map((t, idx) => {
            const isFramerAnimated = [0, 2, 5, 7].includes(idx);
            
            if (isFramerAnimated) {
              return (
                <motion.path
                  key={t.id}
                  d={t.d}
                  stroke="#3d92cc"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                  animate={isVisible ? { rotate: [0, idx % 2 === 0 ? 10 : -10, 0] } : false}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.1
                  }}
                  style={{ transformOrigin: "top center" }}
                />
              );
            }

            // CSS-only tentacles for indices 1, 3, 4, 6
            return (
              <path
                key={t.id}
                d={t.d}
                stroke="#3d92cc"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                style={{
                  transformOrigin: "top center",
                  animation: isVisible ? `tentacleWave ${1.8 + idx * 0.2}s ease-in-out infinite` : 'none'
                }}
              />
            );
          })}

          {/* Large Blob Head */}
          <ellipse 
            cx="60" cy="45" rx="45" ry="40" 
            fill="#3d92cc" 
          />

          {/* Face Container */}
          <g transform="translate(60, 45)">
            {/* Eyes */}
            <g transform={`translate(${lookDir === 'left' ? -10 : lookDir === 'right' ? 10 : 0}, 0)`}>
              <circle cx="-15" cy="-5" r="7" fill="white" />
              <circle cx="-15" cy="-5" r="3.5" fill="#0d1b2a" />
              
              <circle cx="15" cy="-5" r="7" fill="white" />
              <circle cx="15" cy="-5" r="3.5" fill="#0d1b2a" />
            </g>

            {/* Rosy Cheeks */}
            <circle cx="-25" cy="8" r="5" fill="#ff7da8" opacity="0.4" />
            <circle cx="25" cy="8" r="5" fill="#ff7da8" opacity="0.4" />

            {/* Simple Smile */}
            <path 
              d="M -8,12 Q 0,18 8,12" 
              fill="none" 
              stroke="#0d1b2a" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />
          </g>
        </motion.g>
      </svg>
    </div>
  );
};

export default OttoSVG;
