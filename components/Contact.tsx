
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="mono text-orange-600 font-bold uppercase tracking-widest text-xs">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mt-4 mb-6 md:mb-8 leading-[0.95] tracking-tighter">
              GET YOUR<br /><span className="text-orange-500">FREE QUOTE</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium mb-8 md:mb-12 leading-relaxed">
              Ready to protect your investment? Contact us today for a free, no-obligation estimate. We respond to all inquiries within 24 hours. Serving Vancouver, St. Albert, Sherwood Park, Calgary, and all of British Columbia.
            </p>

            <div className="space-y-6 md:space-y-8">
              {[
                { label: "Call Us", val: "780-479-3285", icon: <Phone size={24} />, href: "tel:7804793285" },
                { label: "Email", val: "a.said@lagroupofcompanies.ca", icon: <Mail size={24} />, href: "mailto:a.said@lagroupofcompanies.ca" },
                { label: "Service Area", val: "Vancouver, St. Albert, Sherwood Park, Calgary, and all of British Columbia", icon: <MapPin size={24} /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-5 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500 text-white flex items-center justify-center rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs md:text-sm text-slate-500 font-semibold mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg md:text-xl font-bold text-slate-900 hover:text-orange-500 transition-colors break-words">
                        {item.val}
                      </a>
                    ) : (
                      <p className="text-lg md:text-xl font-bold text-slate-900 break-words">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg border-2 border-slate-200">
              <h3 className="text-lg font-black text-slate-900 mb-3">Areas We Serve:</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Vancouver</strong> â€¢ <strong>St. Albert</strong> â€¢ <strong>Sherwood Park</strong> â€¢ <strong>Calgary</strong> â€¢ <strong>Fort Saskatchewan</strong> â€¢ <strong>Spruce Grove</strong> â€¢ <strong>Stony Plain</strong> â€¢ <strong>Leduc</strong> â€¢ <strong>Beaumont</strong> â€¢ And throughout all of <strong>British Columbia</strong>
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg border border-slate-100">
            <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 text-slate-900">Request a Free Quote</h3>
            <form 
              action="https://formsubmit.co/a.said@lagroupofcompanies.ca" 
              method="POST"
              className="space-y-4 md:space-y-6"
            >
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_subject" value="New Quote Request - Vancouver Shrink Wrap" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-200 px-4 py-3 rounded-lg text-base md:text-lg focus:outline-none focus:border-orange-500 transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-slate-50 border-2 border-slate-200 px-4 py-3 rounded-lg text-base md:text-lg focus:outline-none focus:border-orange-500 transition-all"
                    placeholder="780-479-3285"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-slate-50 border-2 border-slate-200 px-4 py-3 rounded-lg text-base md:text-lg focus:outline-none focus:border-orange-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Location (City/Town) *</label>
                <select name="location" required className="w-full bg-slate-50 border-2 border-slate-200 px-4 py-3 rounded-lg text-base md:text-lg focus:outline-none focus:border-orange-500 transition-all">
                  <option value="">Select your city...</option>
                  <option>Vancouver</option>
                  <option>St. Albert</option>
                  <option>Sherwood Park</option>
                  <option>Calgary</option>
                  <option>Fort Saskatchewan</option>
                  <option>Spruce Grove</option>
                  <option>Stony Plain</option>
                  <option>Leduc</option>
                  <option>Beaumont</option>
                  <option>Other (British Columbia)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Needed</label>
                <select name="service" className="w-full bg-slate-50 border-2 border-slate-200 px-4 py-3 rounded-lg text-base md:text-lg focus:outline-none focus:border-orange-500 transition-all">
                  <option>Building Enclosure</option>
                  <option>Boat / Marine Wrapping</option>
                  <option>Equipment Protection</option>
                  <option>Climate Containment</option>
                  <option>Other / Custom</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Project Details</label>
                <textarea
                  name="details"
                  rows={4}
                  className="w-full bg-slate-50 border-2 border-slate-200 px-4 py-3 rounded-lg text-base md:text-lg focus:outline-none focus:border-orange-500 transition-all resize-none"
                  placeholder="Tell us about your project - size, location, timeline..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 md:py-4 bg-orange-500 text-white hover:bg-orange-600 transition-all font-bold text-base md:text-lg flex items-center justify-center gap-3 rounded-lg shadow-lg"
              >
                Send Quote Request
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
