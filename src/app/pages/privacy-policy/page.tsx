import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TourSage – Privacy Policy',
  description: 'Our commitment to your privacy and data security.',
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ padding: '4rem', maxWidth: 800, margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
      <h1>Privacy Policy</h1>
      
      <p>Effective date: July 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Your privacy is critically important to us. At <strong>TourSage</strong>, we strive to
          protect any personal data you share when you join our waitlist or use our services.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Name & Email:</strong> Collected when you sign up via our waitlist form.</li>
          <li><strong>Location Data:</strong> If you use our tour feature, we may track your GPS
            position (with your permission) to guide you step by step.</li>
          <li><strong>Voice Recordings:</strong> Optional recordings you make to ask questions
            during a tour (stored securely on our servers).</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Data</h2>
        <ul>
          <li>To send you launch updates and promotional emails.</li>
          <li>To generate your personalised tour routes and real-time voice narration.</li>
          <li>To improve our service through anonymised analytics.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Sharing & Security</h2>
        <p>
          We never sell your personal data. All data is stored on secure servers (AWS/Firebase)
          with industry-standard encryption.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>
          You can request access, correction, or deletion of your personal data at any time.
          Please email us at <a href="mailto:privacy@toursage.com">privacy@toursage.com</a>.
        </p>
      </section>

      <section>
        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this policy occasionally. The “Effective date” at the top will reflect
          when changes go live.
        </p>
      </section>

      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
        © {new Date().getFullYear()} TourSage. All rights reserved.
      </p>
    </main>
  );
} 