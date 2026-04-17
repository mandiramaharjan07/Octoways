import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OttoSVG from '../Otto/OttoSVG';

// Floating cyan particles
function Particles() {
  const particles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: 10 + i * 18 + Math.random() * 10,
    delay: i * 0.4,
    duration: 2.5 + i * 0.3
  }));

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        borderRadius: '20px'
      }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: '90%', x: `${p.x}%`, opacity: 0, scale: 0.4 }}
          animate={{ y: '-20%', opacity: [0, 0.8, 0], scale: [0.4, 1, 0.4] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut' as any
          }}
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--color-primary-val)',
            boxShadow: '0 0 8px var(--color-primary-val)'
          }}
        />
      ))}
    </div>
  );
}

const ACTION_STYLES = {
  calendly: { label: 'Book your free consultation →', bg: 'var(--color-primary-val)', color: '#fff' },
  scroll:   { label: 'Show me the services →',        bg: 'transparent', color: 'var(--color-primary-val)', border: '1px solid var(--color-primary-val)' },
  navigate: { label: 'See our work →',                bg: 'transparent', color: 'var(--color-primary-val)', border: '1px solid var(--color-primary-val)' },
  email:    { label: 'Send my application →',         bg: 'var(--color-primary-val)', color: '#fff' },
  tour:     { label: 'Give me the full tour 🐙 →',    bg: 'var(--color-primary-val)', color: '#fff' },
  consult:  { label: 'Start AI consultation →',       bg: 'var(--color-primary-val)', color: '#fff' }
};

interface OttoResultProps {
  contactData: { name: string } | null;
  uspScript: string;
  routing: {
    action: string;
    target?: string;
  } | null;
  onClose: () => void;
}

const OttoResult: React.FC<OttoResultProps> = ({ contactData, uspScript, routing, onClose }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const intervalRef = useRef<any>(null);
  const indexRef = useRef(0);

  // Typewriter effect
  useEffect(() => {
    if (!uspScript) return;
    setDisplayedText('');
    setTypingDone(false);
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (indexRef.current < uspScript.length) {
        setDisplayedText(uspScript.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTypingDone(true);
      }
    }, 28);

    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [uspScript]);

  const handleAction = () => {
    if (!routing) { onClose(); return; }
    switch (routing.action) {
      case 'calendly':
        window.open('https://calendly.com/octoways', '_blank', 'noopener');
        break;
      case 'scroll':
        onClose();
        setTimeout(() => {
          const target = routing.target;
          if (target) {
            const el = document.querySelector(target);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
        break;
      case 'navigate':
        onClose();
        if (routing.target) {
          window.location.href = routing.target;
        }
        break;
      case 'email':
        window.open('mailto:info@octoways.com?subject=Job Application', '_blank');
        break;
      case 'tour':
        onClose();
        window.dispatchEvent(new CustomEvent('otto:restart'));
        break;
      case 'consult':
        window.open('https://calendly.com/octoways', '_blank', 'noopener');
        break;
      default:
        onClose();
    }
  };

  const actionStyle = routing ? ((ACTION_STYLES as any)[routing.action] || ACTION_STYLES.calendly) : ACTION_STYLES.calendly;
  const firstName = contactData?.name ? contactData.name.split(' ')[0] : 'there';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="otto-result"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 24 } }}
        exit={{ opacity: 0, y: -16, transition: { duration: 0.2 } }}
        style={{
          background: 'var(--otto-bubble-bg)',
          border: '1px solid var(--color-border-accent)',
          borderRadius: '24px',
          padding: '32px 28px 28px',
          width: '100%',
          maxWidth: '520px',
          boxShadow: 'var(--shadow-card)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          backdropFilter: 'blur(20px)'
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Your personalised recommendation"
      >
        <Particles />

        {/* Otto mascot */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', position: 'relative', zIndex: 1 }}>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' as any }}
          >
            <OttoSVG mode="wave" lookDir="forward" size={120} />
          </motion.div>
        </div>

        {/* Greeting */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            color: 'var(--color-text-primary)',
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '16px',
            lineHeight: '1.4',
            position: 'relative',
            zIndex: 1
          }}
        >
          Thanks {firstName}! Here's your personalized recommendation:
        </motion.h2>

        {/* USP typewriter */}
        <div
          style={{
            background: 'var(--color-surface-raised)',
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '24px',
            minHeight: '80px',
            position: 'relative',
            zIndex: 1,
            textAlign: 'left'
          }}
          aria-live="polite"
          aria-label="Personalised message"
        >
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '15px',
              lineHeight: '1.7',
              margin: 0
            }}
          >
            {displayedText}
            {!typingDone && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{ display: 'inline-block', width: '2px', height: '14px', background: 'var(--color-primary-val)', marginLeft: '2px', verticalAlign: 'middle' }}
              />
            )}
          </p>
        </div>

        {/* Action button — appears after typing */}
        <AnimatePresence>
          {typingDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAction}
                style={{
                  width: '100%',
                  background: actionStyle.bg,
                  color: actionStyle.color,
                  border: actionStyle.border || 'none',
                  borderRadius: '16px',
                  padding: '16px',
                  fontSize: '15px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  marginBottom: '10px',
                  letterSpacing: '0.02em',
                  boxShadow: actionStyle.bg !== 'transparent' ? '0 8px 30px var(--color-border-accent)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                {actionStyle.label}
              </motion.button>

              {/* Skip link */}
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  fontSize: '12px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  textDecoration: 'underline',
                  display: 'block',
                  margin: '0 auto',
                  padding: '8px'
                }}
              >
                Close and explore site
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default OttoResult;
