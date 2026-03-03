# Design: Lunar Labs Landing Page

## Panoramica del Progetto

Landing page portfolio per Lunar Labs, laboratorio di ingegneria del software specializzato in high-performance product engineering. Il sito deve trasmettere expertise tecnica Enterprise (Accenture, M&C) combinata con la velocità di un team agile, il tutto in un'estetica dark mode premium ispirata a Linear e Vercel.

---

## Sezione 1: Hero Section

### Obiettivo
 catturare l'attenzione immediatamente comunicando la value proposition core: ingegneria di livello enterprise applicata alle startup.

### Layout
- Full viewport height con centratura verticale del contenuto
- Testo principale (H1) above the fold con animazione di fade-in
- Sottotitolo esplicativo + CTA button
- Background: subtle gradient mesh scuro con particelle o orb slow-motion

### Contenuto
- **H1**: "Ingegnerizziamo il futuro della tua startup"
- **Sottotitolo**: "Combini la precisione manageriale di un team Enterprise con la velocità di un team agile. Portiamo la tua visione da prototipo a prodotto scalabile in 3 mesi."
- **CTA**: "Inizia la trasformazione" (button primario)
- **Badge secondario**: "Trusted by Fortune 500"

### Animazioni
- Staggered reveal: logo → H1 → sottotitolo → CTA
- Framer Motion: opacity + y-axis translation
- Cursor hover sul button: subtle glow effect

### Typography
- Font: Inter o Geist Sans (mantenendo coerenza con Vercel aesthetic)
- H1: 56px desktop / 36px mobile, font-weight 700
- Body: 18px, font-weight 400, color muted

---

## Sezione 2: Social Proof

### Obiettivo
 costruire fiducia immediata attraverso evidenze di collaborazioni passate con brand riconoscibili.

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

### Obiettivo
 presentare i tre pacchetti di servizio in modo chiaro e differenziato.

### Layout
- Grid 3 colonne (desktop), 1 colonna (mobile)
- Cards con border sottile, hover: border glow + slight lift
- Middle card (MVP Launchpad) leggermente ingrandita o con badge "Most Popular"

### Contenuto

#### Card 1: MVP Launchpad
- **Icona**: Rocket/launch
- **Titolo**: "The MVP Launchpad"
- **Descrizione**: "Porta la tua idea da concept a prototipo funzionale in soli 3 mesi. Next.js, NestJS, SQL e NoSQL DB."
- **Value**: "Time-to-market minimo garantito"

#### Card 2: SEO Tech Optimization
- **Icona**: Search/performance chart
- **Titolo**: "SEO Tech Optimization"
- **Descrizione**: "Architetture moderne che dominano la concorrenza WordPress. Massimizza il ROI organico."
- **Value**: "Primo su Google senza compromessi"

#### Card 3: Enterprise Automations
- **Icona**: Gear/automation
- **Titolo**: "Enterprise Automations"
- **Descrizione**: "Ottimizzazione dei processi aziendali e analisi architetturale per sistemi ad alto carico."
- **Value**: "Python, Docker, .NET Core"

### Animazioni
- Staggered entrance da basso
- Hover: translateY(-4px) + box-shadow glow

---

## Sezione 4: About the Founder

### Obiettivo
 umanizzare il brand raccontando la storia e le credenziali del founder Andrea Fiori.

### Layout
- Two columns: Foto/Avatar a sinistra, contenuto a destra
- Foto con soft gradient border (lunar labs brand colors)
- Testo allineato a sinistra

### Contenuto
- **Titolo**: "Il Founder"
- **Nome**: "Andrea Fiori"
- **Background**: 
  - Laurea in Informatica presso "La Sapienza" (Unitelma)
  - Esperienza in Accenture e M&C Management & Consulting
  - Specializzazione in high-load systems e software architecture
- **Approccio**: "Approccio analitico e oggettivo basato sull'analisi critica dei processi. Ogni riga di codice è decisions data-driven."
- **Credenziali**: 
  - Coordinamento team multidisciplinari
  - Gestione stakeholder e comunicazione
  - Test di carico e analisi architetturali

### Design
- Avatar: placeholder circolare con initials "AF" o foto reale
- Background section leggermente diverso (gradient più pronunciato)

---

## Sezione 5: Call to Action / Contact Form

### Obiettivo
 convertire i visitatori in lead qualificati per consulenza strategica (non preventivo gratuito).

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
- Form fields: focus state con border color shift
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

## Design System

### Color Palette
- **Background Primary**: #0A0A0A (near black)
- **Background Secondary**: #111111
- **Background Tertiary**: #1A1A1A
- **Text Primary**: #FFFFFF
- **Text Secondary**: #A1A1AA (muted)
- **Text Tertiary**: #71717A
- **Accent Primary**: #8B5CF6 (violet/lunar purple)
- **Accent Secondary**: #6366F1 (indigo)
- **Accent Glow**: rgba(139, 92, 246, 0.5)
- **Border**: #27272A
- **Success**: #10B981

### Typography
- **Font Family**: Inter (Google Fonts) o Geist (Vercel)
- **Headings**: 
  - H1: 56px / 700 weight
  - H2: 36px / 600 weight
  - H3: 24px / 600 weight
- **Body**: 16px / 400 weight, line-height 1.6
- **Small**: 14px / 400 weight

### Spacing System
- Section padding: 120px vertical (desktop), 80px (mobile)
- Container max-width: 1200px
- Grid gap: 32px
- Card padding: 32px

### Components
- **Buttons**: 
  - Primary: bg-violet-600, hover:bg-violet-500, rounded-lg, py-3 px-6
  - Secondary: border, hover:bg-white/5
- **Cards**: bg-zinc-900/50, border-zinc-800, rounded-xl
- **Inputs**: bg-zinc-900, border-zinc-800, focus:border-violet-500
- **Badges**: bg-violet-500/10, text-violet-400, px-3 py-1, rounded-full

---

## Animazioni (Framer Motion)

### Global
- Page load: fade-in with stagger (0.1s delay between elements)
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

1. Approvazione del design
2. Passaggio a planner per creare implementation plan dettagliato
3. Inizio implementazione (phase by phase)
