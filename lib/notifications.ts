/**
 * Team notification utilities
 * Supports Slack webhooks and other notification channels
 */

export interface ContactNotification {
  ticketId: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

/**
 * Send notification to Slack via webhook
 */
export async function notifySlack(notification: ContactNotification): Promise<boolean> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('[notifications] Slack webhook not configured');
    return false;
  }

  try {
    const message = {
      text: `🆕 New Contact Ticket: *${notification.ticketId}*`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: `New Contact: ${notification.ticketId}`,
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*From:*\n${notification.fullName}`,
            },
            {
              type: 'mrkdwn',
              text: `*Email:*\n${notification.email}`,
            },
            {
              type: 'mrkdwn',
              text: `*Subject:*\n${notification.subject || 'No subject'}`,
            },
            {
              type: 'mrkdwn',
              text: `*Time:*\n${new Date(notification.timestamp).toLocaleString()}`,
            },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Message:*\n${notification.message.length > 200 
              ? notification.message.substring(0, 200) + '...' 
              : notification.message}`,
          },
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'View in Supabase',
                emoji: true,
              },
              url: `https://wpzpmgvqcanvtjusxbeg.supabase.co/app/project/default/table/contact_messages`,
              style: 'primary',
            },
          ],
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });

    if (response.ok) {
      console.log(`[notifications] Slack notification sent for ticket ${notification.ticketId}`);
      return true;
    } else {
      console.error(`[notifications] Slack notification failed: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.error('[notifications] Slack notification error:', error);
    return false;
  }
}

/**
 * Send notification to Discord via webhook
 */
export async function notifyDiscord(notification: ContactNotification): Promise<boolean> {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('[notifications] Discord webhook not configured');
    return false;
  }

  try {
    const embed = {
      title: `🆕 New Contact: ${notification.ticketId}`,
      color: 0x2563eb, // Blue
      fields: [
        {
          name: 'From',
          value: notification.fullName,
          inline: true,
        },
        {
          name: 'Email',
          value: notification.email,
          inline: true,
        },
        {
          name: 'Subject',
          value: notification.subject || 'No subject',
          inline: true,
        },
        {
          name: 'Message',
          value: notification.message.length > 1000 
            ? notification.message.substring(0, 1000) + '...' 
            : notification.message,
        },
      ],
      timestamp: notification.timestamp,
      footer: {
        text: 'CareAI Contact System',
      },
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (response.ok) {
      console.log(`[notifications] Discord notification sent for ticket ${notification.ticketId}`);
      return true;
    } else {
      console.error(`[notifications] Discord notification failed: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.error('[notifications] Discord notification error:', error);
    return false;
  }
}

/**
 * Send notifications to all configured channels
 * Returns array of successful notifications
 */
export async function sendTeamNotifications(notification: ContactNotification): Promise<string[]> {
  const results: string[] = [];
  
  // Send to Slack
  if (await notifySlack(notification)) {
    results.push('slack');
  }
  
  // Send to Discord
  if (await notifyDiscord(notification)) {
    results.push('discord');
  }
  
  return results;
}
