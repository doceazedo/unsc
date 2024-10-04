export default eventHandler(async ({ context }) => {
  const { username } = context.params;

  try {
    const resp = await fetch(
      `https://api-v2.soundcloud.com/users/${username}/followers?client_id=PYj9Z1drNT7316QmYX3DNXWxRns1f4RY&limit=9999&offset=0&linked_partitioning=1&app_version=1723035748&app_locale=en`,
      {
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
        referrer: "https://soundcloud.com/",
        referrerPolicy: "origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit",
      }
    );
    const data = await resp.json();
    return data.collection;
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
