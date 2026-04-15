import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OttoSpeechBubble({ 
  message, 
  isVisible, 
  actions = [], 
  className = "",
  showInput = false,
  onQuery = () => {},
  ottoX = 0,
  ottoY = 0
}) {
  const isNearRightEdge = typeof window !== 'undefined' ? (window.innerWidth - ottoX < 260) : false;
  const isNearTopEdge = ottoY < 150;

  const bubblePositionStyle = {
    position: 'absolute',
    bottom: isNearTopEdge ? '-120px' : '110px',
    right: isNearRightEdge ? '0px' : 'auto',
    left: isNearRightEdge ? 'auto' : '0px',
    width: '220px',
    transform: 'none'
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={message}
          initial={{ opacity: 0, y: 8, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          className={`z-[9999] pointer-events-none ${className}`}
          style={bubblePositionStyle}
        >
          <div className="bg-[#0a1628]/97 border border-[#3d92cc]/50 rounded-2xl px-4 py-3 text-center relative shadow-xl">
            {message && (
              <p className="text-[13px] text-[#e8f4ff] font-medium leading-[1.6] break-words whitespace-normal">
                {message}
              </p>
            )}
            
            {showInput && (
              <div className="mt-3 pointer-events-auto">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.target.elements.ottoQuery;
                    if (input.value.trim()) {
                      onQuery(input.value.trim());
                      input.value = '';
                    }
                  }} 
                  className="relative"
                >
                  <input
                    name="ottoQuery"
                    type="text"
                    placeholder="Ask Otto..."
                    className="w-full bg-[#1b3a5a]/50 border border-[#3d92cc]/20 rounded-lg px-3 py-1.5 text-[11px] text-white placeholder:text-[#3d92cc]/40 focus:outline-none focus:border-[#3d92cc]/60 transition-all font-body pr-8"
                  />
                  <button 
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-[#3d92cc] hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </button>
                </form>
              </div>
            )}

            {actions.length > 0 && (
              <div className="flex gap-2 mt-3 justify-center pointer-events-auto">
                {actions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={action.onClick}
                    className="bg-[#3d92cc] hover:bg-[#347eb0] px-4 py-1.5 rounded-full text-[10px] text-white font-semibold transition-all shadow-lg active:scale-95"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}

            {/* Triangle Pointer */}
            <div 
              className="absolute w-0 h-0 border-transparent border-solid"
              style={{
                left: isNearRightEdge ? 'auto' : '20px',
                right: isNearRightEdge ? '20px' : 'auto',
                borderWidth: '8px',
                borderTopColor: isNearTopEdge ? 'transparent' : 'rgba(61, 146, 204, 0.5)',
                borderBottomColor: isNearTopEdge ? 'rgba(61, 146, 204, 0.5)' : 'transparent',
                bottom: isNearTopEdge ? 'auto' : '-16px',
                top: isNearTopEdge ? '-16px' : 'auto'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
