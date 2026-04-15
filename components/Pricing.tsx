'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'MVP BASE',
    price: 'A partire da €2.500',
    description: 'Per chi ha un\'idea chiara e vuole validarla velocemente',
    features: [
      '1 pagina/funzionalità core',
      'Design responsive',
      'Backend basic',
      '1 ambiente (dev)',
      'Documentazione base',
      'Supporto email 30gg',
    ],
    featured: false,
  },
  {
    name: 'MVP PRO',
    price: 'A partire da €5.000',
    description: 'Soluzione completa per lancio market',
    features: [
      'fino a 5 funzionalità',
      'Design custom completo',
      'Backend scalabile',
      '3 ambienti (dev/staging/prod)',
      'Documentazione completa',
      'Test funzionali',
      'Supporto prioritario 90gg',
    ],
    featured: true,
  },
  {
    name: 'ENTERPRISE',
    price: 'Personalizzato',
    description: 'Per progetti complessi e Squad dedicate',
    features: [
      'Funzionalità illimitate',
      'Design premium',
      'Architettura custom',
      'DevOps incluso',
      'SLA garantiti',
      'Team dedicato',
      'Supporto 24/7',
    ],
    featured: false,
  },
]

export default function Pricing() {
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
            <span className="text-white">PREZZI </span>
            <span className="text-gradient">TRASPARENTI</span>
          </h2>
          <p className="text-cloud-dancer/60 text-lg max-w-xl mx-auto">
            Nessuna sorpresa. Prezzi chiari per progetto finito.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-sm border ${
                plan.featured
                  ? 'border-primary-500 bg-github-gray/50'
                  : 'border-github-border bg-github-gray/20'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-xs font-bold uppercase tracking-widest">
                  Più Popolare
                </div>
              )}

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-primary-500 mb-2">
                {plan.price}
              </p>
              <p className="text-cloud-dancer/60 text-sm mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-cloud-dancer/80 text-sm">
                    <Check size={16} className="text-primary-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="#contact" className="block">
                <motion.button
                  className={`w-full py-4 font-bold uppercase tracking-widest rounded-sm ${
                    plan.featured
                      ? 'bg-primary-500 text-white'
                      : 'border border-github-border text-cloud-dancer hover:border-primary-500/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Richiedi Preventivo
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-cloud-dancer/50 text-sm mt-8">
          Tutti i prezzi IVA esclusa. Pagamento rateale disponibile.
        </p>
      </div>
    </section>
  )
}