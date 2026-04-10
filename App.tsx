
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { BlogPost } from './components/BlogPost';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServicePage } from './components/ServicePage';
import { Locations } from './components/Locations';
import { LocationPage } from './components/LocationPage';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeBlogPost, setActiveBlogPost] = useState<string | null>(null);
  const [activeServicePage, setActiveServicePage] = useState<string | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReadMore = (postId: string) => {
    setActiveBlogPost(postId);
    setActiveServicePage(null);
    setActiveLocation(null);
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setActiveBlogPost(null);
  };

  const handleServiceClick = (serviceId: string) => {
    setActiveServicePage(serviceId);
    setActiveBlogPost(null);
    setActiveLocation(null);
    window.scrollTo(0, 0);
  };

  const handleBackFromService = () => {
    setActiveServicePage(null);
  };

  const handleLocationClick = (locationId: string) => {
    setActiveLocation(locationId);
    setActiveServicePage(null);
    setActiveBlogPost(null);
    window.scrollTo(0, 0);
  };

  const handleBackFromLocation = () => {
    setActiveLocation(null);
  };

  // If viewing a location page, show the location detail view
  if (activeLocation) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar scrolled={scrolled} />
        <main className="flex-grow">
          <LocationPage
            locationId={activeLocation}
            onBack={handleBackFromLocation}
          />
        </main>
        <Footer />
      </div>
    );
  }

  // If viewing a service page, show the service detail view
  if (activeServicePage) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar scrolled={scrolled} />
        <main className="flex-grow">
          <ServicePage
            serviceId={activeServicePage}
            onBack={handleBackFromService}
            onServiceClick={handleServiceClick}
          />
        </main>
        <Footer />
      </div>
    );
  }

  // If viewing a blog post, show the full post view
  if (activeBlogPost) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar scrolled={scrolled} />
        <main className="flex-grow pt-16">
          <BlogPost
            postId={activeBlogPost}
            onBack={handleBackToBlog}
            onReadMore={handleReadMore}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services onServiceClick={handleServiceClick} />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="locations">
          <Locations onLocationClick={handleLocationClick} />
        </section>
        <section id="blog">
          <Blog onReadMore={handleReadMore} />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;


