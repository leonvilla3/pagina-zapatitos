'use client';
import LandingCarousel from '@/components/LandingCarousel';
import { MapPin, Compass, Headphones, WifiOff, Globe, DollarSign, CalendarIcon, HeartPulse, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { useState, type FormEvent } from 'react';

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactStatus, setContactStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setContactStatus('idle');

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setContactStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setContactStatus('error');
      }
    } catch {
      setContactStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image - Absolute positioned to overlap */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full -z-10">
          <Image
            src="/unnamed.jpg"
            alt="ZapatitosCR Background"
            fill
            className="object-cover opacity-80"
            priority
            unoptimized
          />
          {/* Gradient overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="md:w-2/3 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#262262] leading-tight mb-6">
              Cuidando tus pies desde 1996
            </h1>
            <p className="text-xl text-gray-800 font-medium mb-8">
              Especialistas en calzado ortopédico y para diabéticos. Comodidad, salud y estilo en cada paso.
            </p>
            <div className="flex gap-4">
              <a href="/marketing/productos" className="px-6 py-3 bg-[#262262] text-white rounded-lg hover:bg-[#1a1844] transition shadow-lg">Ver Catálogo</a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-12 md:py-16 bg-[#262262]">
        <div className="container mx-auto px-6 text-white">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">¿Por qué elegirnos?</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Tres razones para amar tus Zapatitos</p>
            <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent" aria-hidden />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: 1, Icon: CalendarIcon, title: 'Experiencia y Tradición', text: 'Más de 25 años cuidando la salud de los costarricenses.' },
              { n: 2, Icon: HeartPulse, title: 'Especialistas en Salud', text: 'Calzado diseñado para pies diabéticos y ortopédicos.' },
              { n: 3, Icon: ShieldCheck, title: 'Calidad Garantizada', text: 'Materiales duraderos y suaves que protegen tu piel.' },
            ].map(({ n, Icon, title, text }) => (
              <div key={n} className="bg-white p-8 rounded-xl shadow-sm border border-white/40 relative overflow-hidden">
                <div className="mb-6 flex items-start">
                  <span className="text-4xl font-bold text-[#262262] mr-4">{n}</span>
                  <Icon className="text-[#262262] w-10 h-10 mr-4" />
                </div>
                <h3 className="text-xl font-semibold mb-3 w-full text-[#262262]">{title}</h3>
                <p className="text-[#262262]/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="w-full h-[300px] md:h-[400px] relative">
        <Image
          src="/images/home/banner-family.jpg"
          alt="Familia feliz usando ZapatitosCR"
          fill
          className="object-cover"
          unoptimized
          quality={100}
        />
      </section>

      {/* Features */}
      <section id="features" className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Características</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Todo lo que necesitas para el cuidado de tus pies</p>
            <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#262262] to-transparent" aria-hidden />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: Compass, title: 'Ergonómicos', text: 'Soporte arco plantar.' },
              { Icon: Headphones, title: 'Antideslizantes', text: 'Seguridad en cada paso.' },
              { Icon: WifiOff, title: 'Transpirables', text: 'Pies frescos todo el día.' },
              { Icon: MapPin, title: 'Ligeros', text: 'Olvidarás que los llevas puestos.' },
              { Icon: Globe, title: 'Variedad', text: 'Muchos estilos y colores.' },
              { Icon: DollarSign, title: 'Buen Precio', text: 'Calidad accesible.' },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-[#00a4e5]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-[#262262] w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="py-12 md:py-16 bg-[#262262]">
        <div className="container mx-auto px-6 text-center mb-10 text-white">
          <h2 className="text-3xl font-bold text-white mb-4">Galería</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Mira nuestros estilos favoritos</p>
        </div>
        <LandingCarousel />
      </section>

      {/* Coverage */}
      <section id="coverage" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Encuéntranos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">San Rafael de Escazú, Centro Comercial El Cruce</p>
            <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#262262] to-transparent" aria-hidden />
          </div>
          <div className="max-w-4xl mx-auto h-[400px] rounded-xl overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=El+Cruce,+Escaz%C3%BA&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              title="Ubicación ZapatitosCR"
            />
          </div>
          <p className="text-center text-xl text-gray-600 mt-8">Visita nuestras sucursales</p>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-12 md:py-16 bg-[#262262]">
        <div className="container mx-auto px-6 max-w-4xl text-white">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 text-white">Contáctanos</h2>
            <p className="text-white/80">¿Tienes preguntas? Escríbenos.</p>
          </div>
          <form className="space-y-4" onSubmit={handleContactSubmit}>
            <input type="hidden" name="subject" value="Marketing contact" />
            <input type="hidden" name="source" value="marketing" />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Tu Nombre"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white rounded-lg border border-white/40 text-[#262262] focus:outline-none focus:ring-2 focus:ring-white/70"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu Correo"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white rounded-lg border border-white/40 text-[#262262] focus:outline-none focus:ring-2 focus:ring-white/70"
              />
            </div>

            <textarea
              name="message"
              placeholder="Tu Mensaje"
              rows={4}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white rounded-lg border border-white/40 text-[#262262] focus:outline-none focus:ring-2 focus:ring-white/70"
            />

            <button
              className="w-full md:w-auto px-6 py-3 bg-white text-[#262262] rounded-lg font-medium hover:bg-white/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {contactStatus === 'success' && (
              <p className="text-emerald-200 text-sm">¡Gracias! Te contactaremos pronto.</p>
            )}
            {contactStatus === 'error' && (
              <p className="text-rose-200 text-sm">Lo sentimos, hubo un error. Intenta de nuevo.</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
