// API Response Types
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
  }
  
  // Blog Types
  export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    author: Author;
    publishDate: string;
    updatedDate?: string;
    readTime: string;
    featuredImage: string;
    featuredImageAlt: string;
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string[];
    featured: boolean;
    published: boolean;
  }
  
  export interface Author {
    id: string;
    name: string;
    bio?: string;
    avatar?: string;
    role?: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    slug: string;
    description?: string;
  }
  
  // Case Study Types
  export interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: Result[];
    technologies: string[];
    duration: string;
    teamSize: number;
    featuredImage: string;
    featuredImageAlt: string;
    gallery?: GalleryImage[];
    testimonial?: Testimonial;
    published: boolean;
  }
  
  export interface Result {
    metric: string;
    value: string;
    description: string;
  }
  
  export interface GalleryImage {
    url: string;
    alt: string;
    caption?: string;
  }
  
  export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
  }
  
  // Service Types
  export interface Service {
    id: string;
    name: string;
    slug: string;
    description: string;
    features: string[];
    benefits: string[];
    icon: string;
    published: boolean;
  }
  
  // Industry Types
  export interface Industry {
    id: string;
    name: string;
    slug: string;
    description: string;
    painPoints: string[];
    solutions: string[];
    caseStudies: string[];
    image: string;
    imageAlt: string;
    published: boolean;
  }
  
  // Contact Form Types
  export interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    message: string;
    service?: string;
    budget?: string;
  }
  
  // Newsletter Types
  export interface NewsletterSubscription {
    email: string;
    name?: string;
    interests?: string[];
  }
  
  // SEO Types
  export interface SeoMetadata {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    ogImageAlt?: string;
    canonicalUrl?: string;
    noindex?: boolean;
  }