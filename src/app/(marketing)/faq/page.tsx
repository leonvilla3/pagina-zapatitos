import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import FAQAccordion, { type FAQItem } from './FAQAccordion';

const dmSans = DM_Sans({ subsets: ['latin'] });

const faqs: FAQItem[] = [
  {
    question: '¿Cúales son sus horarios de atención?',
    answer: 'Nuestro horario de atención es de Lunes a Viernes de 9:00 am a 5:30 pm, y Sábados de 9:00 am a 3:00 pm en todas nuestras sucursales.',
  },
  {
    question: '¿Hacen envíos a todo el país?',
    answer: 'Sí, realizamos envíos a todo Costa Rica por medio de Correos de Costa Rica. El tiempo estimado de entrega es de 24 a 48 horas hábiles.',
  },
  {
    question: '¿Cómo sé cuál es la talla correcta?',
    answer: 'Recomendamos medir el pie de tu hijo/a en centímetros del talón a la punta. Puedes consultarnos por WhatsApp para asesorarte con la talla exacta según el modelo, ya que las hormas pueden variar.',
  },
  {
    question: '¿Venden calzado para plantillas ortopédicas?',
    answer: 'Sí, contamos con una amplia variedad de modelos con profundidad adicional y ajustes especiales, ideales para el uso de plantillas ortopédicas personalizadas.',
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
    answer: 'Claro, si no te quedan, puedes cambiarlos en cualquiera de nuestras sucursales dentro de los primeros 8 días. El zapato debe estar sin uso y en su caja original.',
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
