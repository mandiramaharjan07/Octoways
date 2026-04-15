import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useOtto } from '../context/OttoContext';

const KNOWLEDGE_MAP = {
  '/': {
    title: 'Home',
    greeting: "Hey! Welcome to Octoways. I'm Otto, your AI guide. Shall we take a tour?",
    priority: 'low'
  },
  '/about': {
    title: 'About Us',
    greeting: "Want to know how we became AI pioneers? I've been here since the first neural net! 🐙",
    priority: 'medium'
  },
  '/services': {
    title: 'Services',
    greeting: "From Custom LLMs to Neural App Dev—my tentacles can build it all. What's your project?",
    priority: 'high'
  },
  '/products': {
    title: 'AI Products',
    greeting: "Our AI products are ready for enterprise scale. Want a technical breakdown of how they work?",
    priority: 'high'
  },
  '/works': {
    title: 'Portfolio',
    greeting: "Calculated results. High-fidelity impact. Check out our global footprint! 🌍",
    priority: 'medium'
  },
  '/contact': {
    title: 'Contact',
    greeting: "You're just one step away from 10x efficiency. Let's start the conversation!",
    priority: 'high'
  },
  '/book-an-appointment': {
    title: 'Booking',
    greeting: "Ready to scale? Let's find a time to talk about your AI roadmap! 🚀",
    priority: 'high'
  }
};

export default function useOttoGlobalContext() {
  const location = useLocation();
  const { setPageContext, setLastMessage, setIsGuiding, setOttoMood } = useOtto();

  useEffect(() => {
    const path = location.pathname;
    const context = KNOWLEDGE_MAP[path] || {
      title: 'Unknown Space',
      greeting: "Oops! I've drifted into uncharted waters. Swim back home with me? 🌊",
      priority: 'low'
    };

    setPageContext({
      route: path,
      title: context.title,
      metadata: context
    });

    // On new page, Otto should signal his presence
    const timer = setTimeout(() => {
      setLastMessage(context.greeting);
      if (path === '/404' || !KNOWLEDGE_MAP[path]) {
        setOttoMood('confused');
      } else {
        setOttoMood('idle');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname, setPageContext, setLastMessage, setIsGuiding, setOttoMood]);

  return useMemo(() => ({
    currentPath: location.pathname,
    context: KNOWLEDGE_MAP[location.pathname] || null
  }), [location.pathname]);
}
