import { NextResponse } from 'next/server';

interface DeleteRequestPayload {
  username?: string;
  password?: string;
  confirmation?: string;
}

function isValidString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as DeleteRequestPayload;
    const username = payload?.username?.trim();
    const password = payload?.password ?? '';
    const confirmation = payload?.confirmation?.trim();

    if (!username || !isValidString(password) || !confirmation) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    if (confirmation.toLowerCase() !== 'delete') {
      return NextResponse.json({ message: 'Type "Delete" in the confirmation field to proceed.' }, { status: 400 });
    }

    const replyTo = username.includes('@') ? username : 'info@toursage.eu';

    const formData = new FormData();
    formData.append('name', 'Account Deletion Request');
    formData.append('email', replyTo);
    formData.append('subject', 'Account Deletion Request');
    formData.append(
      'message',
      `Account deletion request submitted via TourSage marketing site.\n\nUsername or email: ${username}\nProvided password: ${password}\nConfirmation typed: ${confirmation}\nSubmitted at: ${new Date().toISOString()}\n\nFollow up with the user before completing deletion.`
    );
    formData.append('_replyto', replyTo);
    formData.append('_to', 'info@toursage.eu');
    formData.append('source', 'delete-info-page');

    const res = await fetch('https://formspree.io/f/mwpbzwpp', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Delete info Formspree error:', res.status, res.statusText, errorText);
      throw new Error('Email service failed');
    }

    return NextResponse.json({ message: 'Request submitted successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Delete info form error:', error);
    return NextResponse.json(
      { message: 'Failed to submit your request. Please try again.' },
      { status: 500 }
    );
  }
}
