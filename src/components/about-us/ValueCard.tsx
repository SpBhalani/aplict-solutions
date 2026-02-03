import Icon from '@/components/ui/AppIcon';

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export default function ValueCard({ icon, title, description, color }: ValueCardProps) {
  return (
    <div className="soft-card p-12 space-y-8 text-center group hover:border-primary/20 transition-all">
      <div className={`size-20 rounded-3xl ${color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
        <Icon name={icon as any} size={40} className="text-white" />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-heading font-bold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}