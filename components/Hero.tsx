
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#FAFAFA]">
      <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] iridescent-bg rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[40vw] h-[40vw] iridescent-bg rounded-full pointer-events-none opacity-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 mb-auto">
        {/* Left Column */}
        <div className="lg:col-span-3 lg:space-y-48 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] leading-relaxed text-[#52525B]">
              Transforming<br />Digital Landscapes<br />With Precision
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hidden lg:block"
          >
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] leading-relaxed text-[#18181B]">
              Where aesthetics<br />Meets high-performance<br />Conversion strategy
            </p>
          </motion.div>
        </div>

        {/* Center Visual - Fixed to prevent overlap */}
        <div className="lg:col-span-6 flex justify-center py-8 lg:py-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]"
          >
             <div className="absolute inset-0 border-[40px] border-purple-500/5 rounded-full blur-3xl" />
             <div className="absolute inset-0 border-[1px] border-purple-200 rounded-full animate-[spin_30s_linear_infinite]" />
             
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/5 via-pink-400/5 to-blue-400/5 rounded-full blur-2xl animate-pulse" />
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl overflow-visible">
                    <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="url(#strokeGrad)" strokeWidth="0.5" transform="rotate(60 100 100)" className="animate-[spin_40s_linear_infinite]" />
                    <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="url(#strokeGrad)" strokeWidth="0.5" transform="rotate(-60 100 100)" className="animate-[spin_50s_linear_infinite_reverse]" />
                    <circle cx="100" cy="100" r="4" fill="#7C3AED" className="animate-pulse" />
                    <defs>
                        <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#7C3AED' }} />
                            <stop offset="100%" style={{ stopColor: '#EC4899' }} />
                        </linearGradient>
                    </defs>
                </svg>
             </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 flex flex-col lg:items-end space-y-16 lg:text-right">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex gap-8 lg:justify-end"
          >
            {[
              { val: '+ 300', label: 'PROJECTS DONE' },
              { val: '+ 45M', label: 'REVENUE DRIVEN' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-black tracking-tighter text-[#18181B]">{stat.val}</div>
                <div className="text-[8px] font-black text-[#71717A] leading-tight tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <button className="flex items-center gap-3 group bg-[#18181B] py-4 px-8 rounded-full shadow-lg hover:bg-[#27272A] transition-all duration-200 min-h-[44px] animate-pulse-glow">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Start Project</span>
              <div className="bg-white/10 p-1.5 rounded-full text-white group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Headline - Responsive and Avoids center overlap */}
      <div className="relative z-10 lg:mt-0 mt-8">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-[12.5vw] lg:text-[11.5vw] font-black uppercase tracking-[-0.06em] leading-[0.85] text-center lg:text-left text-[#121212] flex flex-col"
        >
          <motion.span variants={itemVariants} className="block overflow-hidden">
            Limitless Design
          </motion.span>
          <motion.span variants={itemVariants} className="block overflow-hidden -mt-[0.1em]">
            Solutions
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
