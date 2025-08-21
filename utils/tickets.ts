// utils/tickets.ts - Ticket-related utility functions

export function formatSuccessMessage(ticketId: string, locale: 'en' | 'ar' = 'en') {
  if (locale === 'ar') {
    return `شكراً لك — تم استلام رسالتك. Ticket ${ticketId}. سنقوم بالرد عليك في أقرب وقت ممكن.`;
  }
  return `Thank you — your message was received. Ticket ${ticketId}. We'll get back to you as soon as possible.`;
}

export function getTicketViewerUrl(ticketId: string): string | null {
  const baseUrl = process.env.TICKET_VIEWER_BASE_URL;
  return baseUrl ? `${baseUrl}/${ticketId}` : null;
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  }
  
  // Fallback for older browsers
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const result = document.execCommand('copy');
    textArea.remove();
    return Promise.resolve(result);
  } catch {
    return Promise.resolve(false);
  }
}
