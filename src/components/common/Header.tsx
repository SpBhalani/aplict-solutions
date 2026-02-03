'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHydrated]);

  const navLinks = [
    { id: 'nav_home', label: 'Home', href: '/' },
    { id: 'nav_solutions', label: 'Solutions', href: '/solutions' },
    { id: 'nav_capabilities', label: 'Capabilities', href: '/capabilities' },
    { id: 'nav_about', label: 'About', href: '/about-us' },
    { id: 'nav_blueprint', label: 'The Blueprint', href: '/blueprint' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300">
      <nav className={`max-w-7xl mx-auto flex items-center justify-between glass shadow-sm rounded-full px-8 py-3 md:py-4 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        {/* Logo Only */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-14 md:h-16 w-40 md:w-52 transition-transform duration-300 group-hover:scale-110 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Aplict Solutions logo"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 160px, 208px"
              priority
              unoptimized={true}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-muted-foreground">
          {navLinks?.map((link) => {
            const isActive = pathname === link?.href;
            return (
              <Link
                key={link?.id}
                href={link?.href}
                className={`transition-colors duration-300 relative group ${
                  isActive ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                {link?.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            );
          })}
        </div>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact-us"
            className="hidden sm:block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Get Started
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={28} />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-6 shadow-xl">
            <div className="flex flex-col gap-4">
              {navLinks?.map((link) => {
                const isActive = pathname === link?.href;
                return (
                  <Link
                    key={link?.id}
                    href={link?.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base font-semibold transition-colors py-2 border-b border-border last:border-0 ${
                      isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link?.label}
                  </Link>
                );
              })}
              <Link
                href="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-bold hover:opacity-90 transition-all text-center mt-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}