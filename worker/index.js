export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const body = await request.json();
    const { "cf-turnstile-response": token, ...formData } = body;

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, message: "Captcha token required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: env.TURNSTILE_SECRET,
          response: token,
        }),
      }
    );
    const result = await verify.json();

    if (!result.success) {
      return new Response(
        JSON.stringify({ success: false, message: "Captcha verification failed" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: env.WEB3FORMS_KEY,
        ...formData,
      }),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  },
};
