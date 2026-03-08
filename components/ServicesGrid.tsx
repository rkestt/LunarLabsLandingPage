'use client'

import { Rocket, Code2, Palette, Zap, Shield, TrendingUp } from 'lucide-react'
import ServiceCard from './ServiceCard'

const services = [
  {
    icon: Code2,
    title: 'Web App',
    description: 'Applicazioni web scalabili e performanti costruite con le tecnologie più moderne. Trasformiamo processi complessi in interfacce intuitive, garantendo velocità e sicurezza.',
    isFeatured: true,
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    description: 'La porta d\'ingresso del tuo brand. Creiamo landing page ottimizzate per la conversione e la SEO, progettate per catturare l\'attenzione e spingere il tuo business online.',
  },
  {
    icon: Zap,
    title: 'Desktop App',
    description: 'Soluzioni software dedicate per Desktop. Portiamo la potenza delle applicazioni desktop ai tuoi flussi di lavoro, con performance native e design moderno.',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="w-full h-full py-32 bg-github-black relative overflow-hidden flex items-center">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-primary-500/20 via-github-border/20 to-transparent -translate-x-1/2 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left">
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase text-primary-500 border-l-2 border-primary-500">
            Capabilities
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display tracking-tighter uppercase">
            SOLUZIONI <span className="text-gradient">TECNICHE</span>
          </h2>
          <p className="text-base text-cloud-dancer/60 max-w-xl font-medium leading-relaxed mx-auto lg:mx-0">
            Dall&apos;architettura iniziale al deploy finale, applichiamo standard 
            ingegneristici rigorosi per ogni linea di codice.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-github-border/20 border border-github-border/20">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              value=""
              index={index}
              isFeatured={service.isFeatured}
            />
          ))}
        </div>

        {/* Informational Footer */}
        <div className="mt-20 py-8 border-t border-github-border/30 text-center">
          <p className="text-sm text-cloud-dancer/40 font-bold uppercase tracking-[0.2em]">
            Sistemi complessi richiedono soluzioni su misura. Analizziamo le tue specifiche tecniche.
          </p>
        </div>
      </div>
    </section>
  )
}
