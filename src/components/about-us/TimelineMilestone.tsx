import Icon from '@/components/ui/AppIcon';

interface TimelineMilestoneProps {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  isLast?: boolean;
}

export default function TimelineMilestone({
  year,
  title,
  description,
  icon,
  color,
  isLast = false,
}: TimelineMilestoneProps) {
  return (
    <div className="relative grid md:grid-cols-2 gap-12 items-center">
      <div className="md:text-right space-y-4">
        <p className={`${color} serif italic text-4xl font-bold`}>{year}</p>
        <h4 className="text-3xl font-heading font-bold">{title}</h4>
        <p className="text-muted-foreground max-w-md md:ml-auto leading-relaxed">
          {description}
        </p>
      </div>
      <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
        <div className={`w-full h-full ${color} flex items-center justify-center`}>
          <Icon name={icon as any} size={120} className="text-white opacity-20" />
        </div>
      </div>
      <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${color} border-4 border-white shadow-lg hidden md:block`} />
      {!isLast && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-24 bg-border hidden md:block" />
      )}
    </div>
  );
}