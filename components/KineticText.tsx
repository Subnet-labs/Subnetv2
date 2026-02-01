
import React from 'react';

const KineticText: React.FC = () => {
  const words = ["STRATEGY", "DESIGN", "CONVERSION", "IMPACT", "STORYTELLING", "GROWTH"];
  
  return (
    <div className="py-16 md:py-24 overflow-hidden bg-[#FAFAFA] border-y border-gray-100 relative z-10" aria-hidden="true">
      <div className="flex whitespace-nowrap animate-marquee will-change-transform">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {words.map((word, idx) => (
              <React.Fragment key={idx}>
                <span className="text-6xl md:text-9xl font-black tracking-tighter mx-8 md:mx-16 text-outline uppercase hover:text-[#121212] transition-colors duration-300 cursor-default">
                  {word}
                </span>
                <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-[#7C3AED] mx-4" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KineticText;
