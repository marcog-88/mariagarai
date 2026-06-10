# EXPONENCIAL QUICK BRIEF v1
**Exponencial — Page System Reference**
Last updated: June 2026
Source of truth: `src/components/exponencial/` (spacing + structure)
Use this to start any new program page build. Full copy prompts in EXPONENCIAL_COPY_BRIEF_TEMPLATE_v1.

---

## PART 1 — PAGE STRUCTURE (23 sections, exact order)

| # | Section name | Component file | Background |
|---|---|---|---|
| 1 | Nav | `Nav.tsx` (re-export) | transparent |
| 2 | Hero | `Hero.tsx` | dark (primary) |
| 3 | El Problema | `Problem.tsx` | light |
| 4 | La Verdad | `Truth.tsx` | dark (primary) |
| 5 | Lo Que Dicen | `Testimonios.tsx` | light (#f9f9f7) |
| 6 | Letras / quote | `Letras.tsx` | light |
| 7 | Para Eso Existe [X] | `ParaEso.tsx` | dark (primary) |
| 8 | La Única Diferencia | `OnlyDifference.tsx` | dark (#0c0d0e) |
| 9 | Lo Que Montamos | `Deliverables.tsx` | light |
| 10 | Qué Pasa Cada Semana | `AntesDespues.tsx` | light |
| 11 | Stats Bar (sesiones) | inside `Deliverables.tsx` | dark (primary) |
| 12 | Este Programa Es Para Ti Si | `ForYou.tsx` | light |
| 13 | Por Qué Ahora | `PorQueAhora.tsx` | dark (primary) |
| 14 | Lo Que Te Ahorras | `Comparativa.tsx` | light |
| 15 | Las Tres Opciones | `TresOpciones.tsx` | light (#f9f9f7) |
| 16 | Garantía de Resultados | `Garantia.tsx` | dark (primary) |
| 17 | Qué Incluye Exactamente | `Pricing.tsx` | dark (primary) |
| 18 | La Pregunta Real | `PreguntaReal.tsx` | white |
| 19 | Bonuses Incluidos | `Bonuses.tsx` | light |
| 20 | Antes y Después | `AntesDespuesProof.tsx` | dark (#0c0d0e) |
| 21 | Preguntas Frecuentes | `FAQ.tsx` | dark (primary) |
| 22 | Final CTA | `FinalCTA.tsx` | dark (primary) |
| 23 | Footer | `Footer.tsx` (re-export) | dark |

---

## PART 2 — COLOR SYSTEM (per page, locked)

| Page | Lead accent | CTA buttons | Section labels (dark bg) | Section labels (light bg) | Status |
|---|---|---|---|---|---|
| Homepage | purple `#9378fe` | purple `#9378fe` | purple | near-black | Active |
| Exponencial | purple `#9378fe` | purple `#9378fe` | purple | near-black | Active |
| Construye | mint `#d0fcd0` | mint `#d0fcd0` | mint | near-black | Active |
| Redes que Venden | orange `#e88f00` | near-black `#0c0d0e` + white text | orange | near-black | Active |
| Lanza y Vende | hot-pink `#ff4295` | near-black `#0c0d0e` + white text | hot-pink | near-black | **Inactive — reserved for future revival** |
| Decide | (do not touch) | — | — | — | **Inactive — reserved for future revival** |

**Full brand palette:**
- Purple `#9378fe` — short uppercase labels only, never on titles or CTAs
- Near-black `#0c0d0e`
- Mint `#d0fcd0`
- Hot pink `#ff4295`
- Magenta `#e02286`
- White `#ffffff`
- Off-white `#f9f9f7`
- Orange `#e88f00`
- Yellow `#ffd441`

**Color scope rule:** Always override via scoped CSS variable block on the page wrapper class only. Never touch global tokens or `src/index.css` base values.

---

## PART 3 — SPACING SYSTEM (Exponencial — master reference)

### Section padding

| Section | Classes | px (mobile / md+) |
|---|---|---|
| Hero (dark) | `pt-20 md:pt-28 lg:pt-36` | 80 / 112 / 144 |
| Most light sections | `py-24 md:py-32` | 96 / 128 |
| Testimonios, AntesDespues | `py-20 md:py-28` | 80 / 112 |
| OnlyDifference (dark) | `pt-0 pb-24 md:pb-32` | 0 top / 96–128 bot |
| Comparativa (light) | `pt-24 md:pt-32 pb-8` | 96–128 top / 32 bot |
| PreguntaReal (white) | `pt-20 pb-24 md:py-32` | asymmetric |
| Pricing (dark) | `pt-12 pb-8 md:pb-12 lg:pb-32` | compressed top |
| Garantia (dark) | `pt-12 md:pt-16 pb-8` | compressed |
| FAQ (dark) | `pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-16` | minimal top |
| AntesDespuesProof (dark) | `pt-24 md:pt-32 pb-8 md:pb-12 lg:pb-16` | full top / tapered bot |
| FinalCTA (dark) | `pt-24 md:pt-32 pb-12 md:pb-16` | full top / medium bot |

### Containers

| Utility | Max width | Horizontal padding |
|---|---|---|
| `.container-tight` | `max-w-6xl` (1152px) | `px-6 sm:px-8` |
| `.container-narrow` | `max-w-3xl` (768px) | `px-6 sm:px-8` |

### Label → Headline gap

| Gap | Sections |
|---|---|
| `mb-6` (24px) | Comparativa, TresOpciones, Pricing, Garantia, AntesDespuesProof, PreguntaReal |
| `mb-8` (32px) | Hero, OnlyDifference, Deliverables, ForYou, Garantia |
| `mb-10` (40px) | Problem, Truth, ParaEso, PorQueAhora, FAQ, AntesDespues |
| `mb-12` (48px) | Testimonios, Bonuses |

### Headline → Body gap

| Gap | Sections |
|---|---|
| `mt-4` (16px) | PreguntaReal subheadline |
| `mt-10` (40px) | Hero subhead, Truth, PorQueAhora, OnlyDifference sub |
| `mt-12` (48px) | Comparativa table, Pricing list |
| `mt-16` (64px) | Problem, ParaEso grid, FAQ accordion |

### Body → CTA gap

| Gap | Sections |
|---|---|
| `mt-8` (32px) | PreguntaReal |
| `mt-10` (40px) | Deliverables |
| `mt-12` (48px) | AntesDespuesProof, Hero CTA row |
| `mt-14` (56px) | Hero mockup |
| `mt-16` (64px) | Truth pills, FinalCTA price block, Pricing price |

### Cards & grids

| Component | Inner padding | Grid gap |
|---|---|---|
| Testimonios card | `p-4 md:p-5 lg:p-8` | `gap-4 md:gap-5 lg:gap-6` |
| ForYou card | `p-8` | `gap-6` |
| ForYou Sí/No box | `p-10` | — |
| Bonuses card | `p-8` | `gap-6` |
| Bonuses summary box | `p-10 md:p-16` | — |
| TresOpciones | `px-6 py-7` header / `py-6` list | `gap-6` |
| AntesDespuesProof card | `p-6` | `gap-4 md:gap-6` |
| AntesDespues columns | — | `gap-10 md:gap-16` |
| Deliverables timeline | `space-y-8` / `p-8 md:p-10` card | — |
| PreguntaReal card | `p-8` | `gap-6` |
| Comparativa mobile card | `p-5` | — |
| FAQ accordion item | `py-6` trigger / `pb-6` content | — |
| Garantia outer card | `p-8 md:p-12` | `gap-8 md:gap-12` |

### Breakpoints

| Prefix | Min width | Primary use |
|---|---|---|
| `sm:` | 640px | Container px bump, CTA gap |
| `md:` | 768px | Main switch — py-24→py-32, 1→2/3 col grids |
| `lg:` | 1024px | Hero pt-36, FAQ pt-16, Testimonios p-8, Pricing pb-32 |

---

## PART 4 — BUILD RULES (always apply)

**Tools:**
- All pages built in **Claude Code** or **Cursor** (React + Tailwind) — Lovable is no longer used
- **DeepSeek** available as alternative model in Cursor for heavy code tasks
- **ChatGPT** for image generation
- Domains via **GoDaddy + Cloudflare** — hosting on **Vercel**

**Cloning:**
- Always clone from `src/components/exponencial/` — this is the master reference
- Nav and Footer are always re-exports from the exponencial components

**Color override:**
- Apply scoped CSS variable block on page wrapper class only
- Never edit `src/index.css`, `tailwind.config.ts`, or global tokens
- Never touch other pages

**Pricing format:**
- Never use decimal points: `€1500` not `€1.500`, `€4500` not `€4.500`

**Workflow:**
- Plan mode for all multi-section structural builds
- Chat mode for individual small visual fixes only
- One fix per chat message during polish — never batch
- Always include a DO NOT TOUCH section in every brief
- Always review the generated plan before approving

**Copy:**
- Claude writes ALL copy — no exceptions
- Marco never writes copy of any kind
- María approves all copy

---

## PART 5 — KNOWN MINOR DEVIATIONS (do not fix)

| Component | Exponencial value | Deviation in other pages | Decision |
|---|---|---|---|
| Deliverables label→headline | `mb-8` | `mb-6` on some pages | Leave as-is |
| ForYou label→headline | `mb-8` | `mb-12` on some pages | Leave as-is |

---

*Exponencial Quick Brief v1 — June 2026*
*See EXPONENCIAL_COPY_BRIEF_TEMPLATE_v1 for section-by-section copy prompts.*
