import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OttoSectionHighlight({ targetSelector, active, color = "#3d92cc" }) {
  const [rect, setRect] = useState(null);
  const resizeObserver = useRef(null);

  const updateRect = () => {
    if (targetSelector) {
      const el = document.querySelector(targetSelector);
      if (el) {
        setRect(el.getBoundingClientRect());
      }
    }
  };

  useEffect(() => {
    if (active && targetSelector) {
      updateRect();
      const el = document.querySelector(targetSelector);
      if (el) {
        resizeObserver.current = new ResizeObserver(() => updateRect());
        resizeObserver.current.observe(el);
      }
      
      window.addEventListener('scroll', updateRect);
      window.addEventListener('resize', updateRect);
      
      return () => {
        if (resizeObserver.current) resizeObserver.current.disconnect();
        window.removeEventListener('scroll', updateRect);
        window.removeEventListener('resize', updateRect);
      };
    } else {
      setRect(null);
    }
  }, [active, targetSelector]);

  if (!active || !rect) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4],
          scale: 1,
        }}
        transition={{
          opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.3 }
        }}
        style={{
          position: 'fixed',
          top: rect.top - 4,
          left: rect.left - 4,
          width: rect.width + 8,
          height: rect.height + 8,
          border: `2px solid rgba(61, 146, 204, 0.6)`,
          borderRadius: '12px',
          background: 'rgba(61, 146, 204, 0.05)',
          pointerEvents: 'none',
          zIndex: 9990
        }}
      />
    </AnimatePresence>
  );
}
