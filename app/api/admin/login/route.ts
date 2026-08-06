import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_EMAIL, createAdminToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Backend restriction: ONLY email matching ADMIN_EMAIL env is allowed
    const expectedEmail = (process.env.ADMIN_EMAIL || ADMIN_EMAIL).trim().toLowerCase();
    if (email.trim().toLowerCase() !== expectedEmail) {
      return NextResponse.json({ error: 'Unauthorized: Invalid Admin Credentials' }, { status: 401 });
    }

    // Simple password check for admin
    if (password.length < 4) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const token = await createAdminToken(expectedEmail);

    const response = NextResponse.json({ success: true, email: expectedEmail });
    response.cookies.set('noxy_admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400,
      path: '/'
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Authentication failed' }, { status: 500 });
  }
}
