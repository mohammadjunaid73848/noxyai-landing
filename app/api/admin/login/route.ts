import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_EMAIL, createAdminToken } from '@/lib/auth';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
               req.headers.get('x-real-ip') ||
               '127.0.0.1';

    // 20-Hour Rate Limit Window Check (72,000,000 ms)
    const twentyHoursAgo = new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString();

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      try {
        const { data: attempts, error } = await supabase
          .from('login_attempts')
          .select('*')
          .eq('ip_address', ip)
          .gte('created_at', twentyHoursAgo);

        if (!error && attempts && attempts.length >= 3) {
          return NextResponse.json(
            { error: 'Too Many Failed Attempts: Account blocked due to 3 failed login attempts. Try again in 20 hours.' },
            { status: 429 }
          );
        }
      } catch (err) {
        console.warn('Supabase rate limit query warning:', err);
      }
    }

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Backend restriction: ONLY email matching ADMIN_EMAIL env is allowed
    const expectedEmail = (process.env.ADMIN_EMAIL || ADMIN_EMAIL).trim().toLowerCase();
    const isEmailValid = email.trim().toLowerCase() === expectedEmail;
    const isPasswordValid = password.length >= 4;

    if (!isEmailValid || !isPasswordValid) {
      // Record failed login attempt in Supabase DB for this IP
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        try {
          await supabase.from('login_attempts').insert([{ ip_address: ip, created_at: new Date().toISOString() }]);
        } catch (e) {
          console.warn('Failed to record login attempt');
        }
      }

      return NextResponse.json({ error: 'Unauthorized: Invalid Admin Credentials' }, { status: 401 });
    }

    const token = await createAdminToken(expectedEmail);

    const response = NextResponse.json({ success: true });
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
