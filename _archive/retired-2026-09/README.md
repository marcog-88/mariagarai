# Retired pages — 2026-09-01

These pages were retired from mariagarai.com. Nothing here is routed, built, or
deployed — the folder exists only to keep the code recoverable outside of git
history.

## Where each page went

| Old route (mariagarai.com) | Status | New home |
|---|---|---|
| `/construye` | moved | `laexponencial.com/` (301 in `vercel.json`; `/lanzadera` itself now redirects to the home) |
| `/disena-tu-oferta` | moved | `laexponencial.com/disena-tu-programa` (301 in `vercel.json`) |
| `/oferta-privada-construye` | permanently retired | none — HTTP 404 (`404.html`, noindex) |
| `/redes-que-venden` | permanently retired | none — HTTP 404 (`404.html`, noindex) |

## Contents

- `pages/` — the four React page components
- `components/construye/` — sales-page sections for `/construye` (live copy now
  ported into the laexponencial repo under `app/components/lanzadera/`)
- `components/redes/` — sections for `/redes-que-venden`
- `components/oferta-privada-construye/` — sections for `/oferta-privada-construye`
- `lib/disena/` — prompt/types/PDF logic for the `/disena-tu-oferta` tool
  (laexponencial has its own copy under `app/api/disena`)
- `api/disena.js` — Vercel serverless function backing the old disena tool
- `assets/` — images and videos only the retired pages (and the pre-Oct 2026
  home) used; moved out of `src/assets` on 2026-10-24

If any of these pages comes back, restore from here rather than rewriting from
scratch.
