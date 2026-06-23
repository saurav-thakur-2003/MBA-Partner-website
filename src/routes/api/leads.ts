// Serverless stub for lead capture.
// This file runs on the server. Replace webhook URLs and add auth in production.
export async function POST(request: Request) {
  try {
    const payload = await request.json();
    // Basic validation
    if (!payload.name || !payload.phone) {
      return new Response(JSON.stringify({ error: 'name and phone required' }), { status: 400 });
    }

    // Save lead to server logs (replace with DB/CRM integration)
    console.log('New lead received', payload);

    // Forward to CRM webhook if configured
    const crmWebhook = process.env.CRM_WEBHOOK_URL;
    if (crmWebhook) {
      fetch(crmWebhook, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) }).catch((e) => console.error('CRM forward failed', e));
    }

    // Optionally ping WhatsApp notification webhook (server-side) if configured
    const waWebhook = process.env.WHATSAPP_WEBHOOK_URL;
    if (waWebhook) {
      fetch(waWebhook, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ text: `New lead: ${payload.name} ${payload.phone}`, lead: payload }) }).catch((e) => console.error('WA forward failed', e));
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'server error' }), { status: 500 });
  }
}
