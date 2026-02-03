'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
}

interface GrowWithUsSectionProps {
  jobs: Job[];
}

export default function GrowWithUsSection({ jobs }: GrowWithUsSectionProps) {
  return (
    <section className="py-32 bg-background-alt relative overflow-hidden scroll-reveal">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              We're Hiring
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
            Grow With <span className="serif italic text-primary">Us.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our journey to experience the best environment to enhance your skills and contribute to businesses. 
            We believe in growing together and creating opportunities for talented individuals.
          </p>
        </div>

        {/* Job Cards Grid */}
        {jobs.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative z-10 space-y-4">
                  {/* Job Title & Department */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="BuildingOfficeIcon" size={16} />
                        <span>{job.department}</span>
                      </div>
                    </div>
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                      <Icon name="BriefcaseIcon" size={24} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Icon name="MapPinIcon" size={14} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Icon name="ClockIcon" size={14} />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Icon name="AcademicCapIcon" size={14} />
                      {job.experience}
                    </span>
                  </div>

                  {/* Badge Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold border border-secondary/20">
                      {job.experience}
                    </span>
                  </div>
                </div>

                {/* Hover Arrow Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ArrowRightIcon" size={20} className="text-primary" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-12">
            <div className="size-20 rounded-full bg-muted/10 flex items-center justify-center mx-auto mb-6">
              <Icon name="BriefcaseIcon" size={40} className="text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">No Open Positions at the Moment</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're always interested in connecting with talented individuals. Feel free to send us your resume for future opportunities.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/career"
              className="btn btn-primary flex items-center gap-2 group"
            >
              View All Openings
              <Icon name="ArrowRightIcon" size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact-us"
              className="btn btn-outline flex items-center gap-2 group"
            >
              Send Your Resume
              <Icon name="PaperAirplaneIcon" size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Don't see a position that matches? <Link href="/career" className="text-primary hover:underline font-semibold">Explore our careers page</Link> or send us your resume.
          </p>
        </div>
      </div>
    </section>
  );
}
