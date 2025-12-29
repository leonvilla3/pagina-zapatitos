// app/contact/page.tsx
export const metadata = {
  title: 'Contáctanos | ZapatitosCR',
  description: 'Ponte en contacto con nosotros.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

import ContactForm from './ContactForm';

export default function ContactPage() {
  return <ContactForm />;
} 