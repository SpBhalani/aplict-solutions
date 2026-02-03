import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';
import { getBlogPost, getBlogPosts } from '@/lib/api';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const response = await getBlogPost(slug);
  
  if (!response.success || !response.data) {
    return {
      title: 'Blog Post Not Found | Aplict Solutions',
    };
  }

  const post = response.data;

  return {
    title: post.seoTitle || `${post.title} | Aplict Solutions Blog`,
    description: post.seoDescription || post.excerpt,
    keywords: post.seoKeywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          alt: post.featuredImageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const response = await getBlogPost(slug);

  if (!response.success || !response.data) {
    notFound();
  }

  const post = response.data;

  // Fetch related posts
  const relatedResponse = await getBlogPosts({ category: post.category, limit: 3 });
  const relatedPosts = relatedResponse.data?.filter((p) => p.id !== post.id).slice(0, 3) || [];

  return (
    <main>
        {/* Hero Section */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-32 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-6 fade-in-up">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <Icon name="ArrowLeftIcon" size={16} />
                Back to Blog
              </Link>

              <div className="flex items-center gap-4 text-sm">
                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold">
                  {post.category}
                </span>
                <span className="text-muted-foreground">{post.readTime}</span>
                <span className="text-muted-foreground">{post.publishDate}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-4">
                {post.author.avatar && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={`${post.author.name} avatar`}
                      fill
                      className="object-cover"
                      sizes="48px"
                      unoptimized={post.author.avatar.startsWith('http')}
                    />
                  </div>
                )}
                <div>
                  <p className="font-bold">{post.author.name}</p>
                  {post.author.role && (
                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden fade-in-up">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                unoptimized={post.featuredImage.startsWith('http')}
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-6">
            <article
              className="prose prose-lg max-w-none fade-in-up"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-black/5 text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-heading font-bold mb-12">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="soft-card overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.featuredImageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized={relatedPost.featuredImage.startsWith('http')}
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-heading font-bold line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="soft-card p-12 text-center space-y-6">
              <h2 className="text-4xl font-heading font-bold">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how our managed ADM services can help you achieve your goals.
              </p>
              <Link href="/contact" className="btn btn-primary inline-flex items-center gap-2">
                Get Started
                <Icon name="ArrowRightIcon" size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}