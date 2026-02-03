import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Blueprint | Aplict Solutions - Knowledge Hub',
  description:
    'Engineering the strategic gap between Business and Growth. Our knowledge hub is under construction. Coming soon with insights, case studies, and strategic resources for digital transformation.',
  keywords: [
    'Business Strategy',
    'Digital Transformation Resources',
    'Technology Insights',
    'Case Studies',
    'Knowledge Hub',
    'Business Growth',
  ],
  openGraph: {
    title: 'The Blueprint | Aplict Solutions',
    description: 'Engineering the strategic gap between Business and Growth.',
    type: 'website',
    url: 'https://aplictsolutions.com/blueprint',
    images: [
      {
        url: 'https://aplictsolutions.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'The Blueprint - Aplict Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Blueprint | Aplict Solutions',
    description: 'Engineering the strategic gap between Business and Growth.',
  },
  alternates: {
    canonical: 'https://aplictsolutions.com/blueprint',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlueprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
