import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import Icon from '@/components/ui/AppIcon';
import SocialIcon from '@/components/ui/SocialIcon';

export const metadata: Metadata = {
  title: 'Contact Us | Aplict Solutions - Get In Touch',
  description:
    'Get in touch with Aplict Solutions. 24-hour response time guaranteed. Email: contact@aplictsolutions.com | Location: Surat, Gujarat, India. Let\'s discuss how we can transform your technical debt into competitive advantage.',
  keywords: [
    'Contact Aplict Solutions',
    'Software Development Contact',
    'IT Services Contact',
    'Custom Software Development Company',
    'Get Quote',
    'Business Consultation',
  ],
  openGraph: {
    title: 'Contact Us | Aplict Solutions',
    description: 'Get in touch with us. 24-hour response time guaranteed.',
    type: 'website',
    url: 'https://aplictsolutions.com/contact-us',
    images: [
      {
        url: 'https://aplictsolutions.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact Aplict Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Aplict Solutions',
    description: 'Get in touch with us. 24-hour response time guaranteed.',
  },
  alternates: {
    canonical: 'https://aplictsolutions.com/contact-us',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      id: 'contact_email',
      icon: 'EnvelopeIcon',
      label: 'Email Us',
      value: 'contact@aplictsolutions.com',
      subtext: 'We respond within 24 hours',
      color: 'bg-primary/10',
      iconColor: 'text-primary',
      href: 'mailto:contact@aplictsolutions.com',
    },
    {
      id: 'contact_location',
      icon: 'MapPinIcon',
      label: 'Location',
      value: 'Surat, Gujarat',
      subtext: 'India',
      color: 'bg-accent/10',
      iconColor: 'text-accent',
    },
  ];

  const socialLinks = [
    { id: 'social_linkedin', name: 'LinkedIn', platform: 'linkedin' as const, href: 'https://www.linkedin.com/company/aplict-solutions', ariaLabel: 'Visit our LinkedIn profile' },
    { id: 'social_instagram', name: 'Instagram', platform: 'instagram' as const, href: 'https://www.instagram.com/aplict.solutions/', ariaLabel: 'Follow us on Instagram' },
    { id: 'social_facebook', name: 'Facebook', platform: 'facebook' as const, href: 'https://www.facebook.com/profile.php?id=61587053438341', ariaLabel: 'Follow us on Facebook' },
    { id: 'social_x', name: 'X (Twitter)', platform: 'x' as const, href: 'https://x.com/AplictSolutions', ariaLabel: 'Follow us on X' },
  ];

  return (
    <main>
        {/* Hero Section */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-18">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                Get In Touch
              </p>
              <h1 className="text-6xl md:text-8xl font-heading font-medium tracking-tighter leading-none">
                Let's Build Something{' '}
                <span className="gradient-text">Great Together.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Book a free discovery workshop and let's discuss how we can transform your technical
                challenges into competitive advantages.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 bg-primary/5">
              <Icon name="ClockIcon" size={20} className="text-primary" />
              <span className="text-sm font-bold text-primary">
                24-Hour Response Time Guaranteed
              </span>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="pt-0 pb-32 bg-background overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left - Contact Form */}
              <div className="space-y-8 min-w-0 w-full">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight">
                    Send Us a <span className="serif italic text-primary">Message.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours with next
                    steps.
                  </p>
                </div>
                <ContactForm
                  formSource="Contact Form"
                  variant="default"
                  showValidationBox={true}
                  wrapperClassName="glass p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2rem] border border-border shadow-2xl w-full min-w-0 max-w-full"
                />
              </div>

              {/* Right - Contact Info */}
              <div className="space-y-8 min-w-0 w-full">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight">
                    Other Ways to <span className="serif italic text-primary">Connect.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Prefer a different communication channel? We're here to help.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.id} className="soft-card p-8 space-y-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`size-14 rounded-2xl ${info.color} flex items-center justify-center shrink-0`}
                        >
                          <Icon name={info.icon as any} size={28} className={info.iconColor} />
                        </div>
                        <div className="flex-1">
                          <p className="label mb-2">{info.label}</p>
                          {info.href ? (
                            <a href={info.href} className="text-xl font-bold text-foreground mb-1 hover:text-primary transition-colors block">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-xl font-bold text-foreground mb-1">{info.value}</p>
                          )}
                          <p className="text-sm text-muted-foreground">{info.subtext}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Office Hours */}
                <div className="soft-card p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <Icon name="ClockIcon" size={24} className="text-primary" />
                    <h3 className="text-xl font-heading font-bold">Office Hours</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-bold">10:00 AM - 7:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-bold">10:00 AM - 2:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-bold">Closed</span>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Emergency support available 24/7 for existing clients under Managed ADM
                        contracts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="soft-card p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <Icon name="ShareIcon" size={24} className="text-primary" />
                    <h3 className="text-xl font-heading font-bold">Follow Us</h3>
                  </div>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                        aria-label={social.ariaLabel}
                      >
                        <SocialIcon platform={social.platform} size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-background-alt">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                Quick Answers
              </p>
              <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight">
                Frequently Asked <span className="serif italic text-primary">Questions.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="soft-card p-8 space-y-4">
                <h4 className="text-xl font-heading font-bold">What's the typical project timeline?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Custom development projects typically take 6-12 weeks depending on scope. Legacy
                  modernization projects range from 3-6 months based on system complexity. We provide
                  detailed timelines during the discovery workshop.
                </p>
              </div>

              <div className="soft-card p-8 space-y-4">
                <h4 className="text-xl font-heading font-bold">Do you offer fixed-price contracts?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Yes, we offer both fixed-price and time-and-materials contracts. For well-defined
                  projects, fixed-price provides budget certainty. For evolving requirements, T&M
                  offers flexibility. We'll recommend the best approach during discovery.
                </p>
              </div>

              <div className="soft-card p-8 space-y-4">
                <h4 className="text-xl font-heading font-bold">
                  What capabilities do you offer?
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our core capabilities include Artificial Intelligence, Analytics & BI, Application Development, and Automation. We apply these across various industries including Manufacturing, Logistics, Healthcare, Retail, and Financial Services.
                </p>
              </div>

              <div className="soft-card p-8 space-y-4">
                <h4 className="text-xl font-heading font-bold">
                  Can you work with our existing team?
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutely. We integrate seamlessly with your in-house team, whether augmenting
                  capacity, providing specialized expertise, or taking full ownership of development.
                  We adapt to your preferred collaboration model.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}