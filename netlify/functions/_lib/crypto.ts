import crypto from 'crypto';
import bcrypt from 'bcryptjs';

export function generateApiKey() {
  const raw = 'cai_' + crypto.randomBytes(24).toString('hex'); // show once
  const prefix = raw.slice(0, 8);
  return { raw, prefix };
}

export async function hashApiKey(raw: string) {
  return bcrypt.hash(raw, 12);
}

export async function verifyApiKey(raw: string, hash: string) {
  return bcrypt.compare(raw, hash);
}

export function newWebhookSecret() {
  return crypto.randomBytes(32).toString('base64url');
}

export function signHmacSHA256(secret: string, body: string) {
  return crypto.createHmac('sha256', secret).update(body).digest('hex');
}
