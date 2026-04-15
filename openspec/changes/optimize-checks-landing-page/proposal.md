## Why

La landing page attuale manca di ottimizzazioni per passare i check di performance, SEO, e accessibility di Lighthouse/PageSpeed. Senza questi check, il sito avrà basso ranking sui motori di ricerca e scarsa esperienza utente su mobile.

## What Changes

- Configurare Next.js Image per ottimizzazione automatica
- Aggiungere Open Graph meta tags con immagine
- Migliorare contrast ratio per accessibility
- Aggiungere alt text a tutte le immagini
- Fix aria labels mancanti nei form
- Configurare caching headers

## Capabilities

### New Capabilities
- `image-optimization`: Uso di Next.js Image per ottimizzazione automatica immagini
- `open-graph`: Meta tags per social sharing con OG image
- `accessibility-audit`: Fix accessibility issues

### Modified Capabilities
- `seo-technical`: Extendere con OG tags avanzati

## Impact

- `next.config.js` - configurazione image domains
- `app/layout.tsx` - aggiungere meta tags
- `components/*` - aggiungere alt/aria labels
- `public/` - aggiungere OG image