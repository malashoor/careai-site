const ALLOW_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.careai.app';

export function corsHeaders(req: Request) {
  const origin = req.headers.get('origin') || '';
  const allow =
    origin === ALLOW_ORIGIN ||
    origin === ALLOW_ORIGIN.replace(/^https:/, 'http:'); // allow local mirror if needed

  return {
    'Access-Control-Allow-Origin': allow ? origin : 'https://www.careai.app',
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export function handleOptions(req: Request) {
  return new Response(null, {
    status: 204,
    headers: {
      ...corsHeaders(req),
      'Access-Control-Max-Age': '86400',
    },
  });
}

export function assertAllowedOrigin(req: Request) {
  const origin = req.headers.get('origin') || '';
  const allow = [process.env.NEXT_PUBLIC_SITE_URL || 'https://www.careai.app'].includes(origin);
  if (!allow) {
    return new Response(JSON.stringify({ error: 'Forbidden origin' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(req) },
    });
  }
  return null;
}
