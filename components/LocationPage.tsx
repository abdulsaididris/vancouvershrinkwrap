
import React from 'react';
import { MapPin, Shield, Factory, Truck, ChevronLeft, Phone, Navigation } from 'lucide-react';
import { getLocationById } from '../data/locationsData';
import { Contact } from './Contact';

interface LocationPageProps {
  locationId: string;
  onBack: () => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ locationId, onBack }) => {
  const location = getLocationById(locationId);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Location Not Found</h2>
          <button
            onClick={onBack}
            className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-building.jpg')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Locations
          </button>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-bold mb-6">
              <MapPin size={14} />
              Serving {location.name}, British Columbia
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
              Shrink Wrap Services in <span className="text-orange-500">{location.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Professional, industrial-grade shrink wrap protection for construction sites, boats, and heavy equipment across {location.name} and the {location.region}.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25"
              >
                Get a Quote for {location.name}
              </a>
              <a
                href="tel:6044090668"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
              >
                <Phone size={18} />
                Call 604-409-0668
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
                The Trusted Choice for Shrink Wrap in <span className="text-orange-500">{location.name}</span>
              </h2>
              <div className="prose prose-lg text-slate-600 mb-10 max-w-none">
                <p className="mb-4">{location.description}</p>
                <p>
                  Our mobile crews are fully equipped to handle any project size in the {location.name} area. From large-scale building enclosures to specialized transport wrapping for heavy machinery, we ensure your assets are protected from British Columbia's unpredictable weather.
                </p>
              </div>

              {/* Local Industrial Sites */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                    <Factory size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Nearby Industrial Sites</h3>
                    <p className="text-slate-500 text-sm">We provide on-site service to these key areas</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {location.industrialSites.map((site) => (
                    <div key={site} className="flex items-center gap-2 text-slate-700 font-medium">
                      <Navigation size={16} className="text-orange-500" />
                      {site}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <Shield className="text-orange-500 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Construction Enclosures</h3>
                <p className="text-slate-600 mb-6">
                  Keep your {location.name} construction project on schedule through winter weather. Our shrink wrap enclosures create a windproof, waterproof, and heated environment for year-round work.
                </p>
                <ul className="space-y-3">
                  {['100% Weather Protection', 'Heated Work Environment', 'Dust & Debris Containment', 'Quick Installation'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <Truck className="text-orange-500 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Transport & Equipment</h3>
                <p className="text-slate-600 mb-6">
                  Protecting valuable machinery during transport or storage in the {location.region}. Our drum-tight wrap won't flap or tear at highway speeds.
                </p>
                <ul className="space-y-3">
                  {['Highway Speed Durability', 'UV & Snow Protection', 'Corrosion Prevention', 'Tamper Evident Seal'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};
