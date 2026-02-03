'use client';

import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 'justin-cash',
    quote: "We were using so many different tools that nothing connected. I'd have to piece together information from five different places just to understand what was happening. Now? Everything flows together seamlessly. I can see the full picture from a lead coming in, to the property showing, to closing the deal, to the financials. The insights we're getting now are things I never even knew I was missing. It's made us a much smarter business.",
    author: 'Justin Cash',
    role: 'Owner',
    company: 'Pillar Point Properties',
    authorInitial: 'J',
    benefits: ['Complete visibility', 'Smarter decisions', 'Seamless operations'],
  },
  {
    id: 'dr-anaganti',
    quote: "As a research lab, we needed a system that could handle complex data management, project tracking, and client relationships all in one place. Aplict built us a custom CMS integrated with our internal CRM that perfectly fits our workflow. The team understood our unique needs and delivered a solution that has streamlined our entire research process. We can now track projects, manage client data, and generate reports effortlessly.",
    author: 'Dr. Anaganti',
    role: 'Research Director',
    company: 'L2P Labs',
    authorInitial: 'A',
    benefits: ['Unified system', 'Streamlined processes', 'Better insights'],
  },
  {
    id: 'jennifer-martinez',
    quote: "Our SMM team was drowning in spreadsheets and our sales team couldn't track leads effectively. We needed a custom CRM with content management capabilities that could handle our unique workflow. Aplict delivered exactly what we needed - a system that manages our social media content calendar, tracks leads from initial contact to conversion, and gives our team complete visibility. It's been a game-changer for our productivity.",
    author: 'Jennifer Martinez',
    role: 'Marketing Director',
    company: 'Digital Growth Agency',
    authorInitial: 'J',
    benefits: ['50% time saved', 'Better lead tracking', 'Team alignment'],
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 15 seconds (increased from 8)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                    authorInitial={testimonial.authorInitial}
                    benefits={testimonial.benefits}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`size-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-6'
                    : 'bg-border'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
