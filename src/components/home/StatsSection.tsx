'use client';

import { useEffect, useState, useRef } from 'react';

interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  const stats: Stat[] = [
    { id: 'stat_projects', value: 50, suffix: '+', label: 'Projects Delivered' },
    { id: 'stat_businesses', value: 15, suffix: '+', label: 'Businesses Transformed' },
    { id: 'stat_time_saved', value: 60, suffix: '%', label: 'Time Saved Weekly' },
    { id: 'stat_uptime', value: 99.9, suffix: '%', label: 'Uptime SLA' },
  ];

  const [counts, setCounts] = useState<number[]>(new Array(stats.length).fill(0));

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isHydrated]);

  useEffect(() => {
    if (!isVisible || !isHydrated) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(increment * currentStep, stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  }, [isVisible, isHydrated]);

  return (
    <section ref={sectionRef} className="py-20 border-y border-border relative z-10 bg-background-alt">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div key={stat.id} className="text-center md:text-left space-y-2">
            <p className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground">
              {stat.value % 1 !== 0 ? counts[index].toFixed(1) : Math.floor(counts[index])}
              {stat.suffix}
            </p>
            <p className="label text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}