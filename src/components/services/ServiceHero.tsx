import Icon from '@/components/ui/AppIcon';

interface ServiceHeroProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export default function ServiceHero({ icon, title, description, bgColor }: ServiceHeroProps) {
  return (
    <div className={`${bgColor} p-12 md:p-16 rounded-[3rem] text-center space-y-8`}>
      <div className="size-24 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto">
        <Icon name={icon as any} size={56} className="text-white" />
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight">
          {title}
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}