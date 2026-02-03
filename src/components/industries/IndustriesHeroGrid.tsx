'use client';

import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

interface IndustryHeroCardProps {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  color: string;
  onClick: () => void;
}

function IndustryHeroCard({ id, name, image, imageAlt, color, onClick }: IndustryHeroCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden rounded-3xl h-64 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-heading font-bold mb-2">{name}</h3>
        <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>View Details</span>
          <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>);

}

export default function IndustriesHeroGrid() {
  const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cdf81921-1764654292439.png',
    imageAlt: 'Modern manufacturing facility with automated production lines',
    color: 'bg-primary'
  },
  {
    id: 'logistics',
    name: 'Logistics',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_135ea089a-1764637482598.png',
    imageAlt: 'Logistics warehouse with organized inventory',
    color: 'bg-secondary'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ec9f23e5-1766841180325.png",
    imageAlt: 'Modern healthcare facility with medical professionals',
    color: 'bg-accent'
  },
  {
    id: 'retail',
    name: 'Retail',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18ee94cf0-1768855842453.png",
    imageAlt: 'Modern retail store with digital displays',
    color: 'bg-accent-2'
  },
  {
    id: 'financial',
    name: 'Financial Services',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1fda8824a-1767497898962.png',
    imageAlt: 'Financial services office with professionals',
    color: 'bg-success'
  }];


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {industries.slice(0, 3).map((industry) =>
      <IndustryHeroCard
        key={industry.id}
        {...industry}
        onClick={() => scrollToSection(industry.id)} />

      )}
      <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 gap-6">
        {industries.slice(3).map((industry) =>
        <IndustryHeroCard
          key={industry.id}
          {...industry}
          onClick={() => scrollToSection(industry.id)} />

        )}
      </div>
    </div>);

}