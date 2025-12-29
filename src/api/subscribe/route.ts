import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // forward the incoming form data straight to Getform
  const formData = await request.formData();
  const res = await fetch('https://leonvilla3.getform.com/v80wr', {
    method: 'POST',
    body: formData
  });

  if (!res.ok) {
    return NextResponse.json(
      { message: 'Error submitting form' },
      { status: 502 }
    );
  }
  return NextResponse.json({ message: 'OK' }, { status: 200 });
} 