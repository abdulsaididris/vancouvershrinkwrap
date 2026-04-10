
import React from 'react';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { getLocationsGroupedByRegion } from '../data/locationsData';

interface LocationsProps {
  onLocationClick: (locationId: string) => void;
}

export const Locations: React.FC<LocationsProps> = ({ onLocationClick }) => {
  const groupedLocations = getLocationsGroupedByRegion();

  return (
    <section id="locations" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Locations <span className="text-orange-500">Served</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We provide mobile shrink wrap services across British Columbia. Our crews cover over 100 cities and towns, reaching industrial sites and projects from the northern oil sands to the southern wind farms.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-600 font-bold text-sm">
            <MapPin size={16} />
            100+ Cities Across British Columbia
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(groupedLocations).map(([region, locationList]) => (
            <div key={region} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center justify-between">
                {region}
                <span className="text-sm font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                  {locationList.length} Cities
                </span>
              </h3>
              
              <div className="grid grid-cols-1 gap-1">
                {locationList.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => onLocationClick(location.id)}
                    className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl hover:bg-orange-50 text-slate-600 hover:text-orange-500 transition-all group text-left"
                  >
                    <span className="font-semibold text-sm md:text-base">{location.name}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Local Map Overlay - Visual representation */}
        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
          
          <div className="relative max-w-xl">
            <h3 className="text-3xl font-black text-white mb-4">British Columbia Wide Mobile Service</h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Don't see your specific town listed? Give us a call. Our mobile crews regularly travel beyond the main hubs to reach remote industrial sites and construction locations province-wide.
            </p>
            <a
              href="tel:7804793285"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25"
            >
              Call for Service <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
