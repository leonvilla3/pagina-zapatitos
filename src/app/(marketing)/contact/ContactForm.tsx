'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#262262] mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-600">Estamos aquí para ayudarte a cuidar la salud de tus pies.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#262262] mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#262262]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ubicación</h3>
                    <p className="text-gray-600 mt-1">
                      San Rafael de Escazú<br />
                      Centro Comercial El Cruce
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#262262]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600 mt-1">+(506) 8935-4555</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#262262]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Correo Electrónico</h3>
                    <p className="text-gray-600 mt-1">info@zapatitoscr.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#262262]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horario de Atención</h3>
                    <div className="text-gray-600 mt-1">
                      <div className="grid grid-cols-[120px_1fr] gap-x-2">
                        <span className="font-medium text-gray-800">Lunes - Viernes:</span>
                        <span>9:00 am - 5:30 pm <span className="block text-xs text-gray-400">(jornada continua)</span></span>
                        <span className="font-medium text-gray-800">Sábado:</span>
                        <span>9:00 am - 3:00 pm <span className="block text-xs text-gray-400">(jornada continua)</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 h-[300px] overflow-hidden relative">
              <iframe
                src="https://maps.google.com/maps?q=El+Cruce,+Escaz%C3%BA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full rounded-xl"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#262262] mb-6">Envíanos un Mensaje</h2>

            {submitStatus === 'success' && (
              <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                ¡Gracias! Tu mensaje ha sido enviado. Te contactaremos pronto.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                Lo sentimos, hubo un error. Por favor intenta de nuevo.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#262262] focus:ring-1 focus:ring-[#262262] outline-none transition-all placeholder:text-gray-400"
                  placeholder="Tu nombre"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#262262] focus:ring-1 focus:ring-[#262262] outline-none transition-all placeholder:text-gray-400"
                  placeholder="tucorreo@ejemplo.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#262262] focus:ring-1 focus:ring-[#262262] outline-none transition-all placeholder:text-gray-400"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#262262] focus:ring-1 focus:ring-[#262262] outline-none transition-all placeholder:text-gray-400 resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <input type="hidden" name="source" value="contact_page" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#262262] hover:bg-[#1a1744] text-white font-bold py-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}