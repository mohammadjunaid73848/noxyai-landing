import { NextRequest, NextResponse } from 'next/server';
import { OPEN_KEY, verifyAdminToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('noxy_admin_token')?.value;
    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json({ error: 'Unauthorized: Session expired' }, { status: 401 });
    }

    const { openKey } = await req.json();
    const expectedOpenKey = (process.env.OPEN_KEY || OPEN_KEY).trim();

    if (!openKey || openKey.trim() !== expectedOpenKey) {
      return NextResponse.json({ error: 'Invalid OPEN_KEY. Access Denied.' }, { status: 403 });
    }

    const response = NextResponse.json({ success: true, verified: true });
    response.cookies.set('noxy_open_key_verified', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400,
      path: '/'
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Key verification failed' }, { status: 500 });
  }
}
