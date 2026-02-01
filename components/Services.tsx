
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-white rounded-[60px] md:rounded-[100px] -mt-16 relative z-20 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Decorative Blobs for Glass depth */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-100/40 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-600 font-black text-xs uppercase tracking-[0.4em] mb-6 block">Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Fueling Your<br />Digital Evolution
            </h2>
          </motion.div>

          <div className="mt-16 w-full aspect-[4/5] rounded-[50px] overflow-hidden relative group shadow-2xl">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" alt="Abstract 3D" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 glass-morphism opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="space-y-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`group p-10 rounded-[40px] transition-all duration-700 cursor-pointer relative overflow-hidden ${
                  idx === 1 ? 'bg-black text-white shadow-2xl' : 'glass-morphism hover:bg-white/60'
                }`}
              >
                <div className="flex justify-between items-center relative z-10">
                  <div className="flex items-center gap-8">
                    <span className={`text-4xl font-black italic opacity-20 ${idx === 1 ? 'text-white' : 'text-purple-600'}`}>0{idx + 1}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2">{service.title}</h3>
                      <p className={`text-sm max-w-md font-medium leading-relaxed opacity-60`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-full border transition-all duration-500 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 ${idx === 1 ? 'border-white/20' : 'border-black/5'}`}>
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 border-t border-gray-100 pt-16 flex flex-col md:flex-row gap-16 items-start"
          >
             <div className="md:w-1/3">
                <h4 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4">Crafting<br />Excellence</h4>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Our methodology ensures every pixel serves a strategic purpose.</p>
             </div>
             <div className="flex-1 grid grid-cols-2 gap-6 w-full">
                {[
                  { label: "Performance", val: "99.9%" },
                  { label: "UX Rating", val: "A+" }
                ].map((item, i) => (
                  <div key={i} className="glass-morphism p-8 rounded-[30px] border border-white/50 hover:bg-white/80 transition-colors">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4">{item.label}</span>
                    <div className="text-3xl font-black tracking-tighter text-purple-600">{item.val}</div>
                  </div>
                ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
