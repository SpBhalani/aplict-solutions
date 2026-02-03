import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import SocialIcon from '@/components/ui/SocialIcon';

export default function Footer() {
  const serviceLinks = [
    { id: 'footer_service_performance', label: 'Performance Optimization', href: '/solutions#performance-optimization' },
    { id: 'footer_service_digital', label: 'Digital Transformation', href: '/solutions#digital-transformation' },
    { id: 'footer_service_legacy', label: 'Legacy Modernization', href: '/solutions#legacy-modernization' },
    { id: 'footer_service_audit', label: 'Systems Audit & Design', href: '/solutions#systems-audit' },
  ];

  const capabilityLinks = [
    { id: 'footer_capability_ai', label: 'Artificial Intelligence', href: '/capabilities#ai' },
    { id: 'footer_capability_analytics', label: 'Analytics & BI', href: '/capabilities#analytics-bi' },
    { id: 'footer_capability_appdev', label: 'Application Development', href: '/capabilities#app-dev' },
    { id: 'footer_capability_automation', label: 'Automation', href: '/capabilities#automation' },
  ];

  const companyLinks = [
    { id: 'footer_company_about', label: 'About Us', href: '/about-us' },
    { id: 'footer_company_career', label: 'Careers', href: '/career' },
    { id: 'footer_company_blueprint', label: 'The Blueprint', href: '/blueprint' },
    { id: 'footer_company_contact', label: 'Contact', href: '/contact-us' },
  ];

  const socialLinks = [
    { id: 'footer_social_linkedin', name: 'LinkedIn', platform: 'linkedin' as const, href: 'https://www.linkedin.com/company/aplict-solutions', ariaLabel: 'Visit our LinkedIn profile' },
    { id: 'footer_social_instagram', name: 'Instagram', platform: 'instagram' as const, href: 'https://www.instagram.com/aplict.solutions/', ariaLabel: 'Follow us on Instagram' },
    { id: 'footer_social_facebook', name: 'Facebook', platform: 'facebook' as const, href: 'https://www.facebook.com/profile.php?id=61587053438341', ariaLabel: 'Follow us on Facebook' },
    { id: 'footer_social_x', name: 'X (Twitter)', platform: 'x' as const, href: 'https://x.com/AplictSolutions', ariaLabel: 'Follow us on X' },
  ];

  return (
    <footer className="bg-[#09172B] border-t border-[#193F75]/30 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - Link Groups */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo + Description + Contact */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 md:h-14 w-32 md:w-40 transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                <Image
                  src="/logo-light.png"
                  alt="Aplict Solutions logo"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 128px, 160px"
                  unoptimized={true}
                />
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Transform technical debt into competitive advantage with our custom software development services built on open source technologies.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <Icon name="MapPinIcon" size={18} className="text-[#1DE289] shrink-0 mt-0.5" />
                <p className="text-sm text-white/70">Surat, Gujarat</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="EnvelopeIcon" size={18} className="text-[#1DE289] shrink-0 mt-0.5" />
                <a href="mailto:contact@aplictsolutions.com" className="text-sm text-white/70 hover:text-[#1DE289] transition-colors">
                  contact@aplictsolutions.com
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="label text-white">Solutions</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#1DE289] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-4">
            <h4 className="label text-white">Capabilities</h4>
            <ul className="space-y-3">
              {capabilityLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#1DE289] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="label text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#1DE289] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row - Copyright + Social */}
        <div className="pt-8 border-t border-[#193F75]/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-white/70">
            <p>© 2026 Aplict Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-[#1DE289] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-[#1DE289] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-[#1D9689] hover:text-white text-white/70 transition-all shadow-sm"
              >
                <SocialIcon platform={social.platform} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}