'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface TileData {
  id: string;
  type: 'image' | 'stat';
  image?: string;
  alt?: string;
  stat?: string;
  label?: string;
  bgColor?: string;
  rotation?: string;
}

export default function HeroTileGrid() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const tiles: TileData[] = [
  {
    id: 'tile_team',
    type: 'image',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19ed7b82d-1764843649706.png",
    alt: 'Team collaboration in modern office with laptops and whiteboards',
    rotation: 'rotate-2'
  },
  {
    id: 'tile_clients',
    type: 'stat',
    stat: '50+',
    label: 'Enterprise Clients',
    bgColor: 'bg-secondary',
    rotation: '-rotate-2'
  },
  {
    id: 'tile_office',
    type: 'image',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fbd9a01b-1765828697210.png",
    alt: 'Modern office workspace with computers and development setup',
    rotation: 'rotate-1'
  },
  {
    id: 'tile_projects',
    type: 'stat',
    stat: '200+',
    label: 'Projects Delivered',
    bgColor: 'bg-primary',
    rotation: '-rotate-1'
  },
  {
    id: 'tile_tech',
    type: 'image',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dfbc27cd-1766500363073.png",
    alt: 'Software development code on multiple monitors showing modern tech stack',
    rotation: 'rotate-3'
  }];


  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-20">
      {tiles.map((tile, index) => {
        if (tile.type === 'image') {
          return (
            <div
              key={tile.id}
              className={`aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ${tile.rotation} ${
              index === 4 ? 'hidden lg:block' : ''} transition-transform duration-500 hover:scale-105 relative`
              }>
              <Image
                src={tile.image!}
                alt={tile.alt!}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                unoptimized
              />
            </div>);

        } else {
          return (
            <div
              key={tile.id}
              className={`${tile.bgColor} text-white p-8 rounded-3xl flex flex-col justify-between text-left ${tile.rotation} transition-transform duration-500 hover:scale-105 shadow-lg`}>

              <p className="text-4xl font-bold">{tile.stat}</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                {tile.label}
              </p>
            </div>);

        }
      })}
    </div>);

}