/**
 * Cloudflare Pages Function - Contact Form & Event Tracking Handler
 * Sends form submissions and button click events to Slack via Incoming Webhook
 */

interface ContactFormData {
  type: 'contact';
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface TrackingEventData {
  type: 'track';
  event: string;
}

type RequestData = ContactFormData | TrackingEventData;

interface Env {
  SLACK_WEBHOOK_URL: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data: RequestData = await request.json();

    // Get Slack webhook URL from environment variable
    const slackWebhookUrl = env.SLACK_WEBHOOK_URL;

    if (!slackWebhookUrl) {
      console.error('SLACK_WEBHOOK_URL not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    let slackMessage;

    // Handle tracking events (button clicks)
    if (data.type === 'track') {
      const eventData = data as TrackingEventData;

      const eventEmojis: Record<string, string> = {
        'demo_button': '🎬',
        'get_started_button': '🚀',
      };

      const eventLabels: Record<string, string> = {
        'demo_button': 'Demo Button Clicked',
        'get_started_button': 'Get Started Button Clicked',
      };

      const emoji = eventEmojis[eventData.event] || '📊';
      const label = eventLabels[eventData.event] || eventData.event;

      slackMessage = {
        text: `${label} - Account Map App Website`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `${emoji} *${label}* - Account Map App Website`,
            },
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `Event: \`${eventData.event}\` | ${new Date().toISOString()}`,
              },
            ],
          },
        ],
      };
    }
    // Handle contact form submissions
    else {
      const formData = data as ContactFormData;

      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        return new Response(
          JSON.stringify({ error: 'All fields are required' }),
          { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return new Response(
          JSON.stringify({ error: 'Invalid email format' }),
          { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
      }

      slackMessage = {
        text: 'Contact Us Form - Account Map App Website',
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: '📬 Contact Us Form - Account Map App Website',
              emoji: true,
            },
          },
          {
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `*Name:*\n${formData.firstName} ${formData.lastName}`,
              },
              {
                type: 'mrkdwn',
                text: `*Email:*\n${formData.email}`,
              },
            ],
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*Message:*\n${formData.message}`,
            },
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `Submitted at ${new Date().toISOString()}`,
              },
            ],
          },
        ],
      };
    }

    // Send to Slack
    const slackResponse = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      console.error('Slack webhook failed:', await slackResponse.text());
      return new Response(
        JSON.stringify({ error: 'Failed to send message' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
