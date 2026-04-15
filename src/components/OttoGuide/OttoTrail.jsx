import React, { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';

export default function OttoTrail({ x, y, isSwimming }) {
  const [trail, setTrail] = useState([]);
  const requestRef = useRef();
  
  const updateTrail = () => {
    setTrail(prev => {
      const newPos = { x: x.get(), y: y.get(), id: Date.now() };
      // Keep only last 8 positions
      const updated = [newPos, ...prev].slice(0, 8);
      return updated;
    });
    requestRef.current = requestAnimationFrame(updateTrail);
  };

  useEffect(() => {
    if (isSwimming) {
      requestRef.current = requestAnimationFrame(updateTrail);
    } else {
      cancelAnimationFrame(requestRef.current);
      // Gradually clear trail
      const timer = setInterval(() => {
        setTrail(prev => prev.slice(1));
      }, 100);
      return () => clearInterval(timer);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [isSwimming]);

  return (
    <div className="otto-trail-container pointer-events-none absolute inset-0 overflow-visible z-[-1]">
      {trail.map((pos, i) => (
        <motion.div
          key={pos.id}
          initial={{ opacity: 0.3, scale: 0.5 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'fixed',
            left: pos.x + 40, // Offset to trail behind center
            top: pos.y + 40,
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#3d92cc',
            boxShadow: '0 0 10px #3d92cc',
            opacity: (8 - i) / 32, // More recent = more visible
          }}
        />
      ))}
    </div>
  );
}
