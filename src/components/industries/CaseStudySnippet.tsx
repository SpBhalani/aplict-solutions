import Icon from '@/components/ui/AppIcon';

interface CaseStudySnippetProps {
  industry: string;
  company: string;
  challenge: string;
  result: string;
  metric: string;
  metricValue: string;
  color: string;
}

export default function CaseStudySnippet({
  industry,
  company,
  challenge,
  result,
  metric,
  metricValue,
  color,
}: CaseStudySnippetProps) {
  return (
    <div className="soft-card p-10 space-y-6 hover:border-primary/20 transition-all">
      <div className="flex items-start justify-between">
        <div className={`px-4 py-2 rounded-full ${color} text-white text-xs font-bold uppercase tracking-widest`}>
          {industry}
        </div>
        <Icon name="ArrowTopRightOnSquareIcon" size={24} className="text-muted-foreground" />
      </div>

      <div>
        <h4 className="text-2xl font-heading font-bold mb-2">{company}</h4>
        <p className="text-sm text-muted-foreground">{challenge}</p>
      </div>

      <div className="p-6 bg-success/5 border border-success/20 rounded-2xl">
        <p className="text-sm text-foreground mb-4">{result}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-success">{metricValue}</span>
          <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
            {metric}
          </span>
        </div>
      </div>
    </div>
  );
}