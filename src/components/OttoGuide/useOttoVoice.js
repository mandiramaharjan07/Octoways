import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Hook to manage Otto's voice (Text-to-Speech)
 */
export const useOttoVoice = (voiceEnabled, settings) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef(null);

  const stop = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  const speakWebSpeech = useCallback((text, onStart, onEnd) => {
    if (!voiceEnabled || !window.speechSynthesis) return;
    
    stop();

    // Limit to first 2 sentences
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const limitedText = sentences.slice(0, 2).join(' ');

    const utterance = new SpeechSynthesisUtterance(limitedText);

    // Find the best voice: prefer a friendly female English voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.includes('Samantha') ||
      v.name.includes('Karen') ||
      v.name.includes('Google UK English Female') ||
      v.name.includes('Microsoft Zira')
    ) || voices.find(v => v.lang.startsWith('en')) || voices[0];

    utterance.voice = preferred;
    utterance.rate = 0.92;
    utterance.pitch = 1.1;
    utterance.volume = 0.85;

    utterance.onstart = () => { setIsSpeaking(true); onStart?.(); };
    utterance.onend = () => { setIsSpeaking(false); onEnd?.(); };
    utterance.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [voiceEnabled, stop]);

  const speakElevenLabs = useCallback(async (text, onStart, onEnd) => {
    const { elevenLabsKey, voiceId } = settings;
    if (!voiceEnabled || !elevenLabsKey) {
      // Fallback to Web Speech if no key
      return speakWebSpeech(text, onStart, onEnd);
    }

    stop();
    setIsSpeaking(true);
    onStart?.();

    try {
      // Limit to first 2 sentences for cost/speed
      const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
      const limitedText = sentences.slice(0, 2).join(' ');

      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'xi-api-key': elevenLabsKey,
          },
          body: JSON.stringify({
            text: limitedText,
            model_id: 'eleven_turbo_v2',
            voice_settings: { stability: 0.5, similarity_boost: 0.8, style: 0.2, use_speaker_boost: true }
          })
        }
      );
      
      if (!response.ok) throw new Error('ElevenLabs API error');

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      
      audio.onended = () => { 
        setIsSpeaking(false); 
        onEnd?.();
        URL.revokeObjectURL(url); 
      };
      
      audio.onerror = () => {
        setIsSpeaking(false);
        speakWebSpeech(text, onStart, onEnd); // Fallback on playback error
      };

      audio.play();
    } catch (e) {
      console.warn('ElevenLabs failed, falling back to Web Speech', e);
      speakWebSpeech(text, onStart, onEnd);
    }
  }, [voiceEnabled, settings, stop, speakWebSpeech]);

  const speak = useCallback((text, onStart, onEnd) => {
    if (settings.elevenLabsKey) {
      return speakElevenLabs(text, onStart, onEnd);
    }
    return speakWebSpeech(text, onStart, onEnd);
  }, [settings.elevenLabsKey, speakElevenLabs, speakWebSpeech]);

  // Load voices (Chrome requires this)
  useEffect(() => {
    const handleVoices = () => {
      window.speechSynthesis.getVoices();
    };
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = handleVoices;
      handleVoices();
    }
    return () => stop();
  }, [stop]);

  return { speak, stop, isSpeaking };
};
