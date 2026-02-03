import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import JobModal from '@/components/career/JobModal';
import CareerPageClient from '@/components/career/CareerPageClient';

export const metadata: Metadata = {
  title: 'Careers | Aplict Solutions - Join Our Team',
  description:
    'Join Aplict Solutions and grow together. We believe in creating the best environment to enhance skills and contribute to businesses. Explore current openings including Senior Full Stack Developer, Business Growth Associate, and more. Start your journey with us.',
  keywords: [
    'Careers at Aplict Solutions',
    'Software Developer Jobs',
    'IT Jobs',
    'Remote Jobs',
    'Software Engineering Careers',
    'Tech Jobs India',
    'Full Stack Developer Jobs',
  ],
  openGraph: {
    title: 'Careers | Aplict Solutions',
    description: 'Join our team and grow together. Explore exciting career opportunities.',
    type: 'website',
    url: 'https://aplictsolutions.com/career',
    images: [
      {
        url: 'https://aplictsolutions.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Careers at Aplict Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Aplict Solutions',
    description: 'Join our team and grow together. Explore exciting career opportunities.',
  },
  alternates: {
    canonical: 'https://aplictsolutions.com/career',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareerPage() {
  const jobs = [
    {
      id: 'senior-fullstack-developer',
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Surat, Gujarat (Remote Available)',
      type: 'Full-time',
      experience: '3-5 years',
      description:
        'We are looking for an experienced Full Stack Developer to join our dynamic team. You will be responsible for developing and maintaining web applications using modern open source technologies. The ideal candidate should have a strong understanding of both frontend and backend development, with experience in building scalable applications.',
      responsibilities: [
        'Design and develop scalable web applications using modern frameworks',
        'Collaborate with cross-functional teams to define, design, and ship new features',
        'Write clean, maintainable, and efficient code following best practices',
        'Participate in code reviews and provide constructive feedback',
        'Troubleshoot, debug, and optimize application performance',
        'Work with open source technologies and contribute to technical decisions',
        'Mentor junior developers and share knowledge with the team',
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field, or equivalent experience",
        '3-5 years of experience in full stack development',
        'Strong proficiency in JavaScript/TypeScript and modern frameworks (React, Next.js, Node.js)',
        'Experience with databases (PostgreSQL, MongoDB) and RESTful APIs',
        'Knowledge of version control systems (Git) and CI/CD practices',
        'Understanding of software development lifecycle and agile methodologies',
        'Excellent problem-solving skills and attention to detail',
      ],
      skills: [
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'PostgreSQL',
        'MongoDB',
        'Docker',
        'Git',
        'REST APIs',
        'GraphQL',
      ],
      benefits: [
        'Competitive salary and performance-based bonuses',
        'Flexible working hours and remote work options',
        'Opportunity to work with cutting-edge open source technologies',
        'Continuous learning and skill development programs',
        'Collaborative and supportive work environment',
        'Clear career growth path and mentorship opportunities',
        'Health and wellness benefits',
      ],
    },
    {
      id: 'business-growth-associate',
      title: 'Business Growth Associate',
      department: 'Business Development',
      location: 'Surat, Gujarat (Remote Available)',
      type: 'Full-time',
      experience: 'Up to 2 years',
      description:
        'We are looking for a young tech-savvy professional with high energy levels to work directly with the founder of our startup firm to contribute to the development of marketing, business development, and sales functions in a blended role. You will be responsible for creating and conducting targeted marketing campaigns, building client relations, and acquiring business deal wins. The ideal candidate doesn\'t just work hard—they work smart by integrating AI toolsets into their daily workflow to automate routine tasks and provide deep analytical insights.',
      responsibilities: [
        'Design and execute optimized marketing strategies targeting specific industry verticals in identified geographies to build a verifiable list of prospects',
        'Develop marketing material for general use and account-based use in highly customized contexts to highlight value creation',
        'Initiate and build conversations with prospect accounts to position services for driving digital transformation programs',
        'Identify and develop relations with key decision makers and influencers within the client ecosystem',
        'Own and drive the complete sales cycle through the sales funnel from generation of qualified leads to successful closure',
        'Prepare high-quality sales literature in line with IT industry standards to position and leverage service quality',
        'Maintain CRM health by recording customer interaction with discipline and precision at all times',
        'Ensure preparation of correct and professional documentation of all records and artifacts across all touchpoints of the sales cycle',
      ],
      requirements: [
        'BBA/MBA with specialization in Marketing or Graduate/PG in IT Sciences',
        'Prior experience of up to 2 years in similar all-round roles in IT application services',
        'Familiarity with enterprise sales from participation in at least two complete sales cycles in previous organizations',
        'Excellent written and verbal communication skills with experience in B2B correspondence',
        'Ability to effectively communicate value proposition and comprehend client requirements with precision',
        'Utilization of AI tools seamlessly for productivity enhancement with intelligent deployment of prompts',
        'Ability to adapt to role requirements and thrive in a high-pressure, fast-paced environment where priorities can change rapidly',
      ],
      skills: [
        'B2B Sales',
        'Marketing Strategy',
        'Business Development',
        'CRM Management',
        'AI Tools',
        'Enterprise Sales',
        'Client Relations',
        'Sales Operations',
        'Communication',
        'Priority Management',
      ],
      benefits: [
        'Work directly with the founder and gain invaluable startup experience',
        'Opportunity to build and shape marketing, BD, and sales functions from the ground up',
        'Performance-based recognition and growth opportunities',
        'Flexible working hours and remote work options',
        'High-energy, fast-paced startup environment',
        'Clear career progression path in business development and sales',
        'Competitive compensation package',
      ],
    },
  ];

  return <CareerPageClient jobs={jobs} />;
}
