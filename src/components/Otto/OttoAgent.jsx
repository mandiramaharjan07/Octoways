import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Otto from './Otto';
import { useOtto } from '../../context/OttoContext';
import { useVoiceInput } from '../OttoGuide/useVoiceInput';
import { useOttoVoice } from '../OttoGuide/useOttoVoice';

const SYSTEM_PROMPT = "You are Otto, the friendly AI mascot and agent for Octoways — a premier AI-focused custom software development company based in Kathmandu, Nepal. You have the personality of a friendly, slightly playful octopus who is deeply knowledgeable about AI. Keep responses to 2–3 short paragraphs. Always guide users toward booking a consultation at octoways.com/book-an-appointment or exploring the site. Facts: 12+ years experience, 45+ patented AI models, 1,200+ solutions, 30+ countries. Services: Custom LLM Integration, Neural App Dev, Predictive AI, Prompt Engineering, Motion Synthesis, 8K Super-Res. Email: info@octoways.com";

const CLAUDE_MODEL = "claude-3-5-sonnet-20240620"; // Updated to current best model string
const CLAUDE_API_URL = "https://api.anthropic.com/v1/messages";

const QUICK_CHIPS = [
  { label: "What is Octoways?", text: "What does Octoways do?" },
  { label: "Services", text: "What AI services do you offer?" },
  { label: "Book a call", text: "How do I book an appointment?" },
  { label: "Products", text: "Tell me about your AI products" },
  { label: "Why an octopus?", text: "Why is Octoways represented by an octopus?" }
];

export default function OttoAgent({ triggeredState, triggeredMessage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [ottoState, setOttoState] = useState('idle');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  const messagesEndRef = useRef(null);

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
    (transcript) => {
      setInputValue(transcript);
      // Briefly show what was heard before sending
      setTimeout(() => sendMessage(transcript), 400);
    },
    (err) => console.warn('Voice input error:', err)
  );

  // Sync internal apiKey state with context settings on mount
  useEffect(() => {
    if (settings.anthropicKey) setApiKey(settings.anthropicKey);
  }, [settings.anthropicKey]);

  // Handle triggered actions from parent (e.g. scroll)
  useEffect(() => {
    if (triggeredState && triggeredState !== 'idle') {
      setOttoState(triggeredState);
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


  // Initial Greeting Logic
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

  const callClaude = useCallback(async (userMessage, history) => {
    if (!apiKey) {
      // Logic Fallback
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

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);
    setOttoState('thinking');

    const botResponse = await callClaude(text, messages);

    // Notify the physical Otto mascot to react
    window.dispatchEvent(new CustomEvent('otto:agent-query', { detail: botResponse }));
    
    setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    setIsLoading(false);
    setOttoState('talking');

    // Otto speaks the response if enabled
    if (voiceEnabled) {
      speak(botResponse, 
        () => setIsSpeaking(true),
        () => setIsSpeaking(false)
      );
    }

    setTimeout(() => setOttoState('idle'), 3000);
  }, [isLoading, messages, callClaude, voiceEnabled, speak, setIsSpeaking]);

  // Bridge: Listen for queries from the Physical Guide (OttoGuide)
  useEffect(() => {
    const handleGlobalQuery = (e) => {
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
      
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: 20 }}
            animate={{ height: 480, opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: 20 }}
            className="w-[340px] max-w-[calc(100vw-32px)] bg-[#0a1628] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-primary/20"
            style={{ bottom: 'calc(env(safe-area-inset-bottom, 24px) + 24px)' }}
          >
            {/* Header */}
            <div className="bg-[#0d1f3c] p-4 flex items-center justify-between border-b border-primary/10">
              <div className="flex items-center gap-3">
                <Otto size={36} state={ottoState} />
                <div>
                  <h3 className="text-white text-sm font-medium leading-tight">Otto — Octoways Agent</h3>
                  <p className="text-primary text-[10px] uppercase tracking-wider font-bold">● Neural Core Active</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setShowKeyInput(!showKeyInput)} className={`text-gray-400 hover:text-white transition-colors ${showKeyInput ? 'text-primary' : ''}`}>⚙</button>
                <button onClick={() => { setIsOpen(false); stop(); }} className="text-gray-400 hover:text-white transition-colors text-xl">×</button>
              </div>
            </div>

            {/* API Key Input (Collapsible) */}
            <AnimatePresence>
              {showKeyInput && (
                <motion.div 
                  initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                  className="bg-[#07101d] px-4 py-4 border-b border-primary/10 overflow-hidden space-y-4"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Anthropic API Key</label>
                    <div className="flex gap-2">
                      <input 
                        type="password"
                        placeholder="sk-ant-..."
                        value={settings.anthropicKey}
                        onChange={(e) => updateSetting('anthropicKey', e.target.value)}
                        className="flex-1 bg-[#050b14] border border-primary/20 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">ElevenLabs API Key (Optional)</label>
                    <input 
                      type="password"
                      placeholder="el-..."
                      value={settings.elevenLabsKey}
                      onChange={(e) => updateSetting('elevenLabsKey', e.target.value)}
                      className="w-full bg-[#050b14] border border-primary/20 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Voice ID</label>
                    <input 
                      type="text"
                      placeholder="Voice ID"
                      value={settings.voiceId}
                      onChange={(e) => updateSetting('voiceId', e.target.value)}
                      className="w-full bg-[#050b14] border border-primary/20 rounded-lg px-3 py-2 text-[10px] text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    <label className="flex items-center justify-between text-xs text-gray-300 cursor-pointer">
                      <span>🔊 Otto speaks responses</span>
                      <input 
                        type="checkbox" 
                        checked={voiceEnabled} 
                        onChange={(e) => setVoiceEnabled(e.target.checked)}
                        className="w-4 h-4 rounded border-primary/30 bg-[#050b14] text-primary focus:ring-primary/50"
                      />
                    </label>
                    <label className="flex items-center justify-between text-xs text-gray-300 cursor-pointer">
                      <span>🎤 Voice input (Chrome/Edge)</span>
                      <input 
                        type="checkbox" 
                        checked={voiceInputEnabled} 
                        onChange={(e) => setVoiceInputEnabled(e.target.checked)}
                        className="w-4 h-4 rounded border-primary/30 bg-[#050b14] text-primary focus:ring-primary/50"
                      />
                    </label>
                  </div>
                  <p className="text-[9px] text-gray-500 italic">*Settings are saved in your browser's local storage.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#1a5a96] text-white rounded-[16px_16px_4px_16px]' 
                      : 'bg-[#132a4a] text-[#d4e9ff] border border-primary/15 rounded-[16px_16px_16px_4px]'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#132a4a] border border-primary/15 p-3 rounded-[16px_16px_16px_4px] flex gap-1">
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 bg-primary rounded-full"></motion.span>
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary rounded-full"></motion.span>
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary rounded-full"></motion.span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Chips */}
            {!isLoading && messages.length > 0 && (
              <div className="px-4 py-2 flex flex-wrap gap-2">
                {QUICK_CHIPS.map((chip, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(chip.text)}
                    className="text-[10px] text-primary border border-primary/40 px-3 py-1 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Row */}
            <div className="p-4 bg-[#0d1f3c] border-t border-primary/10">
              <form 
                className="flex gap-2"
                onSubmit={(e) => { e.preventDefault(); sendMessage(inputValue); }}
              >
                <input
                  type="text"
                  placeholder="Ask Otto about Octoways..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading || isListening}
                  className="flex-1 bg-[#0a1628] border border-primary/25 rounded-full px-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                />
                
                {voiceInputEnabled && (
                  <button
                    type="button"
                    onClick={isListening ? stopListening : startListening}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isListening 
                        ? 'bg-primary text-on-primary-fixed animate-voice-pulse' 
                        : 'bg-[#132a4a] text-primary hover:bg-[#1a3a6a]'
                    }`}
                    title="Tap to speak"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isListening ? 'stop_circle' : 'mic'}
                    </span>
                  </button>
                )}

                <button 
                  type="submit"
                  disabled={isLoading || !inputValue.trim() || isListening}
                  className="w-9 h-9 bg-primary text-on-primary-fixed rounded-full flex items-center justify-center hover:shadow-[0_0_15px_#3d92cc] transition-all disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Otto Trigger Button */}
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-[72px] h-[72px] md:w-[72px] md:h-[72px] w-[56px] h-[56px] bg-[#0d1b2a] border-2 border-primary rounded-full relative flex items-center justify-center hover:shadow-[0_0_20px_rgba(61,146,204,0.5)] transition-all z-10"
      >
        <Otto size={60} state={isOpen ? 'talking' : ottoState} />
        {hasNotification && !isOpen && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_#3d92cc]"></span>
        )}
      </motion.button>
    </div>
  );
}
