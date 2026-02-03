import type {
    ApiResponse,
    BlogPost,
    Category,
    CaseStudy,
    Service,
    Industry,
    ContactFormData,
    NewsletterSubscription,
  } from '@/types/api';
  
  // Base API URL - update this with your backend URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
  
  // Generic fetch wrapper with error handling
  async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });
  
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('API Fetch Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }
  
  // Blog API Functions
  export async function getBlogPosts(params?: {
    category?: string;
    tag?: string;
    limit?: number;
    offset?: number;
    featured?: boolean;
  }): Promise<ApiResponse<BlogPost[]>> {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    if (params?.tag) queryParams.append('tag', params.tag);
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.offset) queryParams.append('offset', params.offset.toString());
    if (params?.featured !== undefined) queryParams.append('featured', params.featured.toString());
  
    const query = queryParams.toString();
    return fetchApi<BlogPost[]>(`/blog${query ? `?${query}` : ''}`);
  }
  
  export async function getBlogPost(slug: string): Promise<ApiResponse<BlogPost>> {
    return fetchApi<BlogPost>(`/blog/${slug}`);
  }
  
  export async function getCategories(): Promise<ApiResponse<Category[]>> {
    return fetchApi<Category[]>('/categories');
  }
  
  // Case Study API Functions
  export async function getCaseStudies(params?: {
    industry?: string;
    limit?: number;
  }): Promise<ApiResponse<CaseStudy[]>> {
    const queryParams = new URLSearchParams();
    if (params?.industry) queryParams.append('industry', params.industry);
    if (params?.limit) queryParams.append('limit', params.limit.toString());
  
    const query = queryParams.toString();
    return fetchApi<CaseStudy[]>(`/case-studies${query ? `?${query}` : ''}`);
  }
  
  export async function getCaseStudy(slug: string): Promise<ApiResponse<CaseStudy>> {
    return fetchApi<CaseStudy>(`/case-studies/${slug}`);
  }
  
  // Service API Functions
  export async function getServices(): Promise<ApiResponse<Service[]>> {
    return fetchApi<Service[]>('/services');
  }
  
  export async function getService(slug: string): Promise<ApiResponse<Service>> {
    return fetchApi<Service>(`/services/${slug}`);
  }
  
  // Industry API Functions
  export async function getIndustries(): Promise<ApiResponse<Industry[]>> {
    return fetchApi<Industry[]>('/industries');
  }
  
  export async function getIndustry(slug: string): Promise<ApiResponse<Industry>> {
    return fetchApi<Industry>(`/industries/${slug}`);
  }
  
  // Contact Form API Function
  export async function submitContactForm(
    data: ContactFormData
  ): Promise<ApiResponse<{ message: string }>> {
    return fetchApi<{ message: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  
  // Newsletter API Function
  export async function subscribeNewsletter(
    data: NewsletterSubscription
  ): Promise<ApiResponse<{ message: string }>> {
    return fetchApi<{ message: string }>('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }