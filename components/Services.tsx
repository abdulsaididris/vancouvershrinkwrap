
import React from 'react';
import { Building2, Package, Thermometer, Wind, Shield, Cloud, ArrowRight, Truck } from 'lucide-react';

interface ServicesProps {
  onServiceClick?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const services = [
    {
      id: 'building-wrap',
      title: "Building Envelopes",
      desc: "Complete weather protection for construction sites, scaffolding, and renovations in Vancouver, Surrey, Burnaby, and across British Columbia. Keep your crew working through winter.",
      icon: <Building2 size={32} />,
      tag: "CONSTRUCTION",
      clickable: true
    },
    {
      id: 'boat-wrap',
      title: "Boat & Marine Wrap",
      desc: "Protect boats, yachts, equipment, and machinery during storage. Professional shrink wrap for all sizes in Vancouver and surrounding areas, ensuring year-round protection.",
      icon: <Package size={32} />,
      tag: "MARINE",
      clickable: true
    },
    {
      id: 'transport-wrap',
      title: "Transport Protection",
      desc: "Protect equipment and modular units during transport. Our shrink wrap stays tight at highway speeds, preventing damage from road debris, salt, and weather.",
      icon: <Truck size={32} />,
      tag: "TRANSPORT",
      clickable: true
    },
    {
      id: 'heat-containment',
      title: "Heat Containment",
      desc: "Specialized enclosures for temperature control and climate management. Perfect for construction projects requiring controlled environments across British Columbia.",
      icon: <Thermometer size={32} />,
      tag: "CLIMATE",
      clickable: false
    },
    {
      id: 'dust-containment',
      title: "Dust Containment",
      desc: "Industrial-grade dust control and containment solutions for construction sites, renovations, and industrial operations throughout Vancouver and British Columbia.",
      icon: <Wind size={32} />,
      tag: "ENVIRONMENTAL",
      clickable: false
    },
    {
      id: 'all-weather',
      title: "All-Weather Protection",
      desc: "Comprehensive weather protection solutions that withstand British Columbia's harsh winters, heavy winds, and extreme conditions. Serving all of Vancouver and surrounding cities.",
      icon: <Cloud size={32} />,
      tag: "PROTECTION",
      clickable: false
    }
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.clickable && onServiceClick) {
      onServiceClick(service.id);
    }
  };

  return (
    <div className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="mono text-orange-600 font-bold uppercase tracking-widest text-xs mb-3 md:mb-4 block">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900">
            WHAT WE <span className="text-orange-500">WRAP</span>
          </h2>
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            From small residential projects in Vancouver to large industrial sites across British Columbia, we have the expertise to wrap it all. Serving Vancouver, Surrey, Burnaby, Victoria, and surrounding areas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={() => handleServiceClick(service)}
              className={`bg-white p-6 md:p-8 border-2 border-slate-100 hover:border-orange-500 transition-all group rounded-lg hover:shadow-lg ${service.clickable ? 'cursor-pointer' : ''
                }`}
              role={service.clickable ? 'button' : undefined}
              tabIndex={service.clickable ? 0 : undefined}
            >
              <div className="text-orange-500 mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <span className="mono text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 md:mb-3 block">{service.tag}</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4 group-hover:text-orange-600 transition-colors">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
              {service.clickable && (
                <span className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-10 bg-orange-500 text-white rounded-lg flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2">Need a Custom Solution?</h3>
            <p className="text-orange-100 text-base md:text-lg">Every project is unique. Contact us for a free custom quote. We serve all of Vancouver, British Columbia and surrounding cities.</p>
          </div>
          <a href="#contact" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 hover:bg-slate-900 hover:text-white font-bold text-base md:text-lg transition-all flex items-center justify-center gap-3 rounded-lg whitespace-nowrap">
            Get Free Estimate
            <ArrowRight size={18} className="md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

