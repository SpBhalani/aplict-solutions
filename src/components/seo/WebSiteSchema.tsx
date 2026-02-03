import JsonLd from './JsonLd';

interface WebSiteSchemaProps {
  searchActionUrl?: string;
}

export default function WebSiteSchema({ searchActionUrl }: WebSiteSchemaProps) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aplict Solutions',
    url: 'https://aplictsolutions.com',
    description: 'Custom software development agency specializing in AI, Analytics & BI, Application Development, and Automation.',
    publisher: {
      '@type': 'Organization',
      name: 'Aplict Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aplictsolutions.com/logo.png',
      },
    },
    potentialAction: searchActionUrl
      ? {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: searchActionUrl,
          },
          'query-input': 'required name=search_term_string',
        }
      : undefined,
  };

  // Remove undefined properties
  if (!searchActionUrl) {
    delete websiteSchema.potentialAction;
  }

  return <JsonLd data={websiteSchema} />;
}
