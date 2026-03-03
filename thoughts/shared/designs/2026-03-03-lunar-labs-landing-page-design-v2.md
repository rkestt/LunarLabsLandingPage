# Design: Lunar Labs Landing Page (Version 2 - Updated Colors & Fonts)

## Panoramica del Progetto
Landing page portfolio per Lunar Labs, laboratorio di ingegneria del software specializzato in high-performance product engineering. Il sito deve trasmettere expertise tecnica Enterprise (Accenture, M&C) combinata con la velocità di un team agile, il tutto in un'estetica dark mode premium ispirata a Linear e Vercel.

---

## Palette di Colori Aggiornata

### Colori Originali (Coolors)
- `#8b5cf6` → **Violet Lunar** (Primary Accent)
- `#474350` → **Dark Charcoal** (Dark Background)
- `#69995d` → **Lunar Green** (Secondary Accent)
- `#f1dac4` → **Soft Beige** (Highlight)
- `#24292e` → **Deep Navy** (Dark Surface)

### Palette Normalizzata per Dark Mode
| Ruolo | Colore | Hex | Uso Consigliato |
|-------|--------|-----|-----------------|
| **Background Primario** | Dark Charcoal | `#24292e` | Sfondo principale della pagina |
| **Background Secondario** | Near Black | `#0a0a0a` | Sezioni con container |
| **Testo Principale** | Light Gray | `#f1f1f1` | Testo leggibile su sfondo scuro |
| **Testo Secondario** | Muted Gray | `#a1a1aa` | Sottotitoli, descrizioni |
| **Accent Primario** | Lunar Purple | `#8b5cf6` | Pulsanti, link, highlight |
| **Accent Secondario** | Lunar Green | `#69995d` | Badge, icona secondaria |
| **Highlight** | Soft Beige | `#f1dac4` | Elementi di rilievo (es. badge "Most Popular") |

> **Nota**: La palette mantiene i toni originali ma li adatta a un dark mode coerente. Il viola (`#8b5cf6`) resta l'elemento distintivo, mentre il verde (`#69995d`) viene usato per differenziare componenti secondarie.

---

## Tipografia

### Font Family
- **Headings & UI Elements**: `'Syne', sans-serif` (uso principale per titoli e componenti UI)
- **Body & Content**: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`

### Implementazione
- Importare entrambi i font da Google Fonts
- Utilizzare `Syne` per H1, H2, pulsanti e elementi di call-to-action
- Utilizzare `Inter` per paragrafi, descrizioni e testi di supporto
- Mantenere coerenza con la estetica Vercel/Linear (font puliti, leggibili)

---

## Sezione 1: Hero Section

### Layout
- Full viewport height con centratura verticale del contenuto
- Testo principale (H1) above the fold con animazione di fade-in
- Sottotitolo esplicativo + CTA button
- Background: subtle gradient mesh scuro con particelle o orb slow-motion

### Contenuto
- **H1**: "Ingegnerizziamo il futuro della tua startup" (font **Syne**, 56px desktop / 36px mobile)
- **Sottotitolo**: "Combini la precisione manageriale di un team Enterprise con la velocità di un team agile. Portiamo la tua visione da prototipo a prodotto scalabile in 3 mesi." (font **Inter**, 18px)
- **CTA**: "Inizia la trasformazione" (button primario, bg `#8b5cf6`, hover `#7c4dff`)
- **Badge secondario**: "Trusted by Fortune 500" (bg `#69995d`/10, text `#69995d`)

### Animazioni
- Staggered reveal: logo → H1 → sottotitolo → CTA
- Framer Motion: opacity + y-axis translation
- Cursor hover sul button: subtle glow effect

---

## Sezione 2: Social Proof

### Layout
- Horizontal strip con loghi grayscale (fade to color on hover)
- Centrato orizzontalmente con max-width 1000px
- Ripetizione infinita in slow scroll (marquee effect)

### Contenuto
- **Titolo**: "Collaborazioni che parlano per noi"
- **Loghi placeholder**: Accenture, M&C Management & Consulting
- **Nota**: Usare versioni grayscale dei loghi per coerenza dark mode

### Animazioni
- Infinite marquee scroll orizzontale
- Opacity 40% default, 100% on hover con transition 0.3s

---

## Sezione 3: Services

### Layout
- Grid 3 colonne (desktop), 1 colonna (mobile)
- Cards con border sottile, hover: border glow + slight lift
- Middle card (MVP Launchpad) leggermente ingrandita o con badge "Most Popular"

### Contenuto

#### Card 1: MVP Launchpad
- **Icona**: Rocket/launch (colore `#8b5cf6`)
- **Titolo**: "The MVP Launchpad"
- **Descrizione**: "Porta la tua idea da concept a prototipo funzionale in soli 3 mesi. Next.js, NestJS, SQL e NoSQL DB."
- **Value**: "Time-to-market minimo garantito"

#### Card 2: SEO Tech Optimization
- **Icona**: Search/performance chart (colore `#69995d`)
- **Titolo**: "SEO Tech Optimization"
- **Descrizione**: "Architetture moderne che dominano la concorrenza WordPress. Massimizza il ROI organico."
- **Value**: "Primo su Google senza compromessi"

#### Card 3: Enterprise Automations
- **Icona**: Gear/automation (colore `#8b5cf6`)
- **Titolo**: "Enterprise Automations"
- **Descrizione**: "Ottimizzazione dei processi aziendali e analisi architetturale per sistemi ad alto carico."
- **Value**: "Python, Docker, .NET Core"

### Animazioni
- Staggered entrance da basso
- Hover: translateY(-4px) + box-shadow glow

---

## Sezione 4: About the Founder

### Layout
- Two columns: Foto/Avatar a sinistra, contenuto a destra
- Foto con soft gradient border (lunar labs brand colors)
- Testo allineato a sinistra

### Contenuto
- **Titolo**: "Il Founder"
- **Nome**: "Andrea Fiori" (non più presente per privacy)
- **Background**: 
  - Specializzazione in high-load systems e software architecture
  - Esperienza in contesti Enterprise
  - Approccio analitico e oggettivo
- **Credenziali**: 
  - Coordinamento team multidisciplinari
  - Gestione stakeholder e comunicazione
  - Test di carico e analisi architetturali

### Design
- Avatar: placeholder circolare con initials o foto reale
- Background section leggermente diverso (gradient più pronunciato)

---

## Sezione 5: Call to Action / Contact Form

### Layout
- Centered form con max-width 600px
- Background con subtle pattern o gradient
- Form fields con styling minimal

### Campi Form
- **Nome** (required)
- **Email aziendale** (required - discriminante per B2B)
- **Nome azienda** (optional)
- **Budget indicativo** (select dropdown: <5k, 5k-15k, 15k-50k, 50k+)
- **Messaggio** (textarea, optional)
- **Submit**: "Richiedi consulenza strategica"

### Messaggio di Successo
- Thank you message animato post-submit
- "Ti contatteremo entro 24 ore per una call esplorativa"

### Animazioni
- Form fields: focus state con border color shift (da `#a1a1aa` a `#8b5cf6`)
- Submit button: loading state con spinner
- Success: checkmark animation

---

## Sezione 6: Footer

### Layout
- Minimal, 3-4 righe
- Logo Lunar Labs (piccolo)
- Links: Privacy, Terms, LinkedIn, GitHub
- Copyright: "© 2026 Lunar Labs. Tutti i diritti riservati."

---

## Design System Aggiornato

### Colori
- **Background Primario**: `#24292e` (Dark Charcoal)
- **Background Secondary**: `#0a0a0a` (Near Black)
- **Text Primary**: `#f1f1f1` (Light Gray)
- **Text Secondary**: `#a1a1aa` (Muted Gray)
- **Accent Primario**: `#8b5cf6` (Lunar Purple)
- **Accent Secondary**: `#69995d` (Lunar Green)
- **Accent Glow**: `rgba(139, 92, 246, 0.5)`
- **Border**: `#27272a`
- **Success**: `#10b981`

### Typography
- **Font Family**: 
  - Headings: `'Syne', sans-serif`
  - Body: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- **Headings**: 
  - H1: 56px / 700 weight (Syne)
  - H2: 36px / 600 weight (Syne)
  - H3: 24px / 600 weight (Syne)
- **Body**: 16px / 400 weight, line-height 1.6 (Inter)
- **Small**: 14px / 400 weight (Inter)

### Spacing System
- Section padding: 120px vertical (desktop), 80px (mobile)
- Container max-width: 1200px
- Grid gap: 32px
- Card padding: 32px

### Components
- **Buttons**: 
  - Primary: bg-[#8b5cf6], hover:bg-[#7c4dff], rounded-lg, py-3 px-6
  - Secondary: border-2, border-[#8b5cf6], hover:bg-[#0a0a0a]/5
- **Cards**: bg-[#0a0a0a]/50, border-[#27272a], rounded-xl
- **Inputs**: bg-[#0a0a0a], border-[#27272a], focus:border-[#8b5cf6]
- **Badges**: bg-[#69995d]/10, text-[#69995d], px-3 py-1, rounded-full

---

## Animazioni (Framer Motion)

### Global
- Page load: fade-in with stagger (0.1s delay between elementi)
- Scroll reveal: useInView con smooth opacity transition

### Hero
- Duration: 0.8s per elemento
- Stagger children: 0.1s
- Easing: easeOut

### Services Cards
- Entrance: y: 40 → 0, opacity: 0 → 1
- Hover: scale: 1.02, box-shadow increase

### Marquee
- Continuous x translation
- Duration: 30s per loop
- Infinite repeat

---

## Responsive Breakpoints

- **Mobile**: < 640px (1 column, stacked)
- **Tablet**: 640px - 1024px (2 columns where applicable)
- **Desktop**: > 1024px (full layout)

---

## Stack Tecnico

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel (recommended per Next.js)

---

## Priorità di Implementazione

1. **Phase 1**: Hero + Navigation + Footer (core)
2. **Phase 2**: Social Proof + Services
3. **Phase 3**: About + Contact Form
4. **Phase 4**: Animazioni + polish
5. **Phase 5**: SEO + performance optimization

---

## Domande Aperte

- Preferisci usare il logo esistente (LunarLabsLogo.png) o creare un nuovo asset?
- Hai una foto professionale per la sezione About o preferisci usare un placeholder?
- Il form dovrebbe inviare email direttamente o usare un servizio come Formspree/Resend?
- Metriche analytics da integrare (Google Analytics, Vercel Analytics, Plausible)?

---

## Prossimi Passi

1. Approvazione del design aggiornato
2. Passaggio a planner per creare implementation plan dettagliato
3. Inizio implementazione (phase by phase)
