
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[60] p-6 md:px-12 flex items-center justify-between pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 pointer-events-auto"
      >
        <a href="/" className="flex items-center gap-3 min-h-[44px] focus-visible:outline-none" aria-label="Infinite Home">
          <div className="w-9 h-9 rounded-full border-2 border-[#7C3AED] flex items-center justify-center bg-white shadow-sm">
            <div className="w-2.5 h-2.5 bg-[#7C3AED] rounded-full animate-pulse" />
          </div>
          <span className="text-lg font-black tracking-tighter uppercase text-[#18181B]">Infinite</span>
        </a>
      </motion.div>

      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden lg:flex items-center gap-2 glass-morphism px-3 py-2 rounded-full pointer-events-auto"
        aria-label="Primary Navigation"
      >
        {['About', 'Services', 'Project', 'Testimony'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3F3F46] hover:text-[#7C3AED] transition-colors duration-200 px-5 py-3 rounded-full min-h-[44px] flex items-center"
          >
            {item}
          </a>
        ))}
      </motion.nav>

      <motion.div 
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 pointer-events-auto"
      >
        <button 
          aria-label="Open Menu"
          className="w-12 h-12 rounded-full bg-[#18181B] text-white flex flex-col items-center justify-center gap-1.5 hover:bg-[#7C3AED] transition-all duration-200 group shadow-lg min-h-[44px] min-w-[44px]"
        >
          <div className="w-5 h-0.5 bg-white group-hover:w-6 transition-all" />
          <div className="w-5 h-0.5 bg-white group-hover:w-3 transition-all" />
        </button>
      </motion.div>
    </header>
  );
};

export default Header;
