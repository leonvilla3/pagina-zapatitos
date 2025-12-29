// src/app/layout.tsx
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'zapatitos lindos',
  description:
    'zapatitos lindos',
  // Importante para Open Graph absoluto
  metadataBase: new URL('https://toursage.eu'),
  openGraph: {
    title: 'zapatitos lindos',
    description: 'zapatitos lindos',
    type: 'website',
    url: 'https://toursage.eu',
    // Si no tienes /public/og.jpg aún, usa /background.jpg temporalmente
    images: [{ url: '/background.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    // site: '@toursage' // añade si tienes usuario
  },
  // icons: {
  //   icon: [
  //     { url: '/favicon.ico' },
  //     { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  //     { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
  //   ],
  //   apple: [{ url: '/apple-touch-icon.png' }],
  // },
};

export const viewport: Viewport = {
  themeColor: '#2C4D3A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-gray-800 bg-white`}>
        {children}
      </body>
    </html>
  );
}
