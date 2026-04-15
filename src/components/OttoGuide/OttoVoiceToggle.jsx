import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OttoVoiceToggle({ enabled, onToggle, isSpeaking }) {
  return (
    <div className="relative pointer-events-auto">
      <motion.button
        onClick={(e) => { e.stopPropagation(); onToggle(!enabled); }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-9 h-9 rounded-full bg-[#0d1f3c] border border-[rgba(61,146,204,0.3)] flex items-center justify-center transition-all shadow-lg ${
          isSpeaking && enabled ? 'animate-voice-pulse border-primary' : ''
        }`}
        title={enabled ? "Otto's voice: ON" : "Otto's voice: OFF"}
      >
        <AnimatePresence mode="wait">
          {enabled ? (
            <motion.span
              key="voice-on"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="material-symbols-outlined text-[#3d92cc] text-[20px]"
            >
              volume_up
            </motion.span>
          ) : (
            <motion.span
              key="voice-off"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="material-symbols-outlined text-gray-500 text-[20px]"
            >
              volume_off
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
      
      {/* Tooltip on Hover via CSS group-hover or title attribute already added */}
    </div>
  );
}
