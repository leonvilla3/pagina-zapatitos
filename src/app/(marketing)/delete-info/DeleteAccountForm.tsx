'use client';

import { FormEvent, useState } from 'react';

interface FormState {
  username: string;
  password: string;
  confirmation: string;
}

export default function DeleteAccountForm() {
  const [formState, setFormState] = useState<FormState>({
    username: '',
    password: '',
    confirmation: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isValid =
    formState.username.trim().length > 0 &&
    formState.password.trim().length > 0 &&
    formState.confirmation.trim().toLowerCase() === 'delete';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) {
      setError('Please fill out every field and type "Delete" to confirm.');
      return;
    }

    setError('');
    setSubmitting(true);

    try {
      const response = await fetch('/api/delete-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formState.username.trim(),
          password: formState.password,
          confirmation: formState.confirmation.trim(),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const message = typeof data.message === 'string' ? data.message : 'Failed to submit your request. Please try again.';
        throw new Error(message);
      }

      setSubmitted(true);
    } catch (submitError) {
      console.error('Delete account request failed', submitError);
      const defaultMessage = 'Failed to submit your request. Please try again.';
      setError(submitError instanceof Error ? submitError.message : defaultMessage);
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(field: keyof FormState) {
    return (value: string) => {
      setFormState((current) => ({ ...current, [field]: value }));
      if (error) {
        setError('');
      }
    };
  }

  return (
    <div className="mx-auto w-full max-w-lg rounded-3xl bg-white/90 p-10 shadow-sm ring-1 ring-slate-200 backdrop-blur">
      {submitted ? (
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">Request submitted</h2>
          <p className="text-base leading-7 text-slate-700">
            Thanks for confirming. Our privacy team will verify your request and contact you at the
            email associated with your username within 5 business days. If you do not hear from us,
            email <a className="text-[#262262] underline" href="mailto:info@toursage.eu">info@toursage.eu</a>.
          </p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900" htmlFor="username">
              Account username or email
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              required
              value={formState.username}
              onChange={(event) => handleChange('username')(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-inner outline-none transition focus:border-[#00a4e5] focus:ring-2 focus:ring-[#00a4e5]/20"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900" htmlFor="password">
              Confirm your password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={formState.password}
              onChange={(event) => handleChange('password')(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-inner outline-none transition focus:border-[#00a4e5] focus:ring-2 focus:ring-[#00a4e5]/20"
              placeholder="********"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900" htmlFor="confirmation">
              Type <span className="font-semibold">Delete</span> to confirm this action
            </label>
            <input
              id="confirmation"
              type="text"
              required
              value={formState.confirmation}
              onChange={(event) => handleChange('confirmation')(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 uppercase tracking-widest shadow-inner outline-none transition focus:border-[#00a4e5] focus:ring-2 focus:ring-[#00a4e5]/20"
              placeholder="DELETE"
            />
          </div>

          <div className="space-y-3">
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#262262] px-4 py-3 text-base font-semibold text-white transition hover:bg-[#1a1844] disabled:cursor-not-allowed disabled:bg-slate-300"
              disabled={!isValid || submitting}
            >
              {submitting ? 'Submitting...' : 'Permanently delete my account'}
            </button>
            <p className="text-xs leading-5 text-slate-500">
              Submitting this request flags your account for deletion. We will remove your profile,
              tour history, and stored transcripts within 30 days unless retention is required for
              legal compliance or fraud prevention.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
