import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Terms of Service | Aplict Solutions',
  description:
    'Terms of Service for Aplict Solutions. Read our terms and conditions for using our website and services. Understand your rights and obligations when engaging with our services.',
  openGraph: {
    title: 'Terms of Service | Aplict Solutions',
    description: 'Terms of Service for Aplict Solutions. Read our terms and conditions for using our website and services.',
    type: 'website',
    url: 'https://aplictsolutions.com/terms-of-service',
  },
  alternates: {
    canonical: 'https://aplictsolutions.com/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
            Terms of <span className="serif italic text-primary">Service.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Last Updated: January 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert max-w-none space-y-12">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the website operated by Aplict Solutions ("we," "our," or "us") located at <Link href="/" className="text-primary hover:underline">aplictsolutions.com</Link> (the "Website") and our services (collectively, the "Services").
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Please read these Terms carefully before using our Services. By accessing or using our Website or Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing, browsing, or using our Website or Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated by reference. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
              </p>
            </div>

            {/* Description of Services */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aplict Solutions provides IT application development and maintenance services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Custom software development and application development</li>
                <li>Legacy system modernization</li>
                <li>Performance optimization services</li>
                <li>Digital transformation consulting</li>
                <li>Systems audit and design</li>
                <li>Managed Application Development and Maintenance (ADM) services</li>
                <li>Artificial Intelligence, Analytics & BI, and Automation solutions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice.
              </p>
            </div>

            {/* Use of Services */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">3. Use of Services</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">3.1 Permitted Use</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may use our Website and Services only for lawful purposes and in accordance with these Terms. You agree to use our Services in compliance with all applicable laws, regulations, and third-party rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">3.2 Prohibited Activities</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    You agree not to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Violate any applicable local, state, national, or international law or regulation</li>
                    <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>Transmit any malicious code, viruses, or harmful data</li>
                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                    <li>Interfere with or disrupt the integrity or performance of our Services</li>
                    <li>Use our Services to transmit spam, unsolicited communications, or harassing content</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                    <li>Collect or harvest information about other users without their consent</li>
                    <li>Use automated systems to access our Services without our prior written consent</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Accounts and Information */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">4. User Accounts and Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you submit information through our Website (such as contact forms or career applications), you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your information to keep it accurate</li>
                <li>Maintain the security of any account credentials</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">5. Intellectual Property Rights</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">5.1 Our Intellectual Property</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Website, Services, and all content, features, and functionality (including but not limited to text, graphics, logos, icons, images, software, and designs) are owned by Aplict Solutions or its licensors and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">5.2 Limited License</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Website for personal or internal business purposes, subject to these Terms. This license does not include any right to reproduce, distribute, modify, create derivative works, publicly display, or commercially exploit our content.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">5.3 Your Content</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you submit any content to us (including through forms, applications, or communications), you retain ownership of such content but grant us a worldwide, royalty-free, perpetual, irrevocable, non-exclusive license to use, reproduce, modify, adapt, publish, and distribute such content for the purpose of providing our Services and conducting our business.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Agreements */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">6. Service Agreements</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms govern your use of our Website and general Services. If you enter into a separate written agreement with us for specific services (such as a service agreement, statement of work, or master services agreement), the terms of that separate agreement will govern those specific services, and these Terms will apply to the extent not inconsistent with such separate agreement.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">7. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OUR WEBSITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</li>
                <li>WARRANTIES THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR FREE OF VIRUSES</li>
                <li>WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF INFORMATION ON OUR WEBSITE</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not warrant that our Services will meet your requirements or that any defects will be corrected. Some jurisdictions do not allow the exclusion of implied warranties, so some of the above exclusions may not apply to you.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL APLICT SOLUTIONS, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES</li>
                <li>DAMAGES RESULTING FROM YOUR USE OR INABILITY TO USE OUR SERVICES</li>
                <li>DAMAGES RESULTING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA</li>
                <li>DAMAGES RESULTING FROM THIRD-PARTY CONDUCT OR CONTENT</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US, IF ANY, IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
              </p>
            </div>

            {/* Indemnification */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">9. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Aplict Solutions and its affiliates, directors, officers, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to: (a) your use of our Services, (b) your violation of these Terms, (c) your violation of any rights of another party, or (d) any content you submit or transmit through our Services.
              </p>
            </div>

            {/* Termination */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">10. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use our Services will cease immediately. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>

            {/* Governing Law */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">11. Governing Law and Dispute Resolution</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">11.1 Governing Law</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. The courts of Surat, Gujarat, India shall have exclusive jurisdiction over any disputes arising out of or relating to these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">11.2 Dispute Resolution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In the event of any dispute, controversy, or claim arising out of or relating to these Terms, the parties shall first attempt to resolve the dispute through good faith negotiations. If the dispute cannot be resolved through negotiations within thirty (30) days, the parties agree to submit the dispute to binding arbitration in accordance with the Arbitration and Conciliation Act, 2015, or to the exclusive jurisdiction of the courts in Surat, Gujarat, India.
                  </p>
                </div>
              </div>
            </div>

            {/* Severability */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">12. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable, or if such modification is not possible, it shall be severed from these Terms. The remaining provisions shall remain in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">13. Entire Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Aplict Solutions regarding your use of our Website and Services and supersede all prior agreements and understandings, whether written or oral.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">14. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our Services after such modifications constitutes your acceptance of the updated Terms. If you do not agree to the modified Terms, you must stop using our Services.
              </p>
            </div>

            {/* Waiver */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">15. Waiver</h2>
              <p className="text-muted-foreground leading-relaxed">
                No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or condition or any other term or condition. Any failure to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 pt-8 border-t border-border">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">16. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-background/50 border border-border rounded-xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="EnvelopeIcon" size={20} className="text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Email</p>
                    <a href="mailto:contact@aplictsolutions.com" className="text-primary hover:underline">
                      contact@aplictsolutions.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPinIcon" size={20} className="text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Address</p>
                    <p className="text-muted-foreground">Surat, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <Icon name="ArrowLeftIcon" size={20} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
