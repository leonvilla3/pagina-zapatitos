import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import FAQAccordion, { type FAQItem } from './FAQAccordion';

const dmSans = DM_Sans({ subsets: ['latin'] });

const faqs: FAQItem[] = [
  {
    question: '¿Hacen envíos a todo el país?',
    answer: 'Sí, realizamos envíos a todo Costa Rica por medio de Correos de Costa Rica o mensajería privada.',
  },
  {
    question: '¿Tienen tienda física?',
    answer: 'Sí, contamos con sucursales en San José, Heredia y Alajuela. Revisa la sección de Sucursales para más detalles.',
  },
  {
    question: '¿Cuáles son los métodos de pago?',
    answer: 'Aceptamos efectivo, transferencia bancaria, SINPE Móvil y tarjetas de crédito/débito.',
  },
  {
    question: '¿Tienen garantía?',
    answer: 'Sí, todos nuestros zapatos tienen 30 días de garantía por defectos de fábrica.',
  },
  {
    question: '¿Puedo cambiar la talla?',
    answer: 'Claro, si no te quedan, puedes cambiarlos en cualquiera de nuestras sucursales dentro de los primeros 8 días.',
  },
  {
    question: '¿Venden al por mayor?',
    answer: 'Sí, ofrecemos precios especiales para compras al por mayor. Contáctanos para más información.',
  },
];

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | ZapatitosCR',
  description: 'Resuelve tus dudas sobre nuestros productos y servicios.',
};

export default function MarketingFAQPage() {
  return (
    <section className={`${dmSans.className} bg-gradient-to-b from-white via-slate-50 to-white py-24`}>
      <div className="mx-auto flex max-w-4xl flex-col gap-16 px-6 sm:px-8">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Preguntas Frecuentes
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-[#262262]">
            Todo lo que necesitas saber
          </p>
        </header>

        <div className="space-y-10 rounded-3xl bg-white/80 p-10 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          <FAQAccordion items={faqs} />

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 text-center text-base leading-7 text-slate-700">
            ¿Tienes más preguntas? Escríbenos a{' '}
            <a className="text-[#262262] underline" href="mailto:info@zapatitoscr.com">
              info@zapatitoscr.com
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
}
