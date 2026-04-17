import React, { useState, useEffect } from 'react';
import OttoSVG from './OttoSVG';
import OttoSpeechBubble from './OttoSpeechBubble';

interface OttoProps {
  state?: any;
  message?: string;
  size?: number;
}

const Otto: React.FC<OttoProps> = ({ state = 'idle', message = '', size = 120 }) => {
  const [showBubble, setShowBubble] = useState(false);
  const [activeMessage, setActiveMessage] = useState('');

  useEffect(() => {
    if (message) {
      setActiveMessage(message);
      setShowBubble(true);
      const timer = setTimeout(() => setShowBubble(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (state === 'greeting') {
      setActiveMessage("Hi! I'm Otto. How can I help?");
      const bubbleTimer = setTimeout(() => setShowBubble(true), 800);
      return () => clearTimeout(bubbleTimer);
    }
  }, [state]);

  // Map old 'state' to new modular 'mode' and 'lookDir'
  const getMode = (s: string): string => {
    if (s === 'talking') return 'idle'; 
    if (s === 'thinking') return 'idle';
    if (s === 'excited') return 'wave';
    if (s === 'confused') return 'idle';
    return s; // idle, greeting, etc.
  };

  const getLookDir = (s: string): string => {
    if (s === 'thinking') return 'up';
    if (s === 'confused') return 'up'; // Looking around
    return 'forward';
  };

  return (
    <div className="relative flex items-center justify-center">
      <OttoSpeechBubble 
        message={activeMessage} 
        isVisible={showBubble} 
      />
      
      <OttoSVG 
        mode={getMode(state)} 
        lookDir={getLookDir(state)}
        size={size} 
      />
    </div>
  );
};

export default Otto;
