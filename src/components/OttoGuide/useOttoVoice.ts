import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Custom hook to handle Otto's voice (Text-to-Speech)
 * Supports ElevenLabs API and Web Speech API as fallback
 */
export const useOttoVoice = (voiceEnabled: boolean, settings: { elevenLabsKey: string, elevenLabsVoiceId: string }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  /**
   * Stop any current speech
   */
  const stop = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    setIsSpeaking(false);
  }, []);

  /**
   * Speak via ElevenLabs
   */
  const speakElevenLabs = useCallback(async (text: string, onStart?: () => void, onEnd?: () => void) => {
    if (!settings.elevenLabsKey || !settings.elevenLabsVoiceId) {
      return;
    }

    try {
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${settings.elevenLabsVoiceId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': settings.elevenLabsKey,
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      });

      if (!response.ok) throw new Error('ElevenLabs API error');

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.onplay = () => {
          setIsSpeaking(true);
          onStart?.();
        };
        audioRef.current.onended = () => {
          setIsSpeaking(false);
          onEnd?.();
        };
        audioRef.current.play();
      }
    } catch (error) {
      console.error('ElevenLabs TTS failed, falling back to Web Speech:', error);
      speakWebSpeech(text, onStart, onEnd);
    }
  }, [settings]);

  /**
   * Fallback: Web Speech API
   */
  const speakWebSpeech = useCallback((text: string, onStart?: () => void, onEnd?: () => void) => {
    if (!window.speechSynthesis) return;

    stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    utterance.onstart = () => {
      setIsSpeaking(true);
      onStart?.();
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      onEnd?.();
    };

    utterance.onerror = (event) => {
      console.error('Web Speech Error:', event);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [stop]);

  /**
   * Main speak function
   */
  const speak = useCallback((text: string, onStart?: () => void, onEnd?: () => void) => {
    if (!voiceEnabled) return;
    
    if (settings.elevenLabsKey) {
      speakElevenLabs(text, onStart, onEnd);
    } else {
      speakWebSpeech(text, onStart, onEnd);
    }
  }, [voiceEnabled, settings, speakElevenLabs, speakWebSpeech]);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return { speak, stop, isSpeaking };
};
