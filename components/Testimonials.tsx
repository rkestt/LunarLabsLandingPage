'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Lunar Labs ha trasformato la nostra idea in un prodotto reale in tempi record. Professionisti seri, codice pulito, nessuna sorpresa.',
    name: 'Marco B.',
    role: 'CEO',
    company: 'Startup Tech',
  },
  {
    quote: 'Finalmente un team che capisce il business. Non solo sviluppatori, ma partner strategici. Il nostro e-commerce ora genera 3x fatturato.',
    name: 'Sara L.',
    role: 'Fondatrice',
    company: 'Locale Retail',
  },
  {
    quote: 'MVP preciso e veloce. Abbiamo validato lipotesi di mercato in 3 settimane e ora siamo sul mercato con la versione 2.0.',
    name: 'Giuseppe R.',
    role: 'CTO',
    company: 'PMI Manifatturiero',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 bg-github-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">COSA DICONO </span>
            <span className="text-gradient">I CLIENTI</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <Quote size={48} className="text-primary-500/30 mx-auto mb-8" />
              <blockquote className="text-xl md:text-2xl text-cloud-dancer font-medium leading-relaxed mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <div className="text-white font-bold">
                  {testimonials[current].name}
                </div>
                <div className="text-cloud-dancer/60">
                  {testimonials[current].role}, {testimonials[current].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 border border-github-border rounded-sm hover:border-primary-500/50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="text-cloud-dancer" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-sm transition-colors ${
                    index === current
                      ? 'bg-primary-500'
                      : 'bg-github-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 border border-github-border rounded-sm hover:border-primary-500/50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} className="text-cloud-dancer" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}