import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from './qualifierData';

const TOTAL_STEPS = 5;

const chipVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.28, ease: 'easeOut' as any }
  })
};

const cardVariants = {
  enter: {
    opacity: 0,
    y: 24,
    transition: { type: 'spring' as any, stiffness: 280, damping: 24 }
  },
  center: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as any, stiffness: 280, damping: 24 }
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2, ease: 'easeIn' as any }
  }
};

interface OttoQuestionCardProps {
  question: Question | null;
  onAnswer: (qId: string, oId: string) => void;
  selectedOption?: string;
  currentStep: number;
  onSkip: () => void;
}

const OttoQuestionCard: React.FC<OttoQuestionCardProps> = ({
  question,
  onAnswer,
  selectedOption,
  currentStep,
  onSkip
}) => {
  const firstChipRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => firstChipRef.current?.focus(), 200);
    return () => clearTimeout(timer);
  }, [question?.id]);

  if (!question) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        variants={cardVariants}
        initial="enter"
        animate="center"
        exit="exit"
        style={{
          background: 'var(--otto-bubble-bg)',
          border: '1px solid var(--color-border-accent)',
          borderRadius: '24px',
          padding: '32px 28px 24px',
          width: '100%',
          maxWidth: '520px',
          position: 'relative',
          boxShadow: 'var(--shadow-card)',
          backdropFilter: 'blur(20px)'
        }}
        role="dialog"
        aria-modal="true"
        aria-label={question.question}
      >
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '24px' }} role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={TOTAL_STEPS} aria-label={`Step ${currentStep + 1} of ${TOTAL_STEPS}`}>
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <motion.div
              key={i}
              animate={i === currentStep ? { scale: [1, 1.3, 1], opacity: 1 } : i < currentStep ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 0.28 }}
              transition={i === currentStep ? { duration: 1.2, repeat: Infinity, ease: 'easeInOut' as any } : { duration: 0.3 }}
              style={{
                width: i === currentStep ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i <= currentStep ? 'var(--color-primary-val)' : 'var(--color-border)',
                transition: 'width 0.3s ease'
              }}
            />
          ))}
        </div>

        <div style={{ marginBottom: '8px' }}>
          <h2 style={{ color: 'var(--color-text-primary)', fontSize: '22px', fontWeight: '700', lineHeight: '1.35', margin: 0, textAlign: 'center' }}>
            {question.question}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px', marginBottom: '16px' }}>
          {(question.options || []).map((opt, idx) => {
            const isSelected = selectedOption === opt.id;
            return (
              <motion.button
                key={opt.id}
                ref={idx === 0 ? firstChipRef : null}
                custom={idx}
                variants={chipVariants}
                initial="hidden"
                animate="visible"
                onClick={() => onAnswer(question.id, opt.id)}
                whileHover={{ scale: 1.02, backgroundColor: 'var(--color-surface-raised)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  border: isSelected ? '2px solid var(--color-primary-val)' : '1px solid var(--color-border)',
                  background: isSelected ? 'var(--color-surface-raised)' : 'transparent',
                  color: isSelected ? 'var(--color-primary-val)' : 'var(--color-text-primary)',
                  fontSize: '15px',
                  fontWeight: isSelected ? '600' : '400',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit'
                }}
              >
                <span style={{ fontSize: '20px', flexShrink: 0 }}>{opt.emoji}</span>
                <span>{opt.label}</span>
              </motion.button>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onSkip} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: '12px', cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'underline', padding: '4px 8px' }}>
            Skip for now
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OttoQuestionCard;
