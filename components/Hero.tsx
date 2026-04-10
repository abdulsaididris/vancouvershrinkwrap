
import React from 'react';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen pt-16 md:pt-20 overflow-hidden">
      {/* Full-width Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-building.jpg"
          alt="SHRINKWRAPped building in Vancouver, British Columbia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center">
        <div className="max-w-2xl w-full">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-2 md:mb-3 bg-orange-500/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm font-semibold text-orange-400 uppercase tracking-wider">Vancouver's SHRINKWRAP Experts</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight mb-3 md:mb-4 text-white">
            PROFESSIONAL<br />
            SHRINKWRAP<br />
            <span className="text-orange-500">SERVICES</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-slate-300 font-medium leading-relaxed mb-4 md:mb-5 max-w-xl">
            Protecting your assets from Vancouver's harsh weather. We specialize in <span className="text-orange-400 font-bold">building enclosures, boat wrapping, and industrial SHRINKWRAP</span> solutions across Vancouver, Surrey, Burnaby, and all of British Columbia.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-orange-500 text-white font-bold text-base md:text-lg transition-all hover:bg-orange-600 gap-2 md:gap-3 uppercase tracking-tight rounded-lg shadow-lg hover:shadow-xl"
            >
              Get Free Quote
              <ArrowRight strokeWidth={2.5} size={18} className="md:w-5 md:h-5" />
            </a>
            
            <a
              href="tel:6044090668"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-base md:text-lg transition-all hover:bg-white hover:text-slate-900 gap-2 md:gap-3 uppercase tracking-tight rounded-lg"
            >
              <Phone size={18} className="md:w-5 md:h-5" />
              604-409-0668
            </a>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {['Fully Insured', 'WCB Compliant', 'Free Estimates'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="text-green-400 flex-shrink-0" size={14} />
                <span className="font-semibold text-xs md:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
