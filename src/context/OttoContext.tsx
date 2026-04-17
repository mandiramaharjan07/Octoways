import React, { createContext, useContext, useState } from 'react';

export type OttoMood = 'idle' | 'happy' | 'thinking' | 'excited' | 'confused' | 'talking' | 'greeting';
export type OttoAction = 'none' | 'pointing' | 'waving' | 'drifting';
export type TentacleMode = 'idle' | 'wave' | 'swim' | 'walk' | 'grab';
export type LookDir = 'forward' | 'left' | 'right' | 'up';

interface PageContext {
  route: string;
  title: string;
  metadata: Record<string, any>;
}

interface Settings {
  anthropicKey: string;
  elevenLabsKey: string;
  elevenLabsVoiceId: string;
}

interface OttoContextValue {
  ottoMood: OttoMood;
  setOttoMood: (mood: OttoMood) => void;
  ottoAction: OttoAction;
  setOttoAction: (action: OttoAction) => void;
  tentacleMode: TentacleMode;
  setTentacleMode: (mode: TentacleMode) => void;
  lookDir: LookDir;
  setLookDir: (dir: LookDir) => void;
  lastMessage: string;
  setLastMessage: (msg: string) => void;
  isGuiding: boolean;
  setIsGuiding: (is: boolean) => void;
  pageContext: PageContext;
  setPageContext: (ctx: PageContext) => void;
  voiceEnabled: boolean;
  setVoiceEnabled: (val: boolean) => void;
  voiceInputEnabled: boolean;
  setVoiceInputEnabled: (val: boolean) => void;
  isSpeaking: boolean;
  setIsSpeaking: (is: boolean) => void;
  settings: Settings;
  updateSetting: (key: keyof Settings, value: string) => void;
}

const OttoContext = createContext<OttoContextValue | undefined>(undefined);

export const OttoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ottoMood, setOttoMood] = useState<OttoMood>('idle');
  const [ottoAction, setOttoAction] = useState<OttoAction>('none');
  const [tentacleMode, setTentacleMode] = useState<TentacleMode>('idle');
  const [lookDir, setLookDir] = useState<LookDir>('forward');
  const [lastMessage, setLastMessage] = useState('');
  const [isGuiding, setIsGuiding] = useState(false);
  const [pageContext, setPageContext] = useState<PageContext>({ route: '/', title: 'Home', metadata: {} });

  // Voice Settings & State
  const [voiceEnabled, setVoiceEnabled] = useState<boolean>(() => localStorage.getItem('otto_voice_enabled') === 'true');
  const [voiceInputEnabled, setVoiceInputEnabled] = useState<boolean>(() => localStorage.getItem('otto_voice_input_enabled') === 'true');
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const [settings, setSettings] = useState<Settings>({
    anthropicKey: localStorage.getItem('otto_anthropic_key') || '',
    elevenLabsKey: localStorage.getItem('otto_elevenlabs_key') || '',
    elevenLabsVoiceId: localStorage.getItem('otto_voice_id') || 'EXAVITQu4vr4xnSDxMaL'
  });

  const updateSetting = (key: keyof Settings, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    const storageKey = `otto_${key.replace(/([A-Z])/g, '_$1').toLowerCase()}`;
    localStorage.setItem(storageKey, value);
  };

  const handleSetVoiceEnabled = (val: boolean) => {
    setVoiceEnabled(val);
    localStorage.setItem('otto_voice_enabled', String(val));
  };

  const handleSetVoiceInputEnabled = (val: boolean) => {
    setVoiceInputEnabled(val);
    localStorage.setItem('otto_voice_input_enabled', String(val));
  };

  const value: OttoContextValue = {
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
    setVoiceEnabled: handleSetVoiceEnabled,
    voiceInputEnabled,
    setVoiceInputEnabled: handleSetVoiceInputEnabled,
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
};

export function useOtto() {
  const context = useContext(OttoContext);
  if (!context) {
    throw new Error('useOtto must be used within an OttoProvider');
  }
  return context;
}

export default OttoContext;
