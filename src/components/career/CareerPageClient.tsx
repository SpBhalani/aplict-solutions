'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import JobModal from './JobModal';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
}

interface CareerPageClientProps {
  jobs: Job[];
}

export default function CareerPageClient({ jobs }: CareerPageClientProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedJob(null), 300);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
              Join Our Team
            </p>
            <h1 className="text-6xl md:text-8xl font-heading font-medium tracking-tighter leading-none">
              Grow With <span className="gradient-text">Us.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe in growing together. Join our journey to experience the best environment to enhance your skills and contribute to businesses with those skills.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="pt-16 pb-32 bg-background scroll-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
              Why Join Us
            </p>
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
              Your Growth is Our <span className="serif italic text-primary">Success.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="soft-card p-8 space-y-4 group hover:border-primary/30 transition-all">
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Icon name="UserGroupIcon" size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Collaborative Environment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Work in a supportive team where your ideas matter and collaboration drives innovation.
              </p>
            </div>

            <div className="soft-card p-8 space-y-4 group hover:border-primary/30 transition-all">
              <div className="size-16 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                <Icon name="AcademicCapIcon" size={32} className="text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Skill Enhancement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Continuous learning opportunities with access to modern technologies and mentorship programs.
              </p>
            </div>

            <div className="soft-card p-8 space-y-4 group hover:border-primary/30 transition-all">
              <div className="size-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                <Icon name="ChartBarIcon" size={32} className="text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Clear Growth Path</h3>
              <p className="text-muted-foreground leading-relaxed">
                Well-defined roles and responsibilities with a transparent career progression framework.
              </p>
            </div>

            <div className="soft-card p-8 space-y-4 group hover:border-primary/30 transition-all">
              <div className="size-16 rounded-2xl bg-success/10 flex items-center justify-center group-hover:bg-success transition-colors">
                <Icon name="BriefcaseIcon" size={32} className="text-success group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Real Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Contribute to meaningful projects that transform businesses and create lasting value.
              </p>
            </div>

            <div className="soft-card p-8 space-y-4 group hover:border-primary/30 transition-all">
              <div className="size-16 rounded-2xl bg-accent-2/10 flex items-center justify-center group-hover:bg-accent-2 transition-colors">
                <Icon name="WrenchScrewdriverIcon" size={32} className="text-accent-2 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Open Source Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Work with cutting-edge open source technologies and contribute to the community.
              </p>
            </div>

            <div className="soft-card p-8 space-y-4 group hover:border-primary/30 transition-all">
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Icon name="HeartIcon" size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Comfortable Environment</h3>
              <p className="text-muted-foreground leading-relaxed">
                A flexible and comfortable work environment that promotes work-life balance and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-32 bg-background-alt scroll-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
              Application Process
            </p>
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
              How to <span className="serif italic text-primary">Apply.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interested in joining our team? Here's how you can apply for any available position.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="soft-card p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon name="EnvelopeIcon" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Direct Email</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Send your resume and cover letter directly to our email address. Make sure to mention the position you're applying for in the subject line.
              </p>
              <a
                href="mailto:contact@aplictsolutions.com?subject=Career Application"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                Send Email
                <Icon name="ArrowRightIcon" size={20} />
              </a>
              <p className="text-sm text-muted-foreground">
                <strong>Email:</strong> contact@aplictsolutions.com
              </p>
            </div>

            <div className="soft-card p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Icon name="DocumentTextIcon" size={28} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Contact Form</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Use our contact form to submit your application. Select "Career" as your service interest and attach your resume (PDF format, max 2MB).
              </p>
              <Link
                href="/contact-us"
                className="btn btn-outline inline-flex items-center gap-2"
              >
                Go to Contact Form
                <Icon name="ArrowRightIcon" size={20} />
              </Link>
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Please attach your resume when submitting the form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-32 bg-background scroll-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
              Open Positions
            </p>
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
              Current <span className="serif italic text-primary">Openings.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role to advance your career.
            </p>
          </div>

          {jobs.length === 0 ? (
            <div className="text-center py-16">
              <div className="size-20 rounded-full bg-muted/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="BriefcaseIcon" size={40} className="text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">No Open Positions at the Moment</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                We're not actively hiring right now, but we're always interested in connecting with talented individuals. Feel free to send us your resume for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@aplictsolutions.com?subject=General Application"
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  Send Your Resume
                  <Icon name="ArrowRightIcon" size={20} />
                </a>
                <Link href="/contact-us" className="btn btn-outline inline-flex items-center gap-2">
                  Contact Us
                  <Icon name="ArrowRightIcon" size={20} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {jobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => handleJobClick(job)}
                  className="text-left soft-card p-8 space-y-4 group hover:border-primary/30 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Icon name="BuildingOfficeIcon" size={14} />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Icon name="MapPinIcon" size={14} />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <Icon
                      name="ArrowRightIcon"
                      size={24}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold border border-secondary/20">
                      {job.experience}
                    </span>
                  </div>
                  <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background-alt">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
              Ready to Start Your <span className="serif italic text-primary">Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Even if you don't see a position that matches your skills, we'd love to hear from you. Send us your resume and let's explore opportunities together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact-us" className="btn btn-primary flex items-center justify-center gap-2">
              Apply Now
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <a
              href="mailto:contact@aplictsolutions.com?subject=Career Inquiry"
              className="btn btn-outline flex items-center justify-center gap-2"
            >
              Send Email
              <Icon name="EnvelopeIcon" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Job Modal */}
      <JobModal job={selectedJob} isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
