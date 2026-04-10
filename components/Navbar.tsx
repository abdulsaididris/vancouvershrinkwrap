
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Locations', href: '#locations' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-lg' : 'py-3 md:py-4 bg-white/95 backdrop-blur-sm'
      }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 md:gap-3" onClick={() => setIsOpen(false)}>
          <img
            src="/logo.png"
            alt="Vancouver Shrink Wrap Logo"
            className={`transition-all duration-300 ${scrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'}`}
          />
          <div className="hidden sm:flex flex-col">
            <span className={`font-black text-slate-900 tracking-tight leading-tight transition-all duration-300 ${scrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
              VANCOUVER
            </span>
            <span className={`font-black text-orange-500 tracking-tight leading-tight transition-all duration-300 ${scrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
              SHRINK WRAP
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:7804793285"
            className="px-5 xl:px-6 py-2.5 xl:py-3 bg-orange-500 text-white font-bold text-xs xl:text-sm transition-all hover:bg-orange-600 rounded-lg flex items-center gap-2 shadow-md whitespace-nowrap"
          >
            <Phone size={14} className="xl:w-4 xl:h-4" />
            <span className="hidden xl:inline">780-479-3285</span>
            <span className="xl:hidden">Call</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-900 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="md:w-7 md:h-7" /> : <Menu size={24} className="md:w-7 md:h-7" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="flex flex-col p-4 md:p-6 space-y-3 md:space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg md:text-xl font-bold text-slate-900 hover:text-orange-500 transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:7804793285"
            className="text-lg md:text-xl font-bold text-orange-500 py-2 flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} className="md:w-5 md:h-5" />
            780-479-3285
          </a>
        </div>
      </div>
    </nav>
  );
};
