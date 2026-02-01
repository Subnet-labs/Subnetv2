
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section id="project" ref={targetRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 px-12 md:px-32">
          {/* Section Title Card */}
          <div className="flex flex-col justify-center min-w-[60vw] lg:min-w-[40vw]">
             <span className="text-purple-500 font-black text-xs uppercase tracking-[0.5em] mb-8 block">Selected Work</span>
             <h2 className="text-white text-8xl md:text-[11vw] font-black uppercase tracking-tighter leading-[0.8]">
                Bold<br /><span className="text-outline-white">Visions</span>
             </h2>
             <div className="mt-16 flex items-center gap-6">
                <div className="w-20 h-[1px] bg-white/20" />
                <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-bold">Scroll to discover</p>
             </div>
          </div>

          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ 
                scale: 0.98,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[75vh] w-[85vw] md:w-[65vw] lg:w-[50vw] flex-shrink-0 bg-neutral-900 rounded-[50px] overflow-hidden cursor-none"
            >
              {/* Image Container with Parallax Simulation */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
                />
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700" />
              <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 p-12 md:p-16 w-full flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm max-w-sm hidden lg:block leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-2xl"
                >
                   <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>

              {/* Hover Indicator for Desktop */}
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-[10px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">View Case</span>
              </div>
            </motion.div>
          ))}

          {/* End cap */}
          <div className="flex flex-col justify-center min-w-[60vw] lg:min-w-[40vw] px-10">
             <h3 className="text-white text-5xl md:text-7xl font-black uppercase mb-10 tracking-tighter leading-[0.9]">Ready to build<br />something <span className="text-purple-500">iconic</span>?</h3>
             <motion.button 
               whileHover={{ scale: 1.05, x: 10 }}
               className="flex items-center gap-6 group"
             >
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 transition-all">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <span className="text-white text-xl font-black uppercase tracking-widest">Get Started</span>
             </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
