import Icon from '@/components/ui/AppIcon';

interface Insight {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  points: string[];
}

export default function ExpertiseInsights() {
  const insights: Insight[] = [
    {
      id: 'insight_technical_debt',
      title: 'Understanding Technical Debt',
      description: 'Technical debt isn\'t just about old code—it\'s a strategic business challenge that compounds over time, affecting scalability, security, and innovation velocity.',
      icon: 'ExclamationTriangleIcon',
      color: 'text-warning',
      points: [
        'Accumulated technical debt can reduce development velocity by up to 50%',
        'Legacy systems often consume 60-80% of IT budgets for maintenance',
        'Modernization ROI typically realized within 12-18 months post-deployment',
        'Open source technologies reduce vendor lock-in and long-term costs'
      ],
    },
    {
      id: 'insight_performance',
      title: 'Performance as a Business Metric',
      description: 'Application performance directly impacts revenue, user experience, and operational costs. Slow systems don\'t just frustrate users—they impact your bottom line.',
      icon: 'ChartBarIcon',
      color: 'text-primary',
      points: [
        '1 second delay can reduce conversions by up to 7%',
        'Database optimization can reduce infrastructure costs by 30-40%',
        'Proper caching strategies can improve response times by 10x',
        'Monitoring and observability prevent 80% of production issues'
      ],
    },
    {
      id: 'insight_transformation',
      title: 'Digital Transformation Strategy',
      description: 'Successful digital transformation requires more than technology adoption—it demands cultural change, process reengineering, and strategic alignment across the organization.',
      icon: 'LightBulbIcon',
      color: 'text-accent',
      points: [
        '70% of digital transformations fail due to lack of clear strategy',
        'Incremental modernization reduces risk by 60% vs. big-bang approaches',
        'Data-driven decision making increases transformation success by 3x',
        'Open source platforms provide flexibility for future pivots'
      ],
    },
    {
      id: 'insight_architecture',
      title: 'Architecture That Scales',
      description: 'Building for scale isn\'t about adding more servers—it\'s about designing systems that can grow organically while maintaining performance and reliability.',
      icon: 'CogIcon',
      color: 'text-success',
      points: [
        'Microservices architecture enables independent scaling of components',
        'Container orchestration reduces deployment time by 75%',
        'Event-driven architectures improve system resilience and decoupling',
        'Cloud-native design patterns optimize resource utilization'
      ],
    },
  ];

  return (
    <div className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
            Deep Understanding
          </p>
          <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
            Insights from <span className="serif italic text-primary">Experience.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Years of working with diverse technology stacks and business challenges have given us deep insights into what works, what doesn't, and why.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <div
              key={insight.id}
              className="group bg-background-alt/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="size-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: insight.color === 'text-warning' ? 'rgba(251, 191, 36, 0.1)' :
                                   insight.color === 'text-primary' ? 'rgba(29, 150, 137, 0.1)' :
                                   insight.color === 'text-accent' ? 'rgba(53, 136, 255, 0.1)' :
                                   'rgba(29, 226, 137, 0.1)'
                  }}
                >
                  <Icon name={insight.icon as any} size={24} className={insight.color} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-2">{insight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{insight.description}</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border/50">
                {insight.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={18} className="text-success shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Icon name="AcademicCapIcon" size={48} className="text-primary mx-auto" />
            <h3 className="text-3xl font-heading font-bold">
              Our Approach: <span className="serif italic text-primary">Evidence-Based Solutions</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Every project we undertake is informed by these insights. We don't just implement technology—we architect solutions that address root causes, anticipate future needs, and deliver measurable business value. Our deep understanding of both technology and business dynamics allows us to make informed decisions that balance innovation with pragmatism.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border">
                <Icon name="CheckCircleIcon" size={16} className="text-success" />
                <span className="text-sm font-semibold">Data-Driven Decisions</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border">
                <Icon name="CheckCircleIcon" size={16} className="text-success" />
                <span className="text-sm font-semibold">Proven Methodologies</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border">
                <Icon name="CheckCircleIcon" size={16} className="text-success" />
                <span className="text-sm font-semibold">Strategic Thinking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
