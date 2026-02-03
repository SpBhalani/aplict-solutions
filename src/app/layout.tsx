import React from 'react';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1D9689',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://aplictsolutions.com'),
  title: {
    default: 'Aplict Solutions | Transform Technical Debt Into Competitive Advantage',
    template: '%s | Aplict Solutions',
  },
  description:
    'Custom software development agency specializing in AI, Analytics & BI, Application Development, and Automation. Open source technologies for Performance Optimization, Digital Transformation, and Legacy Modernization.',
  keywords: [
    'Custom Software Development',
    'Artificial Intelligence',
    'Analytics & Business Intelligence',
    'Application Development',
    'Automation',
    'Legacy Modernization',
    'Digital Transformation',
    'Performance Optimization',
    'Open Source Technologies',
  ],
  authors: [{ name: 'Aplict Solutions' }],
  creator: 'Aplict Solutions',
  publisher: 'Aplict Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aplictsolutions.com',
    siteName: 'Aplict Solutions',
    title: 'Aplict Solutions | Transform Technical Debt Into Competitive Advantage',
    description: 'Custom software development with AI, Analytics & BI, Application Development, and Automation. Open source technologies for business transformation.',
    images: [
      {
        url: 'https://aplictsolutions.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aplict Solutions - Custom Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aplict Solutions | Transform Technical Debt Into Competitive Advantage',
    description: 'Custom software development with AI, Analytics & BI, Application Development, and Automation. Open source technologies for business transformation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        <WebSiteSchema />
        <Header />
        {children}
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Enhanced Scroll Reveal Observer with smooth animations
                const observerOptions = {
                  threshold: 0,
                  rootMargin: '300px 0px 300px 0px' // Very large margin to catch elements early
                };

                const observer = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                      entry.target.style.willChange = 'transform, opacity';
                      observer.unobserve(entry.target);
                    }
                  });
                }, observerOptions);

                // Smooth scroll behavior
                if ('scrollBehavior' in document.documentElement.style) {
                  document.documentElement.style.scrollBehavior = 'smooth';
                }

                // Function to make elements visible if they're in or near viewport
                const checkAndRevealElements = () => {
                  const allElements = document.querySelectorAll('.scroll-reveal, .fade-in-up');
                  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                  
                  allElements.forEach((el) => {
                    // Skip if already processed
                    if (el.classList.contains('processed')) return;
                    el.classList.add('processed');
                    
                    const rect = el.getBoundingClientRect();
                    // Very generous check - if element is anywhere near viewport, make it visible
                    // This ensures all sections below hero are visible on first load
                    if (rect.top < viewportHeight + 2000) {
                      // Element is near viewport - make it visible
                      el.classList.add('visible');
                      el.classList.remove('hidden');
                      el.style.willChange = 'transform, opacity';
                    } else {
                      // Element is far from viewport - hide it and observe
                      el.classList.add('hidden');
                      el.classList.remove('visible');
                      observer.observe(el);
                    }
                  });
                };

                // Initialize immediately - run as early as possible
                const initScrollReveal = () => {
                  checkAndRevealElements();
                };

                // Run immediately if possible
                if (document.readyState === 'complete') {
                  // Page already fully loaded
                  initScrollReveal();
                  setTimeout(checkAndRevealElements, 50);
                  setTimeout(checkAndRevealElements, 200);
                } else if (document.readyState === 'interactive') {
                  // DOM is ready but resources may still be loading
                  initScrollReveal();
                  setTimeout(checkAndRevealElements, 50);
                  setTimeout(checkAndRevealElements, 200);
                } else {
                  // Wait for DOM
                  document.addEventListener('DOMContentLoaded', () => {
                    initScrollReveal();
                    setTimeout(checkAndRevealElements, 50);
                    setTimeout(checkAndRevealElements, 200);
                  });
                }

                // Also run on window load as final fallback
                window.addEventListener('load', () => {
                  setTimeout(checkAndRevealElements, 100);
                  setTimeout(checkAndRevealElements, 500);
                });

                // Use requestAnimationFrame for immediate execution
                requestAnimationFrame(() => {
                  checkAndRevealElements();
                });

                // Performance optimization: Remove will-change after animation
                document.addEventListener('DOMContentLoaded', () => {
                  const animatedElements = document.querySelectorAll('.scroll-reveal, .fade-in-up');
                  animatedElements.forEach((el) => {
                    el.addEventListener('animationend', () => {
                      el.style.willChange = 'auto';
                    }, { once: true });
                  });
                });

                // Smooth scroll polyfill for older browsers
                if (!('scrollBehavior' in document.documentElement.style)) {
                  const smoothScrollPolyfill = () => {
                    const links = document.querySelectorAll('a[href^="#"]');
                    links.forEach((link) => {
                      link.addEventListener('click', (e) => {
                        const href = link.getAttribute('href');
                        if (href && href !== '#') {
                          const target = document.querySelector(href);
                          if (target) {
                            e.preventDefault();
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }
                      });
                    });
                  };
                  document.addEventListener('DOMContentLoaded', smoothScrollPolyfill);
                }
              }
            `,
          }}
        />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Faplictsol9676back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.16" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}
