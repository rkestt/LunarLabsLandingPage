'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="w-full h-full py-24 bg-github-black relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 1. Titolo */}
          <span className="inline-block px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase text-primary-500 border-l-2 border-primary-500">
            Identity
          </span>
          <h2 className="text-6xl md:text-9xl font-bold text-white mb-16 font-display tracking-tighter uppercase leading-[0.8]">
            IL METODO <br /> <span className="text-gradient">LUNAR</span>
          </h2>

          {/* 2. Descrizione */}
          <div className="space-y-8 text-cloud-dancer/70 text-lg md:text-xl font-medium leading-relaxed mb-20 max-w-3xl mx-auto">
            <p>
              Lunar Labs è un team di sviluppatori che crede nell&apos;uso di tecnologie 
              moderne e in un metodo di lavoro solido. Costruiamo sistemi digitali 
              con rigore, dove l&apos;innovazione incontra la precisione metodologica.
            </p>
            <p>
              Ogni MVP che consegniamo è un pezzo unico di software custom, 
              ottimizzato per le performance e costruito per scalare. 
              Ignoriamo il superfluo, ci concentriamo sull&apos;essenziale.
            </p>
          </div>

          {/* 3. Pillar e Features insieme */}
          <div className="pt-16 border-t border-github-border/30 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {[
                { value: '100%', label: 'CORE TRANSPARENCY' },
                { value: 'STABLE', label: 'TECH STACK' },
                { value: 'PURE', label: 'EXECUTION' },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-display uppercase tracking-tighter group-hover:text-primary-500 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-cloud-dancer/30 tracking-[0.3em] uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {[
                'Sviluppo su Misura',
                'Comunicazione Async',
                'Nessun Boilerplate',
                'Supporto Continuo',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary-500" />
                  <span className="text-[10px] font-bold text-cloud-dancer/50 uppercase tracking-widest">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
