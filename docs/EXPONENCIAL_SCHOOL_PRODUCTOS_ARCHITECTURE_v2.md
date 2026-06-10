# EXPONENCIAL SCHOOL + PRODUCTOS ARCHITECTURE v2
**Exponencial — School Platform & Digital Product Storefront**
Last updated: June 2026
Platform URL: exponencial.com
Status: Active build

---

## THE ONE RULE
> Everything that touches user data lives in the Exponencial Supabase project. No exceptions.

---

## PLATFORM OVERVIEW

A self-hosted course platform built with React/Tailwind, hosted on Vercel, domain managed via GoDaddy + Cloudflare. Supabase is the single database. Notion is the CMS — María edits lesson content in Notion, the platform reads it via the Notion API (V1). Railway handles the backend Node.js API for Stripe webhooks. Resend handles all transactional email.

**Why self-hosted over Skool:** Full control, productizable, no platform dependency, integrates cleanly with the existing Supabase + Resend + Notion stack.

---

## TECH STACK

| Layer | Tool | Owner |
|---|---|---|
| Frontend | React + Tailwind (Claude Code) | Marco |
| Hosting | Vercel | Marco |
| Domain registration | GoDaddy | Marco |
| DNS | Cloudflare | Marco |
| Database | Supabase (Exponencial project) | Marco |
| Backend API | Railway (Node.js) | Marco |
| Email | Resend | Marco |
| Video delivery | Bunny Stream | Marco |
| Video storage (raw) | Google Drive (ops@mariagarai.com) | María |
| Digital product storage | Supabase Storage (Exponencial project) | Marco |
| CMS | Notion | María |
| Payments | Stripe | Both |
| Version control | GitHub | Marco |

---

## COURSE CATALOG

| Course | Status | Sold standalone | Bundled with |
|---|---|---|---|
| Sprint Claridad | Content done — built | Yes | Included with Exponencial |
| Exponencial | Content in progress | Yes | Includes Sprint Claridad |
| Redes que Venden | Not started | Yes (future) | — |
| Construye | Not started | Yes (future) | — |

**Access rule:** Buying Exponencial grants access to both Exponencial AND Sprint Claridad (two `user_access` rows). Buying Sprint Claridad grants Sprint Claridad only. Implemented manually at launch, automated via Railway webhook in Month 2.

---

## PRODUCTOS

A lightweight digital product storefront sitting alongside the course platform. No login required to browse or buy. Students who are logged in see Productos in the sidebar alongside Cursos.

### How it works
- `/productos` is a public route — no login wall
- Each product has a Stripe payment link. Clicking "Comprar" opens it in a new tab.
- After payment, Resend delivers the product automatically:
  - **PDF products:** Resend email contains a Supabase Storage signed URL (time-limited download link)
  - **Video products:** Resend email contains a Bunny Stream private link
- No platform account needed to purchase or receive a product
- Students logged in see the same page and buy the same way — no special access or discounts (for now)

### Product card design
Large thumbnail (Gumroad-scale — image dominates the card), product title, 1–2 line description, price, "Comprar" button. Grid layout, 2 columns on desktop, 1 on mobile.

### File storage
| Asset type | Where stored |
|---|---|
| PDF files | Supabase Storage — `productos` bucket (Exponencial project) |
| Video products | Bunny Stream (private link, no embed — link only) |

### Data model addition

```sql
productos
  id            uuid PK default gen_random_uuid()
  slug          text unique not null
  title         text not null
  description   text
  thumbnail_url text               -- Supabase Storage or manual URL
  price         int not null       -- in cents (e.g. 2900 = €29)
  stripe_link   text not null      -- Stripe payment link URL
  type          text not null      -- 'pdf' | 'video'
  file_url      text               -- Supabase Storage path (PDF) or Bunny private link (video)
  active        boolean default true
  order         int default 0
  created_at    timestamp default now()
```

No `user_access` row needed — delivery is email-based, not platform-gated.

### Delivery flow

```
Student / visitor clicks Comprar
        ↓
Stripe payment link (new tab)
        ↓
Payment confirmed → Stripe webhook fires to Railway
        ↓
Railway looks up producto by Stripe price ID
        ↓
For PDF: generates Supabase Storage signed URL (e.g. 72hr expiry)
For video: retrieves Bunny private link
        ↓
Resend fires delivery email with download/view link
```

### Routes
```
/productos              → public product grid
/productos/:slug        → individual product page (optional — can skip for V1)
```

### Navigation
- **Logged-in students:** Sidebar shows two items — Cursos and Productos
- **Public visitors:** `/productos` is accessible directly, no sidebar shown
- **Nav link:** Add "Productos" to the top nav on exponencial.com alongside "Cursos"

### V1 scope
- Product grid page only (no individual product pages)
- Manual Stripe link setup per product
- Manual Bunny private link per video product
- Stripe webhook → Resend delivery automated from day 1

### Not building now
- Individual product detail pages (V2)
- Student discounts or bundle pricing
- Download tracking or access expiry management UI

---

## CONTENT STRUCTURE

### Hierarchy
```
Dashboard
└── Course (e.g. Sprint Claridad)
    └── Phase (e.g. Phase 1 — Claridad)
        └── Module (e.g. Module 01 — Tu oferta)
            └── Lesson (video or text + bullet points + resources)
```

### Student-facing views

**Dashboard (first screen after login):**
- Enrolled course card — shows course name + % progress
- Locked course cards — shows name + description + buy CTA
- No access to locked courses

**Course view (click enrolled course):**
- Progress bar above phases
- Phases shown across top
- Left sidebar: modules within selected phase
- Click module → lessons listed
- Click lesson → lesson page opens

**Lesson page:**
- Title + description text
- Bunny Stream video embed (optional — some lessons are text only)
- Bullet points / body content
- Downloadable resources / external links
- Previous / Next navigation buttons
- Mark complete button

**Group recordings (Exponencial only):**
- Separate section inside Exponencial course
- Not nested under phases
- Monthly session recordings uploaded by Marco

### Sprint Claridad structure
- Flat — no phases, just modules
- Content: Loom videos + resources — done
- First course built on the platform

---

## DATA MODEL (Supabase)

### Tables

```sql
-- Auth handled by Supabase Auth (users table auto-created)

courses
  id          uuid PK
  slug        text unique        -- e.g. 'sprint-claridad'
  title       text               -- e.g. 'Sprint Claridad'
  description text
  cover_image text               -- URL
  order       int                -- display order on dashboard
  created_at  timestamp

phases
  id          uuid PK
  course_id   uuid FK → courses
  title       text               -- e.g. 'Phase 1 — Claridad'
  order       int
  created_at  timestamp

modules
  id          uuid PK
  phase_id    uuid FK → phases
  title       text               -- e.g. 'Module 01 — Tu oferta'
  order       int
  created_at  timestamp

lessons
  id            uuid PK
  module_id     uuid FK → modules
  title         text
  description   text
  body          text             -- rich text content (from Notion)
  bunny_video_id text            -- null if text-only lesson
  order         int
  notion_page_id text            -- for Notion CMS sync
  created_at    timestamp

resources
  id          uuid PK
  lesson_id   uuid FK → lessons
  title       text
  url         text               -- external link or Drive file URL
  type        text               -- 'pdf' | 'link' | 'template'
  order       int

group_recordings
  id            uuid PK
  course_id     uuid FK → courses  -- belongs to course, not phase
  title         text
  session_date  date
  bunny_video_id text
  created_at    timestamp

user_access
  id          uuid PK
  user_id     uuid FK → auth.users
  course_id   uuid FK → courses
  granted_at  timestamp
  granted_by  text               -- 'manual' | 'stripe_webhook'

lesson_progress
  id            uuid PK
  user_id       uuid FK → auth.users
  lesson_id     uuid FK → lessons
  completed     boolean default false
  completed_at  timestamp

productos
  id            uuid PK
  slug          text unique
  title         text
  description   text
  thumbnail_url text
  price         int              -- in cents
  stripe_link   text
  type          text             -- 'pdf' | 'video'
  file_url      text
  active        boolean default true
  order         int default 0
  created_at    timestamp
```

### Key queries

```sql
-- What courses does this user have access to?
SELECT c.* FROM courses c
JOIN user_access ua ON ua.course_id = c.id
WHERE ua.user_id = $user_id;

-- What % of a course is complete?
SELECT
  COUNT(lp.id) FILTER (WHERE lp.completed = true) * 100.0 /
  COUNT(l.id) AS progress_pct
FROM lessons l
JOIN modules m ON l.module_id = m.id
JOIN phases p ON m.phase_id = p.id
LEFT JOIN lesson_progress lp ON lp.lesson_id = l.id AND lp.user_id = $user_id
WHERE p.course_id = $course_id;
```

---

## NOTION AS CMS

### V1 (current)
Platform calls Notion API on each lesson page load to fetch latest content. María edits in Notion → changes are live immediately.

**What María manages in Notion:**
- Lesson titles and descriptions
- Lesson body content (text, bullet points)
- Bunny video IDs (paste after uploading to Bunny Stream)
- Resource links

**Notion page ID** is stored in the `lessons.notion_page_id` column. The platform fetches that page via Notion API and renders the content.

### V2 (Month 2)
Add a sync job: Notion → Supabase on a schedule. Platform reads from Supabase (fast, resilient). Migration is additive — no rebuild needed.

---

## VIDEO PIPELINE

```
María records (iPhone / Loom)
        ↓
Google Drive (ops@mariagarai.com)
EXPONENCIAL → PRODUCTS → [COURSE] → VIDEOS
        ↓
Marco uploads to Bunny Stream
        ↓
Copies Bunny video ID
        ↓
Pastes into Notion lesson entry (bunny_video_id field)
        ↓
Platform embeds Bunny player using that ID
```

**Drive structure (ops@mariagarai.com):**
```
EXPONENCIAL
└── PRODUCTS
    ├── SPRINT CLARIDAD
    │   ├── VIDEOS
    │   └── RESOURCES
    ├── EXPONENCIAL
    │   ├── VIDEOS
    │   ├── RESOURCES
    │   └── GROUP RECORDINGS
    ├── REDES QUE VENDEN
    │   ├── VIDEOS
    │   └── RESOURCES
    └── CONSTRUYE
        ├── VIDEOS
        └── RESOURCES
```

---

## ACCESS CONTROL

### How it works
1. Student logs in via magic link (Supabase Auth)
2. Every protected route checks `user_access` table
3. If no row for that user + course → redirect to locked view
4. If row exists → render course content

### Granting access
**V1 (manual):** Marco inserts row(s) directly in Supabase dashboard after payment confirmed.
- Sprint Claridad purchase → 1 row (sprint-claridad)
- Exponencial purchase → 2 rows (exponencial + sprint-claridad)

**V2 (automated):** Stripe webhook fires → Railway API receives it → inserts `user_access` row(s) automatically.

---

## BUILD SEQUENCE

Build Sprint Claridad first. Nail the architecture. Exponencial inherits the same structure.
**One step at a time. Never batch.**

- [x] 1. Data model — create all Supabase tables
- [x] 2. Auth — magic-link login + one protected route
- [x] 3. Access control — check user_access on every protected route
- [x] 4. Bunny Stream — upload one Sprint Claridad video, confirm embed
- [x] 5. Course + lesson pages — Bunny player, resources, mark-complete
- [x] 6. Progress bar — read lesson_progress, show percentage
- [x] 7. Student dashboard — enrolled card + locked cards
- [ ] 8. Stripe webhook (Railway) — Month 2
- [ ] 9. Productos storefront — `/productos` public route
- [ ] 10. Notion → Supabase sync job — Month 2

---

## V1 vs V2 SCOPE

### V1 — done
- Sprint Claridad
- Magic-link auth
- Access gating (manual grants)
- Dashboard: enrolled + locked course cards
- Phase → Module → Lesson navigation
- Lesson page: video or text + resources + prev/next
- Progress bar
- Notion API as live content source

### V2 — active
- Exponencial content (same architecture)
- Productos storefront
- Stripe → Supabase auto-access webhook
- Notion → Supabase sync job
- Redes que Venden + Construye (when content ready)

### Explicitly NOT building
- Transcripts
- Comments / community features
- Quizzes
- Certificates
- Drip scheduling
- Progress per module (only per course for now)

---

## CLAUDE CODE RULES (same discipline as website builds)

- One change at a time — never batch
- Plan mode for structural builds, Chat mode for small fixes
- Always include DO NOT TOUCH list in every prompt
- Front-load all decisions in Chat before opening Code
- New components go in `src/components/platform/`
- Page wrapper class: `platform-scope`
- Never touch global tokens or other pages
- Push to GitHub before stopping, pull before starting

---

## OPEN DECISIONS

| Decision | Status | Recommendation |
|---|---|---|
| Notion CMS sync (V1 live API vs V2 Supabase sync) | V1 live — migrate Month 2 | On track |
| CRM sync (auto vs manual) | Manual for now | Automate Month 2 |
| Sidebar behaviour in lesson view (persistent vs collapse) | Persistent — built | Done |

---

*Exponencial School + Productos Architecture v2 — June 2026*
*Marco builds. María fills. Claude writes.*
