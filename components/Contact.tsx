
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-[#121212] text-[#FAFAFA] rounded-t-[40px] md:rounded-t-[80px] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        <div className="lg:col-span-7 space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[9vw] font-black uppercase tracking-tighter leading-[0.85] text-white"
          >
            Let's Start<br /><span className="text-outline-white">Talking</span>
          </motion.h2>

          <div className="space-y-8">
            {[
              { Icon: Mail, label: 'Email Us', val: 'hello@infinite.design', href: 'mailto:hello@infinite.design' },
              { Icon: Phone, label: 'Call Us', val: '+1 (555) 000-0000', href: 'tel:+15550000000' }
            ].map((item, i) => (
              <a key={i} href={item.href} className="flex items-center gap-6 group min-h-[44px] w-fit focus-visible:outline-none">
                <div className="w-14 h-14 rounded-full glass-morphism-dark flex items-center justify-center group-hover:bg-[#7C3AED] transition-all duration-200 shadow-lg">
                  <item.Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#71717A] text-[9px] font-black uppercase tracking-[0.3em] mb-1">{item.label}</p>
                  <p className="text-xl md:text-2xl font-black tracking-tight group-hover:text-[#7C3AED] transition-colors">{item.val}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex gap-4">
             {[
               { Icon: Instagram, label: 'Instagram' },
               { Icon: Twitter, label: 'Twitter' },
               { Icon: Linkedin, label: 'LinkedIn' }
             ].map((social, idx) => (
               <button key={idx} aria-label={social.label} className="w-14 h-14 rounded-full glass-morphism-dark flex items-center justify-center hover:bg-white hover:text-[#121212] transition-all shadow-md min-h-[44px] min-w-[44px]">
                 <social.Icon className="w-5 h-5" />
               </button>
             ))}
          </div>
        </div>

        <div className="lg:col-span-5 glass-morphism-dark p-8 md:p-12 rounded-[40px] border border-white/5">
          <h3 className="text-xl font-black uppercase tracking-tight mb-8">Send an Inquiry</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/10 pb-3 focus:border-[#7C3AED] outline-none transition-colors font-medium text-sm md:text-base min-h-[44px]" placeholder="Name" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/10 pb-3 focus:border-[#7C3AED] outline-none transition-colors font-medium text-sm md:text-base min-h-[44px]" placeholder="email@company.com" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#A1A1AA]">Message</label>
              <textarea rows={2} className="w-full bg-transparent border-b border-white/10 pb-3 focus:border-[#7C3AED] outline-none transition-colors resize-none font-medium text-sm md:text-base min-h-[44px]" placeholder="Project details..." />
            </div>
            <button className="w-full bg-[#7C3AED] py-5 rounded-full font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#121212] transition-all shadow-xl shadow-purple-600/10 active:scale-95 text-[10px] min-h-[44px]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
