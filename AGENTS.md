# AGENTS.md — mariagarai

Any AI agent working in this repo: first read `KIMI_HANDOFF_BRIEF.md` in the `marcog-88/exponencial` repo root — it is the system-wide state, division of labor, rules, and landmine list for the whole Exponencial/mariagarai system. This file adds only what is specific to THIS repo.

## What this repo is
- Vite/React SPA serving **mariagarai.com** — María's public brand hub only: home, legal pages (`/legal`, `/privacy-policy`, `/terms-of-service`, `/cookie-policy`), and a 404 catch-all.
- The former program pages were retired in the 2026-09 hub-only cut. `/construye` and `/disena-tu-oferta` 301 to laexponencial.com (`/lanzadera` and `/disena-tu-curso`); `/exponencial` and the old `/eventos` paths 301 there too. `/oferta-privada-construye` and `/redes-que-venden` were retired permanently — no redirect, they 404. All redirects live in `vercel.json`, applied before the SPA catch-all rewrite. Retired code is archived under `_archive/retired-2026-09/`.
- The old `api/send-confirmation.js` Vercel serverless route (Resend confirmation emails, service-role key) was deleted in the same cut — this repo now has no server-side routes and needs no secret env vars. All student/platform/admin surfaces live in `marcog-88/exponencial`, not here.

## Repo-specific rules
1. **This repo goes stale silently.** María commits from her own machine. `git fetch origin` and compare local vs origin hashes BEFORE reading a single file, every session. Where a deployed page is the reference, diff against the live site too — the repo is not automatically what visitors see.
2. **María's deployed copy is verbatim.** Never apply house-style transforms to her page content. If a house rule and her source conflict, her source wins — flag it, don't transform silently.
3. **Color system is locked:** Homepage accent is purple `#9378fe`. CTA buttons use the page lead accent. Color overrides via scoped CSS variable block on the page wrapper only — never `src/index.css`, never global tokens, never other pages.
4. **Pricing format:** `€1997`, never `€1.997`. No decimal points anywhere.
5. **301 redirects to laexponencial.com** (old `/eventos`, lead magnet paths) are load-bearing — old links live in sent emails and LinkedIn/Substack posts. Never remove or break them.
6. **Vercel:** this project builds previews, but SSO protection blocks anonymous checks against preview URLs. Verify on production after merge.
7. Session flow: one branch per session off main, `git add` only named files, PR, merge, confirm merge commit on main. When in doubt, ask Marco.
