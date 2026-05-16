const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("first_url", "https://mariagarai.com");
    formData.append("first_referrer", "");
    formData.append("current_url", "https://mariagarai.com");
    formData.append("current_referrer", "");
    formData.append("referral_code", "");
    formData.append("source", "embed");

    const response = await fetch(
      "https://mariagarai.substack.com/api/v1/free",
      {
        method: "POST",
        body: formData,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
          "Origin": "https://mariagarai.substack.com",
          "Referer": "https://mariagarai.substack.com/",
        },
      },
    );

    const text = await response.text();
    console.log(
      "Substack status:",
      response.status,
      "body:",
      text.slice(0, 800),
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: "Subscription failed",
          status: response.status,
          body: text.slice(0, 300),
        }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
