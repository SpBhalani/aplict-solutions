'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceLink {
  id: string;
  label: string;
  icon: string;
}

interface ServicesSidebarProps {
  services: ServiceLink[];
}

export default function ServicesSidebar({ services }: ServicesSidebarProps) {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header
      
      // Find which section is currently in view
      for (let i = services.length - 1; i >= 0; i--) {
        const element = document.getElementById(services[i].id);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            setActiveSection(services[i].id);
            return;
          }
        }
      }
      
      // If no section found, set first one as active
      if (services.length > 0) {
        setActiveSection(services[0].id);
      }
    };

    // Initial check
    updateActiveSection();

    // Observer for more precise detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0, 0.2, 0.5], rootMargin: '-120px 0px -50% 0px' }
    );

    // Observe all service sections
    services.forEach((service) => {
      const element = document.getElementById(service.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Also listen to scroll for fallback
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, [services]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div 
      className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        isScrolled ? 'bottom-6' : 'bottom-6'
      }`}
    >
      <div className="glass rounded-full px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 flex items-center gap-2 md:gap-3 shadow-2xl border border-white/10 backdrop-blur-xl">
        {services.map((service) => {
          const isActive = activeSection === service.id;
          return (
            <button
              key={service.id}
              onClick={() => scrollToSection(service.id)}
              className={`relative flex items-center gap-2 px-2.5 py-2 md:px-3 md:py-2.5 lg:px-4 lg:py-2.5 rounded-full transition-all duration-300 group ${
                isActive
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'hover:bg-white/10 text-muted-foreground hover:text-foreground'
              }`}
              title={service.label}
              aria-label={service.label}
            >
              <Icon name={service.icon as any} size={18} className="md:w-5 md:h-5 shrink-0" />
              {/* Show label on larger screens */}
              <span className="hidden lg:block text-xs md:text-sm font-semibold whitespace-nowrap">
                {service.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}