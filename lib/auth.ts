import { SignJWT, jwtVerify } from 'jose';
import crypto from 'crypto';

// Server-side dynamically generated random secret key for runtime JWT validation
const DYNAMIC_JWT_SECRET = crypto.randomBytes(32);

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'mohammadjunaidrather03@gmail.com';
export const OPEN_KEY = process.env.OPEN_KEY || '2133933919';

export async function createAdminToken(email: string): Promise<string> {
  return new SignJWT({ email, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(DYNAMIC_JWT_SECRET);
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, DYNAMIC_JWT_SECRET);
    return payload.role === 'admin' && payload.email === ADMIN_EMAIL;
  } catch (err) {
    return false;
  }
}
