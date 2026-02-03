import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  image: string;
  imageAlt: string;
  slug: string;
  featured?: boolean;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  readTime,
  publishDate,
  author,
  image,
  imageAlt,
  slug,
  featured = false,
}: BlogCardProps) {
  if (featured) {
    return (
      <Link
        href={`/blog/${slug}`}
        className="group block soft-card overflow-hidden hover:border-primary/20 transition-all"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-[16/10] md:aspect-auto overflow-hidden rounded-2xl relative">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized={image.startsWith('http')}
            />
          </div>
          <div className="p-8 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                {category}
              </span>
              <span className="text-sm text-muted-foreground">Featured</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold group-hover:text-primary transition-colors">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">
              {excerpt}
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Icon name="CalendarIcon" size={16} />
                {publishDate}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="ClockIcon" size={16} />
                {readTime}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="UserIcon" size={16} />
                {author}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block soft-card overflow-hidden hover:border-primary/20 transition-all"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-t-2xl relative">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={image.startsWith('http')}
        />
      </div>
      <div className="p-8 space-y-4">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
          <span className="flex items-center gap-1">
            <Icon name="CalendarIcon" size={14} />
            {publishDate}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="ClockIcon" size={14} />
            {readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}