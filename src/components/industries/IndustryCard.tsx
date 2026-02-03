'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

interface IndustryCardProps {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  color: string;
}

export default function IndustryCard({
  id,
  name,
  image,
  imageAlt,
  description,
  painPoints,
  solutions,
  color,
}: IndustryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg transition-all duration-500 hover:shadow-2xl">
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 33vw"
          unoptimized={image.startsWith('http')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
        <div className={`inline-block px-4 py-2 rounded-full ${color} text-white text-xs font-bold uppercase tracking-widest mb-4`}>
          {name}
        </div>
        <h3 className="text-2xl font-heading font-bold text-white mb-4">{description}</h3>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-white hover:text-accent transition-colors"
        >
          <span className="text-sm font-bold">
            {isExpanded ? 'Show Less' : 'Learn More'}
          </span>
          <Icon
            name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            size={20}
          />
        </button>

        {isExpanded && (
          <div className="mt-6 space-y-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <Icon name="ExclamationTriangleIcon" size={20} className="text-warning" />
                Key Challenges
              </h4>
              <ul className="space-y-2">
                {painPoints.map((point, index) => (
                  <li key={`${id}_pain_${index}`} className="text-sm text-white/80 flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <Icon name="CheckCircleIcon" size={20} className="text-success" />
                Our Solutions
              </h4>
              <ul className="space-y-2">
                {solutions.map((solution, index) => (
                  <li key={`${id}_solution_${index}`} className="text-sm text-white/80 flex items-start gap-2">
                    <Icon name="CheckIcon" size={16} className="text-success shrink-0 mt-0.5" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}