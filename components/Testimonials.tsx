
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimony" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background depth elements */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[30vw] h-[30vw] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-[#121212]"
          >
            Trusted<br /><span className="text-[#7C3AED]">Partners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#71717A] uppercase tracking-[0.2em] text-[10px] font-black md:text-right"
          >
            Global leaders scale<br />with our expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-morphism p-8 md:p-12 rounded-[40px] flex flex-col justify-between hover:bg-white transition-all duration-300 border border-gray-100/50"
            >
              <div>
                <Quote className="w-10 h-10 text-[#7C3AED]/20 mb-8" />
                <p className="text-lg md:text-xl font-medium text-[#27272A] leading-relaxed mb-10">
                  "{t.content}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt="" className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-md bg-gray-100" loading="lazy" />
                <div>
                  <h4 className="font-bold text-[#18181B] text-base">{t.name}</h4>
                  <p className="text-[#7C3AED] text-[10px] font-black uppercase tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
