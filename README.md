# 🎧 UNSC

> Unlimited access to SoundCloud API

## Why UNSC?

SoundCloud has closed API application requests since forever and hasn't opened it again ever since. UNSC provides a API that scrappes the data from SoundCloud public pages and internal APIs.

## API

We implement endpoints as needed, if you need to read a SoundCloud API endpoint/page that we don't cover yet, please [open an issue](https://github.com/doceazedo/unsc/issues/new).

### `/users/[username]`

Data from an user's profile page

**Example:** https://unsc.vercel.app/users/doceazedo

```json
{
  "avatar_url": "https://i1.sndcdn.com/avatars-XcYzOChulX2BysVp-QtrtCw-large.jpg",
  "city": "Belo Horizonte",
  "country_code": "BR",
  "created_at": "2013-09-23T13:00:19Z",
  "followers_count": 39,
  "followings_count": 104,
  "id": 59337563,
  "username": "Doce ♡"
  // ...
}
```

### `/users/[id]/followers`

All users following an user (limited to 1000)

**Example:** https://unsc.vercel.app/users/59337563/followers

```json
[
  {
    "avatar_url": "https://i1.sndcdn.com/avatars-WwMxxz7GzQzYFtMs-w6yJMw-large.jpg",
    "city": null,
    "country_code": null,
    "created_at": "2016-01-12T16:21:07Z",
    "followers_count": 10,
    "followings_count": 114,
    "id": 199104872,
    "username": "caroliscaroles"
    // ...
  }
  // ...
]
```

## License

The UNTTV project is licensed under the [GPLv3 License](./LICENSE).
