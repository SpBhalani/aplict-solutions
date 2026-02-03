'use client';

import { useState, FormEvent } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactFormProps {
  formSource?: 'Contact Form' | 'Homepage CTA';
  variant?: 'default' | 'compact';
  showValidationBox?: boolean;
  wrapperClassName?: string;
  formClassName?: string;
}

export default function ContactForm({
  formSource = 'Contact Form',
  variant = 'default',
  showValidationBox = true,
  wrapperClassName = '',
  formClassName = '',
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    resume: null as File | null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isCompact = variant === 'compact';

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    // Resume validation for Career option
    if (formData.service === 'career') {
      if (!formData.resume) {
        newErrors.resume = 'Resume is required for career inquiries';
      } else {
        // Check file type
        if (formData.resume.type !== 'application/pdf') {
          newErrors.resume = 'Resume must be a PDF file';
        }
        // Check file size (2MB = 2 * 1024 * 1024 bytes)
        else if (formData.resume.size > 2 * 1024 * 1024) {
          newErrors.resume = 'Resume must be less than 2MB';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Create FormData to handle file upload
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('formSource', formSource);
      
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit form');
      }

      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          resume: null,
        });
        setIsSuccess(false);
        setErrors({});
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({
        submit: error instanceof Error ? error.message : 'Failed to submit form. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    // Clear resume when service changes away from career
    if (name === 'service' && value !== 'career') {
      setFormData((prev) => ({ ...prev, resume: null }));
      setErrors((prev) => ({ ...prev, resume: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
    // Clear error when file is selected
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: '' }));
    }
  };

  const inputClassName = isCompact ? 'input text-sm' : 'input';
  const labelClassName = isCompact ? 'label text-sm' : 'label';
  const spacingClassName = isCompact ? 'space-y-4' : 'space-y-6';
  const fieldSpacingClassName = isCompact ? 'space-y-1.5' : 'space-y-2';
  const iconSize = isCompact ? 12 : 14;
  const errorIconSize = isCompact ? 14 : 16;
  const buttonIconSize = isCompact ? 18 : 20;
  const textareaMinHeight = isCompact ? 'min-h-[100px]' : 'min-h-[140px]';

  return (
    <div className={wrapperClassName}>
      {isSuccess ? (
        <div className="text-center space-y-6 py-12">
          <div className="size-20 rounded-full bg-success/10 flex items-center justify-center mx-auto">
            <Icon name="CheckCircleIcon" size={48} className="text-success" />
          </div>
          <h3 className={`font-heading font-bold text-foreground ${isCompact ? 'text-xl' : 'text-2xl'}`}>
            Thank You!
          </h3>
          <p className="text-muted-foreground">
            {formData.service === 'career'
              ? "We've received your application and will review it shortly. We'll be in touch within 24 hours."
              : "We've received your message and will respond within 24 hours."}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={`${spacingClassName} ${formClassName}`}>
          {/* Name and Email - Grid for compact, separate for default */}
          {isCompact ? (
            <div className="grid sm:grid-cols-2 gap-4">
              <div className={fieldSpacingClassName}>
                <label className={labelClassName}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className={`${inputClassName} ${errors.name ? 'border-destructive' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <Icon name="ExclamationCircleIcon" size={iconSize} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className={fieldSpacingClassName}>
                <label className={labelClassName}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className={`${inputClassName} ${errors.email ? 'border-destructive' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <Icon name="ExclamationCircleIcon" size={iconSize} />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className={fieldSpacingClassName}>
                <label className={labelClassName}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className={`${inputClassName} ${errors.name ? 'border-destructive' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <Icon name="ExclamationCircleIcon" size={iconSize} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className={fieldSpacingClassName}>
                <label className={labelClassName}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className={`${inputClassName} ${errors.email ? 'border-destructive' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <Icon name="ExclamationCircleIcon" size={iconSize} />
                    {errors.email}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Phone and Company - Always in grid */}
          <div className={isCompact ? 'grid sm:grid-cols-2 gap-4' : 'grid grid-cols-2 gap-4'}>
            <div className={fieldSpacingClassName}>
              <label className={labelClassName}>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className={`${inputClassName} ${errors.phone ? 'border-destructive' : ''}`}
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <Icon name="ExclamationCircleIcon" size={iconSize} />
                  {errors.phone}
                </p>
              )}
            </div>

            <div className={fieldSpacingClassName}>
              <label className={labelClassName}>Company Name *</label>
              <input
                type="text"
                name="company"
                placeholder="Your company"
                className={`${inputClassName} ${errors.company ? 'border-destructive' : ''}`}
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <Icon name="ExclamationCircleIcon" size={iconSize} />
                  {errors.company}
                </p>
              )}
            </div>
          </div>

          <div className={fieldSpacingClassName}>
            <label className={labelClassName}>Service Interest *</label>
            <select
              name="service"
              className={`${inputClassName} appearance-none ${errors.service ? 'border-destructive' : ''}`}
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              <option value="custom-dev">Custom App Development</option>
              <option value="legacy-mod">Legacy Modernization</option>
              <option value="managed-adm">Managed ADM</option>
              <option value="consultation">General Consultation</option>
              <option value="career">Career</option>
            </select>
            {errors.service && (
              <p className="text-xs text-destructive flex items-center gap-1">
                <Icon name="ExclamationCircleIcon" size={iconSize} />
                {errors.service}
              </p>
            )}
          </div>

          {formData.service === 'career' && (
            <div className={fieldSpacingClassName}>
              <label className={labelClassName}>Resume (PDF) *</label>
              <div className="relative">
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,application/pdf"
                  className={`${inputClassName} ${
                    isCompact
                      ? 'file:mr-2 file:py-1.5 file:px-3 file:text-xs'
                      : 'file:mr-4 file:py-2 file:px-4 file:text-sm'
                  } file:rounded-lg file:border-0 file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer`}
                  onChange={handleFileChange}
                />
                {formData.resume && (
                  <div className={`${isCompact ? 'mt-1.5 text-xs' : 'mt-2 text-sm'} flex items-center gap-2 text-muted-foreground`}>
                    <Icon name="DocumentTextIcon" size={isCompact ? 14 : 16} />
                    <span className={isCompact ? 'truncate' : ''}>{formData.resume.name}</span>
                    <span className="text-xs">
                      ({(formData.resume.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                )}
              </div>
              {errors.resume && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <Icon name="ExclamationCircleIcon" size={iconSize} />
                  {errors.resume}
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                {isCompact ? 'PDF format only, max 2MB' : 'Please upload your resume in PDF format (max 2MB)'}
              </p>
            </div>
          )}

          <div className={fieldSpacingClassName}>
            <label className={labelClassName}>Message *</label>
            <textarea
              name="message"
              placeholder={
                formData.service === 'career'
                  ? 'Tell us about yourself, your experience, and why you want to join our team...'
                  : 'Tell us about your project or technical challenges...'
              }
              className={`${inputClassName} ${textareaMinHeight} resize-none ${
                errors.message ? 'border-destructive' : ''
              }`}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-xs text-destructive flex items-center gap-1">
                <Icon name="ExclamationCircleIcon" size={iconSize} />
                {errors.message}
              </p>
            )}
          </div>

          {/* Validation Requirements */}
          {showValidationBox && (
            isCompact ? (
              <details className="bg-background/50 border border-border rounded-lg p-3">
                <summary className="text-xs font-semibold text-foreground cursor-pointer list-none">
                  <span className="flex items-center gap-2">
                    <Icon name="InformationCircleIcon" size={14} />
                    Form Requirements
                  </span>
                </summary>
                <ul className="text-xs text-muted-foreground space-y-1 mt-2 pl-6">
                  <li>• All fields marked with * are required</li>
                  <li>• Email must be in valid format</li>
                  <li>• Message must be at least 20 characters</li>
                  {formData.service === 'career' && (
                    <>
                      <li>• Resume must be PDF format</li>
                      <li>• Resume must be less than 2MB</li>
                    </>
                  )}
                </ul>
              </details>
            ) : (
              <div className="bg-background-alt/50 border border-border rounded-xl p-4 space-y-2">
                <p className="text-xs font-semibold text-foreground mb-2">Form Requirements:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircleIcon" size={14} className="text-success shrink-0 mt-0.5" />
                    <span>All fields marked with * are required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircleIcon" size={14} className="text-success shrink-0 mt-0.5" />
                    <span>Email must be in valid format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircleIcon" size={14} className="text-success shrink-0 mt-0.5" />
                    <span>Message must be at least 20 characters</span>
                  </li>
                  {formData.service === 'career' && (
                    <>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircleIcon" size={14} className="text-success shrink-0 mt-0.5" />
                        <span>Resume must be PDF format</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircleIcon" size={14} className="text-success shrink-0 mt-0.5" />
                        <span>Resume must be less than 2MB</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )
          )}

          {errors.submit && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <p className={`text-destructive flex items-center gap-2 ${isCompact ? 'text-xs' : 'text-sm'}`}>
                <Icon name="ExclamationCircleIcon" size={errorIconSize} />
                {errors.submit}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-primary w-full flex items-center justify-center gap-2 ${isCompact ? 'text-sm py-2.5' : ''}`}
          >
            {isSubmitting ? (
              <>
                <Icon name="ArrowPathIcon" size={buttonIconSize} className="animate-spin" />
                {formData.service === 'career' ? (isCompact ? 'Submitting...' : 'Submitting Application...') : 'Sending...'}
              </>
            ) : (
              <>
                {formData.service === 'career' ? 'Submit Application' : 'Send Message'}
                <Icon name="PaperAirplaneIcon" size={buttonIconSize} />
              </>
            )}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            {isCompact ? 'Your information is secure and never shared.' : 'We respect your privacy. Your information is secure and never shared.'}
          </p>
        </form>
      )}
    </div>
  );
}
