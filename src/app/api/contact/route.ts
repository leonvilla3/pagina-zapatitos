import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const source = (formData.get('source') as string) || 'unknown';

    // Debug log to validate wiring from marketing page
    console.log('Contact POST', { name, email, subject, source });

    // Create a new Formspree form data specifically for contact
    const contactFormData = new FormData();
    contactFormData.append('name', name);
    contactFormData.append('email', email);
    contactFormData.append('subject', subject);
    contactFormData.append('message', `
Contact Form Submission from ZapatitosCR

Name: ${name}
Email: ${email}
Subject: ${subject}
Source: ${source}

Message:
${message}
    `);
    contactFormData.append('_replyto', email);
    contactFormData.append('_to', 'info@zapatitoscr.com');

    // Send to Formspree
    const res = await fetch('https://formspree.io/f/mwpbzwpp', {
      method: 'POST',
      body: contactFormData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Formspree error:', res.status, res.statusText, errorText);
      throw new Error('Email service failed');
    }

    return NextResponse.json({
      message: 'Message sent successfully!'
    }, { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
} 