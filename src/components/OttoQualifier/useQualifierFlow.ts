import { useState, useCallback, useRef } from 'react';
import { QUALIFIER_FLOW } from './qualifierData';

/** Pure utility: compute next non-skipped step */

export interface ContactData {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
  [key: string]: any;
}

export interface Answers {
  [key: string]: string;
}

const TOTAL_STEPS = QUALIFIER_FLOW.questions.length;

/** Pure utility: compute next non-skipped step */
function computeNextStep(fromStep: number, visitorType: string): number {
  let next = fromStep + 1;
  while (next < TOTAL_STEPS) {
    const q = QUALIFIER_FLOW.questions[next];
    if (!q?.skipForTypes?.includes(visitorType)) break;
    next++;
  }
  return next;
}

/** Pure utility: resolve a question for a step+visitorType */
export function resolveQuestion(step: number, visitorType: string) {
  const q = QUALIFIER_FLOW.questions[step];
  if (!q) return null;
  if (q.optionsByType) {
    const resolvedOptions = q.optionsByType[visitorType] || [];
    return { ...q, options: resolvedOptions };
  }
  return q;
}

export default function useQualifierFlow() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [visitorType, setVisitorType] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [contactData, setContactData] = useState<ContactData | null>(null);

  // Refs to mirror state for use inside stable callbacks
  const visitorTypeRef = useRef<string>('');
  const currentStepRef = useRef<number>(0);
  const answersRef = useRef<Answers>({});

  /** Build USP script key */
  const getUSPScript = useCallback((): string => {
    const type = visitorTypeRef.current;
    const priority = answersRef.current.q4 || '';
    const primary = `${type}-${priority}`;
    const fallback = `${type}-default`;
    return (
      QUALIFIER_FLOW.uspScripts[primary] ||
      QUALIFIER_FLOW.uspScripts[fallback] ||
      "Welcome to Octoways — where AI meets ambition. Let's find the perfect path for you. 🐙"
    );
  }, []);

  /** Build routing key */
  const getRouting = useCallback(() => {
    const type = visitorTypeRef.current;
    const goal = answersRef.current.q2 || '';
    const primary = `${type}-${goal}`;
    const fallback = `${type}-default`;
    return (
      QUALIFIER_FLOW.routing[primary] ||
      QUALIFIER_FLOW.routing[fallback] || {
        action: 'navigate',
        target: '/contact',
        message: "Let's connect!"
      }
    );
  }, []);

  /** Handle selection — all state updates happen once, synchronously */
  const handleAnswer = useCallback((questionId: string, optionId: string) => {
    const newAnswers = { ...answersRef.current, [questionId]: optionId };
    answersRef.current = newAnswers;
    setAnswers(newAnswers);

    let newType = visitorTypeRef.current;
    if (questionId === 'q1') {
      newType = optionId;
      visitorTypeRef.current = optionId;
      setVisitorType(optionId);
    }

    const nextStep = computeNextStep(currentStepRef.current, newType);
    currentStepRef.current = nextStep;
    setCurrentStep(nextStep);
  }, []);

  /** Send lead to webhook + localStorage */
  const sendLead = useCallback(async (data: ContactData) => {
    const lead = {
      timestamp: new Date().toISOString(),
      visitorType: visitorTypeRef.current,
      answers: answersRef.current,
      contact: data
    };

    try {
      const existingStr = localStorage.getItem('octoways_leads') || '[]';
      const existing = JSON.parse(existingStr);
      existing.push(lead);
      localStorage.setItem('octoways_leads', JSON.stringify(existing));
    } catch (e) {
      console.warn('Could not save lead to localStorage:', e);
    }

    const webhookUrl = (import.meta as any).env.VITE_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead)
        });
      } catch (e) {
        console.warn('Webhook post failed (lead still saved locally):', e);
      }
    } else {
      console.log('[OttoQualifier] Lead captured:', lead);
    }
  }, []);

  /** Handle contact form submit */
  const handleContactSubmit = useCallback(async (data: ContactData) => {
    setContactData(data);
    await sendLead(data);
    setIsComplete(true);
  }, [sendLead]);

  /** Reset all state */
  const reset = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setVisitorType('');
    setIsComplete(false);
    setContactData(null);
    visitorTypeRef.current = '';
    currentStepRef.current = 0;
    answersRef.current = {};
  }, []);

  return {
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
  };
}
