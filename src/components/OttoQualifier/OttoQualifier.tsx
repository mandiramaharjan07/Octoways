import React, { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OttoSVG from '../Otto/OttoSVG';
import OttoQuestionCard from './OttoQuestionCard';
import OttoContactCapture from './OttoContactCapture';
import OttoResult from './OttoResult';
import useQualifierFlow, { resolveQuestion } from './useQualifierFlow';
import { QUALIFIER_FLOW } from './qualifierData';

const TOTAL_QUESTIONS = QUALIFIER_FLOW.questions.length; // 5

interface OttoQualifierProps {
  isOpen: boolean;
  onClose: () => void;
}

function getOttoMode(step: number, isComplete: boolean): { mode: any, lookDir: any } {
  if (isComplete) return { mode: 'wave', lookDir: 'forward' };
  if (step === 0) return { mode: 'idle', lookDir: 'forward' };
  if (step === TOTAL_QUESTIONS - 1) return { mode: 'idle', lookDir: 'up' };
  return { mode: 'idle', lookDir: 'forward' };
}

const OttoQualifier: React.FC<OttoQualifierProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const {
    currentStep,
    answers,
    visitorType,
    isComplete,
    contactData,
    getUSPScript,
    getRouting,
    handleAnswer,
    handleContactSubmit,
    reset
  } = useQualifierFlow();

  const question = resolveQuestion(currentStep, visitorType);
  const isContactStep = question?.type === 'contact';
  const ottoMode = getOttoMode(currentStep, isComplete);

  // Focus trap: keep focus inside the overlay
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        handleClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusable = overlayRef.current?.querySelectorAll(
        'button, input, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement).focus();
        }
      } else {
        if (document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement).focus();
        }
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => closeButtonRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    sessionStorage.setItem('qualifier_skipped', 'true');
    onClose();
    setTimeout(reset, 400);
  }, [onClose, reset]);

  const handleSkip = useCallback(() => {
    handleClose();
  }, [handleClose]);

  const speechBubbleText =
    currentStep === 0
      ? "Hi! I'm Otto — let me personalise your experience 🐙"
      : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="qualifier-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--otto-overlay-bg)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: 10000
            }}
            aria-hidden="true"
          />

          <motion.div
            key="qualifier-content"
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001,
              padding: '20px 16px',
              overflowY: 'auto'
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Talk to Otto — Visitor Qualifier"
          >
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-surface-raised border border-border text-text-secondary flex items-center justify-center text-2xl hover:bg-surface-card hover:text-text-primary transition-all z-10 shadow-lg active:scale-90"
            >
              ×
            </button>

            <div style={{ marginBottom: '16px', position: 'relative' }}>
              <motion.div
                layoutId="otto-qualifier-mascot"
                animate={{ y: isComplete ? [0, -8, 0] : 0 }}
                transition={
                  isComplete
                    ? { duration: 2, repeat: Infinity, ease: 'easeInOut' as any }
                    : { duration: 0.3 }
                }
              >
                <OttoSVG
                  mode={ottoMode.mode}
                  lookDir={ottoMode.lookDir}
                  size={currentStep === 0 ? 100 : 80}
                />
              </motion.div>

              <AnimatePresence>
                {speechBubbleText && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--otto-bubble-bg)',
                      border: '1px solid var(--otto-bubble-border)',
                      borderRadius: '16px',
                      padding: '10px 18px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      color: 'var(--color-text-primary)',
                      whiteSpace: 'nowrap',
                      marginBottom: '8px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                    }}
                    aria-live="polite"
                  >
                    {speechBubbleText}
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderTop: '8px solid var(--otto-bubble-border)'
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {isComplete ? (
              <OttoResult
                contactData={contactData}
                uspScript={getUSPScript()}
                routing={getRouting()}
                onClose={handleClose}
              />
            ) : isContactStep ? (
              <OttoContactCapture
                onSubmit={handleContactSubmit}
                visitorType={visitorType}
                currentStep={currentStep}
                onSkip={handleSkip}
              />
            ) : (
              <OttoQuestionCard
                question={question}
                onAnswer={handleAnswer}
                selectedOption={question ? (answers as any)[question.id] : undefined}
                currentStep={currentStep}
                onSkip={handleSkip}
              />
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OttoQualifier;
