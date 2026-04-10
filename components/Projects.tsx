
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const projects = [
    {
      title: "Industrial Enclosures",
      location: "Vancouver, British Columbia",
      type: "Industrial Enclosures",
      description: "Professional industrial SHRINKWRAP enclosures for complete site protection and containment.",
      img: "/project-1.webp",
      alt: "Industrial SHRINKWRAP enclosure on multi-story building in Vancouver British Columbia for weather protection during construction"
    },
    {
      title: "Modular Shrinkwrap",
      location: "Vancouver, British Columbia",
      type: "Modular Shrinkwrap",
      description: "Versatile modular SHRINKWRAP solutions for flexible construction site protection.",
      img: "/project-2.webp",
      alt: "Modular SHRINKWRAP system installed on scaffolding at Vancouver construction site for winter work continuation"
    },
    {
      title: "Asbestos/Dust Containment",
      location: "British Columbia",
      type: "Asbestos/Dust Containment",
      description: "Specialized SHRINKWRAP enclosure for asbestos abatement and dust containment programs.",
      img: "/project-3.webp",
      alt: "SHRINKWRAP dust containment enclosure for asbestos abatement project meeting British Columbia environmental regulations"
    },
    {
      title: "Modular Shrinkwrap",
      location: "Vancouver, British Columbia",
      type: "Modular Shrinkwrap",
      description: "Custom modular SHRINKWRAP systems for large-scale construction and industrial projects.",
      img: "/project-4.webp",
      alt: "Large-scale modular SHRINKWRAP installation on industrial facility in Vancouver for complete weather protection"
    },
    {
      title: "Commercial Shrinkwrap",
      location: "Vancouver, British Columbia",
      type: "Commercial Shrinkwrap",
      description: "Professional commercial SHRINKWRAP services for building protection during construction.",
      img: "/project-5.webp",
      alt: "Commercial building wrapped in SHRINKWRAP for winter construction protection in Vancouver St Albert area"
    },
    {
      title: "Boat/Marine Wrap",
      location: "Vancouver, British Columbia",
      type: "Boat/Marine Wrap",
      description: "Professional boat and marine SHRINKWRAP services for complete watercraft protection during storage.",
      img: "/project-6.webp",
      alt: "Boat SHRINKWRAP service in Vancouver British Columbia protecting watercraft from winter snow ice and UV damage"
    },
    {
      title: "Commercial Shrinkwrap",
      location: "Vancouver, British Columbia",
      type: "Commercial Shrinkwrap",
      description: "Expert commercial SHRINKWRAP solutions for construction sites across British Columbia.",
      img: "/project-7.jpg",
      alt: "Professional commercial SHRINKWRAP enclosure on scaffolding for year-round construction in British Columbia winters"
    },
    {
      title: "Construction Site Protection",
      location: "Vancouver, British Columbia",
      type: "All-Weather Protection",
      description: "Complete weather protection solution for construction site during harsh British Columbia winters.",
      img: "/project-8.webp",
      alt: "Construction site SHRINKWRAP weather protection allowing work to continue during Vancouver harsh winter conditions"
    }
  ];

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const scrollDirection = direction === 'right' ? scrollAmount : -scrollAmount;
      scrollContainerRef.current.scrollBy({
        left: scrollDirection,
        behavior: 'smooth'
      });
    }
  };

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "10+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24hr", label: "Quote Turnaround" }
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="mono text-orange-600 font-bold uppercase tracking-widest text-xs mb-3 md:mb-4 block">Our Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900">
            RECENT <span className="text-orange-500">PROJECTS</span>
          </h2>
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            From towering buildings to luxury yachts, see how we protect Vancouver's valuable assets across all service categories.
          </p>
        </div>

        {/* Scrollable Projects Gallery */}
        <div className="relative mb-12 md:mb-16">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all opacity-0 md:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-slate-900" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            } as React.CSSProperties}
          >
            {projects.map((project, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] group relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl"
              >
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 md:mb-4">
                    {project.type}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all opacity-0 md:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-slate-900" />
            </button>
          )}
        </div>

        {/* Hide scrollbar styles */}
        <style>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 md:p-8 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-500">{stat.number}</p>
              <p className="text-slate-600 font-semibold mt-2 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-slate-900 text-white font-bold text-base md:text-lg hover:bg-orange-500 transition-colors rounded-lg"
          >
            Start Your Project
            <ArrowRight size={18} className="md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
