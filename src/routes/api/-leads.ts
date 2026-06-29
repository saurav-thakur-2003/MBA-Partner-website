// Serverless stub for lead capture.
// This file runs on the server. Replace webhook URLs and add auth in production.
export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (!payload.name || !payload.phone) {
      return new Response(JSON.stringify({ error: "name and phone required" }), { status: 400 });
    }

    console.log("New lead received", payload);

    const crmWebhook = process.env.CRM_WEBHOOK_URL;
    if (crmWebhook) {
      fetch(crmWebhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((error) => console.error("CRM forward failed", error));
    }

    const waWebhook = process.env.WHATSAPP_WEBHOOK_URL;
    if (waWebhook) {
      fetch(waWebhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text: `New lead: ${payload.name} ${payload.phone}`, lead: payload }),
      }).catch((error) => console.error("WA forward failed", error));
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "server error" }), { status: 500 });
  }
}
