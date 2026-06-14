# BUILD BRIEF B — EXPONENCIAL ADMIN: EVENTS + CRM
## Supabase Schema + Admin Event Management + In-house CRM + Editable Page Header
Version: 3.0 · June 2026
Repo: `marcog-88/exponencial` (private — admin/platform)
Routes: exponencial.com/admin/eventos, /admin/crm, /admin/crm/[id]
Stack: React + Tailwind + Supabase (Exponencial project) + Resend + Edge Functions + Supabase Storage

> **Companion brief:** BUILD BRIEF A (mariagarai.com public events) handles the front door.
> **Build the Supabase tables in THIS brief FIRST (Steps 1–4)** — Brief A depends on them.

---

## CHANGELOG v2 → v3
- "De Corporate a Founder" renamed to **Exponencial** everywhere (default tag, seed, copy)
- `zoom_link` generalized to **`platform`** + **`event_link`** (Zoom / Restream / Online, per event)
- New **`page_settings`** single-row config table — editable page header (title, subtitle, profile pic, social links). Banner deferred (field noted, not built yet).
- New **public** Supabase Storage bucket **`page-assets`** for profile pic uploads (productos pattern, but PUBLIC not private)
- Admin sidebar tab confirmed: **Eventos** (+ existing CRM)

---

## CRITICAL RULES — READ FIRST

- One change at a time. Never batch.
- Plan mode for all structural builds. Chat mode for small fixes only.
- New components go in `src/components/platform/`
- Page wrapper class: `platform-scope` (exists — do not recreate)
- Never touch global tokens, other pages, or unrelated files
- Always include a DO NOT TOUCH list in every follow-up prompt
- Push to GitHub before stopping. Pull before starting.
- Prices never use decimal points: €1500 not €1.500
- CTA buttons use the lead accent (purple) — never near-black

---

## THE ONE RULE (architecture)

> Everything that touches user data lives in the **Exponencial Supabase project**. The mariagarai.com events repo (Brief A) writes into THIS project via the anon key. This brief owns the schema, the admin, the CRM, and the editable page header.

```
mariagarai.com (BRIEF A)                exponencial.com (THIS REPO)
─────────────────────────               ─────────────────────────
/eventos          (public list)         /admin/eventos   (create/edit + registrants + page header)
/eventos/[slug]   (register) ──┐        /admin/crm        (pipeline + clients)
                               │        /admin/crm/[id]   (contact detail)
                               │        Edge Function     (daily reminders)
                               ▼               │
                  SHARED SUPABASE (Exponencial project)
        tables: contacts, events, event_registrations, page_settings
        storage: page-assets (PUBLIC bucket)
```

---

## WHAT WE ARE BUILDING

1. **The schema** — four tables in the Exponencial Supabase project, shared with mariagarai.com.
2. **Admin event management** — María creates/edits events; they appear on mariagarai.com automatically.
3. **Editable page header** — María edits the /eventos page title, subtitle, profile picture, and social links from the admin. Profile pic is a real uploader into a public Storage bucket.
4. **In-house CRM** — replaces Notion CRM for daily sales work. One `contacts` table, two views (pipeline + clients). Event registrants auto-populate as INTERESADA.

**Notion stays** for AI meeting recording/transcription only — María records sales calls in Notion, pastes the summary into the CRM notes field here.

---

## STEP 1 — SUPABASE SCHEMA

### contacts (unified CRM + clients)

```sql
CREATE TABLE contacts (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name               text NOT NULL,
  email              text UNIQUE NOT NULL,
  whatsapp           text,
  source             text,           -- 'evento' | 'linkedin' | 'substack' | 'referido' | 'otro'
  event_source       text,           -- event title (if source = evento)
  status             text DEFAULT 'INTERESADA',
                                      -- INTERESADA | EN_CONVERSACION | SESION_VENTA |
                                      -- PROPUESTA_ENVIADA | FOLLOW_UP | NUTRIR | CLIENTE | ALUMNI
  program_interest   text,           -- 'Exponencial' | 'Construye' | 'Redes que Venden' | 'Decide'
  notes              text,           -- free text + pasted Notion transcriptions
  next_action_date   date,
  next_action_note   text,
  -- Client-only fields (surface in UI when status = CLIENTE or ALUMNI)
  programa           text,
  precio             int,            -- euros, no decimals
  fecha_inicio       date,
  fecha_fin_estimada date,
  factura            boolean DEFAULT false,
  nif_cif            text,
  direccion          text,
  created_at         timestamp DEFAULT now(),
  updated_at         timestamp DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anon can insert contacts"
  ON contacts FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin full access contacts"
  ON contacts FOR ALL USING (auth.role() = 'authenticated');
```

> **Status-protection:** anon path only ever INSERTs; on email conflict it must not change `status`. A CLIENTE who registers for a free event stays CLIENTE. Enforce in Brief A's upsert logic (status written only on initial insert) and keep the anon policy INSERT-only here.

### events

```sql
CREATE TABLE events (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            text UNIQUE NOT NULL,
  title           text NOT NULL,
  description     text,
  cover_image_url text,
  event_date      timestamptz NOT NULL,
  platform        text DEFAULT 'Zoom',         -- 'Zoom' | 'Restream' | 'Online' | etc. (shown publicly)
  event_link      text,                        -- private join URL; only emailed, never public
  tag             text DEFAULT 'Exponencial',
  status          text DEFAULT 'upcoming',     -- 'upcoming' | 'past' | 'draft'
  guest_count     int DEFAULT 0,
  active          boolean DEFAULT true,
  "order"         int DEFAULT 0,
  created_at      timestamp DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active events"
  ON events FOR SELECT USING (active = true);

CREATE POLICY "Admin full access events"
  ON events FOR ALL USING (auth.role() = 'authenticated');
```

> `platform` is shown publicly (e.g. "Restream — online"). `event_link` is private — emailed in the confirmation only, never rendered on the public page.

### event_registrations

```sql
CREATE TABLE event_registrations (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id      uuid REFERENCES events(id) NOT NULL,
  contact_id    uuid REFERENCES contacts(id) NOT NULL,
  registered_at timestamp DEFAULT now(),
  UNIQUE(event_id, contact_id)
);

ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anon can register"
  ON event_registrations FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can read registrations"
  ON event_registrations FOR SELECT USING (auth.role() = 'authenticated');
```

### page_settings (single-row config for the /eventos page header)

```sql
CREATE TABLE page_settings (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_key          text UNIQUE NOT NULL,    -- 'eventos' (allows future pages to reuse this table)
  page_title        text,                    -- e.g. 'Encuentros en vivo'
  page_subtitle     text,                    -- e.g. 'Sesiones gratuitas para founders...'
  profile_image_url text,                    -- PUBLIC page-assets bucket URL
  linkedin_url      text,
  website_url       text,
  -- banner_url      text,                    -- DEFERRED: add when banner upload is built
  updated_at        timestamp DEFAULT now()
);

ALTER TABLE page_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read page settings"
  ON page_settings FOR SELECT USING (true);

CREATE POLICY "Admin can update page settings"
  ON page_settings FOR ALL USING (auth.role() = 'authenticated');
```

> Banner intentionally NOT built in v3 (Marco's call). The `banner_url` column is commented out; add it plus an uploader later without restructuring. Header for now = title + subtitle + profile pic + social links.

---

## STEP 2 — PUBLIC STORAGE BUCKET

Create a Supabase Storage bucket **`page-assets`** — **PUBLIC** access.

> This is DIFFERENT from the `productos` bucket, which is PRIVATE (signed URLs for paid files). The events page header is shown to anonymous visitors, so its bucket must be public — the stored URL is directly readable, no signing.

```
page-assets/            (PUBLIC)
└── profile/
    └── maria.jpg        (uploaded from admin)
```

Bucket policy: public read; authenticated write/update.

---

## STEP 3 — RPC: increment guest count

```sql
CREATE OR REPLACE FUNCTION increment_guest_count(event_id uuid)
RETURNS void AS $$
  UPDATE events SET guest_count = guest_count + 1 WHERE id = event_id;
$$ LANGUAGE sql SECURITY DEFINER;
```

---

## STEP 4 — SEED DATA

```sql
-- Upcoming event (the Jun 11 LinkedIn one has passed; seed the active Jun 16)
INSERT INTO events (slug, title, description, event_date, platform, tag, status, "order")
VALUES (
  'exponencial-primeros-1000-jun16',
  'EXPONENCIAL #2: Tus primeros 1000€ fuera del corporate.',
  'Cómo validar y vender tu primer servicio como founder independiente. Sin audiencia. Sin equipo. Con criterio.',
  '2026-06-16 16:00:00+00',
  'Zoom',
  'Exponencial',
  'upcoming',
  1
);

-- Page header config
INSERT INTO page_settings (page_key, page_title, page_subtitle, linkedin_url, website_url)
VALUES (
  'eventos',
  'Encuentros en vivo',
  'Sesiones gratuitas para founders que vienen del corporate. Cada semana, un tema. Siempre en directo.',
  'https://www.linkedin.com/in/mariagarai',
  'https://mariagarai.com'
);
```

> After Step 4, Marco can start Brief A in parallel — its read-only pages verify against this seed.

---

## ADMIN SIDEBAR — add two items

Below existing Cursos / Productos in the admin sidebar:
```
📅 Eventos     → /admin/eventos
👥 CRM         → /admin/crm
```
Active state: purple text + left border accent. **DO NOT TOUCH** the rest of the sidebar.

---

## /admin/eventos — Event management

**Three areas on this page: (1) event list, (2) create/edit event, (3) page header settings.**

### Event list
- Table: title, date, platform, guest_count, status, actions (edit / delete)
- "Nuevo evento" button → create form

### Create / Edit event form
- Title
- Slug (auto-generated, editable)
- Description
- Cover image URL
- Event date + time (datetime picker → timestamptz)
- **Platform** (dropdown: Zoom / Restream / Online / Otro)
- **Event link** (private join URL)
- Tag (default "Exponencial")
- Status (upcoming / past / draft)
- Active toggle

### Event detail
Click event → registrant list (name, email, whatsapp, registered_at) via `event_registrations` join `contacts`.

### Page header settings (edits `page_settings` where page_key = 'eventos')
A settings card on the same page:
- Page title (text)
- Page subtitle (textarea)
- **Profile picture** — uploader → uploads to `page-assets/profile/`, stores public URL in `profile_image_url` (SAME upload UX as productos thumbnails, but PUBLIC bucket)
- LinkedIn URL (text)
- Website URL (text)
- "Guardar" button

> Banner upload is intentionally NOT here yet. Leave a clearly-commented placeholder so it's obvious where it goes later.

---

## /admin/crm — CRM

**Tab toggle: Pipeline | Clientes**

### Pipeline view (default)
- Columns: Name, Email, WhatsApp, Source, Event, Status (colored badge), Next Action, Created
- Filter by status, search by name/email
- Click row → `/admin/crm/[id]`
- "Nuevo contacto" → manual create

### Clientes view
- Filtered to CLIENTE + ALUMNI
- Extra columns: Programa, Precio, Fecha Inicio, Fecha Fin, Factura ✓

**Status badge colors:**
```
INTERESADA        → purple #9378fe
EN_CONVERSACION   → blue
SESION_VENTA      → orange #e88f00
PROPUESTA_ENVIADA → yellow #ffd441 (dark text)
FOLLOW_UP         → hot pink #ff4295
NUTRIR            → gray
CLIENTE           → mint #d0fcd0 (dark text)
ALUMNI            → near-black #0c0d0e, white text
```

---

## /admin/crm/[id] — Contact detail

**Two columns desktop, single column mobile.**

**Left — contact + pipeline:**
- Name (inline editable), Email, WhatsApp
- Source + Event source
- Status dropdown (8 stages)
- Program interest dropdown
- Created date

**Right — activity:**
- **Notes:** large textarea, autosaves on blur ("Guardado ✓"). María pastes Notion transcriptions here.
- **Next action:** date picker + text note; shows current action with clear option.
- **Client fields** (only when CLIENTE or ALUMNI): Programa, Precio, Fecha Inicio, Fecha Fin Estimada, Factura checkbox, NIF/CIF, Dirección.

---

## DAILY REMINDER — SUPABASE EDGE FUNCTION

Runs 08:00 UTC daily. Contacts where `next_action_date = CURRENT_DATE` → Resend email to **admin@mariagarai.com**.

**Subject:** `⏰ Acción pendiente — [Contact Name]`
**Body:**
```
Hola María,

Tienes una acción pendiente hoy con [Contact Name].
Acción: [next_action_note]
Contacto: [email] · [whatsapp]
Estado actual: [status]
→ Ver en el CRM: https://exponencial.com/admin/crm/[id]

— Exponencial
```
Sender: noreply@mariagarai.com or noreply@exponencial.com — whichever is verified in Resend.

---

## ENV VARIABLES (this repo — mostly set)

```
VITE_SUPABASE_URL          (Exponencial project)
VITE_SUPABASE_ANON_KEY
VITE_RESEND_API_KEY
# Edge Function uses SUPABASE_SERVICE_ROLE_KEY server-side only (Supabase secrets)
```

---

## BUILD SEQUENCE — ONE AT A TIME

1. **Supabase:** create `contacts`, `events`, `event_registrations`, `page_settings` + RLS
2. **Supabase Storage:** create PUBLIC `page-assets` bucket + policies
3. **Supabase:** create `increment_guest_count` RPC
4. **Seed:** insert upcoming event + page_settings row → (Marco starts Brief A in parallel)
5. **Admin sidebar:** add Eventos + CRM nav items
6. **/admin/eventos:** event list + create/edit form (incl. platform + event_link fields)
7. **/admin/eventos:** page header settings card (incl. profile pic uploader → page-assets)
8. **/admin/eventos:** event detail → registrant list
9. **/admin/crm:** contacts table — pipeline view
10. **/admin/crm:** clientes view
11. **/admin/crm/[id]:** contact detail — notes, next action, status, client fields
12. **Edge Function:** daily reminder cron → Resend to admin@mariagarai.com

---

## DO NOT TOUCH

- Existing platform routes (`/dashboard`, `/course/*`, `/login`, `/productos`)
- Existing `src/components/platform/` components — only ADD
- The PRIVATE `productos` Storage bucket — `page-assets` is a NEW separate PUBLIC bucket
- Supabase tables: `courses`, `phases`, `modules`, `lessons`, `resources`, `group_recordings`, `user_access`, `lesson_progress`, `productos`
- `src/index.css` global tokens, `tailwind.config.ts`
- Anything in the mariagarai.com repo (separate repo)

---

## NOTES

- One database, two repos — events created here appear on mariagarai.com automatically
- `platform` is public ("Restream — online"); `event_link` is private (emailed only)
- Profile pic bucket is PUBLIC — do not reuse the private productos bucket
- Banner is deferred — leave a commented placeholder in both schema and admin UI
- A CLIENTE who registers for a free event must NOT be downgraded — status set only on initial insert
- Guest count cached on `events.guest_count` via RPC — never COUNT() on load
- Notes autosave on blur — no save button
- Notion kept ONLY for AI meeting transcription
- Per-page color: Exponencial admin = purple lead / purple CTA

---

*BUILD BRIEF B — EXPONENCIAL ADMIN: EVENTS + CRM v3.0 · June 2026*
*Marco builds. Claude wrote. María approves.*
