## Goal

Replace the four "Unirme a la lista de espera" CTAs on `/construye` with the inline ActiveCampaign form (id=3) so visitors sign up directly on the page instead of being redirected to the hosted form.

## Approach

Create a small reusable React component that loads the ActiveCampaign embed script once and renders the `<div class="_form_3">` mount point. Use it everywhere a waitlist CTA currently lives on `/construye`.

### New component: `src/components/construye/WaitlistForm.tsx`

- Renders `<div className="_form_3" />`
- On mount, injects `<script src="https://mariagarai.activehosted.com/f/embed.php?id=3" charset="utf-8">` into `document.body` if not already present
- Guards against double-injection across multiple instances by checking for the script tag / a module-level flag
- Accepts an optional `className` to control max-width and centering per placement

### Replacements on /construye

Swap the current `<a>` button for `<WaitlistForm />` in:

1. `src/components/construye/Hero.tsx` (line ~69) — primary hero CTA
2. `src/components/construye/Testimonios.tsx` (line ~70) — centered CTA below testimonials
3. `src/components/construye/Deliverables.tsx` (line ~258) — CTA below stats banner
4. `src/components/construye/Pricing.tsx` (line ~55) — CTA in pricing card

The hosted-form link (`https://mariagarai.activehosted.com/f/11`) is removed from these four spots. The TidyCal "Reservar llamada" secondary link in Pricing stays untouched.

### Styling notes

ActiveCampaign forms ship with their own CSS injected by the embed script, so the form will not automatically match the site (mint button, dark backgrounds in Pricing/Deliverables/Testimonios, light hero). Two options:

- **A. Use AC styling as-is** — fastest, but visual mismatch is likely, especially on dark sections.
- **B. Add a small scoped CSS override** in `index.css` targeting `._form_3` to restyle the input, button (mint), and labels so it blends with the design system across both light and dark sections.

Recommend B for a polished result, but we can ship A first to preview, then refine.

### Out of scope

- Other pages (`/lanza`, `/redes`, `/oferta-privada-*`) — untouched.
- TidyCal links — untouched.
- No backend or analytics changes.

## Open question

Do you want option A (raw AC styling) for a quick preview, or option B (scoped overrides to match the site) from the start?
