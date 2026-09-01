# Retired pages — 2026-09-01

These pages were retired from mariagarai.com. Nothing here is routed, built, or
deployed — the folder exists only to keep the code recoverable outside of git
history.

## Where each page went

| Old route (mariagarai.com) | Status | New home |
|---|---|---|
| `/construye` | moved | `laexponencial.com/lanzadera` (301 in `vercel.json`) |
| `/disena-tu-oferta` | moved | `laexponencial.com/disena-tu-curso` (301 in `vercel.json`) |
| `/oferta-privada-construye` | permanently retired | none — returns 404 |
| `/redes-que-venden` | permanently retired | none — returns 404 |

## Contents

- `pages/` — the four React page components
- `components/construye/` — sales-page sections for `/construye` (live copy now
  ported into the laexponencial repo under `app/components/lanzadera/`)
- `components/redes/` — sections for `/redes-que-venden`
- `components/oferta-privada-construye/` — sections for `/oferta-privada-construye`
- `lib/disena/` — prompt/types/PDF logic for the `/disena-tu-oferta` tool
  (laexponencial has its own copy under `app/api/disena`)
- `api/disena.js` — Vercel serverless function backing the old disena tool

If any of these pages comes back, restore from here rather than rewriting from
scratch.
