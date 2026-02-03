import Icon from '@/components/ui/AppIcon';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  authorInitial?: string;
  benefits?: string[];
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  authorInitial,
  benefits = []
}: TestimonialCardProps) {
  return (
    <div className="glass rounded-3xl p-6 md:p-12 border border-border/50 flex flex-col items-center text-center space-y-6 shadow-2xl max-w-4xl mx-auto">
      {/* Star Rating */}
      <div className="flex justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon key={`star_${star}`} name="StarIcon" size={18} className="text-warning fill-current" />
        ))}
      </div>

      {/* Quote Text */}
      <p className="text-lg md:text-xl font-heading font-medium tracking-tight italic leading-relaxed max-w-3xl text-foreground">
        "{quote}"
      </p>

      {/* Benefit Tags */}
      {benefits.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {benefits.map((benefit, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-full bg-success/20 text-success text-xs font-semibold border border-success/30"
            >
              {benefit}
            </span>
          ))}
        </div>
      )}

      {/* Author Info */}
      <div className="space-y-1 pt-2">
        <p className="text-base font-bold uppercase tracking-widest text-primary">
          {author}
        </p>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
          {role} @ {company}
        </p>
      </div>
    </div>);
}