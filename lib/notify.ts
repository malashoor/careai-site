// lib/notify.ts - Simplified Slack notifications
export async function notifySlack(ticketId: string, payload: {
  full_name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const hook = process.env.SLACK_WEBHOOK_URL;
  if (!hook) return;

  const text =
    `🆕 *New Contact* — *${ticketId}*\n` +
    `👤 ${payload.full_name} <${payload.email}>\n` +
    `🧵 ${payload.subject}\n\n` +
    `💬 ${payload.message}`;

  await fetch(hook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
}
