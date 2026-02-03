import { Metadata } from 'next';
import ServicesHeroGrid from '@/components/services/ServicesHeroGrid';
import ServicesSidebar from '@/components/services/ServicesSidebar';
import ServiceHero from '@/components/services/ServiceHero';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import ExpertiseInsights from '@/components/services/ExpertiseInsights';
import TechStackGrid from '@/components/services/TechStackGrid';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions | Aplict Solutions - Performance Optimization, Digital Transformation, Legacy Modernization',
  description:
    'Transform your business with our solutions: Performance Optimization, Digital Transformation, Legacy Modernization, and Systems Audit & Design. Built on open source technologies. Solve operational bottlenecks and scale your business.',
  keywords: [
    'Performance Optimization',
    'Digital Transformation',
    'Legacy Modernization',
    'Systems Audit',
    'IT Consulting',
    'Software Modernization',
    'Technical Debt Solutions',
    'Business Transformation',
  ],
  openGraph: {
    title: 'Solutions | Aplict Solutions',
    description: 'Performance Optimization, Digital Transformation, Legacy Modernization, and Systems Audit & Design.',
    type: 'website',
    url: 'https://aplictsolutions.com/solutions',
    images: [
      {
        url: 'https://aplictsolutions.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aplict Solutions Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions | Aplict Solutions',
    description: 'Performance Optimization, Digital Transformation, Legacy Modernization, and Systems Audit & Design.',
  },
  alternates: {
    canonical: 'https://aplictsolutions.com/solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SolutionsPage() {
  const solutionLinks = [
    { id: 'performance-optimization', label: 'Performance Optimization', icon: 'BoltIcon' },
    { id: 'digital-transformation', label: 'Digital Transformation', icon: 'CpuChipIcon' },
    { id: 'legacy-modernization', label: 'Legacy Modernization', icon: 'ArrowPathIcon' },
    { id: 'systems-audit', label: 'Systems Audit & Design', icon: 'MagnifyingGlassIcon' },
  ];

  return (
    <>
      <ServicesSidebar services={solutionLinks} />
      <main className="pb-24">
        {/* Hero Section */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-6 max-w-4xl mx-auto fade-in-up">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                Our Solutions
              </p>
              <h1 className="text-6xl md:text-8xl font-heading font-medium tracking-tighter leading-none">
                Solving Operational <span className="gradient-text">Bottlenecks.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                There will always be a time when your past investments in technology will become inconsequential for fulfilling present day needs because of continuous growth and churn in business. We act as the catalyst for evolution by walking together with you as partners in this transformation program.
              </p>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <ServicesHeroGrid />
            </div>
          </div>
        </section>

        {/* Performance Optimization Deep Dive */}
        <section id="performance-optimization" className="py-32 bg-background scroll-reveal">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <ServiceHero
              icon="BoltIcon"
              title="Performance Optimization"
              description="Is your system running slow? We identify bottlenecks and implement strategic optimizations to enhance the speed, scalability, and efficiency of your applications and infrastructure."
              bgColor="bg-gradient-to-br from-primary to-accent"
            />

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h3 className="text-4xl font-heading font-bold">
                  Strategic <span className="serif italic text-primary">Optimization.</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We leverage open source monitoring tools to identify performance triggers and implement optimizations that enhance speed, scalability, and efficiency across your entire technology stack.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">System Audit & Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        Study system performance using open source monitoring tools and identify triggers for deviation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Code Optimization</h4>
                      <p className="text-sm text-muted-foreground">
                        Refine or rebuild the application code for efficiency and better performance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Database Optimization</h4>
                      <p className="text-sm text-muted-foreground">
                        Improve database structures for faster query processing speeds.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Infrastructure Scaling</h4>
                      <p className="text-sm text-muted-foreground">
                        Utilize open source containerization such as Docker and Kubernetes for scalability.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="soft-card p-12 space-y-8">
                <h4 className="text-2xl font-heading font-bold">Leveraged Capabilities</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name="ChartBarIcon" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Analytics & BI</p>
                      <p className="text-sm text-muted-foreground">
                        For monitoring and analysis of system performance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name="CodeBracketIcon" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Application Development</p>
                      <p className="text-sm text-muted-foreground">
                        For code and database optimization
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                      <Icon name="CogIcon" size={24} className="text-success" />
                    </div>
                    <div>
                      <p className="font-bold">Automation</p>
                      <p className="text-sm text-muted-foreground">
                        For infrastructure scaling and continuous monitoring
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Transformation Deep Dive */}
        <section id="digital-transformation" className="py-32 bg-background-alt scroll-reveal">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <ServiceHero
              icon="CpuChipIcon"
              title="Digital Transformation"
              description="Embrace the digital era with a comprehensive strategy to integrate technology into all areas of your business, fundamentally changing how you operate and deliver value to customers."
              bgColor="bg-gradient-to-br from-secondary to-accent-2"
            />

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="soft-card p-12 space-y-8">
                <h4 className="text-2xl font-heading font-bold">Transformation Journey</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <span className="text-secondary font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-bold">Strategy & Vision</p>
                      <p className="text-sm text-muted-foreground">
                        Define clear goals for digital transformation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <span className="text-secondary font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-bold">Process Reengineering</p>
                      <p className="text-sm text-muted-foreground">
                        Modernize existing workflows
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <span className="text-secondary font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-bold">Technology Adoption</p>
                      <p className="text-sm text-muted-foreground">
                        Implement open source platforms and cloud native applications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                      <Icon name="RocketLaunchIcon" size={24} className="text-success" />
                    </div>
                    <div>
                      <p className="font-bold">Continuous Innovation</p>
                      <p className="text-sm text-muted-foreground">
                        Leverage AI and Automation for ongoing improvements
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-4xl font-heading font-bold">
                  Comprehensive <span className="serif italic text-secondary">Strategy.</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our digital transformation approach integrates technology into all areas of your business, fundamentally changing how you operate and deliver value. We ensure seamless adoption with zero disruption to your operations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Data Driven Culture</h4>
                      <p className="text-sm text-muted-foreground">
                        Integrate Analytics & BI for informed decision making at every step.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Customer Experience Enhancement</h4>
                      <p className="text-sm text-muted-foreground">
                        Develop user centric applications that delight your customers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Open Source Foundation</h4>
                      <p className="text-sm text-muted-foreground">
                        Build on open source platforms to avoid vendor lock-in and reduce costs.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Leveraged Capabilities:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">AI</span>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">Analytics & BI</span>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">Application Development</span>
                    <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold">Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Modernization Deep Dive */}
        <section id="legacy-modernization" className="py-32 bg-background scroll-reveal">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <ServiceHero
              icon="ArrowPathIcon"
              title="Legacy Modernization"
              description="Future proof your business by transforming outdated legacy systems into modern, agile, and scalable platforms. We help you migrate, refactor, and re-architect applications using open source technologies without disrupting your operations."
              bgColor="bg-gradient-to-br from-accent to-success"
            />

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h3 className="text-4xl font-heading font-bold">
                  Zero-Disruption <span className="serif italic text-accent">Migration.</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our philosophy ensures that there is never any disruption in your daily operations. We prepare a base that is robust, resilient, scalable and secure, then layer in the innovations gradually.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Assessment & Discovery</h4>
                      <p className="text-sm text-muted-foreground">
                        Analyse existing legacy systems to understand dependencies and risks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Modernization Planning</h4>
                      <p className="text-sm text-muted-foreground">
                        Define target architecture using open source alternatives.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Re-platforming & Re-factoring</h4>
                      <p className="text-sm text-muted-foreground">
                        Migrate to cloud or containerize, update code while maintaining functionality.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Integration & Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Connect modernized systems with new services and provide ongoing support.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="soft-card p-12 space-y-8">
                <h4 className="text-2xl font-heading font-bold">Leveraged Capabilities</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon name="CodeBracketIcon" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-bold">Application Development</p>
                      <p className="text-sm text-muted-foreground">
                        For re-architecting and refactoring legacy systems
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                      <Icon name="CogIcon" size={24} className="text-success" />
                    </div>
                    <div>
                      <p className="font-bold">Automation</p>
                      <p className="text-sm text-muted-foreground">
                        For seamless migration and deployment processes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name="ChartBarIcon" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Analytics & BI</p>
                      <p className="text-sm text-muted-foreground">
                        For post migration monitoring and performance tracking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Systems Audit & Design Deep Dive */}
        <section id="systems-audit" className="py-32 bg-background-alt scroll-reveal">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <ServiceHero
              icon="MagnifyingGlassIcon"
              title="Systems Audit & Design"
              description="Ensure the integrity, security and efficiency of your IT infrastructure with our comprehensive systems audit and design services. We provide expert analysis and design future proof architectures using open source best practices."
              bgColor="bg-gradient-to-br from-primary to-secondary"
            />

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="soft-card p-12 space-y-8">
                <h4 className="text-2xl font-heading font-bold">Audit & Design Process</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-bold">Current State Analysis</p>
                      <p className="text-sm text-muted-foreground">
                        Review existing systems and identify gaps
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-bold">Requirement Definition</p>
                      <p className="text-sm text-muted-foreground">
                        Define functional and non-functional needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-bold">Architecture Design</p>
                      <p className="text-sm text-muted-foreground">
                        Propose new system architecture using open source components
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                      <Icon name="ShieldCheckIcon" size={24} className="text-success" />
                    </div>
                    <div>
                      <p className="font-bold">Security & Performance</p>
                      <p className="text-sm text-muted-foreground">
                        Evaluate vulnerabilities and test against performance metrics
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-4xl font-heading font-bold">
                  Future-Proof <span className="serif italic text-primary">Architecture.</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide comprehensive analysis and design future-proof architectures using open source best practices. Our approach ensures your systems are robust, secure, and ready for future growth.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Security Assessment</h4>
                      <p className="text-sm text-muted-foreground">
                        Evaluate vulnerabilities and recommend safeguards using industry best practices.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Performance Benchmarking</h4>
                      <p className="text-sm text-muted-foreground">
                        Test system against performance metrics to ensure optimal efficiency.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} className="text-success shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Roadmap & Recommendations</h4>
                      <p className="text-sm text-muted-foreground">
                        Deliver detailed plan for implementation with clear milestones.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Leveraged Capabilities:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Analytics & BI</span>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">Application Development</span>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <ProcessTimeline />

        {/* Tech Stack */}
        <TechStackGrid />

        {/* Expertise Insights */}
        <ExpertiseInsights />

        {/* CTA Section */}
        <section className="py-32 bg-background-alt">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
                Ready to <span className="serif italic text-primary">Transform?</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get in touch and let's discuss how our solutions can accelerate your business goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact-us" className="btn btn-primary flex items-center justify-center gap-2">
                Start Your Project
                <Icon name="ArrowRightIcon" size={20} />
              </Link>
              <Link href="/capabilities" className="btn btn-outline">
                View Our Capabilities
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
