import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import DeleteAccountForm from './DeleteAccountForm';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Delete Your TourSage Account',
  description:
    'Submit a deletion request for your TourSage account and personal data by confirming your identity and typing Delete.',
};

export default function DeleteInfoPage() {
  return (
    <section className={`${dmSans.className} bg-gradient-to-b from-white via-slate-50 to-white py-24`}>
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 sm:px-8">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Request Account Deletion
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-[#262262]">
            Permanently remove your TourSage data
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <DeleteAccountForm />

          <aside className="space-y-6 rounded-3xl bg-white/75 p-8 text-base leading-7 text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">What happens when you submit</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>We pause future processing tied to your account credentials.</li>
                <li>Our privacy team verifies you are the account owner before proceeding.</li>
                <li>Within 30 days we delete your profile, saved tours, and stored audio transcripts unless law requires retention.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Need help?</h2>
              <p>
                If you made a mistake or want to revoke this request, contact us immediately at{' '}
                <a className="text-[#262262] underline" href="mailto:info@toursage.eu">
                  info@toursage.eu
                </a>{' '}
                or reply to the confirmation email we send after you submit the form.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/90 p-6 text-slate-100">
              <h3 className="text-base font-semibold">Security reminder</h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Only enter your password on this official TourSage page. Never share one-time codes or passwords with anyone claiming to be TourSage support.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
