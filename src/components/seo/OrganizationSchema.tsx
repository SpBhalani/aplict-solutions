import JsonLd from './JsonLd';

export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aplict Solutions',
    url: 'https://aplictsolutions.com',
    logo: 'https://aplictsolutions.com/logo.png',
    description: 'Custom software development agency specializing in AI, Analytics & BI, Application Development, and Automation. Transform technical debt into competitive advantage with open source technologies.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '',
      contactType: 'Customer Service',
      email: 'contact@aplictsolutions.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/aplict-solutions',
      'https://www.instagram.com/aplict.solutions/',
      'https://www.facebook.com/profile.php?id=61587053438341',
      'https://x.com/AplictSolutions',
    ],
    foundingDate: '2016',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '1-10',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    knowsAbout: [
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
  };

  return <JsonLd data={organizationSchema} />;
}
