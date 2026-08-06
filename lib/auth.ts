import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET_STRING = process.env.JWT_SECRET || 'noxyai-secure-jwt-secret-key-32-chars-minimum-length-2026';
const JWT_SECRET_KEY = new TextEncoder().encode(JWT_SECRET_STRING);

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'mohammadjunaidrather03@gmail.com';
export const OPEN_KEY = process.env.OPEN_KEY || '2133933919';

export async function createAdminToken(email: string): Promise<string> {
  return new SignJWT({ email, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(JWT_SECRET_KEY);
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET_KEY);
    const expectedEmail = (process.env.ADMIN_EMAIL || ADMIN_EMAIL).trim().toLowerCase();
    return payload.role === 'admin' && (payload.email as string)?.trim().toLowerCase() === expectedEmail;
  } catch (err) {
    return false;
  }
}
