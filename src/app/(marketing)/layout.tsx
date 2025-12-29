'use client';
import { ReactNode, useState } from 'react';
import { Menu, Instagram, Facebook, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/zapatitos-logo.png" alt="ZapatitosCR" width={160} height={60} className="h-12 w-auto object-contain" />
          </Link>
          <div className="flex-grow" />
          <nav className="hidden md:flex items-center space-x-8 mr-8">
            <Link href="/productos" className="text-gray-600 hover:text-[#262262]">Productos</Link>
            <Link href="/nosotros" className="text-gray-600 hover:text-[#262262]">Nosotros</Link>
            <Link href="/faq" className="text-gray-600 hover:text-[#262262]">Ayuda</Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#262262]">Contacto</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-2 mr-2">
            <a
              href="https://www.instagram.com/zapatitosmedicalshoes/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:bg-pink-50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/zapatitos.medicalshoes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:bg-blue-50 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <a href="tel:+50689354555" className="hidden md:flex items-center space-x-2 text-[#262262] font-semibold hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
            <Phone className="w-5 h-5" />
            <span>+(506) 8935-4555</span>
          </a>

          <button className="md:hidden text-gray-600" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-100 px-6 pb-4">
            <Link href="/productos" className="block py-2 text-gray-700 hover:text-[#262262]" onClick={() => setOpen(false)}>Productos</Link>
            <Link href="/nosotros" className="block py-2 text-gray-700 hover:text-[#262262]" onClick={() => setOpen(false)}>Nosotros</Link>
            <Link href="/faq" className="block py-2 text-gray-700 hover:text-[#262262]" onClick={() => setOpen(false)}>Ayuda</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-[#262262]" onClick={() => setOpen(false)}>Contacto</Link>
            <a href="tel:+50689354555" className="block py-2 text-[#262262] font-semibold flex items-center space-x-2" onClick={() => setOpen(false)}>
              <Phone className="w-4 h-4" />
              <span>+(506) 8935-4555</span>
            </a>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-white text-gray-600 py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-[#262262] text-lg font-bold mb-4">ZapatitosCR</h3>
              <p className="mb-4">Cuidando tus pies desde 1996.</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/zapatitosmedicalshoes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-[#262262]"
                  aria-label="ZapatitosCR en Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/zapatitos.medicalshoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-[#262262]"
                  aria-label="ZapatitosCR en Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#262262] text-sm font-semibold mb-4 uppercase tracking-wider">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:+50689354555" className="hover:text-[#262262] transition-colors flex items-center gap-2">
                    <Phone className="w-3 h-3" /> +(506) 8935-4555
                  </a>
                </li>
                <li>
                  <a href="mailto:info@zapatitoscr.com" className="hover:text-[#262262] transition-colors">info@zapatitoscr.com</a>
                </li>
                <li>San Rafael de Escazú, Centro Comercial El Cruce</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#262262] text-sm font-semibold mb-4 uppercase tracking-wider">Horario</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between max-w-[240px]">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 am - 5:30 pm</span>
                </li>
                <li className="flex justify-between max-w-[240px]">
                  <span>Sábado:</span>
                  <span>9:00 am - 3:00 pm</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#262262] text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-[#262262]">Política de Privacidad</Link></li>
                <li><Link href="/terms" className="hover:text-[#262262]">Términos de Servicio</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} ZapatitosCR. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
