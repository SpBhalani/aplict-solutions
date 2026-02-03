'use client';

import { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

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

interface JobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function JobModal({ job, isOpen, onClose }: JobModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !job) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-6 flex items-start justify-between z-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">{job.title}</h2>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Icon name="BuildingOfficeIcon" size={16} />
                {job.department}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="MapPinIcon" size={16} />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="ClockIcon" size={16} />
                {job.type}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="BriefcaseIcon" size={16} />
                {job.experience}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 rounded-lg hover:bg-background-alt transition-colors"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} className="text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Job Description</h3>
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Requirements</h3>
            <ul className="space-y-3">
              {job.requirements.map((requirement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">What We Offer</h3>
            <ul className="space-y-3">
              {job.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Icon name="StarIcon" size={20} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border p-6 flex flex-col sm:flex-row gap-4 z-10">
          <Link
            href="/contact-us"
            className="btn btn-primary flex-1 flex items-center justify-center gap-2"
            onClick={onClose}
          >
            Apply via Contact Form
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
          <a
            href={`mailto:contact@aplictsolutions.com?subject=Application for ${job.title}&body=Hello,%0D%0A%0D%0AI am interested in applying for the ${job.title} position. Please find my resume attached.%0D%0A%0D%0AThank you.`}
            className="btn btn-outline flex-1 flex items-center justify-center gap-2"
            onClick={onClose}
          >
            Apply via Email
            <Icon name="EnvelopeIcon" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
