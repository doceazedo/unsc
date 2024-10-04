import { JSDOM } from "jsdom";

export default eventHandler(async ({ context }) => {
  const { username } = context.params;

  try {
    const resp = await fetch(`https://soundcloud.com/${username}`, {
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-GB,en;q=0.9",
        "sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    });

    if (resp.status === 404)
      return new Response(
        JSON.stringify({ error: 404, message: "User not found" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    const html = await resp.text();
    const dom = new JSDOM(html);

    const data = JSON.parse(
      [...dom.window.document.querySelectorAll("script")]
        .map((x) => x.innerHTML)
        .find((x) => x.startsWith("window.__sc_hydration = "))
        .replace("window.__sc_hydration = ", "")
        .replace(";", "")
    );

    return data.find((x) => x.hydratable === "user")?.data || null;
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 503, message: "SoundCloud request error" }),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
});
