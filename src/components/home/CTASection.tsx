'use client';

import Icon from '@/components/ui/AppIcon';
import ContactForm from '@/components/contact/ContactForm';

export default function CTASection() {
  return (
    <section className="py-32 px-4 sm:px-6 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  Free Consultation
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight">
                Ready to <span className="serif italic text-primary">Get Started?</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Let's discuss your technical challenges and explore how our solutions and capabilities can transform your business operations and drive growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-background/50 border border-border px-6 py-4 rounded-2xl">
                <p className="label mb-1 text-xs">Response Time</p>
                <p className="text-xl font-bold text-foreground">24 Hours</p>
              </div>
              <div className="bg-primary/10 border border-primary/20 px-6 py-4 rounded-2xl">
                <p className="label mb-1 text-primary text-xs">Free Consultation</p>
                <p className="text-xl font-bold text-primary">No Obligation</p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <Icon name="CheckCircleIcon" size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Expert Consultation</h4>
                  <p className="text-sm text-muted-foreground">
                    Get personalized advice from our technical experts tailored to your business needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <Icon name="CheckCircleIcon" size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Custom Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    We design solutions specifically for your industry and operational requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <Icon name="CheckCircleIcon" size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Ongoing Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Continuous partnership with maintenance, updates, and optimization services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-background-alt border border-border/50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl">
            <ContactForm
              formSource="Homepage CTA"
              variant="compact"
              showValidationBox={true}
              wrapperClassName=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
