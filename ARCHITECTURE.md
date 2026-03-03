# Architecture Overview - Lunar Labs Landing Page

## Overview

Lunar Labs landing page - a modern portfolio website for a high-performance software engineering consultancy founded by Andrea Fiori. The project focuses on showcasing MVP development, SEO optimization, and enterprise automation services.

## Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Frontend | Next.js 14 | SSR/SSG, React-based UI |
| Styling | Tailwind CSS | Utility-first CSS framework |
| CMS | Strapi / Contentful | Headless CMS for dynamic content |
| Deployment | Docker | Containerized deployment |

## Directory Structure

```
LunarLandingPage/
├── .git/                    # Git repository
├── .opencode/               # OpenCode memory storage
│   └── memory/
│       └── project.md
├── conductor/               # Project configuration & guidelines
│   ├── index.md             # Main context index
│   ├── product.md           # Product definition
│   ├── product-guidelines.md # UX/branding guidelines
│   ├── tech-stack.md        # Technology decisions
│   ├── workflow.md          # Development workflow
│   ├── setup_state.json     # Setup progress tracker
│   └── code_styleguides/    # Code style references
│       ├── typescript.md    # Google TS Style Guide
│       └── javascript.md    # Google JS Style Guide
├── briefGemini.md           # Business blueprint (Italian)
└── LunarLabsLogo.png        # Brand logo
```

## Core Components (Planned)

### 1. Hero Section
- Tagline: "Ingegnerizziamo il futuro della tua startup"
- Focus on speed and scalability

### 2. Social Proof
- Partner logos: Accenture, M&C Management & Consulting
- Trust signals from enterprise experience

### 3. Services Section
Three service packages:

| Service | Stack | Value Proposition |
|---------|-------|-------------------|
| MVP Launchpad | Next.js, NestJS, SQL/NoSQL DB | Functional prototype in 3 months |
| SEO Tech Optimization | Next.js (SSR), Headless CMS | Maximize organic ROI |
| Enterprise Automations | Python, Docker, .NET Core | Process optimization for high-load systems |

### 4. About Section
- Founder profile: Andrea Fiori
- Highlights: Analytical approach, multidisciplinary team management
- Background: Computer Science at "La Sapienza" (Unitelma)

### 5. Call to Action
- Lead capture form
- Strategic consultation focus

## Data Flow

```
User Request
     │
     ▼
┌─────────────┐
│   Next.js   │ ◄── SSR/SSG Rendering
│  Frontend   │
└─────────────┘
     │
     ▼
┌─────────────┐
│  Headless   │ ◄── Content Management
│    CMS      │
└─────────────┘
     │
     ▼
┌─────────────┐
│   Docker    │ ◄── Containerized Deployment
│  Container  │
└─────────────┘
```

## External Integrations

| Integration | Purpose |
|-------------|---------|
| Headless CMS | Content management (projects, team, blog) |
| Form Handler | Lead capture and consultation requests |
| Analytics | User behavior tracking (planned) |

## Configuration

- **Product Guidelines:** `conductor/product-guidelines.md`
- **Tech Stack:** `conductor/tech-stack.md`
- **Workflow:** `conductor/workflow.md`

## Build & Deploy

### Planned Commands
```bash
# Development
npm run dev          # Start Next.js dev server

# Build
npm run build        # Production build

# Docker
docker build -t lunar-labs .
docker run -p 3000:3000 lunar-labs
```

### Deployment Strategy
- Containerized deployment with Docker
- Compatible with Kubernetes, Docker Swarm, AWS ECS/Fargate, Google Cloud Run

## Project Status

**Current Phase:** Project initialization (no source code yet)

The project structure and guidelines are defined. Implementation will follow the TDD workflow defined in `conductor/workflow.md`.
