import { Metadata } from 'next';
import ValueCard from '@/components/about-us/ValueCard';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Aplict Solutions - Your Strategic Technology Partner',
  description:
    'A next generation custom software development agency dedicated to transforming business outcomes with open source technologies. We modernize legacy operations and build new systems from the ground up. Founded in 2016, we specialize in AI, Analytics & BI, Application Development, and Automation.',
  keywords: [
    'About Aplict Solutions',
    'Software Development Company',
    'IT Services Company',
    'Custom Software Development',
    'Technology Partner',
    'Digital Transformation Company',
  ],
  openGraph: {
    title: 'About Us | Aplict Solutions',
    description: 'Your strategic technology partner for digital transformation.',
    type: 'website',
    url: 'https://aplictsolutions.com/about-us',
    images: [
      {
        url: 'https://aplictsolutions.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'About Aplict Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Aplict Solutions',
    description: 'Your strategic technology partner for digital transformation.',
  },
  alternates: {
    canonical: 'https://aplictsolutions.com/about-us',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const values = [
  {
    icon: 'ArrowPathIcon',
    title: 'Transformation',
    description: 'Evolve your business model by optimizing existing routines and adopting industry best practices with the latest and best enabling technologies.',
    color: 'bg-primary'
  },
  {
    icon: 'ArrowTrendingUpIcon',
    title: 'Improvement',
    description: 'Elevate the standards and capabilities of your digital infrastructure to stay prepared for the future growth while encashing the opportunities of the present times.',
    color: 'bg-secondary'
  },
  {
    icon: 'BoltIcon',
    title: 'Efficiency',
    description: 'Streamline your operations to save time and free up resources for better use. Eliminate chaos and stagnation through careful introduction of technology.',
    color: 'bg-accent'
  }];

  return (
    <main>
        {/* Hero Section */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-12">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                Our Story
              </p>
              <h1 className="text-6xl md:text-8xl font-heading font-medium tracking-tighter leading-none">
                Your Strategic <span className="gradient-text">Technology Partner.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transforming business outcomes through custom software development, legacy modernization, and innovative technology solutions built on open source foundations.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_19ed7b82d-1764843649706.png"
                  alt="Aplict Solutions team collaborating in modern office with laptops and whiteboards"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
             
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight">
                  About <span className="serif italic text-primary">Aplict Solutions.</span>
                </h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are a next generation custom software development agency dedicated to transforming business outcomes with the abundant use of open source technologies. We modernize legacy operations and build new systems from the ground up ensuring that you eliminate technology debt of the past from the future of your business.
                </p>
                <p>
                  We specialize in transitioning businesses from outdated processes to high performance, AI enhanced workflows. At Aplict, we bridge the gap between ambitious business goals and best in class technical execution by aligning our work to mimic and then optimize your workflows thus ensuring that the technology adoption journey is seamless and incredibly easily.
                </p>
                <p>
                  Our custom build services in Artificial Intelligence, Analytics & BI, Application Development and Automation are always tailored to your specific business needs thus helping you to drive performance, transform operations and modernizes your legacy systems without any disruption to your ongoing operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-32 bg-background-alt">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                Our Mission
              </p>
              <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
                Democratizing Enterprise Grade <span className="serif italic text-primary">Technology.</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                We believe that enterprise grade software and AI leverage should be accessible to every growing business and not just global corporations. Our services are premised on the pillars of TIE, i.e. transformation, improvement and efficiency.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {values.map((value, index) =>
                <ValueCard key={`value_${index}`} {...value} />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                Our Philosophy
              </p>
              <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
                Solving Operational <span className="serif italic text-primary">Bottlenecks.</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                There will always be a time when your past investments in technology will become inconsequential for fulfilling present day needs because of continuous growth and churn in business. Remaining stuck in this operational chaos of the past is the greatest bottleneck to transforming your business to a vision of the future. We act as the catalyst for evolution by walking together with you as partners in this transformation program.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="soft-card p-8 space-y-4">
                  <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon name="MagnifyingGlassIcon" size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-heading font-bold">Identifying Bottlenecks</h4>
                  <p className="text-sm text-muted-foreground">
                    Pinpointing the structural gaps holding you back
                  </p>
                </div>
                <div className="soft-card p-8 space-y-4">
                  <div className="size-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Icon name="BuildingLibraryIcon" size={32} className="text-secondary" />
                  </div>
                  <h4 className="text-xl font-heading font-bold">Building Foundations</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating clean data and operational structures to be AI-ready
                  </p>
                </div>
                <div className="soft-card p-8 space-y-4">
                  <div className="size-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Icon name="ArrowTrendingUpIcon" size={32} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-heading font-bold">Scalable Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Designing software that scales as your business expands
                  </p>
                </div>
              </div>

              <div className="mt-12 soft-card p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-bold">Our Philosophy:</span> We help eliminate chaos and stagnation in your business through the careful introduction of technology by preparing a base that is robust, resilient, scalable and secure, and then layer in the innovations, ensuring that there is never any disruption in your daily operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Stack Expertise Section */}
        <section className="py-32 bg-background-alt">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                Full Stack Expertise
              </p>
              <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
                Supporting Every Stage of Your <span className="serif italic text-primary">Technology Journey.</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                We support our partners through every stage of their technology adoption journey.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6 mt-12">
                <div className="text-center space-y-4">
                  <div className="size-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon name="MagnifyingGlassIcon" size={40} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-heading font-bold">Diagnosis</h4>
                </div>
                <div className="text-center space-y-4">
                  <div className="size-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                    <Icon name="PencilSquareIcon" size={40} className="text-secondary" />
                  </div>
                  <h4 className="text-xl font-heading font-bold">Design</h4>
                </div>
                <div className="text-center space-y-4">
                  <div className="size-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                    <Icon name="CodeBracketIcon" size={40} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-heading font-bold">Development</h4>
                </div>
                <div className="text-center space-y-4">
                  <div className="size-20 rounded-2xl bg-success/10 flex items-center justify-center mx-auto">
                    <Icon name="RocketLaunchIcon" size={40} className="text-success" />
                  </div>
                  <h4 className="text-xl font-heading font-bold">Deployment</h4>
                </div>
              </div>

              <div className="mt-12 soft-card p-8">
                <h4 className="text-2xl font-heading font-bold mb-4">Our Technology Stack</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We specialize in the JavaScript ecosystem, utilizing the most modern frameworks to build fast, secure, and responsive applications.
                </p>
                <h4 className="text-2xl font-heading font-bold mb-4 mt-8">Value Creation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The value that we create for your business through our services shall be the key mutual takeaway from our relation, ensuring that we become your technology partner for all seasons and remain engaged in your continued success now and into the future.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Reliability Section */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                Why Choose Us
              </p>
              <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
                Your Trusted <span className="serif italic text-primary">Technology Partner.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background-alt/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-4 group hover:border-primary/30 transition-all">
                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon name="ShieldCheckIcon" size={32} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Proven Track Record</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With years of experience delivering successful projects across diverse industries, we bring proven methodologies and best practices to every engagement.
                </p>
              </div>

              <div className="bg-background-alt/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-4 group hover:border-primary/30 transition-all">
                <div className="size-16 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Icon name="LockClosedIcon" size={32} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Security & Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize security and compliance in every solution we build, ensuring your data and systems are protected with industry-standard practices.
                </p>
              </div>

              <div className="bg-background-alt/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-4 group hover:border-primary/30 transition-all">
                <div className="size-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon name="ClockIcon" size={32} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Ongoing Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment extends beyond deployment. We provide continuous support, maintenance, and optimization to ensure your systems perform at their best.
                </p>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="CheckCircleIcon" size={32} className="text-success" />
                  <h4 className="text-xl font-heading font-bold">Zero Disruption Guarantee</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We ensure seamless technology adoption with zero disruption to your daily operations. Your business continues running smoothly while we transform your systems.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="CheckCircleIcon" size={32} className="text-success" />
                  <h4 className="text-xl font-heading font-bold">Open Source Advantage</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  By leveraging open source technologies, we eliminate vendor lock-in, reduce long-term costs, and give you full control over your technology stack.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-background-alt">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center space-y-12 mb-16">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
                  Join Our <span className="serif italic text-primary">Journey.</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're always looking for talented individuals who share our values and passion for excellence. 
                  We believe in growing together and creating an environment where you can enhance your skills 
                  while contributing to meaningful business transformations.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="soft-card p-6 text-center space-y-4">
                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="UserGroupIcon" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold">Collaborative Culture</h3>
                <p className="text-sm text-muted-foreground">
                  Work with a team that values your ideas and supports your growth.
                </p>
              </div>

              <div className="soft-card p-6 text-center space-y-4">
                <div className="size-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <Icon name="AcademicCapIcon" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-bold">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Access to modern technologies and mentorship to enhance your skills.
                </p>
              </div>

              <div className="soft-card p-6 text-center space-y-4">
                <div className="size-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="ChartBarIcon" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold">Clear Growth Path</h3>
                <p className="text-sm text-muted-foreground">
                  Well-defined roles with transparent career progression opportunities.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/career" className="btn btn-primary flex items-center justify-center gap-2">
                  View Open Positions
                  <Icon name="ArrowRightIcon" size={20} />
                </Link>
                <Link href="/contact-us" className="btn btn-outline flex items-center justify-center gap-2">
                  Get In Touch
                  <Icon name="ArrowRightIcon" size={20} />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Don't see a position that matches? <Link href="/career" className="text-primary hover:underline">Send us your resume</Link> and let's explore opportunities together.
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}