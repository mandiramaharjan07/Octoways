import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Hook to manage User Voice Input (Speech-to-Text)
 */
export const useVoiceInput = (onResult: (text: string) => void, onError?: (err: string) => void) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      onError?.('Voice input not supported in this browser. Please try Chrome or Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onResult?.(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech Recognition Error:', event.error);
      onError?.(event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [onResult, onError]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  }, []);

  return { startListening, stopListening, isListening };
};
