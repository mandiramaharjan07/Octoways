import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SECTION_SCRIPTS from '../../data/ottoSectionScripts';

export default function useOttoSections() {
  const { pathname } = useLocation();
  const [activeScript, setActiveScript] = useState(null);
  const [activeSectionEl, setActiveSectionEl] = useState(null);
  const [sectionHistory, setSectionHistory] = useState(() => {
    const stored = sessionStorage.getItem('otto_visited_sections');
    return stored ? JSON.parse(stored) : [];
  });
  
  const observerRef = useRef(null);
  const debounceTimer = useRef(null);
  const activeScriptRef = useRef(null);
  const sectionHistoryRef = useRef(sectionHistory);

  // Keep refs in sync
  useEffect(() => {
    activeScriptRef.current = activeScript;
    sectionHistoryRef.current = sectionHistory;
  }, [activeScript, sectionHistory]);

  useEffect(() => {
    const handleIntersect = (entries) => {
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length > 0) {
        const topEntry = visibleEntries[0];
        const script = SECTION_SCRIPTS.find(s => s.sectionId === topEntry.target.id);

        if (script && script.sectionId !== activeScriptRef.current?.sectionId) {
          clearTimeout(debounceTimer.current);
          debounceTimer.current = setTimeout(() => {
            const isNew = !sectionHistoryRef.current.includes(script.sectionId);
            
            if (isNew) {
              setSectionHistory(prev => {
                const next = [...prev, script.sectionId];
                sessionStorage.setItem('otto_visited_sections', JSON.stringify(next));
                return next;
              });
            }

            setActiveScript({ ...script, isNew });
            setActiveSectionEl(topEntry.target);
          }, 800);
        }
      }
    };

    const options = {
      threshold: [0.3, 0.5, 0.7],
      rootMargin: "0px 0px -10% 0px"
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Observe all sections defined in the scripts
    SECTION_SCRIPTS.forEach(script => {
      const el = document.getElementById(script.sectionId);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      clearTimeout(debounceTimer.current);
    };
  }, [pathname]); // ONLY run on mount or pathname change

  return { activeScript, activeSectionEl, sectionHistory };
}
