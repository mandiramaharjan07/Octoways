import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SECTION_SCRIPTS, { SectionScript } from '../../data/ottoSectionScripts';

interface ActiveScript extends SectionScript {
  isNew: boolean;
}

export default function useOttoSections() {
  const { pathname } = useLocation();
  const [activeScript, setActiveScript] = useState<ActiveScript | null>(null);
  const [activeSectionEl, setActiveSectionEl] = useState<HTMLElement | null>(null);
  const [sectionHistory, setSectionHistory] = useState<string[]>(() => {
    const stored = sessionStorage.getItem('otto_visited_sections');
    return stored ? JSON.parse(stored) : [];
  });
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const debounceTimer = useRef<any>(null);
  const activeScriptRef = useRef<ActiveScript | null>(null);
  const sectionHistoryRef = useRef<string[]>(sectionHistory);

  // Keep refs in sync
  useEffect(() => {
    activeScriptRef.current = activeScript;
    sectionHistoryRef.current = sectionHistory;
  }, [activeScript, sectionHistory]);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length > 0) {
        const topEntry = visibleEntries[0];
        const script = SECTION_SCRIPTS.find(s => s.sectionId === topEntry.target.id);

        if (script && script.sectionId !== activeScriptRef.current?.sectionId) {
          if (debounceTimer.current) clearTimeout(debounceTimer.current);
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
            setActiveSectionEl(topEntry.target as HTMLElement);
          }, 800);
        }
      }
    };

    const options: IntersectionObserverInit = {
      threshold: [0.3, 0.5, 0.7],
      rootMargin: "0px 0px -10% 0px"
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Observe all sections defined in the scripts
    SECTION_SCRIPTS.forEach(script => {
      const el = document.getElementById(script.sectionId);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [pathname]);

  return { activeScript, activeSectionEl, sectionHistory };
}
