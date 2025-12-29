// app/Hero.tsx  (Client Component)
'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <main className="hero">
        <section className="card">
          <Image src="/zapatitos-logo.png" alt="ZapatitosCR logo" width={400} height={120} className="logo" />
          <h1>zapatitos lindos</h1>
          <p>zapatitos lindos</p>

          <div className="early-bird">
            zapatitos lindos
          </div>

          <form
            action="https://formspree.io/f/mwpbzwpp"
            method="POST"
          >
            <input type="text" name="name" placeholder="zapatitos lindos" required />
            <input type="email" name="email" placeholder="zapatitos lindos" required />
            <button type="submit">zapatitos lindos</button>
          </form>

          <div className="contact-link">
            <a href="/contact">zapatitos lindos</a>
          </div>
        </section>
      </main>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          background: url('/background.jpg') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.25);
        }
        .card {
          position: relative;
          z-index: 1;
          width: 92%;
          max-width: 420px;
          background: #fff;
          padding: 2.5rem 2rem;
          border: 3px solid #000;
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
          text-align: center;
        }
        .logo {
          width: 320px;
          height: auto;
          margin: 0 auto 1.75rem;
        }
        h1 {
          margin: 0 0 1rem;
          font-size: 2.25rem;
          font-weight: 700;
          color: #000;
        }
        p {
          margin: 0 0 2rem;
          font-size: 1.1rem;
          line-height: 1.4;
          color: #000;
        }
        .early-bird {
          background: #fffbe6;
          color: #262262;
          font-weight: 500;
          border-radius: 999px;
          padding: 0.5rem 1.25rem;
          margin-bottom: 1.5rem;
          font-size: 1rem;
          border: 1.5px solid #00a4e5;
          display: inline-block;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        input, textarea {
          border: none;
          border-bottom: 2px solid #ddd;
          padding: 0.8rem 0.5rem;
          font-size: 1rem;
          background: transparent;
          outline: none;
        }
        input::placeholder, textarea::placeholder {
          opacity: 1;
          color: #000;
        }
        input:focus, textarea:focus {
          border-color: #000;
        }
        button {
          padding: 0.9rem;
          background: #262262;
          color: #fff;
          font-weight: 700;
          border: 2px solid #262262;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.4px;
        }
        button:hover {
          background: #262262;
          color: #fff;
        }
        .contact-link {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid #eee;
        }
        .contact-link a {
          color: #666;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.25s ease;
        }
        .contact-link a:hover {
          color: #000;
        }
        @media (max-width: 480px) {
          .card { padding: 2rem 1.25rem; }
          .hero { justify-content: center; }
        }
      `}</style>
    </>
  );
}
