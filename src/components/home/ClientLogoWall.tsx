'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LogoData {
  id: string;
  name: string;
  src: string;
  alt: string;
}

export default function ClientLogoWall() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const logos: LogoData[] = [
  {
    id: 'logo_1',
    name: 'TechCorp',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d73f6673-1768311932194.png",
    alt: 'TechCorp logo - enterprise technology solutions company'
  },
  {
    id: 'logo_2',
    name: 'InnovateLabs',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0e24855-1767697399397.png",
    alt: 'InnovateLabs logo - innovation and research company'
  },
  {
    id: 'logo_3',
    name: 'DataFlow',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1802ef4fb-1768772198747.png",
    alt: 'DataFlow logo - data analytics and flow management company'
  },
  {
    id: 'logo_4',
    name: 'CloudNine',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_15c58870b-1766485355551.png",
    alt: 'CloudNine logo - cloud computing services company'
  },
  {
    id: 'logo_5',
    name: 'SecureNet',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ac4e415f-1767697401155.png",
    alt: 'SecureNet logo - cybersecurity and network protection company'
  },
  {
    id: 'logo_6',
    name: 'QuantumSoft',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_16fb34748-1769800252159.png",
    alt: 'QuantumSoft logo - quantum computing software company'
  }];


  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="py-20 bg-background-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs text-center mb-4">
          Trusted By Industry Leaders
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-center">
          Our <span className="serif italic text-primary">Partners</span>
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-12 animate-marquee">
          {duplicatedLogos.map((logo, index) =>
          <div
            key={`${logo.id}_${index}`}
            className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 relative">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              sizes="160px"
              unoptimized
            />
          </div>
          )}
        </div>
      </div>
    </div>);

}