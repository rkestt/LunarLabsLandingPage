# Piano Implementazione Landing Page

## Completati ✅

### Fix: About Section Navbar Overlap
- **File modificato:** `components/About.tsx`
- **Fix:** Aggiunto pt-20 per evitare che il titolo sia coperto dalla navbar fissa
- **Commit:** f549214
- **Stato:** ✅ Completato

### Step 1: Header Sticky
- **File creati/modificati:**
  - `components/Header.tsx` (nuovo)
  - `app/page.tsx` (aggiunto import + IDs sezioni)
  - `components/Header.test.tsx` (nuovo)
- **Fix manuale:** Risolti crash HMR con useMotionValueEvent
- **Stato:** ✅ Funzionante

---

## Da Fare (7 step)

### Step 2: SEO Tecnico ✅ COMPLETATO

**File da creare:**
- `public/sitemap.xml`
- `public/robots.txt`

**File da modificare:**
- `app/layout.tsx` → aggiungere JSON-LD

**Contenuto minimo:**
```xml
<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lunarlabs.dev/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

```text
# robots.txt
User-agent: *
Allow: /
Sitemap: https://lunarlabs.dev/sitemap.xml
```

---

### Step 3: FAQ Section ✅ COMPLETATO
- `components/FAQ.tsx` creato
- `app/page.tsx` aggiornato

### Step 4: Pricing/Services ✅ COMPLETATO
- `components/Pricing.tsx` creato
- `app/page.tsx` aggiornato

### Step 5: Case Studies ✅ COMPLETATO
- `components/CaseStudies.tsx` creato
- `app/page.tsx` aggiornato

### Step 6: Testimonials ✅ COMPLETATO
- `components/Testimonials.tsx` creato
- `app/page.tsx` aggiornato

### Step 7: Chat Widget ✅ COMPLETATO
- `components/ChatWidget.tsx` creato
- `app/page.tsx` aggiornato

### Step 8: Newsletter ✅ COMPLETATO
- `components/Newsletter.tsx` creato
- `app/page.tsx` aggiornato

---

## Ordine Consigliato

```
1. ✅ Header Sticky (completato)
       ↓
2. SEO Tecnico (sitemap, robots, JSON-LD)
       ↓
3. FAQ Section
       ↓
4. Pricing/Services
       ↓
5. Case Studies
       ↓
6. Testimonials
       ↓
7. Chat Widget
       ↓
8. Newsletter
```

## Note

- Ogni step richiede 1-2 ore
- Test sempre con `npm test`
- Build sempre con `npm run build` prima di considerare completato
- In caso di crash HMR, pulire cache: `rm -rf .next`

---

## Comandi Utili

```bash
# Sviluppo
npm run dev

# Test
npm test

# Test coverage
npm run test:coverage

# Build
npm run build

# Lint
npm run lint

# Pulizia cache
rm -rf .next
```