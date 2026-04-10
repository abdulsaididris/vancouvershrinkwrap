
import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-900 text-white pt-12 md:pt-20 pb-6 md:pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">
              VANCOUVER <span className="text-orange-500">SHRINKWRAP</span>
            </h3>
            <p className="text-slate-400 text-base md:text-lg mb-4 md:mb-6 max-w-md leading-relaxed">
              Professional shrink wrapping services for buildings, boats, equipment, and more. Protecting Vancouver's investments since 2014.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="tel:6044090668" className="px-5 md:px-6 py-2.5 md:py-3 bg-orange-500 hover:bg-orange-600 transition-colors font-bold text-sm md:text-base rounded-lg flex items-center justify-center gap-2">
                <Phone size={16} className="md:w-[18px] md:h-[18px]" />
                Call Now
              </a>
              <a href="#contact" className="px-5 md:px-6 py-2.5 md:py-3 bg-slate-800 hover:bg-slate-700 transition-colors font-bold text-sm md:text-base rounded-lg text-center">
                Get Quote
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-slate-500 text-sm mb-2">Also serving Southern British Columbia:</p>
              <a
                href="http://Victoriashrinkwrap.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 font-bold hover:text-orange-400 transition-colors flex items-center gap-2"
              >
                Visit Victoria Shrinkwrap
                <ArrowUp size={14} className="rotate-45" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-orange-500">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3 text-slate-400 text-sm md:text-base">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Recent Projects</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Locations Served</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-orange-500">Contact</h4>
            <div className="space-y-3 md:space-y-4 text-slate-400 text-sm md:text-base">
              <a href="tel:6044090668" className="flex items-center gap-2 md:gap-3 hover:text-white transition-colors break-words">
                <Phone size={16} className="md:w-[18px] md:h-[18px] flex-shrink-0" />
                <span>604-409-0668</span>
              </a>
              <a href="mailto:a.said@lagroupofcompanies.ca" className="flex items-center gap-2 md:gap-3 hover:text-white transition-colors break-words">
                <Mail size={16} className="md:w-[18px] md:h-[18px] flex-shrink-0" />
                <span className="break-all">a.said@lagroupofcompanies.ca</span>
              </a>
              <div className="flex items-center gap-2 md:gap-3">
                <MapPin size={16} className="md:w-[18px] md:h-[18px] flex-shrink-0" />
                <span>Vancouver, British Columbia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs md:text-sm text-center md:text-left">
            Â© {new Date().getFullYear()} Vancouver Shrinkwrap. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 md:p-3 bg-slate-800 hover:bg-orange-500 transition-colors rounded-lg"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
