'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react'

const cases = [
  {
    client: 'Startup Tech',
    industry: 'FinTech',
    title: 'Piattaforma di pagamenti B2B',
    problem: 'Processi manuali lenti con alto tasso di errore',
    solution: 'MVP con integrazione API bancarie, dashboard real-time, automazione fatturazione',
    results: [
      { value: '-85%', label: 'Tempo elaborazione' },
      { value: '99.9%', label: 'Uptime' },
      { value: '3x', label: 'Fatturato' },
    ],
    year: '2025',
  },
  {
    client: 'PMI Manifatturiero',
    industry: 'Manifattura',
    title: 'Sistema gestione ordini',
    problem: 'Excel frammentati, visibilità zero su produzione',
    solution: 'Web app con tracking produzione real-time, reportistica automatizzata',
    results: [
      { value: '-60%', label: 'Errori ordini' },
      { value: '+40%', label: 'Produttività' },
      { value: '100%', label: 'Tracciabilità' },
    ],
    year: '2025',
  },
  {
    client: 'Locale Retail',
    industry: 'E-commerce',
    title: 'Negozio online custom',
    problem: 'Piattaforma generica con costi elevati e limitazioni',
    solution: 'E-commerce headless con catalogo dinamico, integrazione magazzino',
    results: [
      { value: '+200%', label: 'Vendite' },
      { value: '-50%', label: 'Costi piattaforma' },
      { value: '4s', label: 'Load time' },
    ],
    year: '2024',
  },
]

export default function CaseStudies() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 bg-github-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">CASE </span>
            <span className="text-gradient">STUDIES</span>
          </h2>
          <p className="text-cloud-dancer/60 text-lg max-w-xl mx-auto">
            Progetti reali con risultati misurabili.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-github-gray/20 border border-github-border rounded-sm overflow-hidden hover:border-primary-500/50 transition-colors"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-cloud-dancer/50 uppercase tracking-widest">
                    {caseStudy.industry}
                  </span>
                  <span className="text-xs text-cloud-dancer/30">
                    {caseStudy.year}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {caseStudy.client}
                </h3>
                <p className="text-cloud-dancer/80 text-sm mb-4">
                  {caseStudy.title}
                </p>

                <div className="border-t border-github-border/50 pt-4 mb-4">
                  <p className="text-xs text-cloud-dancer/40 uppercase tracking-wider mb-2">
                    Problema
                  </p>
                  <p className="text-cloud-dancer/70 text-sm">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="border-t border-github-border/50 pt-4 mb-4">
                  <p className="text-xs text-cloud-dancer/40 uppercase tracking-wider mb-2">
                    Risultati
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {caseStudy.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-primary-500">
                          {result.value}
                        </div>
                        <div className="text-[10px] text-cloud-dancer/40 uppercase">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="#contact"
                className="block px-6 py-4 border-t border-github-border bg-github-gray/10 group-hover:bg-github-gray/20 transition-colors"
              >
                <span className="flex items-center justify-center gap-2 text-sm font-bold text-cloud-dancer group-hover:text-primary-500 transition-colors">
                  Scopri di più
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-cloud-dancer/50 text-sm mt-8">
          *Risultati basati su dati reali. Contesti specifici possono variare.
        </p>
      </div>
    </section>
  )
}