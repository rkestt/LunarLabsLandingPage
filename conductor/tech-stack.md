# Tech Stack - Landing Page Portfolio Team di Sviluppo

## 1. Frontend

-   **Framework Principale:** Next.js
    -   **Descrizione:** Scelto per la sua capacità di offrire sia Server-Side Rendering (SSR) che Static Site Generation (SSG), garantendo ottime performance, SEO e un'esperienza di sviluppo moderna basata su React. Sarà la base per costruire interfacce utente dinamiche e performanti.

## 2. Styling

-   **Framework CSS:** Tailwind CSS
    -   **Descrizione:** Adottato per il suo approccio utility-first, che consente uno sviluppo rapido e altamente personalizzabile dell'interfaccia utente. La sua flessibilità permette di creare design unici e coerenti con l'estetica "Innovativo e Dinamico" definita nelle linee guida di prodotto.

## 3. Backend / CMS

-   **Headless CMS:** Strapi o Contentful (a seconda delle esigenze specifiche)
    -   **Descrizione:** Per gestire i contenuti dinamici della landing page (es. dettagli dei progetti, membri del team, blog post) in modo flessibile e disaccoppiato dal frontend. Un Headless CMS offre un'interfaccia utente intuitiva per l'inserimento dei contenuti e API robuste per il loro consumo da parte di Next.js.

## 4. Deployment

-   **Strategia:** Containerizzato con Docker
    -   **Descrizione:** L'applicazione (Next.js) e, eventualmente, il CMS Headless (se self-hosted come Strapi) saranno containerizzati utilizzando Docker. Questo garantisce un ambiente di sviluppo e produzione consistente, scalabilità e facilità di deployment su qualsiasi piattaforma che supporti Docker (es. Kubernetes, Docker Swarm, o servizi cloud come AWS ECS/Fargate, Google Cloud Run).