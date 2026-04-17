import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useTransform, animate } from 'framer-motion';
import OttoSVG from '../Otto/OttoSVG';
import OttoSpeechBubble from '../Otto/OttoSpeechBubble';
import useOttoPath from '../../hooks/useOttoPath';
import { useOtto } from '../../context/OttoContext';
import useOttoGlobalContext from '../../hooks/useOttoGlobalContext';
import useOttoSections from './useOttoSections';
import OttoSectionHighlight from './OttoSectionHighlight';
import { useOttoVoice } from './useOttoVoice';
import OttoVoiceToggle from './OttoVoiceToggle';

interface MenuItem {
  label: string;
  onClick: () => void;
}

const OttoGuide: React.FC = () => {
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
  const { context } = useOttoGlobalContext();
  const { activeScript } = useOttoSections();
  const { speak, stop } = useOttoVoice(voiceEnabled, settings);
  
  const [isDismissed, setIsDismissed] = useState(() => !!sessionStorage.getItem('otto_dismissed'));
  const [showMenu, setShowMenu] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseInteraction, setMouseInteraction] = useState('none'); 
  
  const [currentX, setCurrentX] = useState(x.get());
  const [currentY, setCurrentY] = useState(y.get());
  const [isFacingLeft, setIsFacingLeft] = useState(facingLeft);

  useMotionValueEvent(x, "change", (latest: number) => {
    if (latest < currentX) setIsFacingLeft(true);
    else if (latest > currentX) setIsFacingLeft(false);
    setCurrentX(latest);
  });
  useMotionValueEvent(y, "change", (latest: number) => setCurrentY(latest));

  useEffect(() => {
    setIsFacingLeft(facingLeft);
  }, [facingLeft]);

  const [currentMessage, setCurrentMessage] = useState('');
  const [highlightTarget, setHighlightTarget] = useState<string | null>(null);

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const config = {
    width: isMobile ? 70 : 90,
    height: isMobile ? 98 : 126,
    bottom: isMobile ? 16 : 24,
    right: isMobile ? 16 : 24
  };

  const relX = useTransform(x, (val: number) => val - (window.innerWidth - config.width - config.right));
  const relY = useTransform(y, (val: number) => val - (window.innerHeight - config.height - config.bottom));

  useEffect(() => {
    if (!activeScript) return;

    if (activeScript.ottoState) setOttoMood(activeScript.ottoState as any);
    if (activeScript.tentacleMode) setTentacleMode(activeScript.tentacleMode as any);
    if (activeScript.lookDir) setLookDir(activeScript.lookDir as any);

    if (activeScript.messages && activeScript.cycleMessages) {
      const msgs = activeScript.messages;
      const targets = activeScript.highlightTargets || [];
      
      setCurrentMessage(msgs[0]);
      setLastMessage(msgs[0]);
      if (targets[0]) setHighlightTarget(targets[0]);

      let idx = 0;
      const interval = setInterval(() => {
        idx = (idx + 1) % msgs.length;
        setCurrentMessage(msgs[idx]);
        setLastMessage(msgs[idx]);
        setHighlightTarget(targets[idx] || null);
      }, activeScript.cycleInterval || 2500);

      return () => clearInterval(interval);
    } else {
      const msg = activeScript.message || (activeScript.messages ? activeScript.messages[0] : '');
      setCurrentMessage(msg);
      setLastMessage(msg);
      setHighlightTarget(null);
    }
  }, [activeScript, setOttoMood, setTentacleMode, setLookDir, setLastMessage]);

  const lastSpokenRef = useRef('');
  useEffect(() => {
    if (currentMessage && voiceEnabled && currentMessage !== lastSpokenRef.current) {
      lastSpokenRef.current = currentMessage;
      speak(currentMessage, 
        () => {
          setOttoMood('talking' as any);
          setIsSpeaking(true);
        },
        () => {
          setOttoMood('idle' as any);
          setIsSpeaking(false);
        }
      );
    }
    return () => stop();
  }, [currentMessage, voiceEnabled, speak, stop, setOttoMood, setIsSpeaking]);

  useEffect(() => {
    if (!activeScript?.position) return;
    const { side, offsetY } = activeScript.position;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let targetX: number, targetY: number;
    if (side === 'right') { targetX = vw - (config.width + config.right + 20); targetY = vh * offsetY; }
    else if (side === 'left') { targetX = 40; targetY = vh * offsetY; }
    else if (side === 'bottom') { targetX = vw * 0.5 - config.width / 2; targetY = vh * offsetY; }
    else if (side === 'center') { targetX = vw * 0.5 - config.width / 2; targetY = vh * offsetY; }
    else { targetX = vw - (config.width + config.right + 20); targetY = vh * 0.8; }

    animate(x, targetX, { duration: 0.7, ease: 'easeOut' });
    animate(y, targetY, { duration: 0.7, ease: 'easeOut' });
  }, [activeScript, x, y, config.width, config.right]);

  useEffect(() => {
    let lastMouseUpdate = 0;
    const handleMouse = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseUpdate < 100) return;
      lastMouseUpdate = now;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleRestart = () => {
      setIsDismissed(false);
      sessionStorage.removeItem('otto_dismissed');
      restart();
    };

    window.addEventListener('mousemove', handleMouse, { passive: true });
    window.addEventListener('otto:restart', handleRestart as any);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('otto:restart', handleRestart as any);
    };
  }, [restart]);

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

  useEffect(() => {
    if (activeWaypoint?.message) {
      setLastMessage(activeWaypoint.message);
    }
    setOttoMood((activeWaypoint?.tentacleMode as any) || 'idle');
  }, [activeWaypoint, setLastMessage, setOttoMood]);

  const dismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    sessionStorage.setItem('otto_dismissed', 'true');
    setIsGuiding(false);
  };

  const getActions = (): MenuItem[] => {
    if (activeWaypoint?.id === 'hero_swim_in') {
      return [{ label: "Show me around", onClick: () => triggerNext() }];
    }
    if ((activeWaypoint as any)?.hasButton) {
      return [{ label: "Book a call →", onClick: () => window.open('/book-an-appointment', '_blank') }];
    }
    return [];
  };

  if (isDismissed) return null;

  return (
    <>
      <motion.div
        className="fixed z-[9998] pointer-events-none group"
        style={{ 
          x: relX, 
          y: relY, 
          opacity, 
          bottom: config.bottom as any, 
          right: config.right as any,
          width: config.width as any,
          height: config.height as any,
        }}
      >
        <div className="relative pointer-events-auto cursor-pointer w-full h-full" onClick={() => setShowMenu(!showMenu)}>
          <OttoSVG 
            mode={mouseInteraction === 'wave' ? 'wave' : tentacleMode}
            lookDir={mouseInteraction === 'wave' ? 'forward' : lookDir}
            facingLeft={isFacingLeft}
            size={config.width}
          />

          <OttoSpeechBubble 
            message={mouseInteraction === 'wave' ? "Hi there! 👋" : currentMessage}
            isVisible={(!!currentMessage || mouseInteraction === 'wave') && !isDismissed}
            actions={getActions()}
            showInput={!activeScript || activeScript.sectionId === 'section-hero'}
            onQuery={(q: string) => {
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
};

export default OttoGuide;
