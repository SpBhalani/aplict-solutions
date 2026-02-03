import Icon from '@/components/ui/AppIcon';

interface TimelineStep {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export default function ProcessTimeline() {
  const steps: TimelineStep[] = [
    {
      id: 'step_diagnosis',
      icon: 'MagnifyingGlassIcon',
      title: 'Diagnosis',
      description: 'Deep dive into your technical landscape, pain points, and business goals. Identify bottlenecks and structural gaps.',
      color: 'bg-primary',
    },
    {
      id: 'step_design',
      icon: 'PencilSquareIcon',
      title: 'Design',
      description: 'Architecture planning, technology selection, and roadmap creation using open source best practices.',
      color: 'bg-secondary',
    },
    {
      id: 'step_development',
      icon: 'CodeBracketIcon',
      title: 'Development',
      description: 'Build from the ground up using open source frameworks. Agile sprints with continuous integration.',
      color: 'bg-accent',
    },
    {
      id: 'step_deployment',
      icon: 'RocketLaunchIcon',
      title: 'Deployment',
      description: 'Zero-downtime deployment with comprehensive monitoring. Launch for production use after successful tests.',
      color: 'bg-accent-2',
    },
  ];

  return (
    <div className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
            Our Process
          </p>
          <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
            Supporting Every Stage of Your <span className="serif italic text-primary">Technology Journey.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 size-6 rounded-full bg-background border-4 border-primary z-10" />

                <div className="pt-16 space-y-6 text-center">
                  <div className={`size-20 rounded-2xl ${step.color} flex items-center justify-center mx-auto shadow-lg`}>
                    <Icon name={step.icon as any} size={40} className="text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-heading font-bold">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}