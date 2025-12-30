import type { Metadata } from 'next';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Privacy Policy | TourSage',
  description:
    'Read the October 2025 TourSage privacy policy covering microphone audio, transcripts, retention, and your data rights.',
};

export default function PrivacyPage() {
  return (
    <section
      className={`${dmSans.className} bg-gradient-to-b from-white via-slate-50 to-white py-24`}
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-16 px-6 sm:px-8">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            TourSage Privacy Policy
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-[#262262]">
            Last updated: October 04, 2025
          </p>
        </header>

        <article className="space-y-8 rounded-3xl bg-white/80 p-10 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Introduction</h2>
            <p className="text-base leading-7 text-slate-700">
              Your privacy matters to us. This Privacy Policy explains what information TourSage
              (“we”, “us”, “our”) collects when you use our mobile app, how we use and share that
              information, and the choices and rights available to you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Information We Collect</h2>
            <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-slate-700">
              <li>
                <span className="font-medium text-slate-900">Microphone Audio (User-Initiated):</span>{' '}
                When you opt to ask a question about nearby attractions, we capture audio through
                your device’s microphone solely to process the request.
              </li>
              <li>
                <span className="font-medium text-slate-900">Transcriptions &amp; Q&amp;A Content:</span> We
                convert microphone input into text, store the question-and-response pairs, and may
                review them (in anonymized or aggregated form where possible) to improve our
                narration and question-answering models.
              </li>
              <li>
                <span className="font-medium text-slate-900">User Accounts (Optional):</span> If you
                create or sign in to an account, we store the credentials you supply (such as email
                address or federated login identifier) so your preferences can travel with you
                across devices.
              </li>
              <li>
                <span className="font-medium text-slate-900">Usage &amp; Diagnostics:</span> We gather app
                interaction events, crash logs, device type, operating system, app version, coarse
                location (city/region), and similar analytics to maintain performance and
                relevance.
              </li>
              <li>
                <span className="font-medium text-slate-900">Support &amp; Feedback:</span> When you
                contact us, we collect the content of your message, email address, and any
                attachments you provide so we can respond.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">How We Use Your Information</h2>
            <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-slate-700">
              <li>Deliver location-based narration, guided tours, and personalized answers to questions about attractions.</li>
              <li>Transcribe, analyze, and (where you have opted in) retain question transcripts to improve our AI models and future responses.</li>
              <li>Personalize content, maintain app functionality, and troubleshoot issues.</li>
              <li>Communicate important updates, security alerts, feature announcements, and support messages.</li>
              <li>Detect, prevent, or address fraud, abuse, or security incidents, and comply with applicable laws.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Sharing of Information</h2>
            <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-slate-700">
              <li>
                <span className="font-medium text-slate-900">Service Providers:</span> We engage
                trusted partners (e.g., speech-to-text processors, AI model hosts, analytics
                providers, cloud infrastructure) who act on our behalf under contractual
                confidentiality and data-protection obligations.
              </li>
              <li>
                <span className="font-medium text-slate-900">Legal &amp; Safety:</span> We may disclose
                information if required by law, legal process, or to protect the rights, property,
                or safety of TourSage, our users, or the public.
              </li>
              <li>
                <span className="font-medium text-slate-900">No Selling of Personal Data:</span> We do
                not sell personal information, nor do we share microphone audio or transcripts with
                advertisers.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Data Retention</h2>
            <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-slate-700">
              <li>
                Audio captured from the microphone is deleted once it has been transcribed unless
                you have explicitly consented to limited retention for quality assurance.
              </li>
              <li>
                Transcribed questions, responses, and usage analytics are retained for up to 24
                months to monitor product quality and train/improve our models, after which they are
                anonymized or deleted.
              </li>
              <li>
                Account information (if applicable) is stored while your account remains active; we
                delete or anonymize it upon request, subject to legal obligations.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Your Choices &amp; Rights</h2>
            <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-slate-700">
              <li>
                <span className="font-medium text-slate-900">Permissions:</span> You can revoke
                microphone access anytime in your device settings. Note that the Q&amp;A feature requires
                microphone access to function.
              </li>
              <li>
                <span className="font-medium text-slate-900">Access, Correction, &amp; Deletion:</span> You
                may request a copy of your information, ask us to correct inaccuracies, or request
                deletion by emailing us.
              </li>
              <li>
                <span className="font-medium text-slate-900">Self-Service Deletion:</span> If you want
                to delete your account and data, use our{' '}
                <Link className="text-[#262262] underline" href="/delete-info">
                  account deletion request form
                </Link>{' '}
                to submit the details securely.
              </li>
              <li>
                <span className="font-medium text-slate-900">Opt-Out of Model Training:</span> Contact
                us to exclude your transcripts from future AI training datasets; we will honor the
                request going forward.
              </li>
              <li>
                <span className="font-medium text-slate-900">Regional Rights:</span> Depending on your
                jurisdiction, you may have additional rights (e.g., data portability, restriction of
                processing, objection). We will comply with applicable laws and respond within
                required timeframes.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Children’s Privacy</h2>
            <p className="text-base leading-7 text-slate-700">
              TourSage is not directed to children under 13 (or the relevant age in your
              jurisdiction). We do not knowingly collect personal information from children. If you
              believe we have collected such data, contact us so we can delete it promptly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">International Transfers</h2>
            <p className="text-base leading-7 text-slate-700">
              We operate primarily from the United States, and our service providers may be located
              in other countries. By using TourSage, you acknowledge that your information may be
              transferred to and processed in jurisdictions that may have data-protection rules
              different from your home country. We implement safeguards required by applicable law
              for these transfers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Security</h2>
            <p className="text-base leading-7 text-slate-700">
              We use a combination of administrative, technical, and physical safeguards—including
              encryption in transit, access controls, and ongoing monitoring—to protect your
              information. However, no method of transmission or storage is 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Changes to This Policy</h2>
            <p className="text-base leading-7 text-slate-700">
              We may update this Privacy Policy to reflect changes in our practices or legal
              requirements. We will post updates here and adjust the “Last updated” date. If the
              changes are material, we will provide additional notice in-app or via email before
              they take effect.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
