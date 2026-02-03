import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aplict Solutions',
  description:
    'Privacy Policy for Aplict Solutions. Learn how we collect, use, and protect your personal information. We are committed to protecting your privacy and ensuring data security.',
  openGraph: {
    title: 'Privacy Policy | Aplict Solutions',
    description: 'Privacy Policy for Aplict Solutions. Learn how we collect, use, and protect your personal information.',
    type: 'website',
    url: 'https://aplictsolutions.com/privacy-policy',
  },
  alternates: {
    canonical: 'https://aplictsolutions.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
            Privacy <span className="serif italic text-primary">Policy.</span>
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
                At Aplict Solutions ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <Link href="/" className="text-primary hover:underline">aplictsolutions.com</Link> and use our services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Please read this Privacy Policy carefully. By accessing or using our website and services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">1. Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">1.1 Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Fill out contact forms or inquiry forms on our website</li>
                    <li>Subscribe to our newsletter or marketing communications</li>
                    <li>Apply for career opportunities</li>
                    <li>Communicate with us via email or other channels</li>
                    <li>Use our services</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    This information may include your name, email address, company name, phone number, resume (for career applications), and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">1.2 Automatically Collected Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Device identifiers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">1.3 Cookies and Tracking Technologies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. Cookies are small data files stored on your device that help us improve your experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries, comments, and requests</li>
                <li>To process and evaluate career applications</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To analyze website usage and trends</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and interests</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">3. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction</li>
                <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, property, or safety, or that of our users or others</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">5. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Data Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where consent is the legal basis</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="mailto:contact@aplictsolutions.com" className="text-primary hover:underline">contact@aplictsolutions.com</a>.
              </p>
            </div>

            {/* Data Retention */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">7. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">9. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We take appropriate safeguards to ensure your information receives adequate protection.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 pt-8 border-t border-border">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
