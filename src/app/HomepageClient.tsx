'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AnimatedHero from '@/components/home/AnimatedHero';
import ServicePillarCard from '@/components/home/ServicePillarCard';
import StatsSection from '@/components/home/StatsSection';
import ClientLogoWall from '@/components/home/ClientLogoWall';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import CTASection from '@/components/home/CTASection';
import GrowWithUsSection from '@/components/home/GrowWithUsSection';
import TypewriterHeadline from '@/components/home/TypewriterHeadline';
import Icon from '@/components/ui/AppIcon';
import JsonLd from '@/components/seo/JsonLd';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function HomepageClient() {
  // Sync mask with circle positions in real-time using requestAnimationFrame
  useEffect(() => {
    const gridElement = document.getElementById('hero-static-grid');
    const circle1 = document.getElementById('hero-circle-1');
    const circle2 = document.getElementById('hero-circle-2');
    
    if (!gridElement || !circle1 || !circle2) return;
    
    const updateMask = () => {
      const style1 = window.getComputedStyle(circle1);
      const style2 = window.getComputedStyle(circle2);
      const transform1 = style1.transform;
      const transform2 = style2.transform;
      
      // Parse transform matrix to get translate values
      const getTranslate = (transform: string) => {
        if (transform === 'none') return { x: 0, y: 0 };
        const matrix = transform.match(/matrix\(([^)]+)\)/);
        if (matrix) {
          const values = matrix[1].split(',').map(v => parseFloat(v.trim()));
          return { x: values[4] || 0, y: values[5] || 0 };
        }
        return { x: 0, y: 0 };
      };
      
      const translate1 = getTranslate(transform1);
      const translate2 = getTranslate(transform2);
      
      gridElement.style.setProperty('--mask-1-x', `${translate1.x}px`);
      gridElement.style.setProperty('--mask-1-y', `${translate1.y}px`);
      gridElement.style.setProperty('--mask-2-x', `${translate2.x}px`);
      gridElement.style.setProperty('--mask-2-y', `${translate2.y}px`);
    };
    
    // Update on every frame for smooth animation
    let animationFrameId: number;
    const animate = () => {
      updateMask();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const servicePillars = [
    {
      icon: 'BoltIcon',
      title: 'Performance Optimization',
      description:
        'Identify bottlenecks and implement strategic optimizations to enhance the speed, scalability, and efficiency of your applications and infrastructure.',
      features: [
        'System audit & analysis using open source tools',
        'Code and database optimization',
        'Infrastructure scaling with Docker & Kubernetes',
        'Continuous monitoring and reporting',
      ],
    },
    {
      icon: 'CpuChipIcon',
      title: 'Digital Transformation',
      description:
        'Comprehensive strategy to integrate technology into all areas of your business, fundamentally changing how you operate and deliver value.',
      features: [
        'Process reengineering and modernization',
        'Open source platform implementation',
        'Data-driven culture integration',
        'AI and automation for continuous innovation',
      ],
    },
    {
      icon: 'ArrowPathIcon',
      title: 'Legacy Modernization',
      description:
        'Future proof your business by transforming outdated legacy systems into modern, agile, and scalable platforms without disruption.',
      features: [
        'Assessment and discovery of legacy systems',
        'Modernization planning with open source alternatives',
        'Re-platforming and re-factoring',
        'Integration and ongoing support',
      ],
    },
  ];

  // Homepage structured data
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Aplict Solutions - Custom Software Development',
    description:
      'Custom software development agency specializing in AI, Analytics & BI, Application Development, and Automation. Transform technical debt into competitive advantage.',
    url: 'https://aplictsolutions.com',
    mainEntity: {
      '@type': 'Organization',
      name: 'Aplict Solutions',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://aplictsolutions.com',
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={homepageSchema} />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://aplictsolutions.com' }]} />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-32 hero-bg-elegant relative">
          {/* Static Grid Layer - Only visible through circles */}
          <div className="hero-static-grid" id="hero-static-grid" />
          
          {/* Animated Circular Gradient Orbs - Colored circles only, NO grid */}
          <div className="hero-grid-circle hero-circle-1" id="hero-circle-1">
            <div className="hero-circle-gradient" />
          </div>
          
          <div className="hero-grid-circle hero-circle-2" id="hero-circle-2">
            <div className="hero-circle-gradient" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12 hero-content relative z-10">
            <div className="space-y-6 max-w-4xl mx-auto fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-black/5 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold tracking-widest uppercase">
                  Custom Software Development
                </span>
              </div>

              <div className="transition-all duration-500 ease-in-out">
                <TypewriterHeadline
                  headlines={[
                    { text: 'Innovating Your Digital Future', highlightStart: 16, highlightEnd: 30 },
                    { text: 'Transforming Technical Debt Into Competitive Advantage', highlightStart: 33, highlightEnd: 54 },
                    { text: 'Empowering Businesses with Open Source Technologies', highlightStart: 27, highlightEnd: 51 },
                  ]}
                  typingSpeed={60}
                  deletingSpeed={40}
                  pauseTime={1500}
                />
              </div>

              <div className="transition-all duration-500 ease-in-out">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                  We empower businesses to thrive in the digital age with our cutting edge IT application development and maintenance services architected using open source technologies that are benchmarked to industry standards and optimized to your business needs.
              </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link href="/contact-us" className="btn btn-primary flex items-center gap-2">
                Start Your Project
                <Icon name="ArrowRightIcon" size={20} />
              </Link>
              <Link href="/blueprint" className="btn btn-outline">
                View Case Studies
              </Link>
            </div>

            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <AnimatedHero />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Problem/Solution Section */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-destructive font-bold uppercase tracking-[0.3em] text-xs">
                  The Challenge
                </p>
                <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight">
                  Operational <span className="serif italic text-destructive">Bottlenecks.</span>
                </h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <Icon name="ExclamationTriangleIcon" size={24} className="text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Past Technology Investments</h4>
                    <p className="text-muted-foreground">
                      Your past investments in technology become inconsequential for fulfilling present day needs because of continuous growth and churn in business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <Icon name="ClockIcon" size={24} className="text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Operational Chaos</h4>
                    <p className="text-muted-foreground">
                      Remaining stuck in operational chaos of the past is the greatest bottleneck to transforming your business to a vision of the future.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <Icon name="XCircleIcon" size={24} className="text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Technology Debt</h4>
                    <p className="text-muted-foreground">
                      Legacy systems limiting innovation and growth, preventing you from competing effectively in the digital age.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-success font-bold uppercase tracking-[0.3em] text-xs">
                  The Solution
                </p>
                <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight">
                  Your Strategic <span className="serif italic text-success">Partner.</span>
                </h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <Icon name="CheckCircleIcon" size={24} className="text-success" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Identifying Bottlenecks</h4>
                    <p className="text-muted-foreground">
                      Pinpointing the structural gaps holding you back and creating clean data and operational structures to be AI-ready.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <Icon name="BoltIcon" size={24} className="text-success" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Scalable Growth</h4>
                    <p className="text-muted-foreground">
                      Designing software that scales as your business expands. Building foundations that are robust, resilient, scalable and secure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <Icon name="RocketLaunchIcon" size={24} className="text-success" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Zero Disruption</h4>
                    <p className="text-muted-foreground">
                      We ensure there is never any disruption in your daily operations. Technology adoption journey is seamless and incredibly easy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-32 bg-background-alt">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            <div className="text-center space-y-4">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                Our Solutions
              </p>
              <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
                Solving Operational <span className="serif italic text-primary">Bottlenecks.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform your business with our solutions: Performance Optimization, Digital Transformation, Legacy Modernization, and Systems Audit & Design.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {servicePillars.map((pillar, index) => (
                <ServicePillarCard key={`pillar_${index}`} {...pillar} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            <div className="text-center space-y-4">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                Our Core Capabilities
              </p>
              <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
                Full Stack Expertise & <span className="serif italic text-primary">Value Creation.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We support our partners through every stage of their technology adoption journey. Our custom build services in Artificial Intelligence, Analytics & BI, Application Development and Automation are always tailored to your specific business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* AI Capability - Elegant Gradient Mesh */}
              <Link href="/capabilities#ai" className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-background-alt hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/8 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
                
                <div className="relative p-8 space-y-6 h-full flex flex-col">
                  {/* Large Number Badge */}
                  <div className="flex items-start justify-between">
                    <div className="text-6xl md:text-7xl font-heading font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                      01
                    </div>
                    <div className="size-3 rounded-full bg-primary group-hover:bg-accent transition-colors" />
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground">Artificial Intelligence</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Unlock new possibilities with intelligent solutions. Custom AI models for predictive analytics, NLP, and computer vision.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-primary/10">
                    <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                      Learn More
                      <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Analytics & BI - Elegant Gradient Mesh */}
              <Link href="/capabilities#analytics-bi" className="group relative overflow-hidden rounded-3xl border border-secondary/30 bg-background-alt hover:border-secondary/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-secondary/8 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-28 h-28 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent-2/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
                
                <div className="relative p-8 space-y-6 h-full flex flex-col">
                  {/* Large Number Badge */}
                  <div className="flex items-start justify-between">
                    <div className="text-6xl md:text-7xl font-heading font-bold text-secondary/20 group-hover:text-secondary/30 transition-colors">
                      02
                    </div>
                    <div className="size-3 rounded-full bg-secondary group-hover:bg-accent-2 transition-colors" />
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground">Analytics & BI</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Transform raw data into actionable insights. Clear visibility into operations and markets for informed decision making.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-secondary/10">
                    <span className="text-sm font-semibold text-secondary group-hover:text-accent-2 transition-colors flex items-center gap-2">
                      Learn More
                      <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Application Development - Elegant Gradient Mesh */}
              <Link href="/capabilities#app-dev" className="group relative overflow-hidden rounded-3xl border border-accent/30 bg-background-alt hover:border-accent/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-accent/8 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-success/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
                
                <div className="relative p-8 space-y-6 h-full flex flex-col">
                  {/* Large Number Badge */}
                  <div className="flex items-start justify-between">
                    <div className="text-6xl md:text-7xl font-heading font-bold text-accent/20 group-hover:text-accent/30 transition-colors">
                      03
                    </div>
                    <div className="size-3 rounded-full bg-accent group-hover:bg-success transition-colors" />
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground">Application Development</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Build robust, scalable web and mobile applications using open source technologies. High on UX, secure, and scalable.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-accent/10">
                    <span className="text-sm font-semibold text-accent group-hover:text-success transition-colors flex items-center gap-2">
                      Learn More
                      <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Automation - Elegant Gradient Mesh */}
              <Link href="/capabilities#automation" className="group relative overflow-hidden rounded-3xl border border-success/30 bg-background-alt hover:border-success/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-success/15 via-success/8 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-28 h-28 bg-success/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
                
                <div className="relative p-8 space-y-6 h-full flex flex-col">
                  {/* Large Number Badge */}
                  <div className="flex items-start justify-between">
                    <div className="text-6xl md:text-7xl font-heading font-bold text-success/20 group-hover:text-success/30 transition-colors">
                      04
                    </div>
                    <div className="size-3 rounded-full bg-success group-hover:bg-accent transition-colors" />
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground">Automation</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Streamline operations and reduce manual efforts. Intelligent automation across business workflows using open source tools.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-success/10">
                    <span className="text-sm font-semibold text-success group-hover:text-accent transition-colors flex items-center gap-2">
                      Learn More
                      <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/capabilities" className="btn btn-outline inline-flex items-center gap-2">
                Explore All Capabilities
                <Icon name="ArrowRightIcon" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Client Logo Wall - Temporarily Removed */}
        {/* <ClientLogoWall /> */}

        {/* Testimonial Section */}
        <TestimonialCarousel />

        {/* CTA Section */}
        <CTASection />

        {/* Grow With Us Section */}
        <GrowWithUsSection
          jobs={[
            {
              id: 'senior-fullstack-developer',
              title: 'Senior Full Stack Developer',
              department: 'Engineering',
              location: 'Surat, Gujarat (Remote Available)',
              type: 'Full-time',
              experience: '3-5 years',
            },
            {
              id: 'business-growth-associate',
              title: 'Business Growth Associate',
              department: 'Business Development',
              location: 'Surat, Gujarat (Remote Available)',
              type: 'Full-time',
              experience: 'Up to 2 years',
            },
          ]}
        />
      </main>
    </>
  );
}
