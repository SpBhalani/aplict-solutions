import Icon from '@/components/ui/AppIcon';

interface ServicePillarCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export default function ServicePillarCard({
  icon,
  title,
  description,
  features,
  index,
}: ServicePillarCardProps) {
  return (
    <div
      className="bg-background border border-border/50 p-12 space-y-8 rounded-3xl hover:border-primary/30 hover:shadow-lg transition-all group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
        <Icon name={icon as any} size={32} className="text-primary group-hover:text-white transition-colors duration-500" />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-heading font-bold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed font-medium">
          {description}
        </p>
      </div>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={`feature_${index}_${idx}`} className="flex items-start gap-3 text-sm">
            <Icon name="CheckCircleIcon" size={20} className="text-success shrink-0 mt-0.5" />
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}