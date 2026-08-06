import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'noxyai-secure-jwt-secret-key-32-chars-minimum-length-2026'
);

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@noxyai.com';
export const OPEN_KEY = process.env.OPEN_KEY || 'OPEN_KEY';

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
    return payload.role === 'admin' && payload.email === ADMIN_EMAIL;
  } catch (err) {
    return false;
  }
}
