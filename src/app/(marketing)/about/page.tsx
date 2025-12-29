import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'zapatitos lindos',
  description: 'zapatitos lindos',
};

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#262262] mb-4">zapatitos lindos</h1>
          <p className="text-accent-600 font-medium">zapatitos lindos</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>zapatitos lindos</h2>
          <p>
            zapatitos lindos
          </p>

          <h2>zapatitos lindos</h2>
          <p>
            zapatitos lindos
          </p>

          <h2>zapatitos lindos</h2>
          <p>
            zapatitos lindos
          </p>

          <h2>zapatitos lindos</h2>
          <p>
            zapatitos lindos
          </p>

          <hr />
          <p>© {new Date().getFullYear()} zapatitos lindos.</p>
        </div>
      </div>
    </section>
  );
}
