import { Metadata } from 'next';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import CapabilitiesHeroGrid from '@/components/capabilities/CapabilitiesHeroGrid';
import CapabilitiesSidebar from '@/components/capabilities/CapabilitiesSidebar';

export const metadata: Metadata = {
  title: 'Capabilities | Aplict Solutions - AI, Analytics & BI, Application Development, Automation',
  description:
    'Our core capabilities: Artificial Intelligence, Analytics & Business Intelligence, Application Development, and Automation. Industry-specific solutions built with open source technologies. Full-stack expertise for your digital transformation journey.',
  keywords: [
    'AI Development',
    'Business Intelligence',
    'Analytics Solutions',
    'Application Development',
    'Automation Services',
    'Custom Software Development',
    'Data Analytics',
    'Machine Learning',
  ],
  openGraph: {
    title: 'Capabilities | Aplict Solutions',
    description: 'AI, Analytics & BI, Application Development, and Automation capabilities.',
    type: 'website',
    url: 'https://aplictsolutions.com/capabilities',
    images: [
      {
        url: 'https://aplictsolutions.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aplict Solutions Capabilities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capabilities | Aplict Solutions',
    description: 'AI, Analytics & BI, Application Development, and Automation capabilities.',
  },
  alternates: {
    canonical: 'https://aplictsolutions.com/capabilities',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CapabilitiesPage() {
  const capabilities = [
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      icon: 'BoltIcon',
      description: 'Unlock new possibilities and gain a competitive edge with intelligent solutions. We use AI by leveraging open source frameworks to build custom models for predictive analytics, natural language processing, computer vision amongst others.',
      process: [
        { step: 'Need Assessment', description: 'Study the client need and analyse dependencies' },
        { step: 'Model Selection', description: 'Select a fit for purpose open source AI model' },
        { step: 'Data Ingestion', description: 'Identify, collect and process raw data' },
        { step: 'Data Preparation', description: 'Clean, transform and label data' },
        { step: 'Model Training', description: 'Train the AI models using open source libraries' },
        { step: 'Model Deployment', description: 'Integrate the trained models into custom business applications' },
        { step: 'Outcome', description: 'Generate insights and automate tasks as required to satisfy the business need' },
      ],
      color: 'bg-primary',
      industries: [
        {
          name: 'Manufacturing',
          icon: 'CogIcon',
          applications: [
            'Predictive maintenance alerts integrated with equipment monitoring systems',
            'Quality control review systems for automated defect detection',
            'Purchase order optimization based on demand forecasting',
          ],
        },
        {
          name: 'Healthcare',
          icon: 'HeartIcon',
          applications: [
            'Patient data analysis for risk prediction in EHR systems',
            'Diagnostic decision support integrated with clinical workflows',
            'Treatment recommendation systems based on patient history',
          ],
        },
        {
          name: 'Retail',
          icon: 'ShoppingBagIcon',
          applications: [
            'Customer behavior prediction for personalized marketing campaigns',
            'Inventory demand forecasting integrated with POS systems',
            'Price optimization algorithms for dynamic pricing',
          ],
        },
        {
          name: 'Financial Services',
          icon: 'CurrencyDollarIcon',
          applications: [
            'Fraud detection models integrated with transaction processing',
            'Credit risk assessment for loan approval workflows',
            'Transaction anomaly alerts in banking applications',
          ],
        },
      ],
    },
    {
      id: 'analytics-bi',
      name: 'Analytics & Business Intelligence',
      icon: 'ChartBarIcon',
      description: 'Transform the raw data from business operations into actionable insights that can make a difference to the bottom line, either by predicting headwinds before they arrive and preparing mitigations, or by chasing opportunities that are beginning to emerge from changing customer preferences.',
      process: [
        { step: 'Business Analysis', description: 'Analyse the scope for change and identify upstream dependency' },
        { step: 'Data Sources', description: 'Gather data from various systems that capture relevant transactions' },
        { step: 'ETL (Extract, Transform, Load)', description: 'Process unstructured data into a data warehouse' },
        { step: 'Data Warehousing', description: 'Clean and store structured data for future use' },
        { step: 'Data Modelling', description: 'Create data models highlighting structures and relationships' },
        { step: 'Reporting & Dashboards', description: 'Generate reports with visualizations of data impact' },
        { step: 'Decision Making', description: 'Act on insights obtained from analysis of data' },
      ],
      color: 'bg-secondary',
      industries: [
        {
          name: 'Logistics',
          icon: 'TruckIcon',
          applications: [
            'Route optimization analytics integrated with fleet management systems',
            'Real-time fleet performance dashboards for operations teams',
            'Delivery time predictions based on historical data and traffic patterns',
          ],
        },
        {
          name: 'Manufacturing',
          icon: 'CogIcon',
          applications: [
            'Production efficiency metrics integrated with MES systems',
            'Supply chain visibility dashboards connecting multiple data sources',
            'Equipment utilization reports for maintenance scheduling',
          ],
        },
        {
          name: 'Retail',
          icon: 'ShoppingBagIcon',
          applications: [
            'Sales performance dashboards integrated with POS and inventory systems',
            'Customer segmentation analytics for targeted marketing campaigns',
            'Inventory turnover reports for stock management optimization',
          ],
        },
        {
          name: 'Financial Services',
          icon: 'CurrencyDollarIcon',
          applications: [
            'Payment processing analytics integrated with transaction systems',
            'Risk monitoring dashboards for compliance and fraud prevention',
            'Transaction volume trends for capacity planning and optimization',
          ],
        },
      ],
    },
    {
      id: 'app-dev',
      name: 'Application Development for Web & Mobile',
      icon: 'CodeBracketIcon',
      description: 'Build applications customized to your need that are high on UX and also robust, resilient, scalable and secure. Transform your business performance with our web and mobile solutions using the best fit choice of open source technologies that can power your business to scale up without creating any technology dependency.',
      process: [
        { step: 'Requirement Study', description: 'Understand the need by analysing the business model' },
        { step: 'Design & Architecture', description: 'Architect the application including its requisite infrastructure' },
        { step: 'Development', description: 'Use open source frameworks to build the application from the ground up' },
        { step: 'Testing', description: 'Ensure quality and functionality through exhaustive testing' },
        { step: 'Deployment', description: 'Launch the application for production use after successful user tests' },
        { step: 'Maintenance & Support', description: 'Deliver updates and bug fixes during the application lifecycle' },
      ],
      color: 'bg-accent',
      industries: [
        {
          name: 'Healthcare',
          icon: 'HeartIcon',
          applications: [
            'Patient portal integration with existing EHR and appointment systems',
            'Telehealth scheduling applications connected to provider networks',
            'Medical record management interfaces for clinical staff',
          ],
        },
        {
          name: 'Retail',
          icon: 'ShoppingBagIcon',
          applications: [
            'E-commerce platform development with payment and inventory integration',
            'Inventory management systems connected to warehouses and suppliers',
            'Order processing applications with fulfillment workflow automation',
          ],
        },
        {
          name: 'Financial Services',
          icon: 'CurrencyDollarIcon',
          applications: [
            'Banking application interfaces integrated with core banking systems',
            'Payment gateway integration for transaction processing',
            'Account management systems with real-time balance updates',
          ],
        },
        {
          name: 'Manufacturing',
          icon: 'CogIcon',
          applications: [
            'ERP integration modules connecting production, inventory, and finance',
            'Production tracking dashboards for real-time monitoring',
            'Quality control interfaces integrated with inspection systems',
          ],
        },
      ],
    },
    {
      id: 'automation',
      name: 'Automation',
      icon: 'CogIcon',
      description: 'Streamline your operations, optimize and reduce your manual efforts, improve your process throughput and increase your efficiency with intelligent use of automation across your business workflows. Our solutions leverage open source tools to automate repetitive tasks and workflows, that can lead to better and more efficient deployment of resources across your business.',
      process: [
        { step: 'Identify Tasks for Automation', description: 'Identify tasks that are manual, repetitive and rule based' },
        { step: 'Design Automation Workflow', description: 'Optimize the workflow for automation' },
        { step: 'Implement Automation', description: 'Use open source tools for implementing the optimized flow' },
        { step: 'Test & Validate', description: 'Ensure correct implementation through rigorous testing of outcomes' },
        { step: 'Monitor & Optimize', description: 'Monitor processes for deviation and further optimization' },
      ],
      color: 'bg-success',
      industries: [
        {
          name: 'Logistics',
          icon: 'TruckIcon',
          applications: [
            'Automated dispatch workflows integrated with order management systems',
            'Carrier API integrations for real-time tracking and status updates',
            'Delivery route optimization automation based on real-time conditions',
          ],
        },
        {
          name: 'Manufacturing',
          icon: 'CogIcon',
          applications: [
            'IoT device integration for automated production data collection',
            'Production line monitoring automation with alert systems',
            'Quality check workflows integrated with inspection equipment',
          ],
        },
        {
          name: 'Healthcare',
          icon: 'HeartIcon',
          applications: [
            'Insurance verification automation integrated with billing systems',
            'Billing process automation connecting claims to payment systems',
            'Appointment reminder systems integrated with scheduling platforms',
          ],
        },
        {
          name: 'Retail',
          icon: 'ShoppingBagIcon',
          applications: [
            'Inventory reorder automation based on stock levels and sales trends',
            'Price update workflows integrated with supplier and competitor data',
            'Order fulfillment automation connecting e-commerce to warehouse systems',
          ],
        },
      ],
    },
  ];

  const capabilityLinks = [
    { id: 'ai', label: 'AI', icon: 'BoltIcon' },
    { id: 'analytics-bi', label: 'Analytics & BI', icon: 'ChartBarIcon' },
    { id: 'app-dev', label: 'App Development', icon: 'CodeBracketIcon' },
    { id: 'automation', label: 'Automation', icon: 'CogIcon' },
  ];

  return (
    <>
      <CapabilitiesSidebar capabilities={capabilityLinks} />
      <main className="pb-24">
        {/* Hero Section */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-6 max-w-4xl mx-auto fade-in-up">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
              Our Core Capabilities
            </p>
            <h1 className="text-6xl md:text-8xl font-heading font-medium tracking-tighter leading-none">
              Full Stack Expertise & <span className="gradient-text">Value Creation.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We support our partners through every stage of their technology adoption journey. Our core capabilities in AI, Analytics & BI, Application Development, and Automation are tailored to your specific business needs, helping you drive performance and transform operations.
            </p>
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CapabilitiesHeroGrid />
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      {capabilities.map((capability, index) => (
        <section
          key={capability.id}
          id={capability.id}
          className={`py-32 ${index % 2 === 0 ? 'bg-background' : 'bg-background-alt'} scroll-reveal`}
        >
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            {/* Capability Header */}
            <div className="text-center space-y-8">
              <div className={`inline-flex items-center justify-center size-24 rounded-3xl ${capability.color} mx-auto`}>
                <Icon name={capability.icon as any} size={56} className="text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
                  {capability.name}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>

            {/* Process Steps */}
            <div className="soft-card p-12">
              <h3 className="text-3xl font-heading font-bold mb-8 text-center">
                How Our {capability.name} Works
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capability.process.map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`size-10 rounded-full ${capability.color} flex items-center justify-center shrink-0`}>
                        <span className="text-white font-bold text-sm">{idx + 1}</span>
                      </div>
                      <h4 className="font-bold text-lg">{item.step}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-[52px]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Approach */}
            <div className="bg-gradient-to-br from-background-alt/50 to-background/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Technology Approach</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We leverage the best-fit open source technologies and modern frameworks to build robust, scalable solutions. Our technology selection is always driven by your specific requirements, ensuring optimal performance, maintainability, and future scalability.
              </p>
            </div>

            {/* Industry Applications */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-heading font-bold">
                  Industry <span className="serif italic text-primary">Applications.</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Real-world applications of {capability.name} integrated with existing systems and workflows
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {capability.industries.map((industry, idx) => (
                  <div key={idx} className="relative bg-background-alt/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-6 group hover:border-primary/30 transition-all overflow-hidden">
                    {/* Background Icon - Large, Primary Color, 50% Visible */}
                    <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-300 overflow-hidden">
                      <div className="absolute -top-12 -right-12">
                        <Icon name={industry.icon as any} size={192} className="text-primary" />
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <h4 className="font-bold text-xl mb-6">{industry.name}</h4>
                      <div className="space-y-3">
                        {industry.applications.map((application, appIdx) => (
                          <div key={appIdx} className="flex items-start gap-3">
                            <Icon name="CheckCircleIcon" size={20} className="text-success shrink-0 mt-0.5" />
                            <p className="text-sm text-foreground/90 leading-relaxed">{application}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Value Creation Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
              Value Creation
            </p>
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
              Your Technology Partner for <span className="serif italic text-primary">All Seasons.</span>
            </h2>
          </div>
          <div className="max-w-5xl mx-auto soft-card p-12 text-center space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              The value that we create for your business through our services shall be the key mutual takeaway from our relation, ensuring that we become your technology partner for all seasons and remain engaged in your continued success now and into the future.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-8">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary whitespace-nowrap">Diagnosis</div>
                <p className="text-sm text-muted-foreground">Deep Analysis</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-secondary whitespace-nowrap">Design</div>
                <p className="text-sm text-muted-foreground">Architecture Planning</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-accent whitespace-nowrap">Development</div>
                <p className="text-sm text-muted-foreground">Open Source Build</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-success whitespace-nowrap">Deployment</div>
                <p className="text-sm text-muted-foreground">Zero Disruption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background-alt">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
              Ready to Leverage Our <span className="serif italic text-primary">Capabilities?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's discuss how our core capabilities can transform your business operations and drive growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact-us" className="btn btn-primary flex items-center justify-center gap-2">
              Start Your Project
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <Link href="/solutions" className="btn btn-outline">
              View Our Solutions
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
