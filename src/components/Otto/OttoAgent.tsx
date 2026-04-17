import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Otto from './Otto';
import { useOtto, OttoMood } from '../../context/OttoContext';
import { useVoiceInput } from '../OttoGuide/useVoiceInput';
import { useOttoVoice } from '../OttoGuide/useOttoVoice';

const SYSTEM_PROMPT = "You are Otto, the friendly AI mascot and agent for Octoways — a premier AI-focused custom software development company based in Kathmandu, Nepal. You have the personality of a friendly, slightly playful octopus who is deeply knowledgeable about AI. Keep responses to 2–3 short paragraphs. Always guide users toward booking a consultation at octoways.com/book-an-appointment or exploring the site. Facts: 12+ years experience, 45+ patented AI models, 1,200+ solutions, 30+ countries. Services: Custom LLM Integration, Neural App Dev, Predictive AI, Prompt Engineering, Motion Synthesis, 8K Super-Res. Email: info@octoways.com";

const CLAUDE_MODEL = "claude-3-5-sonnet-20240620"; 
const CLAUDE_API_URL = "https://api.anthropic.com/v1/messages";

const QUICK_CHIPS = [
  { label: "What is Octoways?", text: "What does Octoways do?" },
  { label: "Services", text: "What AI services do you offer?" },
  { label: "Book a call", text: "How do I book an appointment?" },
  { label: "Products", text: "Tell me about your AI products" },
  { label: "Why an octopus?", text: "Why is Octoways represented by an octopus?" }
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface OttoAgentProps {
  triggeredState?: string;
  triggeredMessage?: string;
}

const OttoAgent: React.FC<OttoAgentProps> = ({ triggeredState, triggeredMessage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [ottoState, setOttoState] = useState<OttoMood>('idle');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { 
    voiceEnabled, 
    setVoiceEnabled, 
    voiceInputEnabled, 
    setVoiceInputEnabled,
    settings,
    updateSetting,
    setIsSpeaking
  } = useOtto();

  const { speak, stop } = useOttoVoice(voiceEnabled, settings);
  const { startListening, stopListening, isListening } = useVoiceInput(
    (transcript: string) => {
      setInputValue(transcript);
      setTimeout(() => sendMessage(transcript), 400);
    },
    (err: string) => console.warn('Voice input error:', err)
  );

  useEffect(() => {
    if (settings.anthropicKey) setApiKey(settings.anthropicKey);
  }, [settings.anthropicKey]);

  useEffect(() => {
    if (triggeredState && (triggeredState as OttoMood) !== 'idle') {
      setOttoState(triggeredState as OttoMood);
      if (triggeredMessage) {
        setHasNotification(true);
      }
      const timer = setTimeout(() => {
        setOttoState('idle');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [triggeredState, triggeredMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOttoState('greeting');
      setHasNotification(true);
      setTimeout(() => setOttoState('idle'), 4000);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setHasNotification(false);
    if (messages.length === 0) {
      setMessages([{ role: 'assistant', content: "Hi! I'm Otto. I can help you explore Octoways and our AI ecosystem. What's on your mind?" }]);
    }
  };

  const callClaude = useCallback(async (userMessage: string, history: Message[]): Promise<string> => {
    if (!apiKey) {
      const msg = userMessage.toLowerCase();
      if (msg.includes('service')) return "We offer Custom LLM Integration, Neural App Dev, Predictive AI, and more. Check octoways.com/services for details!";
      if (msg.includes('product')) return "Our AI products include enterprise automation tools and high-fidelity generative models. See octoways.com/products for more.";
      if (msg.includes('book') || msg.includes('appointment')) return "Ready to scale? Book a call at octoways.com/book-an-appointment.";
      if (msg.includes('octopus')) return "The octopus represents our ability to handle multiple complex digital workflows simultaneously—like eight arms working in perfect harmony!";
      return "I'm currently in 'offline' mode without an API key, but I'd love to chat more if you provide one in the settings (⚙️)! Otherwise, you can email us at info@octoways.com.";
    }

    try {
      const response = await fetch(CLAUDE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: CLAUDE_MODEL,
          max_tokens: 400,
          system: SYSTEM_PROMPT,
          messages: history.map(m => ({ role: m.role, content: m.content })).concat([{ role: 'user', content: userMessage }])
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      return data.content[0].text;
    } catch (error) {
      console.error("Claude API Error:", error);
      return "Oops, one of my tentacles got tangled! Try again in a moment.";
    }
  }, [apiKey]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);
    setOttoState('thinking');

    const botResponse = await callClaude(text, messages);

    window.dispatchEvent(new CustomEvent('otto:agent-query', { detail: botResponse }));
    
    setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    setIsLoading(false);
    setOttoState('talking');

    if (voiceEnabled) {
      speak(botResponse, 
        () => setIsSpeaking(true),
        () => setIsSpeaking(false)
      );
    }

    setTimeout(() => setOttoState('idle'), 3000);
  }, [isLoading, messages, callClaude, voiceEnabled, speak, setIsSpeaking]);

  useEffect(() => {
    const handleGlobalQuery = (e: any) => {
      const queryText = e.detail;
      if (queryText) {
        if (!isOpen) setIsOpen(true);
        sendMessage(queryText);
      }
    };

    window.addEventListener('otto:query', handleGlobalQuery);
    return () => window.removeEventListener('otto:query', handleGlobalQuery);
  }, [isOpen, sendMessage]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 font-body">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[320px] md:w-[380px] h-[500px] bg-surface-card border border-border-accent rounded-3xl shadow-2xl overflow-hidden flex flex-col z-50 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-surface-raised border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center border border-primary/20">
                  <Otto size={32} state={ottoState} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary">Otto</h3>
                  <p className="text-[10px] text-primary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                    Online Guide
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowKeyInput(!showKeyInput)}
                  className="p-2 text-text-secondary hover:text-primary transition-colors"
                  title="Settings"
                >
                  <span className="material-symbols-outlined text-[18px]">settings</span>
                </button>
                <button 
                  onClick={() => { setIsOpen(false); stop(); }}
                  className="p-2 text-text-secondary hover:text-error transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            </div>

            <AnimatePresence>
              {showKeyInput && (
                <motion.div 
                  initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                  className="bg-surface-raised px-4 py-4 border-b border-border overflow-hidden space-y-4"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">Anthropic API Key</label>
                    <input 
                      type="password"
                      placeholder="sk-ant-..."
                      value={settings.anthropicKey}
                      onChange={(e) => updateSetting('anthropicKey', e.target.value)}
                      className="w-full bg-surface border border-border-accent rounded-lg px-3 py-2 text-xs text-text-primary focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">ElevenLabs API Key</label>
                    <input 
                      type="password"
                      placeholder="el-..."
                      value={settings.elevenLabsKey}
                      onChange={(e) => updateSetting('elevenLabsKey', e.target.value)}
                      className="w-full bg-surface border border-border-accent rounded-lg px-3 py-2 text-xs text-text-primary focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">Voice ID</label>
                    <input 
                      type="text"
                      placeholder="Voice ID"
                      value={settings.elevenLabsVoiceId}
                      onChange={(e) => updateSetting('elevenLabsVoiceId', e.target.value)}
                      className="w-full bg-surface border border-border-accent rounded-lg px-3 py-2 text-[10px] text-text-primary focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-[16px_16px_4px_16px]' 
                      : 'bg-[var(--otto-bubble-bg)] text-text-primary border border-border-accent rounded-[16px_16px_16px_4px] shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-surface-raised border-t border-border">
              <form 
                className="flex gap-2"
                onSubmit={(e: React.FormEvent) => { e.preventDefault(); sendMessage(inputValue); }}
              >
                <input
                  type="text"
                  placeholder="Ask Otto..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 bg-surface-container-low border border-border-accent rounded-full px-4 py-2 text-xs text-text-primary focus:outline-none focus:border-primary transition-all"
                />
                <button type="submit" disabled={isLoading} className="w-9 h-9 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-[72px] h-[72px] bg-surface border-2 border-primary rounded-full relative flex items-center justify-center z-10 shadow-lg"
      >
        <Otto size={60} state={isOpen ? 'talking' : ottoState} />
        {hasNotification && !isOpen && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full ring-2 ring-surface"></span>
        )}
      </motion.button>
    </div>
  );
};

export default OttoAgent;
