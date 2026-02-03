import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Aplict Solutions - Insights on ADM, Legacy Modernization, and IT Best Practices',
  description:
    'Read our latest insights on application development, legacy modernization, managed ADM services, and IT best practices for SMEs.',
  openGraph: {
    title: 'Blog | Aplict Solutions',
    description: 'Insights on ADM, legacy modernization, and IT best practices.',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
