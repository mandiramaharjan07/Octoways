import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useTransform } from 'framer-motion';
import OttoSVG from '../Otto/OttoSVG';
import OttoSpeechBubble from '../Otto/OttoSpeechBubble';
import useOttoPath from '../../hooks/useOttoPath';
import { useOtto } from '../../context/OttoContext';
import useOttoGlobalContext from '../../hooks/useOttoGlobalContext';
import useOttoSections from './useOttoSections';
import OttoSectionHighlight from './OttoSectionHighlight';
import { useOttoVoice } from './useOttoVoice';
import OttoVoiceToggle from './OttoVoiceToggle';
import { animate } from 'framer-motion';

export default function OttoGuide() {
  const { 
    activeWaypoint, 
    x, y, opacity, 
    facingLeft, 
    triggerNext, 
    restart,
    setIsGuiding,
  } = useOttoPath();
  const { 
    setOttoMood, 
    setLastMessage, 
    ottoAction, 
    setOttoAction,
    tentacleMode,
    setTentacleMode,
    lookDir,
    setLookDir,
    voiceEnabled,
    setVoiceEnabled,
    isSpeaking,
    setIsSpeaking,
    settings
  } = useOtto();
  const { currentPath, context } = useOttoGlobalContext();
  const { activeScript } = useOttoSections();
  const { speak, stop } = useOttoVoice(voiceEnabled, settings);
  
  const [isDismissed, setIsDismissed] = useState(() => !!sessionStorage.getItem('otto_dismissed'));
  const [showMenu, setShowMenu] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseInteraction, setMouseInteraction] = useState('none'); 
  const [isDrifting, setIsDrifting] = useState(false);
  
  const [currentX, setCurrentX] = useState(x.get());
  const [currentY, setCurrentY] = useState(y.get());
  const [isFacingLeft, setIsFacingLeft] = useState(facingLeft);

  useMotionValueEvent(x, "change", (latest) => {
    if (latest < currentX) setIsFacingLeft(true);
    else if (latest > currentX) setIsFacingLeft(false);
    setCurrentX(latest);
  });
  useMotionValueEvent(y, "change", (latest) => setCurrentY(latest));

  // Sync with hook's initial value
  useEffect(() => {
    setIsFacingLeft(facingLeft);
  }, [facingLeft]);

  // Section Tracking Logic
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [highlightTarget, setHighlightTarget] = useState(null);

  // Responsive values
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const config = {
    width: isMobile ? 70 : 90,
    height: isMobile ? 98 : 126,
    bottom: isMobile ? 16 : 24,
    right: isMobile ? 16 : 24
  };

  // Convert absolute coordinates to relative offsets from bottom-right anchor
  const relX = useTransform(x, (val) => val - (window.innerWidth - config.width - config.right));
  const relY = useTransform(y, (val) => val - (window.innerHeight - config.height - config.bottom));

  // Logic for Active Section
  useEffect(() => {
    if (!activeScript) return;

    // Update Otto's state and tentacle mode
    if (activeScript.ottoState) setOttoMood(activeScript.ottoState);
    if (activeScript.tentacleMode) setTentacleMode(activeScript.tentacleMode);
    if (activeScript.lookDir) setLookDir(activeScript.lookDir);

    // Handle single vs cycling messages
    if (activeScript.messages && activeScript.cycleMessages) {
      setMessageIndex(0);
      setCurrentMessage(activeScript.messages[0]);
      setLastMessage(activeScript.messages[0]);
      
      if (activeScript.highlightTargets) {
        setHighlightTarget(activeScript.highlightTargets[0]);
      }

      const interval = setInterval(() => {
        setMessageIndex(prev => {
          const next = (prev + 1) % activeScript.messages.length;
          setCurrentMessage(activeScript.messages[next]);
          setLastMessage(activeScript.messages[next]);
          if (activeScript.highlightTargets) {
            setHighlightTarget(activeScript.highlightTargets[next] || null);
          }
          return next;
        });
      }, activeScript.cycleInterval || 2500);

      return () => clearInterval(interval);
    } else {
      const msg = activeScript.message || (activeScript.messages ? activeScript.messages[0] : '');
      setCurrentMessage(msg);
      setLastMessage(msg);
      setHighlightTarget(null);
    }
  }, [activeScript, setOttoMood, setTentacleMode, setLookDir, setLastMessage]);

  // Voice Narration Logic
  const lastSpokenRef = useRef('');
  useEffect(() => {
    if (currentMessage && voiceEnabled && currentMessage !== lastSpokenRef.current) {
      lastSpokenRef.current = currentMessage;
      speak(currentMessage, 
        () => {
          setOttoMood('talking');
          setIsSpeaking(true);
        },
        () => {
          setOttoMood('idle');
          setIsSpeaking(false);
        }
      );
    }
    // Cleanup: stop speaking when component unmounts or message changes
    return () => stop();
  }, [currentMessage, voiceEnabled, speak, stop, setOttoMood, setIsSpeaking]);

  // Movement Logic
  useEffect(() => {
    if (!activeScript?.position) return;
    const { side, offsetY } = activeScript.position;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let targetX, targetY;
    if (side === 'right') { targetX = vw - (config.width + config.right + 20); targetY = vh * offsetY; }
    else if (side === 'left') { targetX = 40; targetY = vh * offsetY; }
    else if (side === 'bottom') { targetX = vw * 0.5 - config.width / 2; targetY = vh * offsetY; }
    else if (side === 'center') { targetX = vw * 0.5 - config.width / 2; targetY = vh * offsetY; }
    else { targetX = vw - (config.width + config.right + 20); targetY = vh * 0.8; } // default

    animate(x, targetX, { duration: 0.7, ease: 'easeOut' });
    animate(y, targetY, { duration: 0.7, ease: 'easeOut' });
  }, [activeScript, x, y, config.width, config.right]);

  // Walk Logic (autonomous back-and-forth movement)
  useEffect(() => {
    if (!activeScript?.walkAcrossSection) return;
    const startX = 40;
    const endX = window.innerWidth - (config.width + config.right + 20);
    
    const controls = animate(x, [startX, endX], {
      duration: 4,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    });
    return () => controls.stop();
  }, [activeScript, x, config.width, config.right]);

  // Handle mouse and global restart events
  useEffect(() => {
    let lastMouseUpdate = 0;
    const handleMouse = (e) => {
      const now = Date.now();
      if (now - lastMouseUpdate < 100) return; // only update every 100ms
      lastMouseUpdate = now;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleRestart = () => {
      setIsDismissed(false);
      sessionStorage.removeItem('otto_dismissed');
      restart();
    };
    const handleAgentQuery = (e) => {
      setOttoMood('excited');
      setOttoAction('pointing');
      setTimeout(() => {
        setOttoMood('idle');
        setOttoAction('none');
      }, 3000);
    };

    window.addEventListener('mousemove', handleMouse, { passive: true });
    window.addEventListener('otto:restart', handleRestart);
    window.addEventListener('otto:agent-query', handleAgentQuery);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('otto:restart', handleRestart);
      window.removeEventListener('otto:agent-query', handleAgentQuery);
    };
  }, [restart, setOttoMood, setOttoAction]);

  // Selection Support
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection.toString().length > 10) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        // Swim toward selection
        x.set(rect.left + rect.width / 2);
        y.set(rect.top - 50);
        setLastMessage("Need me to explain this in simpler terms?");
        setOttoMood('thinking');
      }
    };

    document.addEventListener('selectionchange', handleSelection);
    return () => document.removeEventListener('selectionchange', handleSelection);
  }, [x, y, setLastMessage, setOttoMood]);

  // Lazy Drift Physics
  useEffect(() => {
    let driftTimer;
    const startDrift = () => {
      if (activeWaypoint?.id === 'idle_follow') {
        setIsDrifting(true);
        const randX = 50 + Math.random() * (window.innerWidth - 150);
        const randY = 50 + Math.random() * (window.innerHeight - 150);
        x.set(randX);
        y.set(randY);
      }
    };

    const resetDriftTimer = () => {
      setIsDrifting(false);
      clearTimeout(driftTimer);
      driftTimer = setTimeout(startDrift, 10000);
    };

    window.addEventListener('mousemove', resetDriftTimer);
    driftTimer = setTimeout(startDrift, 10000);
    
    return () => {
      window.removeEventListener('mousemove', resetDriftTimer);
      clearTimeout(driftTimer);
    };
  }, [activeWaypoint, x, y]);

  // Proximity Logic
  useEffect(() => {
    if (activeWaypoint?.id !== 'idle_follow') return;

    const dx = mousePos.x - x.get();
    const dy = mousePos.y - y.get();
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 60) {
      setMouseInteraction('warn');
      const randomX = Math.random() < 0.5 ? 50 : window.innerWidth - 130;
      const randomY = Math.random() < 0.5 ? 90 : window.innerHeight - 130;
      x.set(randomX);
      y.set(randomY);
    } else if (dist < 150) {
      setMouseInteraction('wave');
    } else {
      setMouseInteraction('none');
    }
  }, [mousePos, activeWaypoint, x, y]);

  // Sync Global Context
  useEffect(() => {
    if (activeWaypoint?.message) {
      setLastMessage(activeWaypoint.message);
    }
    setOttoMood(activeWaypoint?.tentacleMode || 'idle');
  }, [activeWaypoint, setLastMessage, setOttoMood]);

  const dismiss = (e) => {
    e.stopPropagation();
    setIsDismissed(true);
    sessionStorage.setItem('otto_dismissed', 'true');
    setIsGuiding(false);
  };

  if (isDismissed) return null;

  const getActions = () => {
    if (activeWaypoint?.id === 'hero_swim_in') {
      return [{ label: "Show me around", onClick: triggerNext }];
    }
    if (activeWaypoint?.hasButton) {
      return [{ label: "Book a call →", onClick: () => window.open('/book-an-appointment', '_blank') }];
    }
    return [];
  };

  const size = window.innerWidth < 768 ? 90 : 140;

  return (
    <>
      <motion.div
        className="fixed z-[9998] pointer-events-none group"
        style={{ 
          x: relX, 
          y: relY, 
          opacity, 
          bottom: config.bottom, 
          right: config.right,
          width: config.width,
          height: config.height,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <div className="relative pointer-events-auto cursor-pointer w-full h-full" onClick={() => setShowMenu(!showMenu)}>
          <OttoSVG 
            mode={mouseInteraction === 'wave' ? 'wave' : tentacleMode}
            lookDir={mouseInteraction === 'wave' ? 'forward' : lookDir}
            facingLeft={isFacingLeft}
            size={config.width}
            mousePos={mousePos}
          />

          <OttoSpeechBubble 
            message={mouseInteraction === 'wave' ? "Hi there! 👋" : currentMessage}
            isVisible={(!!currentMessage || mouseInteraction === 'wave') && !isDismissed}
            actions={getActions()}
            showInput={!activeScript || activeScript.sectionId === 'section-hero'}
            onQuery={(q) => {
              window.dispatchEvent(new CustomEvent('otto:agent-query', { detail: q }));
            }}
            ottoX={currentX}
            ottoY={currentY}
          />

          <OttoSectionHighlight 
            targetSelector={highlightTarget} 
            active={!!highlightTarget && !isDismissed} 
          />

          <button 
            onClick={dismiss}
            className="absolute top-0 right-0 w-5 h-5 bg-black/50 hover:bg-black/80 rounded-full text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center border border-white/10"
          >
            ×
          </button>

          <AnimatePresence>
            {showMenu && (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 10 }}
                className="absolute bottom-[-130px] left-1/2 -translate-x-1/2 flex flex-col gap-2 items-center"
              >
                <OttoVoiceToggle 
                  enabled={voiceEnabled} 
                  onToggle={setVoiceEnabled} 
                  isSpeaking={isSpeaking}
                />
                <button 
                  onClick={(e) => { e.stopPropagation(); restart(); setShowMenu(false); }}
                  className="bg-[#1a5a96] hover:bg-[#2572b8] text-white px-4 py-1.5 rounded-full text-[11px] whitespace-nowrap shadow-lg border border-white/10"
                >
                  Guide me around ↗
                </button>
                <button 
                   onClick={(e) => { e.stopPropagation(); window.open('/book-an-appointment', '_blank'); }}
                   className="bg-primary hover:bg-primary-dim text-white px-4 py-1.5 rounded-full text-[11px] whitespace-nowrap shadow-lg border border-white/10"
                >
                  Book a call →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
