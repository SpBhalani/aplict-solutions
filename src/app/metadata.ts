import { Metadata } from 'next';

export const homepageMetadata: Metadata = {
  title: 'Aplict Solutions | Transform Technical Debt Into Competitive Advantage',
  description:
    'Custom software development agency specializing in AI, Analytics & BI, Application Development, and Automation. We help businesses transform technical debt into competitive advantage using open source technologies. Services include Performance Optimization, Digital Transformation, Legacy Modernization, and Systems Audit & Design.',
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
    'Software Development Company',
    'IT Services',
    'Business Intelligence',
    'AI Solutions',
    'Web Development',
    'Mobile App Development',
  ],
  openGraph: {
    title: 'Aplict Solutions | Transform Technical Debt Into Competitive Advantage',
    description:
      'Custom software development with AI, Analytics & BI, Application Development, and Automation. Open source technologies for business transformation.',
    type: 'website',
    url: 'https://aplictsolutions.com',
    siteName: 'Aplict Solutions',
    images: [
      {
        url: 'https://aplictsolutions.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aplict Solutions - Custom Software Development',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aplict Solutions | Transform Technical Debt Into Competitive Advantage',
    description:
      'Custom software development with AI, Analytics & BI, Application Development, and Automation. Open source technologies for business transformation.',
    images: ['https://aplictsolutions.com/logo.png'],
  },
  alternates: {
    canonical: 'https://aplictsolutions.com',
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
};
