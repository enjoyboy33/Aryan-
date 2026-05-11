import { useState, useRef, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block z-50 flex justify-center" ref={ref}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 cursor-pointer" 
        style={{
          background: "linear-gradient(123deg, #030B1A 7%, #1A3A8F 35%, #2D5BE3 70%, #0A1F5C 100%)",
          boxShadow: "0px 4px 4px rgba(45, 91, 227, 0.3), inset 4px 4px 12px #2D5BE3",
          outline: "2px solid white",
          outlineOffset: "-3px"
        }}
      >
        Contact Me
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[#0F1220] border border-[#5B8DEF44] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-2 w-[220px] z-50 flex flex-col gap-1"
          >
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=joyboy5229@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-sm text-[#C8D8F0] hover:bg-[#5B8DEF22] hover:text-[#A8C8FF] rounded-xl transition-colors text-left font-medium tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              <Mail size={18} className="text-[#5B8DEF]" />
              Open in Gmail
            </a>
            <a 
              href="mailto:joyboy5229@gmail.com" 
              className="flex items-center gap-3 px-4 py-3 text-sm text-[#C8D8F0] hover:bg-[#5B8DEF22] hover:text-[#A8C8FF] rounded-xl transition-colors text-left font-medium tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B8DEF]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Default Mail App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
