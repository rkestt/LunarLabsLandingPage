## Context

La landing page Lunar Labs deve passare i check Lighthouse per:
- Performance > 90
- Accessibility > 90
- Best Practices = 100
- SEO = 100

Attualmente manca di:
- OG image per social sharing
- Alt text sistematici
- Contrast ratio adeguati
- Caching configurato

## Goals / Non-Goals

**Goals:**
- Lighthouse score > 90 in tutte le categorie
- PageSpeed Core Web Vitals pass
- Accessibilità WCAG AA

**Non-Goals:**
- Backend changes
- Nuove features
- Refactoring componenti esistenti (solo fix necesario)

## Decisions

### 1. Next.js Image Optimization
**Decision:** Usare `next/image` invece di tag `<img>` nativi
**Rationale:** Next.js ottimizza automaticamente WebP, lazy loading, resize
**Alternatives:** Sharp standalone, CDN esterno → Scelto Next.js per integrazione nativa

### 2. Open Graph
**Decision:** Generare OG image statico con Next.js OG Image og
**Rationale:** Serve per social sharing Twitter/LinkedIn/Facebook
**Alternatives:** Dynamic → Scelto statico per performance

### 3. Accessibility
**Decision:** Fix manuali su contrast e aria
**Rationale:** Poche modifiche necessarie, manuale più preciso
**Alternatives:** a11y library → Scelto fix manuali per controllo

## Implementation Steps

1. **next.config.js** - Configurare image optimization
2. **app/layout.tsx** - Aggiungere OG meta tags
3. **components/*** - Aggiungere alt text dove manca
4. **styles/** - Fix contrast ratio
5. **public/** - Aggiungere OG image

## Risks / Trade-offs

- [Rischio] OG image richiede design → Mitigazione: usare placeholder con testo
- [Rischio] Break layout con contrast fix → Mitigazione: testare su mobile