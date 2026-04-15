import React, { createContext, useContext, useState } from 'react';

const OttoContext = createContext();

export function OttoProvider({ children }) {
  const [ottoMood, setOttoMood] = useState('idle'); // idle, happy, thinking, excited, confused
  const [ottoAction, setOttoAction] = useState('none'); // pointing, waving, drifting
  const [tentacleMode, setTentacleMode] = useState('idle'); // idle, wave, swim, walk, grab
  const [lookDir, setLookDir] = useState('forward'); // forward, left, right, up
  const [lastMessage, setLastMessage] = useState('');
  const [isGuiding, setIsGuiding] = useState(false);
  const [pageContext, setPageContext] = useState({ route: '/', title: 'Home', metadata: {} });

  // Voice Settings & State
  const [voiceEnabled, setVoiceEnabled] = useState(() => localStorage.getItem('otto_voice_enabled') === 'true');
  const [voiceInputEnabled, setVoiceInputEnabled] = useState(() => localStorage.getItem('otto_voice_input_enabled') === 'true');
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const [settings, setSettings] = useState({
    anthropicKey: localStorage.getItem('otto_anthropic_key') || '',
    elevenLabsKey: localStorage.getItem('otto_elevenlabs_key') || '',
    voiceId: localStorage.getItem('otto_voice_id') || 'EXAVITQu4vr4xnSDxMaL'
  });

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    localStorage.setItem(`otto_${key.replace(/([A-Z])/g, '_$1').toLowerCase()}`, value);
  };

  const value = {
    ottoMood,
    setOttoMood,
    ottoAction,
    setOttoAction,
    tentacleMode,
    setTentacleMode,
    lookDir,
    setLookDir,
    lastMessage,
    setLastMessage,
    isGuiding,
    setIsGuiding,
    pageContext,
    setPageContext,
    voiceEnabled,
    setVoiceEnabled: (val) => {
      setVoiceEnabled(val);
      localStorage.setItem('otto_voice_enabled', val);
    },
    voiceInputEnabled,
    setVoiceInputEnabled: (val) => {
      setVoiceInputEnabled(val);
      localStorage.setItem('otto_voice_input_enabled', val);
    },
    isSpeaking,
    setIsSpeaking,
    settings,
    updateSetting
  };

  return (
    <OttoContext.Provider value={value}>
      {children}
    </OttoContext.Provider>
  );
}

export function useOtto() {
  const context = useContext(OttoContext);
  if (!context) {
    throw new Error('useOtto must be used within an OttoProvider');
  }
  return context;
}

export default OttoContext;
