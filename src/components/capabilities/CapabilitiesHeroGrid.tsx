'use client';

import Icon from '@/components/ui/AppIcon';

interface CapabilityCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

function CapabilityCard({ icon, title, description, color, onClick }: CapabilityCardProps) {
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

export default function CapabilitiesHeroGrid() {
  const capabilities = [
    {
      id: 'ai',
      icon: 'BoltIcon',
      title: 'Artificial Intelligence',
      description: 'Unlock new possibilities with intelligent solutions. Custom AI models for predictive analytics, NLP, and computer vision.',
      color: 'bg-gradient-to-br from-primary to-accent',
    },
    {
      id: 'analytics-bi',
      icon: 'ChartBarIcon',
      title: 'Analytics & BI',
      description: 'Transform raw data into actionable insights. Clear visibility into operations and markets for informed decision making.',
      color: 'bg-gradient-to-br from-secondary to-accent-2',
    },
    {
      id: 'app-dev',
      icon: 'CodeBracketIcon',
      title: 'Application Development',
      description: 'Build robust, scalable web and mobile applications using open source technologies. High on UX, secure, and scalable.',
      color: 'bg-gradient-to-br from-accent to-success',
    },
    {
      id: 'automation',
      icon: 'CogIcon',
      title: 'Automation',
      description: 'Streamline operations and reduce manual efforts. Intelligent automation across business workflows using open source tools.',
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
      {capabilities.map((capability) => (
        <CapabilityCard
          key={capability.id}
          {...capability}
          onClick={() => scrollToSection(capability.id)}
        />
      ))}
    </div>
  );
}
