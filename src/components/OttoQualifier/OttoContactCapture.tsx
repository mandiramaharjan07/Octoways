import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_STEPS = 5;

const OttoContactCapture: React.FC<{
  onSubmit: (data: any) => void;
  visitorType: string;
  currentStep: number;
  onSkip: () => void;
}> = ({ onSubmit, visitorType, currentStep, onSkip }) => {
  const [name, setName] = useState('');
  const [contactMode, setContactMode] = useState('email'); // 'email' | 'whatsapp'
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => nameRef.current?.focus(), 200);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your name';
    if (contactMode === 'email' && !email.trim()) errs.contact = 'Please enter your email';
    if (contactMode === 'whatsapp' && !phone.trim()) errs.contact = 'Please enter your phone number';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onSubmit({
      name: name.trim(),
      contactMode,
      email: contactMode === 'email' ? email.trim() : '',
      phone: contactMode === 'whatsapp' ? phone.trim() : '',
      company: company.trim(),
      linkedin: linkedin.trim()
    });
  };

  const showCompany = visitorType === 'client' || visitorType === 'partner';
  const showLinkedin = visitorType === 'jobseeker';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="contact-step"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
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
        aria-label="Contact information"
      >
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '24px' }}>
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
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

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ color: 'var(--color-text-primary)', fontSize: '22px', fontWeight: '700', lineHeight: '1.3', margin: '0 0 8px 0' }}>
            Almost done! How can we follow up?
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0 }}>
            Just your name and one contact — no spam, ever
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="qualifier-name" style={{ display: 'block', color: 'var(--color-text-secondary)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.05em' }}>Your Name *</label>
            <input
              ref={nameRef}
              id="qualifier-name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors(p => ({ ...p, name: '' })); }}
              style={{
                width: '100%',
                background: 'var(--color-input-bg)',
                border: `1px solid ${errors.name ? 'var(--color-tertiary-dim)' : 'var(--color-border)'}`,
                borderRadius: '12px',
                padding: '12px 16px',
                color: 'var(--color-text-primary)',
                fontSize: '15px',
                outline: 'none',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary-val)'}
              onBlur={(e) => e.target.style.borderColor = errors.name ? 'var(--color-tertiary-dim)' : 'var(--color-border)'}
            />
            {errors.name && (
              <p style={{ color: 'var(--color-tertiary-dim)', fontSize: '11px', marginTop: '4px' }}>{errors.name}</p>
            )}
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: 'var(--color-text-secondary)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.05em' }}>Preferred Contact</label>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
              {['email', 'whatsapp'].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => { setContactMode(mode); setErrors(p => ({ ...p, contact: '' })); }}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '12px',
                    border: `1px solid ${contactMode === mode ? 'var(--color-primary-val)' : 'var(--color-border)'}`,
                    background: contactMode === mode ? 'var(--color-surface-raised)' : 'transparent',
                    color: contactMode === mode ? 'var(--color-primary-val)' : 'var(--color-text-secondary)',
                    fontSize: '13px',
                    fontWeight: contactMode === mode ? '600' : '400',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s'
                  }}
                >
                  {mode === 'email' ? '📧 Email' : '💬 WhatsApp'}
                </button>
              ))}
            </div>

            {contactMode === 'email' && (
              <input
                id="qualifier-email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors(p => ({ ...p, contact: '' })); }}
                style={{
                  width: '100%',
                  background: 'var(--color-input-bg)',
                  border: `1px solid ${errors.contact ? 'var(--color-tertiary-dim)' : 'var(--color-border)'}`,
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: 'var(--color-text-primary)',
                  fontSize: '15px',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            )}
            {contactMode === 'whatsapp' && (
              <input
                id="qualifier-phone"
                type="tel"
                placeholder="+977 98xxxxxxxx"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setErrors(p => ({ ...p, contact: '' })); }}
                style={{
                  width: '100%',
                  background: 'var(--color-input-bg)',
                  border: `1px solid ${errors.contact ? 'var(--color-tertiary-dim)' : 'var(--color-border)'}`,
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: 'var(--color-text-primary)',
                  fontSize: '15px',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            )}
            {errors.contact && (
              <p style={{ color: 'var(--color-tertiary-dim)', fontSize: '11px', marginTop: '4px' }}>{errors.contact}</p>
            )}
          </div>

          {showCompany && (
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="qualifier-company" style={{ display: 'block', color: 'var(--color-text-secondary)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.05em' }}>Company (optional)</label>
              <input
                id="qualifier-company"
                type="text"
                placeholder="Your company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={{
                  width: '100%',
                  background: 'var(--color-input-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: 'var(--color-text-primary)',
                  fontSize: '15px',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          )}

          {showLinkedin && (
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="qualifier-linkedin" style={{ display: 'block', color: 'var(--color-text-secondary)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.05em' }}>LinkedIn URL (optional)</label>
              <input
                id="qualifier-linkedin"
                type="url"
                placeholder="linkedin.com/in/yourprofile"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                style={{
                  width: '100%',
                  background: 'var(--color-input-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: 'var(--color-text-primary)',
                  fontSize: '15px',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, var(--color-primary-val), var(--color-secondary-val))',
              color: '#fff',
              border: 'none',
              borderRadius: '16px',
              padding: '18px',
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
              fontFamily: 'inherit',
              marginTop: '4px',
              boxShadow: '0 8px 30px var(--color-border-accent)',
              transition: 'all 0.2s'
            }}
          >
            Get my personalised recommendation →
          </motion.button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '14px' }}>
          <button onClick={onSkip} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: '12px', cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'underline', padding: '4px 8px' }}>
            Skip for now
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OttoContactCapture;
