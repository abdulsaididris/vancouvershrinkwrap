
import React from 'react';
import { Target, Shield, Zap, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="h-0.5 w-6 md:w-8 bg-orange-500"></span>
              <span className="mono text-orange-600 font-bold uppercase tracking-widest text-xs">About Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mt-4 mb-6 md:mb-8 leading-[0.95] tracking-tighter">
              WHY CHOOSE<br /><span className="text-orange-500">Vancouver Shrinkwrap?</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-slate-600 text-base md:text-lg font-medium leading-relaxed border-l-4 border-slate-200 pl-4 md:pl-6">
              <p>
                Vancouver Shrinkwrap provides professional shrink wrapping services for residential, commercial, and industrial clients across <strong>Vancouver, Surrey, Burnaby, Victoria, and all of British Columbia</strong>.
              </p>
              <p>
                From protecting construction sites during winter to wrapping boats for storage, we deliver <span className="text-slate-900 font-bold">tight, durable, weatherproof solutions</span> that keep your assets safe year-round in British Columbia's harsh climate.
              </p>
              <p className="text-orange-600 font-bold">
                Locally owned and operated in Vancouver with over 10 years of experience serving the greater Vancouver area and all of British Columbia.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-6 lg:pt-12">
            {[
              { 
                icon: <Target size={28} />, 
                title: "Precision Fit", 
                text: "Our thermal welding technique creates a drum-tight seal that withstands British Columbia's winds up to 100km/h and heavy snow loads." 
              },
              { 
                icon: <Shield size={28} />, 
                title: "Fully Insured", 
                text: "Complete liability coverage and WCB compliance. Your property is protected during every installation across Vancouver and British Columbia." 
              },
              { 
                icon: <Zap size={28} />, 
                title: "Fast Turnaround", 
                text: "We work efficiently to minimize disruption. Most residential projects in Vancouver and surrounding areas completed in a single day." 
              },
              { 
                icon: <Users size={28} />, 
                title: "Expert Team", 
                text: "Our trained technicians have wrapped everything from high-rises in downtown Vancouver to yachts across British Columbia with consistent quality." 
              }
            ].map((item, i) => (
              <div key={i} className="p-6 md:p-8 bg-slate-50 border-2 border-slate-100 hover:border-orange-500 transition-all group rounded-lg">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500 text-white flex items-center justify-center mb-4 md:mb-6 rounded-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
