import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | TourSage',
  description:
    'TourSage Terms of Service outlining the rules and guidelines for using our services.',
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#262262] mb-4">Terms of Service</h1>
          <p className="text-accent-600 font-medium">Last updated: July 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using TourSage services, you agree to be bound by these Terms of
            Service. If you do not agree, you may not use our services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            TourSage provides AI-powered walking tours through mobile applications and related
            services (&quot;Services&quot;). The Services may change over time.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>
            You agree to use the Services responsibly and legally. You must maintain awareness of
            your surroundings while using our walking tours.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the Services are owned by TourSage and
            protected by international copyright laws.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            TourSage shall not be liable for any indirect, incidental, special, consequential or
            punitive damages resulting from your use of the Services.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. Continued use of Services constitutes acceptance
            of the modified Terms.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of Delaware, USA, without regard to conflict
            of law principles.
          </p>

          <hr />
          <p>© {new Date().getFullYear()} TourSage. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
