import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: string;
  name: string;
  custom: boolean;
  legacy: boolean;
  managed: boolean;
}

export default function ComparisonTable() {
  const features: Feature[] = [
    {
      id: 'feature_dedicated_team',
      name: 'Dedicated Development Team',
      custom: true,
      legacy: true,
      managed: true,
    },
    {
      id: 'feature_agile_sprints',
      name: 'Agile 2-Week Sprints',
      custom: true,
      legacy: false,
      managed: false,
    },
    {
      id: 'feature_24_7_support',
      name: '24/7 Monitoring & Support',
      custom: false,
      legacy: false,
      managed: true,
    },
    {
      id: 'feature_sla_guarantee',
      name: '99.9% Uptime SLA',
      custom: false,
      legacy: true,
      managed: true,
    },
    {
      id: 'feature_zero_downtime',
      name: 'Zero-Downtime Deployment',
      custom: true,
      legacy: true,
      managed: true,
    },
    {
      id: 'feature_monthly_releases',
      name: 'Monthly Feature Releases',
      custom: true,
      legacy: false,
      managed: true,
    },
    {
      id: 'feature_code_review',
      name: 'Comprehensive Code Review',
      custom: true,
      legacy: true,
      managed: false,
    },
    {
      id: 'feature_performance_optimization',
      name: 'Proactive Performance Optimization',
      custom: false,
      legacy: true,
      managed: true,
    },
  ];

  return (
    <div className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
            Service Comparison
          </p>
          <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
            Find Your Perfect <span className="serif italic text-primary">Fit.</span>
          </h2>
        </div>

        <div className="soft-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-heading font-bold text-lg">Feature</th>
                  <th className="text-center p-6 font-heading font-bold text-lg text-primary">
                    Custom Dev
                  </th>
                  <th className="text-center p-6 font-heading font-bold text-lg text-secondary">
                    Legacy Mod
                  </th>
                  <th className="text-center p-6 font-heading font-bold text-lg text-accent">
                    Managed ADM
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr key={feature.id} className="border-b border-border last:border-0 hover:bg-black/5 transition-colors">
                    <td className="p-6 font-medium">{feature.name}</td>
                    <td className="p-6 text-center">
                      {feature.custom ? (
                        <Icon name="CheckCircleIcon" size={24} className="text-success mx-auto" />
                      ) : (
                        <Icon name="XCircleIcon" size={24} className="text-muted mx-auto opacity-30" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {feature.legacy ? (
                        <Icon name="CheckCircleIcon" size={24} className="text-success mx-auto" />
                      ) : (
                        <Icon name="XCircleIcon" size={24} className="text-muted mx-auto opacity-30" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {feature.managed ? (
                        <Icon name="CheckCircleIcon" size={24} className="text-success mx-auto" />
                      ) : (
                        <Icon name="XCircleIcon" size={24} className="text-muted mx-auto opacity-30" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}