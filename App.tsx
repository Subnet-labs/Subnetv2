
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import KineticText from './components/KineticText';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] selection:bg-purple-600 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-purple-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        <KineticText />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>

      <footer className="py-16 px-6 border-t border-gray-100 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Infinite Design Agency</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
