'use client';

import Icon from '@/components/ui/AppIcon';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

function ServiceCard({ icon, title, description, color, onClick }: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={`${color} p-8 rounded-3xl text-white text-left transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer`}
    >
      <div className="space-y-4">
        <div className="size-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon name={icon as any} size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-heading font-bold">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed">{description}</p>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span>Learn More</span>
          <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>
  );
}

export default function ServicesHeroGrid() {
  const services = [
    {
      id: 'performance-optimization',
      icon: 'BoltIcon',
      title: 'Performance Optimization',
      description: 'Identify bottlenecks and implement strategic optimizations to enhance speed, scalability, and efficiency.',
      color: 'bg-gradient-to-br from-primary to-accent',
    },
    {
      id: 'digital-transformation',
      icon: 'CpuChipIcon',
      title: 'Digital Transformation',
      description: 'Comprehensive strategy to integrate technology into all areas of your business.',
      color: 'bg-gradient-to-br from-secondary to-accent-2',
    },
    {
      id: 'legacy-modernization',
      icon: 'ArrowPathIcon',
      title: 'Legacy Modernization',
      description: 'Transform outdated systems into modern, agile, and scalable platforms without disruption.',
      color: 'bg-gradient-to-br from-accent to-success',
    },
    {
      id: 'systems-audit',
      icon: 'MagnifyingGlassIcon',
      title: 'Systems Audit & Design',
      description: 'Comprehensive audit and design of future-proof architectures using open source best practices.',
      color: 'bg-gradient-to-br from-primary to-secondary',
    },
  ];

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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
          onClick={() => scrollToSection(service.id)}
        />
      ))}
    </div>
  );
}