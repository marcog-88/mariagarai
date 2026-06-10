# BUILD BRIEF — EXPONENCIAL SCHOOL + PRODUCTOS
## School Platform & Digital Product Storefront
Version: 2.0 · June 2026
Route: exponencial.com
Stack: React + Tailwind + Supabase + Notion API + Bunny Stream

---

## CRITICAL RULES — READ FIRST

- One change at a time. Never batch.
- Plan mode for all structural builds. Chat mode for small fixes only.
- New components go in `src/components/platform/`
- Page wrapper class: `platform-scope`
- Never touch global tokens, other pages, or unrelated files
- Always include a DO NOT TOUCH list in every follow-up prompt
- Push to GitHub before stopping. Pull before starting.
- Prices never use decimal points

---

## STATUS OVERVIEW

| Section | Status |
|---|---|
| School platform — Sprint Claridad | ✅ Built |
| School platform — Exponencial content | 🔄 In progress |
| Productos storefront | ⬜ Next |
| Stripe webhook auto-delivery | ⬜ Month 2 |
| Notion → Supabase sync job | ⬜ Month 2 |

---

# PART 1 — SCHOOL PLATFORM
## ✅ Sprint Claridad MVP — BUILT

---

## WHAT WAS BUILT

A self-hosted course platform for Exponencial students. The first course is **Sprint Claridad** — a 7-lesson pre-coaching program. The platform is gated: students log in via magic link, the system checks what courses they have access to, and renders accordingly.

**Visual reference:** Kajabi-style layout. Dark persistent left sidebar, clean white content area, video dominant on lesson pages.

**Brand palette:**
- Near-black `#0c0d0e` — sidebar background, dark sections
- Purple `#9378fe` — primary accent, CTAs, active states, progress
- Mint `#d0fcd0` — secondary accent
- Hot pink `#ff4295` — badges, highlights
- White `#ffffff` — content area background
- Off-white `#f9f9f7` — page background

---

## SUPABASE SCHEMA

```sql
-- Auth handled by Supabase Auth (users table auto-created)

courses
  id            uuid PK default gen_random_uuid()
  slug          text unique not null    -- 'sprint-claridad'
  title         text not null           -- 'Sprint Claridad'
  description   text
  cover_image   text                    -- URL
  order         int default 0
  created_at    timestamp default now()

phases
  id            uuid PK default gen_random_uuid()
  course_id     uuid FK → courses(id)
  title         text not null
  order         int default 0
  created_at    timestamp default now()

modules
  id            uuid PK default gen_random_uuid()
  phase_id      uuid FK → phases(id)
  title         text not null
  order         int default 0
  created_at    timestamp default now()

lessons
  id              uuid PK default gen_random_uuid()
  module_id       uuid FK → modules(id)
  title           text not null
  description     text
  body            text
  bunny_video_id  text                  -- null if text-only
  notion_page_id  text                  -- for Notion CMS sync
  order           int default 0
  created_at      timestamp default now()

resources
  id          uuid PK default gen_random_uuid()
  lesson_id   uuid FK → lessons(id)
  title       text not null
  url         text not null
  type        text                      -- 'pdf' | 'link' | 'tool'
  order       int default 0

group_recordings
  id              uuid PK default gen_random_uuid()
  course_id       uuid FK → courses(id)
  title           text not null
  session_date    date
  bunny_video_id  text not null
  created_at      timestamp default now()

user_access
  id          uuid PK default gen_random_uuid()
  user_id     uuid FK → auth.users(id)
  course_id   uuid FK → courses(id)
  granted_at  timestamp default now()
  granted_by  text default 'manual'    -- 'manual' | 'stripe_webhook'
  unique(user_id, course_id)

lesson_progress
  id            uuid PK default gen_random_uuid()
  user_id       uuid FK → auth.users(id)
  lesson_id     uuid FK → lessons(id)
  completed     boolean default false
  completed_at  timestamp
  unique(user_id, lesson_id)
```

**RLS enabled on all tables.**

---

## SEED DATA — SPRINT CLARIDAD

### Course
```sql
INSERT INTO courses (slug, title, description, order)
VALUES (
  'sprint-claridad',
  'Sprint Claridad',
  'El trabajo interno que te prepara para nuestra sesión. 5 lecciones + 1 bonus para llegar con todo listo.',
  1
);
```

### Phase (Sprint Claridad is flat — one phase wraps all modules)
```sql
INSERT INTO phases (course_id, title, order)
VALUES ((SELECT id FROM courses WHERE slug='sprint-claridad'), 'Sprint Claridad', 1);
```

### Modules (7 total — in order)
```sql
INSERT INTO modules (phase_id, title, order) VALUES
((SELECT id FROM phases WHERE title='Sprint Claridad'), 'Lección 1: Auditoría', 1),
((SELECT id FROM phases WHERE title='Sprint Claridad'), 'Lección 2: Oportunidad', 2),
((SELECT id FROM phases WHERE title='Sprint Claridad'), 'Lección 3: Compromisos', 3),
((SELECT id FROM phases WHERE title='Sprint Claridad'), 'Lección 4: Influencia', 4),
((SELECT id FROM phases WHERE title='Sprint Claridad'), 'Lección 5: Monetización', 5),
((SELECT id FROM phases WHERE title='Sprint Claridad'), 'Plan 90 Días (en sesión)', 6),
((SELECT id FROM phases WHERE title='Sprint Claridad'), 'Bonus: Traductor Habilidades Corporativas', 7);
```

### Lessons
```sql
-- Lección 1
INSERT INTO lessons (module_id, title, description, bunny_video_id, order)
VALUES (
  (SELECT id FROM modules WHERE title='Lección 1: Auditoría'),
  'Auditoría',
  'Cuando termines esta lección vas a tener: un mapa claro de tu trayectoria y tus habilidades reales, tus ventajas competitivas identificadas, tus habilidades corporate traducidas a lo que el mercado independiente paga, y un punto de partida sólido para todo lo que viene.',
  'PLACEHOLDER_BUNNY_ID',
  1
);

-- Lección 2
INSERT INTO lessons (module_id, title, description, bunny_video_id, order)
VALUES (
  (SELECT id FROM modules WHERE title='Lección 2: Oportunidad'),
  'Oportunidad',
  'Cuando termines esta lección vas a tener: claridad sobre dónde hay una oportunidad real para ti en el mercado actual, tu IKIGAI trabajado de forma estratégica y honesta, tu origen, visión y misión definidos, y una primera idea de hacia dónde apunta tu nicho.',
  'PLACEHOLDER_BUNNY_ID',
  1
);

-- Lección 3
INSERT INTO lessons (module_id, title, description, bunny_video_id, order)
VALUES (
  (SELECT id FROM modules WHERE title='Lección 3: Compromisos'),
  'Compromisos',
  'Cuando termines esta lección vas a tener: una síntesis de todo lo que has descubierto en el programa, tus objeciones escritas y nombradas, las preguntas concretas que necesitas que resolvamos juntas, y un compromiso claro sobre lo que estás dispuesta a construir.',
  'PLACEHOLDER_BUNNY_ID',
  1
);

-- Lección 4
INSERT INTO lessons (module_id, title, description, bunny_video_id, order)
VALUES (
  (SELECT id FROM modules WHERE title='Lección 4: Influencia'),
  'Influencia',
  'Cuando termines esta lección vas a tener: claridad sobre en qué sector quieres ser referente, una imagen más concreta de hacia dónde apunta tu identidad de experta, identificadas las skills que necesitas desarrollar para avanzar, y tu próximo paso concreto.',
  'PLACEHOLDER_BUNNY_ID',
  1
);

-- Lección 5
INSERT INTO lessons (module_id, title, description, bunny_video_id, order)
VALUES (
  (SELECT id FROM modules WHERE title='Lección 5: Monetización'),
  'Monetización',
  'Cierre del programa. Revisas todo lo que has descubierto, vuelves a la herramienta con ojos nuevos, y llegas a la sesión con María completamente preparada.',
  'PLACEHOLDER_BUNNY_ID',
  1
);

-- Plan 90 Días (text only, no video)
INSERT INTO lessons (module_id, title, description, order)
VALUES (
  (SELECT id FROM modules WHERE title='Plan 90 Días (en sesión)'),
  'Plan 90 Días',
  'Este módulo se completa en sesión con María. Aquí encontrarás el material de referencia para trabajar juntas.',
  1
);

-- Bonus (external tool only, no video)
INSERT INTO lessons (module_id, title, description, order)
VALUES (
  (SELECT id FROM modules WHERE title='Bonus: Traductor Habilidades Corporativas'),
  'Traductor de Habilidades Corporativas',
  'Una herramienta que te ayuda a ver qué hay detrás de tu título corporate y cómo monetizarlo fuera. Mete tu puesto y descubre lo que realmente tienes.',
  1
);
```

### Resources
```sql
-- Lección 2 resources
INSERT INTO resources (lesson_id, title, url, type, order) VALUES
(
  (SELECT l.id FROM lessons l JOIN modules m ON l.module_id = m.id WHERE m.title = 'Lección 2: Oportunidad'),
  'Nichos de Mercado — PDF de referencia',
  'PLACEHOLDER_DRIVE_URL',
  'pdf',
  1
),
(
  (SELECT l.id FROM lessons l JOIN modules m ON l.module_id = m.id WHERE m.title = 'Lección 2: Oportunidad'),
  'IKIGAI — Exponencial',
  'PLACEHOLDER_DRIVE_URL',
  'pdf',
  2
);

-- Lección 4 resource (external tool)
INSERT INTO resources (lesson_id, title, url, type, order)
VALUES (
  (SELECT l.id FROM lessons l JOIN modules m ON l.module_id = m.id WHERE m.title = 'Lección 4: Influencia'),
  'Herramienta — Diseña tu Carrera Moderna',
  'https://tunuevacarrera.lovable.app',
  'tool',
  1
);

-- Bonus resource
INSERT INTO resources (lesson_id, title, url, type, order)
VALUES (
  (SELECT l.id FROM lessons l JOIN modules m ON l.module_id = m.id WHERE m.title = 'Bonus: Traductor Habilidades Corporativas'),
  'Traductor de Habilidades Corporativas',
  'https://traductorcorporate.lovable.app',
  'tool',
  1
);
```

### Locked courses for dashboard
```sql
INSERT INTO courses (slug, title, description, order) VALUES
('exponencial', 'Exponencial', 'El programa flagship de Exponencial. 4 meses, 17 sesiones 1:1, tu negocio boutique construido desde cero.', 2),
('redes-que-venden', 'Redes que Venden', 'LinkedIn y Substack como activos de autoridad que atraen mientras tú vives.', 3),
('construye', 'Construye', 'La infraestructura de negocio que lo sostiene todo. Notion, Claude, sistemas.', 4);
```

---

## PLATFORM LAYOUT

### Global layout structure
```
┌─────────────────────────────────────────────────────┐
│  SIDEBAR (240px, dark #0c0d0e, fixed)               │
│  - Course title                                     │
│  - Student name + % complete                        │
│  - ← Dashboard link                                 │
│  - Module list (grouped, with completion icons)     │
├─────────────────────────────────────────────────────┤
│  MAIN CONTENT AREA (flex-1, white #ffffff)          │
│  - Changes based on route                           │
└─────────────────────────────────────────────────────┘
```

### Routes
```
/login                    → magic link login page
/dashboard                → student dashboard (enrolled + locked courses)
/course/:slug             → course home (module list + progress)
/course/:slug/lesson/:id  → lesson page (video + content + resources)
/productos                → public product storefront (no login required)
```

---

## SCREEN SPECS — SCHOOL

### /login
- Centered card on near-black background
- Exponencial logo top
- Headline: "Accede a tu curso"
- Email input + "Enviar enlace de acceso" button (purple)
- Confirmation state: "Revisa tu email — te hemos enviado el enlace"
- No password. Magic link only via Supabase Auth.

### /dashboard
- White background, clean
- Header: "Mis programas"
- Enrolled course card: title + description + purple progress bar + "Continuar" button
- Locked course cards: title + description + lock icon + "Más información" → respective mariagarai.com landing page
- Muted/greyed styling for locked cards

### /course/:slug — Course home
- Sidebar renders with full module list
- Main area: "Bienvenida, [nombre]" + purple progress bar + "% completado"
- Module cards in order — completion status + click → lesson page

### /course/:slug/lesson/:id — Lesson page
- **Sidebar** (fixed, dark): course title, student name/%, all modules listed, active highlighted in purple, completed show checkmark
- **Main area:**
  - Bunny Stream embed if `bunny_video_id` exists (16:9, full width)
  - Lesson title + description
  - Body content (from Notion API)
  - Resources section: PDF downloads + external tool links
  - Bottom bar: ← Anterior | "Marcar como completada" (purple) | Siguiente →

### Lesson types
- **Video lesson** (Lecciones 1–5): Bunny embed + description + Notion content + resources
- **Text-only** (Plan 90 Días): no video, title + description + body only
- **Tool/Bonus** (Traductor): no video, description + prominent external link button

---

## NOTION API INTEGRATION (V1)

```javascript
const getNotionContent = async (notionPageId) => {
  const response = await fetch(`https://api.notion.com/v1/blocks/${notionPageId}/children`, {
    headers: {
      'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
      'Notion-Version': '2022-06-28'
    }
  });
  return response.json();
};
```

Simple renderer — headings, paragraphs, callouts, bullet lists. Don't over-engineer.
If `notion_page_id` is null, render `body` from Supabase directly.

---

## BUNNY STREAM INTEGRATION

```jsx
<iframe
  src={`https://iframe.mediadelivery.net/embed/${BUNNY_LIBRARY_ID}/${lesson.bunny_video_id}`}
  className="w-full aspect-video"
  allowFullScreen
  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
/>
```

Store `BUNNY_LIBRARY_ID` in `.env`. Each lesson stores only the video ID, not the full URL.

---

## ACCESS CONTROL

```javascript
const checkAccess = async (userId, courseSlug) => {
  const { data } = await supabase
    .from('user_access')
    .select('id')
    .eq('user_id', userId)
    .eq('course_id', (
      await supabase.from('courses').select('id').eq('slug', courseSlug).single()
    ).data.id)
    .single();
  return !!data;
};
```

- No access → redirect to /dashboard
- Not logged in → redirect to /login

---

## PROGRESS CALCULATION

```javascript
const getCourseProgress = async (userId, courseId) => {
  const { data: lessons } = await supabase
    .from('lessons')
    .select('id, modules(phases(course_id))')
    .eq('modules.phases.course_id', courseId);

  const { data: completed } = await supabase
    .from('lesson_progress')
    .select('lesson_id')
    .eq('user_id', userId)
    .eq('completed', true)
    .in('lesson_id', lessons.map(l => l.id));

  return Math.round((completed.length / lessons.length) * 100);
};
```

---

## SCHOOL BUILD SEQUENCE (reference — V1 complete)

- [x] 1. Create Supabase tables (RLS enabled)
- [x] 2. Insert seed data (Sprint Claridad + locked courses)
- [x] 3. Auth — magic-link login + session handling
- [x] 4. Protected routes — middleware on every /course/* route
- [x] 5. Dashboard — enrolled card + locked cards
- [x] 6. Sidebar component — dark, fixed, module list with completion state
- [x] 7. Course home — module cards, progress bar
- [x] 8. Lesson page — Bunny embed + Notion content + resources + mark complete
- [x] 9. Progress bar — reads lesson_progress, shows percentage everywhere

---

## SCHOOL NOTES

- Sprint Claridad is flat — no phases in the UI. Phase exists in DB for schema consistency only. Sidebar shows modules directly.
- Loom video URLs in Notion content render naturally — don't try to extract them.
- `Plan 90 Días` has no video — render as text-only with note: "Este módulo se trabaja en sesión con María."
- Bonus lesson has no video — description + prominent external link button only.
- María's Notion portal for exercises is a standalone Notion page — do not embed it in the platform.

---

---

# PART 2 — PRODUCTOS STOREFRONT
## ⬜ Next build

---

## WHAT WE ARE BUILDING

A public digital product storefront at `/productos` on exponencial.com. Visitors and students can browse and buy PDFs or video products. No login required to purchase. After payment, delivery is manual for V1 (Marco generates a Supabase signed URL and sends via Resend). Stripe + Railway auto-delivery comes in Month 2.

**Visual reference:** Gumroad product grid. Large thumbnail dominates each card. Clean, minimal. Dark sidebar visible for logged-in students (same sidebar as Cursos — add Productos as a second nav item).

---

## SUPABASE — TABLE + STORAGE BUCKET

### New table

```sql
CREATE TABLE productos (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug          text UNIQUE NOT NULL,
  title         text NOT NULL,
  description   text,
  thumbnail_url text,
  price         int NOT NULL,           -- in cents, e.g. 2900 = €29
  stripe_link   text NOT NULL,
  type          text NOT NULL CHECK (type IN ('pdf', 'video')),
  file_url      text,                   -- Supabase Storage path (PDF) or Bunny private link (video)
  active        boolean DEFAULT true,
  "order"       int DEFAULT 0,
  created_at    timestamp DEFAULT now()
);

ALTER TABLE productos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active productos"
  ON productos FOR SELECT
  USING (active = true);
```

### Supabase Storage bucket

Create bucket `productos` — **private** access. Signed URLs (72hr expiry) generated manually via Supabase dashboard for V1.

```
productos/
└── pdfs/
    └── [slug].pdf
```

### Seed data — placeholder product

```sql
INSERT INTO productos (slug, title, description, thumbnail_url, price, stripe_link, type, file_url, active, "order")
VALUES (
  'placeholder-producto',
  'Producto de ejemplo',
  'Descripción del producto. Aquí va lo que incluye y por qué lo necesitas.',
  'https://placehold.co/600x400/0c0d0e/9378fe?text=Producto',
  2900,
  'https://buy.stripe.com/placeholder',
  'pdf',
  'productos/pdfs/placeholder.pdf',
  false,
  1
);
```

---

## SCREEN SPEC — /productos

### Layout: logged-out visitor
- No sidebar. Full-width, off-white `#f9f9f7` background.
- Minimal top nav: Exponencial logo left, "Productos" right (current page, no link)
- If logged in: show "Mi cuenta → /dashboard" instead

### Layout: logged-in student
- Same dark sidebar as Cursos (240px fixed left)
- Sidebar shows: **Cursos** → /dashboard and **Productos** → /productos (active, purple)

### Page header
```
Eyebrow label (purple, uppercase): EXPONENCIAL
Headline: Productos
Subhead: Recursos para construir tu negocio boutique.
```

### Product card anatomy
```
┌─────────────────────────────────┐
│                                 │
│         THUMBNAIL IMAGE         │  aspect-video (16:9), rounded-t-lg, object-cover
│                                 │
├─────────────────────────────────┤
│  TYPE BADGE   (PDF / VIDEO)     │  small pill, hot pink bg, white text, uppercase
│                                 │
│  Product title                  │  bold, near-black, text-lg                    │
│  Description                    │  text-sm, muted, line-clamp-2
│                                 │
│  €XX          [Comprar →]       │  price left (bold, purple), button right
└─────────────────────────────────┘
```

"Comprar" button: purple `#9378fe`, white text, opens Stripe link in new tab.

### Empty state
```
Icon: 🛍️
Headline: Próximamente
Body: Estamos preparando nuevos recursos para ti. Vuelve pronto.
```

---

## NAVIGATION CHANGES

### Sidebar (logged-in — add below existing Cursos item)
```
📚 Cursos        → /dashboard
🛍️ Productos     → /productos
```

Active state: purple text + left border accent. **DO NOT TOUCH anything else in the sidebar.**

---

## V1 DELIVERY FLOW (manual — no Railway yet)

1. Stripe sends payment confirmation email to Marco
2. Marco → Supabase Storage → `productos/pdfs/` → find file → Get URL → 72hr expiry → copy signed URL
3. Open Resend → send delivery email from `noreply@exponencial.com`:

```
Hola [nombre],

Gracias por tu compra. Aquí tienes tu acceso a [Nombre del Producto]:

[BOTÓN: Descargar ahora]  → signed URL

Este enlace expira en 72 horas. Si necesitas volver a acceder, escríbenos a hola@exponencial.com.

— El equipo de Exponencial
```

4. Railway + auto-delivery comes in Month 2.

---

## PRODUCTOS BUILD SEQUENCE — IN THIS ORDER, ONE AT A TIME

1. **Supabase:** Create `productos` table + RLS policy + placeholder seed row
2. **Supabase Storage:** Create `productos` bucket (private) + `pdfs/` folder
3. **`/productos` route:** Add to React Router config
4. **`ProductosPage` component:** Page header + product grid + empty state
5. **`ProductoCard` component:** Thumbnail, badge, title, description, price, Comprar button
6. **Sidebar update:** Add Productos nav item to existing sidebar (logged-in only)
7. **Public nav bar:** Minimal logged-out nav for `/productos`

---

## DO NOT TOUCH (Productos build)

- Any existing course platform routes (`/dashboard`, `/course/*`, `/login`)
- `src/components/platform/` components already built — only ADD, never modify existing ones except to add the Productos sidebar item
- Supabase tables: `courses`, `phases`, `modules`, `lessons`, `resources`, `group_recordings`, `user_access`, `lesson_progress`
- `src/index.css` global tokens
- `tailwind.config.ts`
- Any mariagarai.com pages or components

---

## ENV VARIABLES

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_NOTION_API_KEY=
VITE_BUNNY_LIBRARY_ID=
```

---

*Build Brief — Exponencial School + Productos v2.0 · June 2026*
*Marco builds. Claude wrote. María approves.*
