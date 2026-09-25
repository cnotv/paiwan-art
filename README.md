# Paiwan Art

Portfolio site for illustrator Paiwan Bootvicha ([@paiwan.art](https://www.instagram.com/paiwan.art/)): children's book illustration, studio work and a gallery of paintings. Portfolio only; nothing is offered for sale. Plain HTML, CSS and a few lines of JS in `site/`, served by nginx.

Design: [Figma file](https://www.figma.com/design/0fus6LIHd73H5YmY4CVo7P).

## Run locally

```bash
python3 -m http.server 8000 --directory site
```

Or with Docker:

```bash
docker build -t paiwan-art . && docker run --rm -p 8000:80 paiwan-art
```

## Deploy

Every push to `main` builds an image to `ghcr.io/cnotv/paiwan-art` and restarts it on the Hetzner host through `.github/workflows/deploy.yml`.

The container listens on host port **3002**, because generative-art already uses 3000 and 3001 on the same machine. Set `HOST_PORT` in `~/paiwan-art/.env` on the server to change it.

Repository secrets needed (same values as generative-art):

| Secret | Value |
| --- | --- |
| `HETZNER_HOST` | Server IP or hostname |
| `HETZNER_USERNAME` | SSH user |
| `HETZNER_SSH_KEY` | Private key for that user |
| `HETZNER_PORT` | SSH port (optional, defaults to 22) |

## Placeholders to replace

- `hello@paiwan.art` in `site/index.html` is not a real address yet.
- Artwork titles and mediums are examples.
