# Piano: Header Sticky

## Obiettivo
Header di navigazione sempre visibile durante lo scroll con logo, menu e CTA.

---

## Analisi

### Stato Attuale
- Nessun header presente
- Hero ha link interni `#contact` e `#services` ma senza header di navigazione

### Design System Esistente
- Colori: `primary-500` (#8b5cf6), `cloud-dancer` (#f0eee9), `github-black` (#010409), `github-gray` (#0d1117), `github-border` (#30363d)
- Font: Display (Space Grotesk), Sans (Inter)
- Animazioni: Framer Motion già in uso

---

## Specifiche

### Componente: Header.tsx

**Struttura:**
```
Logo (sinistra) | Nav Menu (centro) | CTA Button (destra)
```

**Logo:**
- Testo "LUNAR LABS" con gradiente purple
- Font: display, bold

**Menu Items:**
- Home → #hero (o prima sezione)
- Servizi → #services
- Case Studies → #case-studies
- Contatti → #contact

**CTA Button:**
- "Inizia Progetto" - stesso stile Hero CTA
- Colore: bg-primary-500

**Comportamento:**
- Default: trasparente/background blur basso
- Dopo scroll 50px: background glass-effect (blur + border)
- Hide on scroll down, show on scroll up (usa useScroll motion)
- Mobile: hamburger → drawer

**Posizione in page.tsx:**
- Prima del `main.scroll-container`
- Import + use nel componente

---

## File da Modificare

1. **components/Header.tsx** (nuovo)
2. **app/page.tsx** (aggiungere import + render)
3. **styles/globals.css** (opzionale: se servono nuove utility)

---

## Step Implementazione

1. Creare `components/Header.tsx` con:
   - Logo Moon/Lunar Labs
   - Nav links con smooth scroll
   - CTA button
   - State per scrolled (useScroll)
   - Mobile menu con framer-motion

2. Aggiornare `app/page.tsx`:
   - Import Header
   - Posizionare sopra main

3. Testare:
   - Scroll behavior
   - Mobile responsive
   - Smooth scroll ai target

---

## Tempo Stimato
- 1-2 ore

---

## Domande

1. **Menu mobile:** Drawer da destra o dropdown? → Consiglio drawer da destra (più spazio)
2. **Logo attuale:** Hai un SVG/logo esistente o usiamo il testo con gradiente?
3. **Scroll threshold:** 50px va bene o preferisci altro valore?