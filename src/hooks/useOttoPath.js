import { useState, useEffect, useRef, useCallback } from 'react';
import { useMotionValue, animate } from 'framer-motion';

const WAYPOINTS = (vw, vh) => [
  { 
    id: "entrance",
    x: vw + 100, y: vh * 0.6,
    enterFrom: "right",
    message: null,
    autoAdvance: 300,
    tentacleMode: "swim"
  },
  {
    id: "hero_swim_in",
    x: vw * 0.75, y: vh * 0.55,
    tentacleMode: "swim",
    facingLeft: true,
    message: "Hey! I'm Otto 👋 Welcome to Octoways — where AI meets creativity!",
    lookDir: "forward",
    autoAdvance: false,
    duration: 700
  },
  {
    id: "hero_to_stats",
    x: vw * 0.85, y: vh * 0.8,
    tentacleMode: "swim",
    facingLeft: false,
    message: null,
    autoAdvance: true,
    duration: 800
  },
  {
    id: "stats_section",
    x: vw * 0.15, y: vh * 0.45,
    tentacleMode: "idle",
    lookDir: "left",
    message: "12+ years, 45+ patents, 30+ countries — we've been busy! 🐙",
    autoAdvance: 2500,
    duration: 700
  },
  {
    id: "swim_to_services",
    x: vw * 0.8, y: vh * 0.5,
    tentacleMode: "swim",
    facingLeft: true,
    autoAdvance: true,
    duration: 800
  },
  {
    id: "services_section",
    x: vw * 0.1, y: vh * 0.75,
    tentacleMode: "walk",
    lookDir: "right",
    message: "Need a custom LLM? Neural app? Predictive AI? My 8 arms can build all of it!",
    autoAdvance: 3500,
    duration: 700
  },
  {
    id: "gallery_dive",
    x: vw * 0.5, y: vh + 200,
    tentacleMode: "swim",
    opacity: 0,
    autoAdvance: 800,
    duration: 600
  },
  {
    id: "gallery_emerge",
    x: vw * 0.2, y: vh * 0.7,
    tentacleMode: "swim",
    opacity: 1,
    message: "Check out what our AI engines can generate! ✨",
    autoAdvance: 2000,
    duration: 600
  },
  {
    id: "cta_section",
    x: vw * 0.5, y: vh * 0.65,
    tentacleMode: "wave",
    lookDir: "forward",
    message: "Ready to build something incredible? Let me take you to book a call! 🚀",
    autoAdvance: false,
    hasButton: true,
    duration: 800
  },
  {
    id: "idle_follow",
    x: vw * 0.85, y: vh * 0.85,
    tentacleMode: "idle",
    mode: "free-roam"
  }
];

export default function useOttoPath() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [dimensions, setDimensions] = useState({ vw: window.innerWidth, vh: window.innerHeight });
  const [isGuiding, setIsGuiding] = useState(false);
  const x = useMotionValue(dimensions.vw + 100);
  const y = useMotionValue(dimensions.vh * 0.6);
  const opacity = useMotionValue(1);
  const [facingLeft, setFacingLeft] = useState(false);

  const waypoints = WAYPOINTS(dimensions.vw, dimensions.vh);
  const activeWaypoint = waypoints[currentIdx];

  useEffect(() => {
    const handleResize = () => setDimensions({ vw: window.innerWidth, vh: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const triggerNext = useCallback(() => {
    if (currentIdx < waypoints.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  }, [currentIdx, waypoints.length]);

  const restart = useCallback(() => {
    setCurrentIdx(0);
    setIsGuiding(true);
  }, []);

  useEffect(() => {
    if (!activeWaypoint) return;

    let targetX = activeWaypoint.x;
    let targetY = activeWaypoint.y;

    // Handle element-based targeting
    if (activeWaypoint.targetId) {
      const el = document.getElementById(activeWaypoint.targetId);
      if (el) {
        const rect = el.getBoundingClientRect();
        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;
      }
    }

    // Determine facing direction
    if (targetX < x.get()) setFacingLeft(true);
    else setFacingLeft(false);

    // Animate to strictly viewport-relative position
    const controls = animate(x, targetX, {
      duration: activeWaypoint.duration / 1000 || 0,
      ease: "easeOut"
    });
    const yControls = animate(y, targetY, {
      duration: activeWaypoint.duration / 1000 || 0,
      ease: "easeOut"
    });
    
    if (activeWaypoint.opacity !== undefined) {
      animate(opacity, activeWaypoint.opacity, { duration: 0.5 });
    } else {
      opacity.set(1);
    }

    // Auto-advance logic
    if (activeWaypoint.autoAdvance) {
      const waitTime = typeof activeWaypoint.autoAdvance === 'number' ? activeWaypoint.autoAdvance : 2000;
      const timer = setTimeout(() => {
        triggerNext();
      }, (activeWaypoint.duration || 0) + waitTime);
      return () => {
        clearTimeout(timer);
        controls.stop();
        yControls.stop();
      };
    }
  }, [currentIdx, dimensions, activeWaypoint, triggerNext, x, y, opacity]);

  const highlightSequence = useCallback(async (steps) => {
    setIsGuiding(true);
    for (const step of steps) {
      const el = document.getElementById(step.targetId);
      if (el) {
        const rect = el.getBoundingClientRect();
        
        // Move Otto near the element
        await animate(x, rect.left - 40, { duration: 1 }).finished;
        await animate(y, rect.top + rect.height / 2, { duration: 1 }).finished;
        
        // Wait and show message
        window.dispatchEvent(new CustomEvent('otto:message', { detail: step.message }));
        await new Promise(r => setTimeout(r, step.duration || 3000));
      }
    }
    // Return to idle
    setCurrentIdx(waypoints.length - 1);
  }, [waypoints.length, x, y]);

  return {
    currentIdx,
    activeWaypoint,
    x,
    y,
    opacity,
    facingLeft,
    triggerNext,
    restart,
    isGuiding,
    setIsGuiding,
    highlightSequence
  };
}
